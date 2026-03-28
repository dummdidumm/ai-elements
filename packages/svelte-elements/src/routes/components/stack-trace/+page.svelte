<script lang="ts">
	import { StackTrace } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `            <StackTrace class="w-full max-w-3xl">
            	<div class="border-b px-4 py-3 text-xs text-red-500">TypeError: Cannot read properties of undefined</div>
            	<pre class="overflow-x-auto px-4 py-3 text-xs">TypeError: Cannot read properties of undefined
	at renderCard (src/lib/render.ts:42:13)</pre>
            </StackTrace>`;
	const usageCode = `            <StackTrace class="w-full max-w-3xl">
            	<div class="border-b px-4 py-3 text-xs text-red-500">ReferenceError: total is not defined</div>
            	<pre class="overflow-x-auto px-4 py-3 text-xs">ReferenceError: total is not defined
	at summarize (src/lib/report.ts:28:5)</pre>
            </StackTrace>`;

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
	title="Stack Trace"
	description="Present runtime errors and call frames in a readable debugging panel."
>
	<DocsSection
		title="Intro"
		description="StackTrace is a styled container for exception details and frame data, matching the original docs use cases for tool output and debugging."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A structured runtime error display.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<StackTrace class="w-full max-w-3xl">
					<div class="border-b px-4 py-3 text-xs text-red-500">
						TypeError: Cannot read properties of undefined
					</div>
					<pre
						class="overflow-x-auto px-4 py-3 text-xs">TypeError: Cannot read properties of undefined
				at renderCard (src/lib/render.ts:42:13)</pre>
				</StackTrace>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Stack Trace.">
		<InstallerTabs slug="stack-trace" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Monospaced trace surface with consistent spacing.</li>
			<li>Ideal for parser/runtime failures and execution traces.</li>
			<li>Composable for custom actions like copy and expand toggles.</li>
			<li>Works in sandbox output tabs and incident summaries.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render captured stack traces from runtime errors.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<StackTrace class="w-full max-w-3xl">
					<div class="border-b px-4 py-3 text-xs text-red-500">
						ReferenceError: total is not defined
					</div>
					<pre class="overflow-x-auto px-4 py-3 text-xs">ReferenceError: total is not defined
				at summarize (src/lib/report.ts:28:5)</pre>
				</StackTrace>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Stack Trace.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
