<script lang="ts">
	import { CodeBlock, StackTrace } from '$lib/index.js';
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
	const exampleCode = `            <StackTrace class="w-full max-w-3xl">
            	<div class="border-b px-4 py-3 text-xs text-red-500">ReferenceError: total is not defined</div>
            	<pre class="overflow-x-auto px-4 py-3 text-xs">ReferenceError: total is not defined
	at summarize (src/lib/report.ts:28:5)</pre>
            </StackTrace>`;
	const usageCode = `import { generateObject } from 'ai';

const { object } = await generateObject({
	model: anthropic('claude-sonnet-4-5'),
	schema: z.object({
		error: z.string(),
		stack: z.string()
	}),
	prompt: 'Summarize this runtime failure'
});

<StackTrace class="w-full max-w-3xl">
	<div class="border-b px-4 py-3 text-xs text-red-500">{object.error}</div>
	<pre class="overflow-x-auto px-4 py-3 text-xs">{object.stack}</pre>
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

	<DocsSection title="Usage with AI SDK" description="Map generated error payloads into StackTrace.">
		<CodeBlock code={usageCode} language="tsx" />
	</DocsSection>

	<DocsSection title="Examples" description="Render captured stack traces from runtime errors.">
		<PreviewCodeTabs code={exampleCode} language="svelte" previewClass="min-h-[240px] items-center">
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
