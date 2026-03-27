<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BundledLanguage } from '$lib/code-block/highlight.js';
	import { CodeBlock } from '$lib/code-block/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { cn } from '$lib/utils.js';

	let {
		code,
		language = 'tsx',
		previewTitle = 'Preview',
		codeTitle = 'Code',
		previewClass,
		containerClass,
		showLineNumbers = true,
		preview
	}: {
		code: string;
		language?: BundledLanguage;
		previewTitle?: string;
		codeTitle?: string;
		previewClass?: string;
		containerClass?: string;
		showLineNumbers?: boolean;
		preview?: Snippet;
	} = $props();
</script>

<Tabs.Root class={cn('w-full gap-0 rounded-xl border', containerClass)} value="preview">
	<div class="border-b p-1">
		<Tabs.List class="w-fit" variant="line">
			<Tabs.Trigger value="preview">{previewTitle}</Tabs.Trigger>
			<Tabs.Trigger value="code">{codeTitle}</Tabs.Trigger>
		</Tabs.List>
	</div>

	<Tabs.Content value="preview">
		<Card.Root class="rounded-none border-0 shadow-none ring-0">
			<Card.Content class={cn('min-h-[300px] p-6', previewClass)}>
				{@render preview?.()}
			</Card.Content>
		</Card.Root>
	</Tabs.Content>

	<Tabs.Content value="code">
		<div class="max-h-[500px] overflow-y-auto">
			<CodeBlock
				class="rounded-none border-0 shadow-none ring-0"
				{code}
				{language}
				{showLineNumbers}
			/>
		</div>
	</Tabs.Content>
</Tabs.Root>
