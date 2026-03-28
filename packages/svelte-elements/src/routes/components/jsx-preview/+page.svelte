<script lang="ts">
	import { CodeBlock, JSXPreview } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<JSXPreview class="w-full max-w-xl p-4">
	<div class="space-y-2 rounded-md border bg-muted/30 p-3 text-sm">
		<p class="font-medium">Generated Card</p>
		<p class="text-muted-foreground">This preview uses slotted Svelte content.</p>
	</div>
</JSXPreview>`;
	const aiSdkCode = `import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

const result = streamText({
	model: anthropic('claude-sonnet-4-5'),
	messages
});

<JSXPreview class="w-full max-w-xl p-4">
	{#if result}
		{@html result}
	{:else}
		<p class="text-xs text-muted-foreground">Generating preview…</p>
	{/if}
</JSXPreview>`;
	const customComponentsCode = `<JSXPreview class="w-full max-w-xl p-4">
	<div class="space-y-2 rounded-md border bg-muted/30 p-3 text-sm">
		<p class="font-medium">Build status</p>
		<p class="text-muted-foreground">Streaming UI tokens...</p>
		<button class="w-fit rounded bg-primary px-2 py-1 text-xs text-primary-foreground" type="button">
			Open app
		</button>
	</div>
</JSXPreview>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Custom classes for the component container.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Composable child content rendered inside the component.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root element.'
		}
	];
</script>

<DocsPage
	title="JSX Preview"
	description="Preview JSX-like generated interfaces with a slot-based Svelte wrapper."
>
	<DocsSection title="Preview" description="A generated UI card rendered inside JSXPreview.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<JSXPreview class="w-full max-w-xl p-4">
					<div class="space-y-2 rounded-md border bg-muted/30 p-3 text-sm">
						<p class="font-medium">Generated Card</p>
						<p class="text-muted-foreground">This preview uses slotted Svelte content.</p>
					</div>
				</JSXPreview>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install JSX Preview.">
		<InstallerTabs slug="jsx-preview" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Renders JSX-like generated content in a stable container.</li>
			<li>Fits streaming output and incremental UI updates.</li>
			<li>Composable structure for custom cards and controls.</li>
			<li>Works well with code and output surfaces in assistant interfaces.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage with AI SDK" description="Render generated UI from a streaming model result.">
		<CodeBlock code={aiSdkCode} language="tsx" />
	</DocsSection>

	<DocsSection title="With Custom Components" description="Wrap generated output in local UI shells.">
		<CodeBlock code={customComponentsCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="API reference for JSX Preview.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
