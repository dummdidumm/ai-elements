<script lang="ts">
	import { Canvas, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Canvas offers the visual container for building graph-like and flow editing experiences.
	</p>

	<DocsSection title="Preview" description="See Canvas in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
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

	<DocsSection
		title="Installation"
		description="Add Canvas to your project with your preferred setup path."
	>
		<InstallerTabs slug="canvas" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Canvas component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Styled container with minimum height for diagramming interfaces.</li>
			<li>Handles overflow and rounding to keep graph content neatly clipped.</li>
			<li>Composable with nodes, edges, controls, and side panels.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Canvas.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Canvas component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
