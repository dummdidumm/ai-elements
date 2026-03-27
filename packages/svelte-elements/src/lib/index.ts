import type { ComponentProps } from 'svelte';
import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContainer,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockFilename,
	CodeBlockHeader,
	CodeBlockLanguageSelector,
	CodeBlockLanguageSelectorItem,
	CodeBlockTitle,
	createRawTokens,
	highlightCode,
	tokenInlineStyle,
	tokenStyleProps,
	type BundledLanguage,
	type KeyedLine,
	type KeyedToken,
	type TokenizedCode
} from './code-block/index.js';
import Shimmer from './components/shimmer.svelte';

export { Shimmer };
export type TextShimmerProps = ComponentProps<typeof Shimmer>;

export {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContainer,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockFilename,
	CodeBlockHeader,
	CodeBlockLanguageSelector,
	CodeBlockLanguageSelectorItem,
	CodeBlockTitle,
	createRawTokens,
	highlightCode,
	tokenInlineStyle,
	tokenStyleProps,
	type BundledLanguage,
	type KeyedLine,
	type KeyedToken,
	type TokenizedCode
};

export type CodeBlockProps = ComponentProps<typeof CodeBlock>;
export type CodeBlockCopyButtonProps = ComponentProps<typeof CodeBlockCopyButton>;
