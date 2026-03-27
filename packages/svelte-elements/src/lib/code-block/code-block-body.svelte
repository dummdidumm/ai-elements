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
					{#each keyedLine.tokens as { token, key } (key)}
						<span
							class="dark:!bg-[var(--shiki-dark-bg)] dark:!text-[var(--shiki-dark)]"
							style={tokenInlineStyle(token)}>
							{token.content}
						</span>
					{/each}
				{/if}
			</span>
		{/each}
	</code>
</pre>
