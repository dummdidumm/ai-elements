import type { BundledLanguage, BundledTheme, HighlighterGeneric, ThemedToken } from 'shiki';
import { createHighlighter } from 'shiki';

// Shiki uses bitflags for font styles: 1=italic, 2=bold, 4=underline (values 0–7)
const isItalic = (fontStyle: number | undefined) => {
	const n = fontStyle ?? 0;
	return n === 1 || n === 3 || n === 5 || n === 7;
};
const isBold = (fontStyle: number | undefined) => {
	const n = fontStyle ?? 0;
	return n === 2 || n === 3 || n === 6 || n === 7;
};
const isUnderline = (fontStyle: number | undefined) => {
	const n = fontStyle ?? 0;
	return n === 4 || n === 5 || n === 6 || n === 7;
};

export type { BundledLanguage };

export interface KeyedToken {
	token: ThemedToken;
	key: string;
}

export interface KeyedLine {
	tokens: KeyedToken[];
	key: string;
}

export const addKeysToTokens = (lines: ThemedToken[][]): KeyedLine[] =>
	lines.map((line, lineIdx) => ({
		key: `line-${lineIdx}`,
		tokens: line.map((token, tokenIdx) => ({
			key: `line-${lineIdx}-${tokenIdx}`,
			token
		}))
	}));

const camelToKebab = (key: string) => key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

export const tokenStyleProps = (token: ThemedToken): Record<string, string | undefined> => {
	const style: Record<string, string | undefined> = {
		backgroundColor: token.bgColor,
		color: token.color,
		fontStyle: isItalic(token.fontStyle) ? 'italic' : undefined,
		fontWeight: isBold(token.fontStyle) ? 'bold' : undefined,
		textDecoration: isUnderline(token.fontStyle) ? 'underline' : undefined
	};
	if (token.htmlStyle && typeof token.htmlStyle === 'object' && !Array.isArray(token.htmlStyle)) {
		for (const [k, v] of Object.entries(token.htmlStyle)) {
			if (v !== undefined && v !== null) {
				style[k] = String(v);
			}
		}
	}
	return style;
};

/** Inline CSS string for Svelte `style` attributes that expect a string. */
export const tokenInlineStyle = (token: ThemedToken): string => {
	const style = tokenStyleProps(token);
	return Object.entries(style)
		.filter((entry): entry is [string, string] => entry[1] != null && entry[1] !== '')
		.map(([k, v]) => `${camelToKebab(k)}: ${v}`)
		.join('; ');
};

export const LINE_NUMBER_CLASSES =
	'block before:content-[counter(line)] before:inline-block before:[counter-increment:line] before:w-8 before:mr-4 before:text-right before:text-muted-foreground/50 before:font-mono before:select-none';

export interface TokenizedCode {
	tokens: ThemedToken[][];
	fg: string;
	bg: string;
}

const highlighterCache = new Map<
	string,
	Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>
>();

const tokensCache = new Map<string, TokenizedCode>();

const subscribers = new Map<string, Set<(result: TokenizedCode) => void>>();

const getTokensCacheKey = (code: string, language: BundledLanguage) => {
	const start = code.slice(0, 100);
	const end = code.length > 100 ? code.slice(-100) : '';
	return `${language}:${code.length}:${start}:${end}`;
};

const getHighlighter = (
	language: BundledLanguage
): Promise<HighlighterGeneric<BundledLanguage, BundledTheme>> => {
	const cached = highlighterCache.get(language);
	if (cached) {
		return cached;
	}

	const highlighterPromise = createHighlighter({
		langs: [language],
		themes: ['github-light', 'github-dark']
	});

	highlighterCache.set(language, highlighterPromise);
	return highlighterPromise;
};

export const createRawTokens = (code: string): TokenizedCode => ({
	bg: 'transparent',
	fg: 'inherit',
	tokens: code.split('\n').map((line) =>
		line === ''
			? []
			: [
					{
						color: 'inherit',
						content: line
					} as ThemedToken
				]
	)
});

export const highlightCode = (
	code: string,
	language: BundledLanguage,
	callback?: (result: TokenizedCode) => void
): TokenizedCode | null => {
	const tokensCacheKey = getTokensCacheKey(code, language);

	const cached = tokensCache.get(tokensCacheKey);
	if (cached) {
		return cached;
	}

	if (callback) {
		if (!subscribers.has(tokensCacheKey)) {
			subscribers.set(tokensCacheKey, new Set());
		}
		subscribers.get(tokensCacheKey)?.add(callback);
	}

	getHighlighter(language)
		.then((highlighter) => {
			const availableLangs = highlighter.getLoadedLanguages();
			const langToUse = availableLangs.includes(language) ? language : 'text';

			const result = highlighter.codeToTokens(code, {
				lang: langToUse,
				themes: {
					dark: 'github-dark',
					light: 'github-light'
				}
			});

			const tokenized: TokenizedCode = {
				bg: result.bg ?? 'transparent',
				fg: result.fg ?? 'inherit',
				tokens: result.tokens
			};

			tokensCache.set(tokensCacheKey, tokenized);

			const subs = subscribers.get(tokensCacheKey);
			if (subs) {
				for (const sub of subs) {
					sub(tokenized);
				}
				subscribers.delete(tokensCacheKey);
			}
		})
		.catch(() => {
			subscribers.delete(tokensCacheKey);
		});

	return null;
};
