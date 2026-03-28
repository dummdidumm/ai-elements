<script lang="ts">
	import { Context } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Context } from '$lib/index.js';
<\/script>

<Context class="rounded-full border bg-muted/40 px-3 py-1">
	<span>Context used: 68%</span>
	<span class="text-muted-foreground">34k / 50k tokens</span>
</Context>`;

	const usageCode = `<script lang="ts">
	import { Context } from '$lib/index.js';

	const usage = {
		input: 24000,
		output: 6200,
		reasoning: 3100,
		cache: 900
	};
<\/script>

<Context class="rounded-lg border px-3 py-2">
	<span class="font-medium">gpt-5.3</span>
	<span class="text-muted-foreground">Input {usage.input}</span>
	<span class="text-muted-foreground">Output {usage.output}</span>
</Context>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Optional classes for layout and visual tone.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Usage chips, model labels, or token summaries.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes for the root div.'
		}
	];
</script>

<DocsPage
	title="Context"
	description="A compact wrapper for model context usage, token summaries, and related metadata."
>
	<p class="text-sm text-muted-foreground">
		Context is useful for displaying token budgets, model choice, and cost hints in a low-friction
		inline format.
	</p>

	<DocsSection title="Preview" description="A simple context usage pill.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Context class="rounded-full border bg-muted/40 px-3 py-1">
					<span>Context used: 68%</span>
					<span class="text-muted-foreground">34k / 50k tokens</span>
				</Context>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Install this component in your docs or product UI."
	>
		<InstallerTabs slug="context" />
	</DocsSection>

	<DocsSection title="Features" description="Common context-window UI patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Compact inline layout for usage metadata.</li>
			<li>Pairs naturally with model selector and prompt input controls.</li>
			<li>Composable children for custom token breakdown rendering.</li>
			<li>Works in headers, toolbars, and message footers.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Display token breakdown entries from state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Context class="rounded-lg border px-3 py-2">
					<span class="font-medium">gpt-5.3</span>
					<span class="text-muted-foreground">Input 24000</span>
					<span class="text-muted-foreground">Output 6200</span>
				</Context>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Context.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
