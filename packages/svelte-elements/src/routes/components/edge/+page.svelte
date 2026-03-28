<script lang="ts">
	import { Edge } from '$lib/index.js';
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

	const propsRows = [
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
	<DocsSection
		title="Intro"
		description="Edge is an SVG primitive for drawing path-based relationships between nodes."
	>
		<p class="text-sm text-muted-foreground">
			Use it as a baseline visual edge or extend it with custom markers and overlays.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A simple curved edge for graph relationships.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Edge aria-label="Example edge" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Edge.">
		<InstallerTabs slug="edge" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Simple SVG edge primitive for graph and flow diagrams.</li>
			<li>Easy to restyle with utility classes and standard SVG attributes.</li>
			<li>Supports optional children for overlays or markers.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Apply classes to theme edges for active paths.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Edge aria-label="Workflow edge" class="text-primary" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Edge.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
