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
		{#each keyedLines as keyedLine (keyedLine.key)}
			<span class={showLineNumbers ? LINE_NUMBER_CLASSES : 'block'}>
				{#if keyedLine.tokens.length === 0}
					{'\n'}
				{:else}
					{@html renderLineTokens(keyedLine)}
				{/if}
			</span>
		{/each}
	</code>
</pre>
