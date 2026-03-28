<script lang="ts">
	import { CodeBlock, Sources } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Sources class="space-y-2">
	<a class="bg-muted/40 block rounded-md border px-3 py-2 text-xs" href="#source-1">[1] docs/release-notes.md</a>
	<a class="bg-muted/40 block rounded-md border px-3 py-2 text-xs" href="#source-2">[2] docs/migration-guide.md</a>
</Sources>`;

	const usageCode = `<script lang="ts">
	import { Sources } from '$lib/index.js';
<\\/script>

<Sources class="space-y-1">
	{#each messageSources as source}
		<a class="bg-muted/40 block rounded-md border px-2 py-1 text-xs" href={source.url}>
			{source.label}
		</a>
	{/each}
</Sources>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Adds spacing and layout classes to the source list container.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Source rows, links, or custom citation markup rendered inside Sources.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Any additional attributes are forwarded to the root div.'
		}
	];
</script>

<DocsPage
	title="Sources"
	description="A citation container for listing source links used in assistant responses."
>
	<p class="text-sm text-muted-foreground">
		Use <code>Sources</code> to group citation links below a response and keep provenance visible.
	</p>

	<DocsSection title="Preview" description="Citation list preview and source.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Sources class="space-y-2">
					<a class="block rounded-md border bg-muted/40 px-3 py-2 text-xs" href="#source-1">
						[1] docs/release-notes.md
					</a>
					<a class="block rounded-md border bg-muted/40 px-3 py-2 text-xs" href="#source-2">
						[2] docs/migration-guide.md
					</a>
				</Sources>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Add the component with your installer of choice.">
		<InstallerTabs slug="sources" />
	</DocsSection>

	<DocsSection title="Features" description="Core capabilities.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Simple container for source links and citation rows.</li>
			<li>Lightweight API that works with any custom source markup.</li>
			<li>Useful for AI SDK <code>sendSources</code> style UIs.</li>
			<li>Responsive by default with utility-class styling control.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render per-message source references.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Sources component props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
