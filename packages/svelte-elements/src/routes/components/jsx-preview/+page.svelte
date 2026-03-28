<script lang="ts">
	import { JSXPreview } from '$lib/index.js';
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
	const usageCode = `<JSXPreview class="w-full max-w-xl space-y-2 p-4">
	<h3 class="text-sm font-semibold">Build status</h3>
	<p class="text-xs text-muted-foreground">Streaming UI tokens...</p>
	<div class="rounded-md border p-3 text-sm">Ready for custom layout content.</div>
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
	<DocsSection
		title="Intro"
		description="JSXPreview provides the same docs role as the original React component, but uses Svelte slot composition instead of runtime JSX parsing."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

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
			<li>Lightweight container with predictable slot rendering.</li>
			<li>Matches generated UI use cases from the original docs workflow.</li>
			<li>Supports custom classes and all standard div attributes.</li>
			<li>Works well alongside code and output panes in assistant UIs.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage"
		description="Compose JSXPreview around generated content and streaming indicators."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<JSXPreview class="w-full max-w-xl space-y-2 p-4">
					<h3 class="text-sm font-semibold">Build status</h3>
					<p class="text-xs text-muted-foreground">Streaming UI tokens...</p>
					<div class="rounded-md border p-3 text-sm">Ready for custom layout content.</div>
				</JSXPreview>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for JSX Preview.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
