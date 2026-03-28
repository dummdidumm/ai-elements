<script lang="ts">
	import { CodeBlock, Commit } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Commit class="space-y-2 p-3">
	<div class="flex items-center justify-between text-sm">
		<span class="font-mono">9f7c3ae</span>
		<span class="text-muted-foreground">feat(svelte-elements)</span>
	</div>
	<p class="text-sm">Add docs pages for component slugs and run checks.</p>
</Commit>`;

	const usageCode = `<script lang="ts">
	import { Commit } from '$lib/index.js';
<\\/script>

<Commit class="space-y-2 p-3">
	<div class="flex items-center justify-between text-sm">
		<span class="font-mono">{entry.hash}</span>
		<span class="text-muted-foreground">{entry.type}</span>
	</div>
	<p class="text-sm">{entry.message}</p>
</Commit>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Controls spacing and surface styling for commit rows.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Custom commit metadata, message, and file summary markup.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional root attributes forwarded to the commit container.'
		}
	];
</script>

<DocsPage
	title="Commit"
	description="A commit surface for rendering hash, message, author, and change summaries."
>
	<p class="text-sm text-muted-foreground">
		Use <code>Commit</code> when you need a consistent visual wrapper for commit metadata in agent or
		terminal-like UIs.
	</p>

	<DocsSection title="Preview" description="Commit summary preview and source code.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Commit class="space-y-2 p-3">
					<div class="flex items-center justify-between text-sm">
						<span class="font-mono">9f7c3ae</span>
						<span class="text-muted-foreground">feat(svelte-elements)</span>
					</div>
					<p class="text-sm">Add docs pages for component slugs and run checks.</p>
				</Commit>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install with CLI or manual copy.">
		<InstallerTabs slug="commit" />
	</DocsSection>

	<DocsSection title="Features" description="What Commit is useful for.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Provides a dedicated commit-style surface with sensible defaults.</li>
			<li>Supports custom hash, author, and message composition.</li>
			<li>Works with detailed file lists or compact summary rows.</li>
			<li>Fits naturally in code assistant and changelog interfaces.</li>
		</ul>
	</DocsSection>

	<DocsSection title="File Status" description="Common counts shown with commit summaries.">
		<div class="overflow-x-auto rounded-md border">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
					<tr>
						<th class="px-3 py-2 font-medium">Status</th>
						<th class="px-3 py-2 font-medium">Label</th>
						<th class="px-3 py-2 font-medium">Color</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">added</td>
						<td class="px-3 py-2">A</td>
						<td class="px-3 py-2">green</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">modified</td>
						<td class="px-3 py-2">M</td>
						<td class="px-3 py-2">amber</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">removed</td>
						<td class="px-3 py-2">D</td>
						<td class="px-3 py-2">red</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">renamed</td>
						<td class="px-3 py-2">R</td>
						<td class="px-3 py-2">blue</td>
					</tr>
				</tbody>
			</table>
		</div>
	</DocsSection>

	<DocsSection title="Usage" description="Render commit cards from git event data.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Commit props and forwarded attributes.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
