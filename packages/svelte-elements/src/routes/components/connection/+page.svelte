<script lang="ts">
	import { Connection } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Connection } from '$lib/index.js';

<Connection aria-label="Example connection" />`;
	const usageCode = `import { Connection } from '$lib/index.js';

<Connection class="text-primary" aria-label="Node connection" />`;

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
			description: 'Optional SVG content layered on top of the default path.'
		},
		{
			name: '...rest',
			type: 'SVGAttributes<SVGSVGElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native SVG attributes such as role and aria-label.'
		}
	];
</script>

<DocsPage
	title="Connection"
	description="Display a visual connection line between workflow points."
>
	<DocsSection
		title="Intro"
		description="Connection renders a lightweight SVG connector for workflow and graph interfaces."
	>
		<p class="text-sm text-muted-foreground">
			Use it to represent in-progress drag links, hover targets, or simplified relationship lines.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A baseline connector line with endpoint marker.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Connection aria-label="Example connection" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Connection.">
		<InstallerTabs slug="connection" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Ready-to-use SVG curve for connection previews and placeholders.</li>
			<li>Supports custom SVG attributes like stroke styling and sizing.</li>
			<li>Allows optional child markup for additional SVG annotations.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Apply class names or attributes to style the connector.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Connection aria-label="Node connection" class="text-primary" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Connection.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
