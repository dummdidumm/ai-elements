<script lang="ts">
	import { Node } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Node } from '$lib/index.js';

<Node class="w-64 space-y-1">
	<p class="font-medium">Review Draft</p>
	<p class="text-xs text-muted-foreground">Awaiting editor approval</p>
</Node>`;
	const usageCode = `import { Node } from '$lib/index.js';

<Node class="space-y-2">
	<h3 class="text-sm font-medium">Generate Summary</h3>
	<p class="text-xs text-muted-foreground">Runs after transcription completes.</p>
</Node>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for node sizing and styling.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Node content rendered inside the container.'
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
	title="Node"
	description="Build node cards that represent steps or entities in a workflow."
>
	<DocsSection
		title="Intro"
		description="Node provides a reusable card surface for workflow steps and graph entities."
	>
		<p class="text-sm text-muted-foreground">
			Place titles, status copy, controls, and metadata inside each node while keeping consistent
			visual rhythm.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A compact node card with title and state text.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Node class="w-64 space-y-1">
					<p class="font-medium">Review Draft</p>
					<p class="text-xs text-muted-foreground">Awaiting editor approval</p>
				</Node>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Node.">
		<InstallerTabs slug="node" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Card-like node primitive with sensible spacing and shadow defaults.</li>
			<li>Flexible children API supports headers, status badges, and action rows.</li>
			<li>Useful for both interactive flow editors and static workflow previews.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render custom node content with your app state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Node class="space-y-2">
					<h3 class="text-sm font-medium">Generate Summary</h3>
					<p class="text-xs text-muted-foreground">Runs after transcription completes.</p>
				</Node>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Node.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
