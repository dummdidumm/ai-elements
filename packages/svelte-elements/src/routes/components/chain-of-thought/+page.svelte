<script lang="ts">
	import { ChainOfThought } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { ChainOfThought } from '$lib/index.js';
<\/script>

<ChainOfThought>
	<div class="rounded-md border bg-muted/30 p-2 text-sm">1. Gather requirements</div>
	<div class="rounded-md border bg-muted/30 p-2 text-sm">2. Compare implementation options</div>
	<div class="rounded-md border bg-muted/30 p-2 text-sm">3. Apply and verify changes</div>
</ChainOfThought>`;

	const usageCode = `<script lang="ts">
	import { ChainOfThought } from '$lib/index.js';

	const steps = [
		'Review current component API',
		'Plan docs page structure',
		'Run check + lint before shipping'
	];
<\/script>

<ChainOfThought class="rounded-xl border p-3">
	{#each steps as step (step)}
		<div class="rounded-md border bg-muted/30 p-2 text-sm">{step}</div>
	{/each}
</ChainOfThought>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Additional classes for the reasoning container.'
		},
		{ name: 'children', type: 'Snippet', description: 'Step rows or custom reasoning content.' },
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root div.'
		}
	];
</script>

<DocsPage
	title="Chain of Thought"
	description="A structured container for high-level reasoning summaries, steps, and progress narratives."
>
	<DocsSection
		title="Overview"
		description="Present clear reasoning steps without exposing hidden internals."
	>
		<p class="text-sm text-muted-foreground">
			Use this component to display user-facing reasoning progress such as planning phases, search
			results, and decision checkpoints.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A simple multi-step reasoning flow.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<ChainOfThought>
					<div class="rounded-md border bg-muted/30 p-2 text-sm">1. Gather requirements</div>
					<div class="rounded-md border bg-muted/30 p-2 text-sm">
						2. Compare implementation options
					</div>
					<div class="rounded-md border bg-muted/30 p-2 text-sm">3. Apply and verify changes</div>
				</ChainOfThought>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install this component into your project.">
		<InstallerTabs slug="chain-of-thought" />
	</DocsSection>

	<DocsSection title="Features" description="Helpful patterns for agent-style interfaces.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Readable vertical layout for sequential reasoning steps.</li>
			<li>Composable content lets you include badges, summaries, or result snippets.</li>
			<li>Works well with collapsible wrappers and progress indicators.</li>
			<li>Minimal default styling makes it easy to adapt to your design system.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render steps from state for a live execution log.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<ChainOfThought class="rounded-xl border p-3">
					{#each ['Review current component API', 'Plan docs page structure', 'Run check + lint before shipping'] as step (step)}
						<div class="rounded-md border bg-muted/30 p-2 text-sm">{step}</div>
					{/each}
				</ChainOfThought>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for ChainOfThought.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
