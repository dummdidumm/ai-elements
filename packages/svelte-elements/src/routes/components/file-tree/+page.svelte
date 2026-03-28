<script lang="ts">
	import { CodeBlock, FileTree } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<FileTree class="space-y-1 p-3 text-xs">
	<div>packages/</div>
	<div class="pl-3">svelte-elements/</div>
	<div class="pl-6">src/routes/components/file-tree/+page.svelte</div>
	<div class="pl-6">src/lib/file-tree.svelte</div>
</FileTree>`;

	const usageCode = `<script lang="ts">
	import { FileTree } from '$lib/index.js';
<\\/script>

<FileTree class="space-y-1 p-3 text-xs">
	{#each treeRows as row}
		<div class={row.indentClass}>{row.label}</div>
	{/each}
</FileTree>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Controls typography and spacing for tree rows.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Nested row markup representing folder/file hierarchy.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes forwarded to the file-tree root.'
		}
	];
</script>

<DocsPage
	title="File Tree"
	description="A repository tree container for visualizing file and folder structures."
>
	<p class="text-sm text-muted-foreground">
		Use <code>FileTree</code> to present project structure snapshots, diff context, or selected file paths.
	</p>

	<DocsSection title="Preview" description="File tree rendering with indented rows.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<FileTree class="space-y-1 p-3 text-xs">
					<div>packages/</div>
					<div class="pl-3">svelte-elements/</div>
					<div class="pl-6">src/routes/components/file-tree/+page.svelte</div>
					<div class="pl-6">src/lib/file-tree.svelte</div>
				</FileTree>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install this component route dependency.">
		<InstallerTabs slug="file-tree" />
	</DocsSection>

	<DocsSection title="Features" description="Why use FileTree.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Purpose-built surface for tree-like file lists.</li>
			<li>Monospace-friendly defaults for technical readability.</li>
			<li>Works with static trees or interactive selection handlers.</li>
			<li>Easy to style with nested indentation classes.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Map file rows from runtime tree data.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="FileTree props and forwarded attributes.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
