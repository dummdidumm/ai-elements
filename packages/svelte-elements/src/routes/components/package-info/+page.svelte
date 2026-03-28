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
	const usageCode = `<PackageInfo class="w-full max-w-xl space-y-3 p-4">
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
	<DocsSection
		title="Intro"
		description="PackageInfo mirrors the original docs concept for dependency diffs while keeping composition fully in your Svelte markup."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

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

	<DocsSection title="Usage" description="Render dependency rows inside the PackageInfo container.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
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

	<DocsSection title="Props" description="API reference for Package Info.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
