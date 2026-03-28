<script lang="ts">
	import { Checkpoint } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Checkpoint } from '$lib/index.js';
<\/script>

<Checkpoint class="rounded-md border px-2 py-1 text-xs">
	<span>[cp]</span>
	<button class="underline" type="button">Restore checkpoint from 11:42 AM</button>
</Checkpoint>`;

	const usageCode = `<script lang="ts">
	import { Checkpoint } from '$lib/index.js';

	const checkpoints = ['Before refactor', 'Before dependency upgrade'];
<\/script>

{#each checkpoints as label (label)}
	<Checkpoint class="mb-2 rounded-md border px-2 py-1 text-xs">
		<span>[cp]</span>
		<button class="underline" type="button">Restore: {label}</button>
	</Checkpoint>
{/each}`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Optional classes for layout and styling.' },
		{ name: 'children', type: 'Snippet', description: 'Icon, trigger, and helper text content.' },
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root checkpoint div.'
		}
	];
</script>

<DocsPage
	title="Checkpoint"
	description="Mark key moments in a conversation and offer a clear restore action for earlier state."
>
	<p class="text-sm text-muted-foreground">
		Checkpoint helps users return to a known-good point in a thread, which is especially useful when
		exploring multiple solution paths.
	</p>

	<DocsSection title="Preview" description="A single checkpoint row with a restore button.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Checkpoint class="rounded-md border px-2 py-1 text-xs">
					<span>[cp]</span>
					<button class="underline" type="button">Restore checkpoint from 11:42 AM</button>
				</Checkpoint>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install this component using AI Elements tooling.">
		<InstallerTabs slug="checkpoint" />
	</DocsSection>

	<DocsSection title="Features" description="Designed for timeline-style interfaces.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Compact row layout that fits naturally between messages.</li>
			<li>Encourages explicit restore affordances for safer edits.</li>
			<li>Easy to pair with message history and branching controls.</li>
			<li>Composable children allow custom icons, labels, and actions.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage and API"
		description="Render checkpoints from saved chat history milestones."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				{#each ['Before refactor', 'Before dependency upgrade'] as label (label)}
					<Checkpoint class="mb-2 rounded-md border px-2 py-1 text-xs">
						<span>[cp]</span>
						<button class="underline" type="button">Restore: {label}</button>
					</Checkpoint>
				{/each}
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Checkpoint.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
