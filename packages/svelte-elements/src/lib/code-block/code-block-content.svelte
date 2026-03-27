<script lang="ts">
	import type { BundledLanguage } from './highlight.js';
	import { createRawTokens, highlightCode, type TokenizedCode } from './highlight.js';
	import CodeBlockBody from './code-block-body.svelte';

	let {
		code,
		language,
		showLineNumbers = false
	}: {
		code: string;
		language: BundledLanguage;
		showLineNumbers?: boolean;
	} = $props();

	const rawTokens = $derived(createRawTokens(code));
	const syncTokens = $derived(highlightCode(code, language) ?? rawTokens);

	let asyncTokens = $state<TokenizedCode | null>(null);

	$effect(() => {
		asyncTokens = null;
		let cancelled = false;
		highlightCode(code, language, (result) => {
			if (!cancelled) {
				asyncTokens = result;
			}
		});
		return () => {
			cancelled = true;
		};
	});

	const tokenized = $derived(asyncTokens ?? syncTokens);
</script>

<div class="relative overflow-auto">
	<CodeBlockBody {showLineNumbers} {tokenized} />
</div>
