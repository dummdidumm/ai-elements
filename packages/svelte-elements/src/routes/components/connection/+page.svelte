<script lang="ts">
	import { Connection, CodeBlock } from '$lib/index.js';
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
	<p class="text-sm leading-6 text-muted-foreground">
		Connection renders a lightweight SVG connector that can be used in previews or custom graph
		tooling.
	</p>

	<DocsSection title="Preview" description="See Connection in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Connection aria-label="Example connection" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Connection to your project with your preferred setup path."
	>
		<InstallerTabs slug="connection" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Connection component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Ready-to-use SVG curve for connection previews and placeholders.</li>
			<li>Supports custom SVG attributes like stroke styling and sizing.</li>
			<li>Allows optional child markup for additional SVG annotations.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Connection.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Connection component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
