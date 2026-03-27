<script lang="ts">
	import type { BundledLanguage } from '$lib/code-block/highlight.js';
	import { CodeBlock } from '$lib/code-block/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { cn } from '$lib/utils.js';

	let {
		slug,
		class: className,
		manualCode,
		manualLanguage = 'svelte'
	}: {
		slug: string;
		class?: string;
		manualCode?: string;
		manualLanguage?: BundledLanguage;
	} = $props();

	const aiElementsCommand = $derived(`npx ai-elements@latest add ${slug}`);
	const shadcnCommand = $derived(`npx shadcn@latest add @ai-elements/${slug}`);
	const componentImportName = $derived(
		slug
			.split('-')
			.filter(Boolean)
			.map((segment) => `${segment.at(0)?.toUpperCase() ?? ''}${segment.slice(1)}`)
			.join('')
	);
	const defaultManualCode = $derived(
		[
			'<script lang="ts">',
			`\timport { ${componentImportName} } from '$lib/index.js';`,
			'<\\/script>',
			'',
			`<${componentImportName} />`
		].join('\n')
	);
</script>

<Tabs.Root class={cn('w-full gap-0 rounded-xl border', className)} value="ai-elements">
	<div class="border-b p-1">
		<Tabs.List class="w-fit" variant="line">
			<Tabs.Trigger value="ai-elements">AI Elements</Tabs.Trigger>
			<Tabs.Trigger value="shadcn-cli">shadcn CLI</Tabs.Trigger>
			<Tabs.Trigger value="manual">Manual</Tabs.Trigger>
		</Tabs.List>
	</div>

	<Tabs.Content class="p-0" value="ai-elements">
		<CodeBlock
			class="rounded-none border-0 shadow-none ring-0"
			code={aiElementsCommand}
			language="bash"
		/>
	</Tabs.Content>

	<Tabs.Content class="p-0" value="shadcn-cli">
		<CodeBlock
			class="rounded-none border-0 shadow-none ring-0"
			code={shadcnCommand}
			language="bash"
		/>
	</Tabs.Content>

	<Tabs.Content class="p-0" value="manual">
		<CodeBlock
			class="rounded-none border-0 shadow-none ring-0"
			code={manualCode ?? defaultManualCode}
			language={manualLanguage}
		/>
	</Tabs.Content>
</Tabs.Root>
