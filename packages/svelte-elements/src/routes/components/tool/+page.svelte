<script lang="ts">
	import { CodeBlock, Tool, ToolContent, ToolHeader, ToolInput, ToolOutput } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Tool open={true}>
	<ToolHeader type="dynamic-tool" state="output-available" toolName="searchDocs" />
	<ToolContent>
		<ToolInput input={{ query: 'svelte kit docs routes' }} />
		<ToolOutput output={{ resultCount: 4, source: 'docs-index' }} errorText={undefined} />
	</ToolContent>
</Tool>`;

	const usageCode = `<script lang="ts">
	import { Tool, ToolHeader, ToolContent, ToolInput, ToolOutput } from '$lib/index.js';
<\\/script>

<Tool open={tool.state !== 'input-streaming'}>
	<ToolHeader type={tool.type} state={tool.state} toolName="fetchWeather" />
	<ToolContent>
		<ToolInput input={tool.input} />
		<ToolOutput output={tool.output} errorText={tool.errorText} />
	</ToolContent>
</Tool>`;

	const propsRows = [
		{
			name: 'ToolHeader.type',
			type: 'ToolUIPart["type"] | DynamicToolUIPart["type"]',
			required: true,
			description: 'Tool type identifier used to derive a display name.'
		},
		{
			name: 'ToolHeader.state',
			type: 'ToolUIPart["state"] | DynamicToolUIPart["state"]',
			required: true,
			description: 'Current tool lifecycle state used for status badge rendering.'
		},
		{
			name: 'ToolHeader.toolName',
			type: 'string',
			description: 'Name used when type is dynamic-tool.'
		},
		{
			name: 'ToolInput.input',
			type: 'ToolPart["input"]',
			description: 'Input payload shown as formatted JSON.'
		},
		{
			name: 'ToolOutput.output / errorText',
			type: 'ToolPart["output"] / ToolPart["errorText"]',
			description: 'Tool output or error text displayed in the result region.'
		}
	];
</script>

<DocsPage
	title="Tool"
	description="A composable collapsible layout for displaying tool invocation state and payloads."
>
	<p class="text-sm text-muted-foreground">
		<code>Tool</code> is designed for AI SDK tool UI parts and provides consistent input/output presentation.
	</p>

	<DocsSection title="Preview" description="Tool lifecycle preview with formatted payloads.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Tool open={true}>
					<ToolHeader type="dynamic-tool" state="output-available" toolName="searchDocs" />
					<ToolContent>
						<ToolInput input={{ query: 'svelte kit docs routes' }} />
						<ToolOutput output={{ resultCount: 4, source: 'docs-index' }} errorText={undefined} />
					</ToolContent>
				</Tool>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install via CLI or copy manually.">
		<InstallerTabs slug="tool" />
	</DocsSection>

	<DocsSection title="Features" description="What Tool includes.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Status-aware header with icon and badge.</li>
			<li>Collapsible content for compact transcript layouts.</li>
			<li>Built-in JSON formatting for input and output payloads.</li>
			<li>Error presentation for failed tool executions.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render directly from AI SDK tool parts.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Tool primitives.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
