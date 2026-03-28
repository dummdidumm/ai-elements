<script lang="ts">
	import { Confirmation } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Confirmation } from '$lib/index.js';
<\/script>

<Confirmation class="space-y-2">
	<p class="font-medium">Tool approval requested</p>
	<p class="text-muted-foreground">Delete /tmp/archive.zip?</p>
	<div class="flex gap-2">
		<button class="rounded border px-2 py-1 text-xs" type="button">Reject</button>
		<button class="rounded bg-primary px-2 py-1 text-xs text-primary-foreground" type="button">Approve</button>
	</div>
</Confirmation>`;

	const usageCode = `<script lang="ts">
	import { Confirmation } from '$lib/index.js';

	let approved: boolean | null = null;
<\/script>

<Confirmation>
	{#if approved === null}
		<p class="font-medium">Awaiting approval</p>
	{:else if approved}
		<p class="text-emerald-600">Approved and running...</p>
	{:else}
		<p class="text-rose-600">Rejected by user.</p>
	{/if}
</Confirmation>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Custom classes applied to the alert-style wrapper.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Request content, status messages, and action controls.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes for the root div.'
		}
	];
</script>

<DocsPage
	title="Confirmation"
	description="Alert-style UI for approvals, accepts/rejects, and post-action status in tool workflows."
>
	<DocsSection
		title="Overview"
		description="Use confirmation prompts when a tool action needs explicit approval."
	>
		<p class="text-sm text-muted-foreground">
			This component provides a clear container for approval requests and final outcomes in
			human-in- the-loop flows.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A confirmation request with approve/reject actions.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Confirmation class="space-y-2">
					<p class="font-medium">Tool approval requested</p>
					<p class="text-muted-foreground">Delete /tmp/archive.zip?</p>
					<div class="flex gap-2">
						<button class="rounded border px-2 py-1 text-xs" type="button">Reject</button>
						<button
							class="rounded bg-primary px-2 py-1 text-xs text-primary-foreground"
							type="button">Approve</button
						>
					</div>
				</Confirmation>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install this component into your project.">
		<InstallerTabs slug="confirmation" />
	</DocsSection>

	<DocsSection title="Features" description="Great fit for tool-calling UIs.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Clear visual treatment for approval-required actions.</li>
			<li>Works for request, accepted, and rejected states.</li>
			<li>Composable children support custom action buttons.</li>
			<li>Easy to integrate with AI SDK tool approval state.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Switch content based on a local approval state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Confirmation>
					<p class="font-medium">Awaiting approval</p>
					<p class="text-sm text-muted-foreground">
						State transitions can render accepted/rejected feedback.
					</p>
				</Confirmation>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Confirmation.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
