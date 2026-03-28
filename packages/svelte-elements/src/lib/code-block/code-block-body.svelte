<script lang="ts">
	import { cn } from '../utils.js';
	import {
		addKeysToTokens,
		LINE_NUMBER_CLASSES,
		tokenInlineStyle,
		type TokenizedCode
	} from './highlight.js';

	let {
		tokenized,
		showLineNumbers,
		class: className
	}: {
		tokenized: TokenizedCode;
		showLineNumbers: boolean;
		class?: string;
	} = $props();

	const keyedLines = $derived(addKeysToTokens(tokenized.tokens));

	const escapeHtml = (value: string) =>
		value
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#39;');

	const renderLineTokens = (line: (typeof keyedLines)[number]) =>
		line.tokens
			.map(({ token }) => {
				const style = escapeHtml(tokenInlineStyle(token));
				const content = escapeHtml(token.content);
				return `<span class="dark:!bg-[var(--shiki-dark-bg)] dark:!text-[var(--shiki-dark)]" style="${style}">${content}</span>`;
			})
			.join('');

	const renderCodeHtml = (
		lines: typeof keyedLines,
		withLineNumbers: boolean
	): string =>
		lines
			.map((line) => {
				const classes = withLineNumbers ? LINE_NUMBER_CLASSES : 'block';
				const content = line.tokens.length === 0 ? '\n' : renderLineTokens(line);
				return `<span class="${escapeHtml(classes)}">${content}</span>`;
			})
			.join('');
</script>

<pre
	class={cn(
		'm-0 p-4 text-sm dark:!bg-[var(--shiki-dark-bg)] dark:!text-[var(--shiki-dark)]',
		className
	)}
	style:background-color={tokenized.bg}
	style:color={tokenized.fg}>
	<code
		class={cn(
			'font-mono text-sm',
			showLineNumbers && '[counter-increment:line_0] [counter-reset:line]'
		)}>
		{@html renderCodeHtml(keyedLines, showLineNumbers)}
	</code>
</pre>
