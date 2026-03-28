<script lang="ts">
	import { Queue } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Queue } from '$lib/index.js';
<\/script>

<Queue>
	<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">1. Parse user request</div>
	<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">2. Update component pages</div>
	<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">3. Run checks and push</div>
</Queue>`;

	const usageCode = `<script lang="ts">
	import { Queue } from '$lib/index.js';

	const jobs = [
		{ label: 'Refine copy', done: true },
		{ label: 'Verify lint output', done: false },
		{ label: 'Publish branch changes', done: false }
	];
<\/script>

<Queue>
	{#each jobs as job (job.label)}
		<div class="rounded-md border px-2 py-1 text-sm" class:opacity-60={job.done}>
			{job.done ? '[x]' : '[ ]'} {job.label}
		</div>
	{/each}
</Queue>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Additional classes for spacing, sizing, and styling.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Queue rows, sections, and custom task content.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Attributes forwarded to the root queue container.'
		}
	];
</script>

<DocsPage
	title="Queue"
	description="A structured container for ordered work items, task progress, and AI workflow status updates."
>
	<DocsSection
		title="Overview"
		description="Show pending and completed work in a compact ordered block."
	>
		<p class="text-sm text-muted-foreground">
			Queue is useful for to-do lists, execution traces, and progress UI where users need a quick
			view of what happened and what is next.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A queue representing an agent execution pipeline.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Queue>
					<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">1. Parse user request</div>
					<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">
						2. Update component pages
					</div>
					<div class="rounded-md border bg-muted/30 px-2 py-1 text-sm">3. Run checks and push</div>
				</Queue>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install queue primitives in your project.">
		<InstallerTabs slug="queue" />
	</DocsSection>

	<DocsSection title="Features" description="Queue display patterns for AI products.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Clear vertical organization for sequential tasks.</li>
			<li>Works with completed/pending visual states.</li>
			<li>Composable children for attachments, actions, and metadata.</li>
			<li>Pairs naturally with conversation and plan components.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render queue rows from structured task state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Queue>
					<div class="rounded-md border px-2 py-1 text-sm opacity-60">[x] Refine copy</div>
					<div class="rounded-md border px-2 py-1 text-sm">[ ] Verify lint output</div>
					<div class="rounded-md border px-2 py-1 text-sm">[ ] Publish branch changes</div>
				</Queue>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Queue.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
