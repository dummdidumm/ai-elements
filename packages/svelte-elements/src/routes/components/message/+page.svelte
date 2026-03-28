<script lang="ts">
	import { Message } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Message } from '$lib/index.js';
<\/script>

<div class="space-y-3">
	<Message class="ml-auto rounded-lg border bg-primary/10 p-3 text-sm">Ship docs for component pages.</Message>
	<Message class="rounded-lg border bg-muted/30 p-3 text-sm">Done - all routes compile and lint cleanly.</Message>
</div>`;

	const usageCode = `<script lang="ts">
	import { Message } from '$lib/index.js';

	const messages = [
		{ role: 'user', text: 'Generate a migration plan.' },
		{ role: 'assistant', text: 'I created a 3-step rollout with rollback checkpoints.' }
	] as const;
<\/script>

<div class="space-y-3">
	{#each messages as item}
		{#if item.role === 'user'}
			<Message class="ml-auto rounded-lg border p-3 text-sm">{item.text}</Message>
		{:else}
			<Message class="rounded-lg border p-3 text-sm">{item.text}</Message>
		{/if}
	{/each}
</div>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Optional classes for alignment and appearance.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Message body content, markdown renderer, or actions.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional root div attributes.'
		}
	];
</script>

<DocsPage
	title="Message"
	description="Core message container for user and assistant chat turns with flexible content and actions."
>
	<DocsSection
		title="Overview"
		description="Use Message as the base building block of each chat turn."
	>
		<p class="text-sm text-muted-foreground">
			Message is intentionally composable: add markdown renderers, tool output, actions, and branch
			controls as children.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="Two messages with distinct user and assistant styling.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<div class="space-y-3">
					<Message class="ml-auto rounded-lg border bg-primary/10 p-3 text-sm"
						>Ship docs for component pages.</Message
					>
					<Message class="rounded-lg border bg-muted/30 p-3 text-sm"
						>Done - all routes compile and lint cleanly.</Message
					>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Install this component first for any chat timeline."
	>
		<InstallerTabs slug="message" />
	</DocsSection>

	<DocsSection title="Features" description="Message-centric capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Flexible shell for plain text, markdown, or rich tool output.</li>
			<li>Easy alignment patterns for user vs assistant turns.</li>
			<li>Pairs with conversation containers and action toolbars.</li>
			<li>Supports custom branches, retries, and feedback UI.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Map chat state to message components.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<div class="space-y-3">
					{#each [{ role: 'user', text: 'Generate a migration plan.' }, { role: 'assistant', text: 'I created a 3-step rollout with rollback checkpoints.' }] as item}
						{#if item.role === 'user'}
							<Message class="ml-auto rounded-lg border p-3 text-sm">{item.text}</Message>
						{:else}
							<Message class="rounded-lg border p-3 text-sm">{item.text}</Message>
						{/if}
					{/each}
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Message.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
