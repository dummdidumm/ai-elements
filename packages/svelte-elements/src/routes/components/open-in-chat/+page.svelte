<script lang="ts">
	import { OpenInChat } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { OpenInChat } from '$lib/index.js';

<OpenInChat>
	<span>Need more help?</span>
	<a class="text-primary underline-offset-4 hover:underline" href="/components/conversation">Open in chat</a>
</OpenInChat>`;
	const usageCode = `import { OpenInChat } from '$lib/index.js';

<OpenInChat>
	<span>Continue this flow in chat.</span>
	<button type="button">Open</button>
</OpenInChat>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for spacing and presentation.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Handoff message and action elements rendered inside.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native div attributes.'
		}
	];
</script>

<DocsPage
	title="Open in Chat"
	description="Render a compact callout for jumping users into chat workflows."
>
	<DocsSection
		title="Intro"
		description="OpenInChat is a compact handoff container for transitioning users into chat."
	>
		<p class="text-sm text-muted-foreground">
			Place supporting text and a clear action so users can continue context in a conversation flow.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A simple handoff row with supporting copy and action.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<OpenInChat>
					<span>Need more help?</span>
					<a class="text-primary underline-offset-4 hover:underline" href="/components/conversation"
						>Open in chat</a
					>
				</OpenInChat>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Open in Chat.">
		<InstallerTabs slug="open-in-chat" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Compact inline layout for chat handoff moments.</li>
			<li>Accepts arbitrary children including links and action buttons.</li>
			<li>Matches other utility primitives with shared surface styles.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render custom handoff content for different journeys.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<OpenInChat>
					<span>Continue this flow in chat.</span>
					<button class="rounded border px-2 py-1 text-xs" type="button">Open</button>
				</OpenInChat>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for OpenInChat.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
