<script lang="ts">
	import { Edge, CodeBlock } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Edge } from '$lib/index.js';

<Edge aria-label="Example edge" />`;
	const usageCode = `import { Edge } from '$lib/index.js';

<Edge class="text-primary" aria-label="Workflow edge" />`;

	const props = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes applied to the SVG root.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Optional SVG children rendered inside the edge root.'
		},
		{
			name: '...rest',
			type: 'SVGAttributes<SVGSVGElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native SVG attributes.'
		}
	];
</script>

<DocsPage title="Edge" description="Render a graph edge primitive for node relationships.">
	<p class="text-sm leading-6 text-muted-foreground">
		Edge is an SVG primitive that draws a smooth curved path between nodes in workflow UIs.
	</p>

	<DocsSection title="Preview" description="See Edge in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Edge aria-label="Example edge" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Edge to your project with your preferred setup path."
	>
		<InstallerTabs slug="edge" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Edge component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Simple SVG edge primitive for graph and flow diagrams.</li>
			<li>Easy to restyle with utility classes and standard SVG attributes.</li>
			<li>Supports optional children for overlays or markers.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Edge.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Edge component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
