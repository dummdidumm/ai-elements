<script lang="ts">
	import { Node, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Node provides a reusable card-like container for titles, metadata, and action affordances in
		diagrams.
	</p>

	<DocsSection title="Preview" description="See Node in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Node class="w-64 space-y-1">
					<p class="font-medium">Review Draft</p>
					<p class="text-xs text-muted-foreground">Awaiting editor approval</p>
				</Node>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Node to your project with your preferred setup path."
	>
		<InstallerTabs slug="node" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Node component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Card-like node primitive with sensible spacing and shadow defaults.</li>
			<li>Flexible children API supports headers, status badges, and action rows.</li>
			<li>Useful for both interactive flow editors and static workflow previews.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Node.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Node component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
