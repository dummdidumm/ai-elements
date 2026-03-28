<script lang="ts">
	import {
		Sandbox,
		SandboxContent,
		SandboxHeader,
		SandboxTabContent,
		SandboxTabs,
		SandboxTabsBar,
		SandboxTabsList,
		SandboxTabsTrigger
	} from '$lib/index.js';
	import { CodeBlock } from '$lib/code-block/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Sandbox>
	<SandboxHeader state="output-available" title="sum.ts" />
	<SandboxContent>
		<SandboxTabs value="code">
			<SandboxTabsBar>
				<SandboxTabsList>
					<SandboxTabsTrigger value="code">Code</SandboxTabsTrigger>
					<SandboxTabsTrigger value="output">Output</SandboxTabsTrigger>
				</SandboxTabsList>
			</SandboxTabsBar>
			<SandboxTabContent value="code"><CodeBlock code="export const value = 1" language="ts" /></SandboxTabContent>
			<SandboxTabContent value="output"><CodeBlock code="✓ build completed" language="log" /></SandboxTabContent>
		</SandboxTabs>
	</SandboxContent>
</Sandbox>`;

	const usageCode = `<Sandbox bind:open={isOpen}>
	<SandboxHeader state="output-available" title="ci-run" />
	<SandboxContent>
		<SandboxTabs value="output">
			<SandboxTabsBar>
				<SandboxTabsList>
					<SandboxTabsTrigger value="code">Code</SandboxTabsTrigger>
					<SandboxTabsTrigger value="output">Output</SandboxTabsTrigger>
				</SandboxTabsList>
			</SandboxTabsBar>
			<SandboxTabContent value="code"><CodeBlock code="npm run test" language="bash" /></SandboxTabContent>
			<SandboxTabContent value="output"><CodeBlock code="2 passed" language="log" /></SandboxTabContent>
		</SandboxTabs>
	</SandboxContent>
</Sandbox>`;

	const codeSample = `export function sum(a: number, b: number) {
	return a + b;
}`;
	const outputSample = `✓ build completed
✓ 2 tests passed`;

	const propsRows = [
		{
			name: '<Sandbox />',
			type: 'ComponentProps<typeof Collapsible.Root>',
			description: 'Collapsible root container with open/defaultOpen support.'
		},
		{
			name: '<SandboxHeader />',
			type: '{ title?: string; state: ToolUIPart["state"] } & CollapsibleTriggerProps',
			description: 'Header trigger with filename and execution state badge.'
		},
		{
			name: '<SandboxContent />',
			type: 'ComponentProps<typeof Collapsible.Content>',
			description: 'Animated expandable content section.'
		},
		{
			name: '<SandboxTabs />',
			type: 'ComponentProps<typeof Tabs.Root>',
			description: 'Tabs root for code/output panes.'
		},
		{
			name: '<SandboxTabsBar />',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Top tab bar wrapper.'
		},
		{
			name: '<SandboxTabsList />',
			type: 'ComponentProps<typeof Tabs.List>',
			description: 'List container for sandbox tab triggers.'
		},
		{
			name: '<SandboxTabsTrigger />',
			type: 'ComponentProps<typeof Tabs.Trigger>',
			description: 'Selects code or output view.'
		},
		{
			name: '<SandboxTabContent />',
			type: 'ComponentProps<typeof Tabs.Content>',
			description: 'Tab content panel for each sandbox view.'
		}
	];
</script>

<DocsPage
	title="Sandbox"
	description="Display generated code and runtime output in a collapsible, tabbed container."
>
	<DocsSection
		title="Intro"
		description="Sandbox mirrors the original AI code execution layout with status badges, collapsible sections, and code/output tabs."
	>
		<p class="text-sm text-muted-foreground">
			Pair it with CodeBlock, StackTrace, and tool state data to build notebook-like or CI-like
			execution experiences.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A sandbox showing code and output panels.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[320px] items-start">
			{#snippet preview()}
				<div class="w-full max-w-3xl">
					<Sandbox>
						<SandboxHeader state="output-available" title="sum.ts" />
						<SandboxContent>
							<SandboxTabs value="code">
								<SandboxTabsBar>
									<SandboxTabsList>
										<SandboxTabsTrigger value="code">Code</SandboxTabsTrigger>
										<SandboxTabsTrigger value="output">Output</SandboxTabsTrigger>
									</SandboxTabsList>
								</SandboxTabsBar>
								<SandboxTabContent value="code">
									<CodeBlock code={codeSample} language="ts" />
								</SandboxTabContent>
								<SandboxTabContent value="output">
									<CodeBlock code={outputSample} language="log" />
								</SandboxTabContent>
							</SandboxTabs>
						</SandboxContent>
					</Sandbox>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install all sandbox primitives.">
		<InstallerTabs slug="sandbox" />
	</DocsSection>

	<DocsSection title="Features" description="Designed for tool execution and code feedback loops.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Collapsible shell with smooth open/close transitions.</li>
			<li>Status-aware header for pending, running, output, and error states.</li>
			<li>Composable tabs for code, logs, traces, or custom panels.</li>
			<li>Works directly with AI SDK tool part state patterns.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Wire sandbox views to generated code and execution logs.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[320px] items-start">
			{#snippet preview()}
				<div class="w-full max-w-3xl">
					<Sandbox>
						<SandboxHeader state="output-available" title="ci-run" />
						<SandboxContent>
							<SandboxTabs value="output">
								<SandboxTabsBar>
									<SandboxTabsList>
										<SandboxTabsTrigger value="code">Code</SandboxTabsTrigger>
										<SandboxTabsTrigger value="output">Output</SandboxTabsTrigger>
									</SandboxTabsList>
								</SandboxTabsBar>
								<SandboxTabContent value="code">
									<CodeBlock code={'npm run test'} language="bash" />
								</SandboxTabContent>
								<SandboxTabContent value="output">
									<CodeBlock code={'2 passed'} language="log" />
								</SandboxTabContent>
							</SandboxTabs>
						</SandboxContent>
					</Sandbox>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Core sandbox primitives and their props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
