<script lang="ts">
	import { CodeBlock, Terminal } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `            <Terminal class="w-full max-w-3xl">
            	<div class="border-b px-4 py-2 text-xs text-zinc-400">build@agent</div>
            	<pre class="overflow-x-auto px-4 py-3 text-xs text-zinc-100">$ pnpm check
✓ typecheck passed
✓ lint passed</pre>
            </Terminal>`;
	const exampleCode = `            <Terminal class="w-full max-w-3xl">
            	<div class="flex items-center justify-between border-b px-4 py-2 text-xs text-zinc-400">
            		<span>tests</span>
            		<span class="text-emerald-300">streaming</span>
            	</div>
            	<pre class="overflow-x-auto px-4 py-3 text-xs text-zinc-100">$ pnpm test
✓ 26 passed</pre>
            </Terminal>`;
	const ansiCode = `import AnsiToHtml from 'ansi-to-html';

const converter = new AnsiToHtml();
const html = converter.toHtml(rawAnsiLog);

<Terminal class="w-full max-w-3xl">
	<div class="border-b px-4 py-2 text-xs text-zinc-400">build logs</div>
	<pre class="overflow-x-auto px-4 py-3 text-xs text-zinc-100">{html}</pre>
</Terminal>`;

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
	title="Terminal"
	description="Display command output streams in a dark terminal-style panel."
>
	<DocsSection title="Preview" description="A terminal panel with command output.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Terminal class="w-full max-w-3xl">
					<div class="border-b px-4 py-2 text-xs text-zinc-400">build@agent</div>
					<pre class="overflow-x-auto px-4 py-3 text-xs text-zinc-100">$ pnpm check
			✓ typecheck passed
			✓ lint passed</pre>
				</Terminal>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Terminal.">
		<InstallerTabs slug="terminal" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Dark terminal theme ready for logs and command history.</li>
			<li>Composable header and action rows.</li>
			<li>Supports streaming and static output displays.</li>
			<li>Works with text formatted by ANSI-aware renderers upstream.</li>
		</ul>
	</DocsSection>

	<DocsSection title="ANSI Support" description="Convert ANSI output to HTML before rendering.">
		<CodeBlock code={ansiCode} language="tsx" />
	</DocsSection>

	<DocsSection title="Examples" description="Render build/test output with optional status metadata.">
		<PreviewCodeTabs code={exampleCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Terminal class="w-full max-w-3xl">
					<div class="flex items-center justify-between border-b px-4 py-2 text-xs text-zinc-400">
						<span>tests</span>
						<span class="text-emerald-300">streaming</span>
					</div>
					<pre class="overflow-x-auto px-4 py-3 text-xs text-zinc-100">$ pnpm test
			✓ 26 passed</pre>
				</Terminal>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Terminal.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
