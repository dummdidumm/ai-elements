<script lang="ts">
	import {
		Agent,
		AgentContent,
		AgentHeader,
		AgentInstructions,
		AgentOutput,
		CodeBlock
	} from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Agent>
	<AgentHeader name="Sentiment Analyzer" model="anthropic/claude-sonnet-4-5" />
	<AgentContent>
		<AgentInstructions instructions="Classify sentiment and summarize confidence." />
		<AgentOutput schema={'z.object({ sentiment: z.string(), score: z.number() })'} />
	</AgentContent>
</Agent>`;

	const usageCode = `<script lang="ts">
	import {
		Agent,
		AgentHeader,
		AgentContent,
		AgentInstructions,
		AgentOutput
	} from '$lib/index.js';
<\\/script>

<Agent>
	<AgentHeader name={agent.name} model={agent.model} />
	<AgentContent>
		<AgentInstructions instructions={agent.instructions} />
		<AgentOutput schema={agent.outputSchema} />
	</AgentContent>
</Agent>`;

	const propsRows = [
		{
			name: 'AgentHeader.name',
			type: 'string',
			required: true,
			description: 'Agent display name shown in the header.'
		},
		{
			name: 'AgentHeader.model',
			type: 'string',
			description: 'Optional model badge content.'
		},
		{
			name: 'AgentInstructions.instructions',
			type: 'string',
			description: 'Instruction text when no slotted children are provided.'
		},
		{
			name: 'AgentOutput.schema',
			type: 'string',
			required: true,
			description: 'Output schema string rendered in a code block.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes forwarded by Agent container primitives.'
		}
	];
</script>

<DocsPage
	title="Agent"
	description="Composable blocks for showing an agent's model, instructions, and output schema."
>
	<p class="text-sm text-muted-foreground">
		Use the <code>Agent</code> primitives to present configured AI worker context alongside chat or code
		workflows.
	</p>

	<DocsSection title="Preview" description="Agent configuration preview.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Agent>
					<AgentHeader name="Sentiment Analyzer" model="anthropic/claude-sonnet-4-5" />
					<AgentContent>
						<AgentInstructions instructions="Classify sentiment and summarize confidence." />
						<AgentOutput schema={'z.object({ sentiment: z.string(), score: z.number() })'} />
					</AgentContent>
				</Agent>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install from AI Elements or shadcn CLI.">
		<InstallerTabs slug="agent" />
	</DocsSection>

	<DocsSection title="Usage with AI SDK" description="Render agent metadata from runtime tool context.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Features" description="Agent component capabilities.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Header with agent identity and model badge.</li>
			<li>Instruction panel for system behavior context.</li>
			<li>Typed output schema display with syntax highlighting.</li>
			<li>Composable structure for tools, output, and custom sections.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Props" description="Core props used by Agent primitives.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
