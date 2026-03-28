<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { setCodeBlockContext } from './code-block-context.js';
	import CodeBlockContainer from './code-block-container.svelte';
	import CodeBlockContent from './code-block-content.svelte';
	import type { BundledLanguage } from './highlight.js';

	let {
		code,
		language,
		showLineNumbers = false,
		class: className,
		children,
		...rest
	}: {
		code: string;
		language: BundledLanguage;
		showLineNumbers?: boolean;
		children?: import('svelte').Snippet;
	} & HTMLAttributes<HTMLDivElement> = $props();

	setCodeBlockContext({
		get code() {
			return code;
		}
	});
</script>

<CodeBlockContainer class={className} {language} {...rest}>
	{@render children?.()}
	<CodeBlockContent {code} {language} {showLineNumbers} />
</CodeBlockContainer>
