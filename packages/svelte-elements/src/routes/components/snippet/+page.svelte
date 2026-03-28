<script lang="ts">
	import { Snippet } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Snippet class="w-full max-w-xl">
	<span class="border-r px-3 py-2 text-xs text-muted-foreground">$</span>
	<code class="flex-1 px-3 py-2 text-xs">pnpm add @repo/ai-elements</code>
	<button class="border-l px-3 py-2 text-xs" type="button">Copy</button>
</Snippet>`;
	const usageCode = `<Snippet class="w-full max-w-xl">
	<code class="flex-1 px-3 py-2 text-xs">npm run test -- --watch</code>
	<button class="border-l px-3 py-2 text-xs" type="button">Copy</button>
</Snippet>`;

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
	title="Snippet"
	description="Render short commands and inline code references with compact layout control."
>
	<DocsSection
		title="Intro"
		description="Snippet is ideal for short, copy-friendly command lines and token-sized code references in docs and chat UIs."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A terminal-style command snippet with a copy action.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Snippet class="w-full max-w-xl">
					<span class="border-r px-3 py-2 text-xs text-muted-foreground">$</span>
					<code class="flex-1 px-3 py-2 text-xs">pnpm add @repo/ai-elements</code>
					<button class="border-l px-3 py-2 text-xs" type="button">Copy</button>
				</Snippet>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Snippet.">
		<InstallerTabs slug="snippet" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Compact command row layout with monospaced styling.</li>
			<li>Flexible prefix and suffix composition for shell-like snippets.</li>
			<li>Great for docs callouts and assistant generated command steps.</li>
			<li>Supports full custom content and action affordances.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Build prefixed or plain snippets using custom children.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Snippet class="w-full max-w-xl">
					<code class="flex-1 px-3 py-2 text-xs">npm run test -- --watch</code>
					<button class="border-l px-3 py-2 text-xs" type="button">Copy</button>
				</Snippet>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Snippet.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
