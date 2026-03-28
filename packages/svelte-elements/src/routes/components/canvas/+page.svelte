<script lang="ts">
	import { Canvas } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Canvas } from '$lib/index.js';

<Canvas class="p-4">
	<div class="grid h-full place-items-center rounded-md border border-dashed text-sm text-muted-foreground">
		Workflow surface
	</div>
</Canvas>`;
	const usageCode = `import { Canvas } from '$lib/index.js';

<Canvas class="min-h-80 p-3">
	<!-- Render nodes, edges, overlays, and controls -->
</Canvas>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for spacing, sizing, and presentation.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Canvas content such as nodes, edges, or overlays.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native div attributes.'
		}
	];
</script>

<DocsPage
	title="Canvas"
	description="Create a bounded surface for workflow and node-based interfaces."
>
	<DocsSection
		title="Intro"
		description="Canvas provides the bounded surface that anchors workflow and graph interfaces."
	>
		<p class="text-sm text-muted-foreground">
			Compose nodes, edges, overlays, and controls inside a single clipped area with consistent
			styling.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A simple workflow surface placeholder.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Canvas class="p-4">
					<div
						class="grid h-full place-items-center rounded-md border border-dashed text-sm text-muted-foreground"
					>
						Workflow surface
					</div>
				</Canvas>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Canvas.">
		<InstallerTabs slug="canvas" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Styled container with minimum height for diagramming interfaces.</li>
			<li>Handles overflow and rounding to keep graph content neatly clipped.</li>
			<li>Composable with nodes, edges, controls, and side panels.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Use Canvas as the root layer for flow content.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Canvas class="min-h-80 p-3">
					<div
						class="grid h-full place-items-center rounded-md border border-dashed text-sm text-muted-foreground"
					>
						Nodes, edges, overlays, and controls
					</div>
				</Canvas>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Canvas.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
