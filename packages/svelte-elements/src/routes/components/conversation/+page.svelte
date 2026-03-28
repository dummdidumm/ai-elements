<script lang="ts">
	import { Conversation, Message } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Conversation, Message } from '$lib/index.js';
<\/script>

<Conversation class="h-64 rounded-xl border p-3">
	<div class="space-y-3">
		<Message class="rounded-lg border bg-primary/10 p-2 text-sm">Can you summarize this PR?</Message>
		<Message class="rounded-lg border bg-muted/30 p-2 text-sm">Sure - it adds docs routes for 12 components.</Message>
	</div>
</Conversation>`;

	const usageCode = `<script lang="ts">
	import { Conversation, Message } from '$lib/index.js';

	const transcript = [
		{ role: 'user', text: 'Create a release checklist.' },
		{ role: 'assistant', text: 'Drafting checklist with tests, docs, and rollout.' }
	] as const;
<\/script>

<Conversation class="h-72 rounded-xl border p-3">
	<div class="space-y-3">
		{#each transcript as item}
			{#if item.role === 'user'}
				<Message class="rounded-lg border bg-primary/10 p-2 text-sm">{item.text}</Message>
			{:else}
				<Message class="rounded-lg border p-2 text-sm">{item.text}</Message>
			{/if}
		{/each}
	</div>
</Conversation>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Optional classes for sizing and scroll behavior.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Message list and helper controls rendered inside the container.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes forwarded to the root div.'
		}
	];
</script>

<DocsPage
	title="Conversation"
	description="A scrollable conversation container for chat messages, timeline controls, and transcript utilities."
>
	<p class="text-sm text-muted-foreground">
		Conversation provides the structural container for message timelines and is typically paired
		with message and prompt-input components.
	</p>

	<DocsSection
		title="Preview"
		description="A compact conversation panel with user and assistant messages."
	>
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="p-4">
			{#snippet preview()}
				<Conversation class="h-64 rounded-xl border p-3">
					<div class="space-y-3">
						<Message class="rounded-lg border bg-primary/10 p-2 text-sm"
							>Can you summarize this PR?</Message
						>
						<Message class="rounded-lg border bg-muted/30 p-2 text-sm"
							>Sure - it adds docs routes for 12 components.</Message
						>
					</div>
				</Conversation>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Install the component via AI Elements or shadcn CLI."
	>
		<InstallerTabs slug="conversation" />
	</DocsSection>

	<DocsSection title="Features" description="Core behavior in chat applications.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Scrollable transcript area for long-running conversations.</li>
			<li>Natural pairing with message, queue, and checkpoint elements.</li>
			<li>Easy to size for full-page or embedded chat surfaces.</li>
			<li>Accepts arbitrary child content for custom timeline controls.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render a transcript from array-based chat state.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="p-4">
			{#snippet preview()}
				<Conversation class="h-72 rounded-xl border p-3">
					<div class="space-y-3">
						{#each [{ role: 'user', text: 'Create a release checklist.' }, { role: 'assistant', text: 'Drafting checklist with tests, docs, and rollout.' }] as item}
							{#if item.role === 'user'}
								<Message class="rounded-lg border bg-primary/10 p-2 text-sm">{item.text}</Message>
							{:else}
								<Message class="rounded-lg border p-2 text-sm">{item.text}</Message>
							{/if}
						{/each}
					</div>
				</Conversation>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Conversation.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
