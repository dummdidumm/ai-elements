<script lang="ts">
	import { CodeBlock, Task } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Task class="rounded-lg border p-3">
	<p class="text-sm font-medium">Release preparation</p>
	<ul class="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-xs">
		<li>Validate type checks</li>
		<li>Review component docs</li>
		<li>Publish package notes</li>
	</ul>
</Task>`;

	const usageCode = `<script lang="ts">
	import { Task } from '$lib/index.js';
<\\/script>

{#each workflowTasks as task}
	<Task class="rounded-lg border p-3">
		<p class="text-sm font-medium">{task.title}</p>
		<p class="text-muted-foreground text-xs">{task.status}</p>
	</Task>
{/each}`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Layout and visual classes for the task container.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Task header, status rows, and any custom task content.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional div attributes forwarded to the root element.'
		}
	];
</script>

<DocsPage
	title="Task"
	description="A lightweight container for grouped task progress and workflow steps."
>
	<p class="text-sm text-muted-foreground">
		Use <code>Task</code> to group related workflow rows, progress details, or checklist content.
	</p>

	<DocsSection title="Preview" description="Task block preview and implementation code.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Task class="rounded-lg border p-3">
					<p class="text-sm font-medium">Release preparation</p>
					<ul class="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
						<li>Validate type checks</li>
						<li>Review component docs</li>
						<li>Publish package notes</li>
					</ul>
				</Task>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install from AI Elements or manually.">
		<InstallerTabs slug="task" />
	</DocsSection>

	<DocsSection title="Features" description="Task component strengths.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Simple wrapper for task-oriented UI sections.</li>
			<li>Flexible structure for plain text, badges, or nested lists.</li>
			<li>Works well with status indicators and progress metadata.</li>
			<li>Composable with other AI Elements building blocks.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render task cards from workflow data.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Task props and forwarded attributes.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
