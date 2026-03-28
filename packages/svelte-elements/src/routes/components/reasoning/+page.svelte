<script lang="ts">
	import { CodeBlock, Reasoning, ReasoningContent, ReasoningTrigger } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Reasoning defaultOpen={true} isStreaming={false}>
	<ReasoningTrigger />
	<ReasoningContent content={'- Gather requirements\\n- Build implementation\\n- Validate changes'} />
</Reasoning>`;

	const usageCode = `<script lang="ts">
	import { Reasoning, ReasoningTrigger, ReasoningContent } from '$lib/index.js';
<\\/script>

<Reasoning isStreaming={status === 'streaming'}>
	<ReasoningTrigger />
	<ReasoningContent content={reasoningMarkdown} />
</Reasoning>`;

	const propsRows = [
		{
			name: 'isStreaming',
			type: 'boolean',
			description: 'Auto-opens while reasoning is streaming and closes when complete.',
			defaultValue: 'false'
		},
		{
			name: 'open',
			type: 'boolean',
			description: 'Controlled open state for the root collapsible.'
		},
		{
			name: 'defaultOpen',
			type: 'boolean',
			description: 'Initial open state when uncontrolled.',
			defaultValue: 'true'
		},
		{
			name: 'ReasoningContent.content',
			type: 'string',
			description: 'Markdown reasoning text rendered in the content panel.'
		},
		{
			name: 'ReasoningTrigger.getThinkingMessage',
			type: '(isStreaming: boolean, duration?: number) => string',
			description: 'Optional custom label generator for the trigger.'
		}
	];
</script>

<DocsPage
	title="Reasoning"
	description="A collapsible reasoning panel that automatically reflects streaming state."
>
	<p class="text-sm text-muted-foreground">
		Use <code>Reasoning</code> to show short model thought summaries without interrupting the main message
		flow.
	</p>

	<DocsSection title="Preview" description="Live component preview and source.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Reasoning defaultOpen={true} isStreaming={false}>
					<ReasoningTrigger />
					<ReasoningContent
						content={'- Gather requirements\n- Build implementation\n- Validate changes'}
					/>
				</Reasoning>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install with AI Elements, shadcn, or manually.">
		<InstallerTabs slug="reasoning" />
	</DocsSection>

	<DocsSection title="Features" description="What this component gives you out of the box.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Streaming-aware open and close behavior.</li>
			<li>Composable trigger and content primitives.</li>
			<li>Markdown-rendered reasoning content.</li>
			<li>Keyboard-accessible collapsible interactions.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Use with chat streaming state.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Core props for Reasoning primitives.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
