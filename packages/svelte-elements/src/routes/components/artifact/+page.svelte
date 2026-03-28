<script lang="ts">
	import { Artifact, CodeBlock } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Artifact>
	<div class="border-b p-3 text-sm font-medium">release-notes.md</div>
	<div class="text-muted-foreground p-3 text-sm">
		- Added docs routes for component slugs
		<br />
		- Verified checks and formatting
	</div>
</Artifact>`;

	const usageCode = `<script lang="ts">
	import { Artifact } from '$lib/index.js';
<\\/script>

<Artifact class="max-w-xl">
	<header class="border-b p-3 text-sm font-medium">{artifact.title}</header>
	<section class="p-3 text-sm">{artifact.content}</section>
</Artifact>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Controls border, width, and visual styling of the artifact shell.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Header, actions, and body content rendered inside Artifact.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional root div attributes.'
		}
	];
</script>

<DocsPage
	title="Artifact"
	description="A structured container for generated documents, code outputs, and reports."
>
	<p class="text-sm text-muted-foreground">
		<code>Artifact</code> gives generated output a consistent shell with room for custom headers, actions,
		and content.
	</p>

	<DocsSection title="Preview" description="Artifact preview with simple generated content.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Artifact>
					<div class="border-b p-3 text-sm font-medium">release-notes.md</div>
					<div class="p-3 text-sm text-muted-foreground">
						- Added docs routes for component slugs
						<br />
						- Verified checks and formatting
					</div>
				</Artifact>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install and start composing artifact views.">
		<InstallerTabs slug="artifact" />
	</DocsSection>

	<DocsSection title="Features" description="Artifact component highlights.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Reusable frame for generated assets and summaries.</li>
			<li>Simple children-based API for maximum layout freedom.</li>
			<li>Clean defaults that fit code assistant interfaces.</li>
			<li>Works with plain text, markdown, code, or mixed content.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render generated artifacts with custom sections.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Artifact props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
