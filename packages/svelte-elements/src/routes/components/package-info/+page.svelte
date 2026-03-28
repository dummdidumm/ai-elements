<script lang="ts">
	import { PackageInfo } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<PackageInfo class="w-full max-w-xl space-y-3">
	<div class="flex items-center justify-between">
		<p class="font-mono text-sm">@repo/ai-core</p>
		<span class="rounded-full border bg-amber-100 px-2 py-0.5 text-xs text-amber-900">minor</span>
	</div>
	<p class="text-xs text-muted-foreground">2.4.1 → 2.5.0</p>
</PackageInfo>`;
	const dependenciesCode = `<PackageInfo class="w-full max-w-xl space-y-3 p-4">
	<div class="flex items-center justify-between">
		<p class="font-mono text-sm">@repo/ai-core</p>
		<span class="rounded-full border bg-amber-100 px-2 py-0.5 text-xs text-amber-900">minor</span>
	</div>
	<div class="space-y-1 text-xs text-muted-foreground">
		<p>zod ^3.24.0</p>
		<p>ai ^6.0.0</p>
	</div>
</PackageInfo>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Custom classes for the component container.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Composable child content rendered inside the component.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root element.'
		}
	];
</script>

<DocsPage
	title="Package Info"
	description="Display package upgrade metadata, change badges, and dependency details."
>
	<DocsSection title="Preview" description="A package update card with version and change type.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<PackageInfo class="w-full max-w-xl space-y-3">
					<div class="flex items-center justify-between">
						<p class="font-mono text-sm">@repo/ai-core</p>
						<span class="rounded-full border bg-amber-100 px-2 py-0.5 text-xs text-amber-900"
							>minor</span
						>
					</div>
					<p class="text-xs text-muted-foreground">2.4.1 → 2.5.0</p>
				</PackageInfo>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Package Info.">
		<InstallerTabs slug="package-info" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Composable shell for version transitions and badges.</li>
			<li>Supports major, minor, patch, added, and removed change labels.</li>
			<li>Easy to pair with dependency lists and release notes.</li>
			<li>Stable container API for both static and generated content.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Dependencies" description="Render dependency rows inside the package card.">
		<PreviewCodeTabs code={dependenciesCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<PackageInfo class="w-full max-w-xl space-y-3 p-4">
					<div class="flex items-center justify-between">
						<p class="font-mono text-sm">@repo/ai-core</p>
						<span class="rounded-full border bg-amber-100 px-2 py-0.5 text-xs text-amber-900"
							>minor</span
						>
					</div>
					<div class="space-y-1 text-xs text-muted-foreground">
						<p>zod ^3.24.0</p>
						<p>ai ^6.0.0</p>
					</div>
				</PackageInfo>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Change Types" description="Suggested badge colors for dependency updates.">
		<div class="overflow-x-auto rounded-md border">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
					<tr>
						<th class="px-3 py-2 font-medium">Type</th>
						<th class="px-3 py-2 font-medium">Badge</th>
						<th class="px-3 py-2 font-medium">Use case</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">major</td>
						<td class="px-3 py-2">red</td>
						<td class="px-3 py-2">Breaking changes</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">minor</td>
						<td class="px-3 py-2">amber</td>
						<td class="px-3 py-2">New features</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">patch</td>
						<td class="px-3 py-2">green</td>
						<td class="px-3 py-2">Bug fixes</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">added</td>
						<td class="px-3 py-2">blue</td>
						<td class="px-3 py-2">New dependency</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">removed</td>
						<td class="px-3 py-2">gray</td>
						<td class="px-3 py-2">Removed dependency</td>
					</tr>
				</tbody>
			</table>
		</div>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Package Info.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
