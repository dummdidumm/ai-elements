<script lang="ts">
	import { WebPreview } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<WebPreview class="w-full max-w-3xl">
	<div class="border-b px-3 py-2 text-xs text-muted-foreground">https://preview.example.dev</div>
	<div class="grid min-h-[220px] place-items-center p-4 text-sm">Generated app preview area</div>
</WebPreview>`;
	const usageCode = `<WebPreview class="w-full max-w-3xl">
	<div class="flex items-center justify-between border-b px-3 py-2 text-xs">
		<span>https://demo.internal/feature-branch</span>
		<span class="text-muted-foreground">mobile</span>
	</div>
	<div class="grid min-h-[220px] place-items-center p-4 text-sm">Rendered iframe or mock canvas</div>
</WebPreview>`;

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
	title="Web Preview"
	description="Embed generated web previews with composable navigation and viewport sections."
>
	<DocsSection
		title="Intro"
		description="WebPreview mirrors the original live-preview composition pattern for generated UI demos and app iterations."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A simple preview frame with URL chrome.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<WebPreview class="w-full max-w-3xl">
					<div class="border-b px-3 py-2 text-xs text-muted-foreground">
						https://preview.example.dev
					</div>
					<div class="grid min-h-[220px] place-items-center p-4 text-sm">
						Generated app preview area
					</div>
				</WebPreview>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Web Preview.">
		<InstallerTabs slug="web-preview" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Reusable shell for URL, controls, and rendered content.</li>
			<li>Fits desktop/tablet/mobile preview mode controls.</li>
			<li>Works with iframes, mock canvases, or screenshot placeholders.</li>
			<li>Useful for generated app review loops and QA handoff docs.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Bind preview shell sections to generated URL state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<WebPreview class="w-full max-w-3xl">
					<div class="flex items-center justify-between border-b px-3 py-2 text-xs">
						<span>https://demo.internal/feature-branch</span>
						<span class="text-muted-foreground">mobile</span>
					</div>
					<div class="grid min-h-[220px] place-items-center p-4 text-sm">
						Rendered iframe or mock canvas
					</div>
				</WebPreview>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Web Preview.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
