<script lang="ts">
	import { OpenInChat, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Open in Chat provides a simple container for contextual links and actions that continue in chat.
	</p>

	<DocsSection title="Preview" description="See Open in Chat in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
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

	<DocsSection
		title="Installation"
		description="Add Open in Chat to your project with your preferred setup path."
	>
		<InstallerTabs slug="open-in-chat" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Open in Chat component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Compact inline layout for chat handoff moments.</li>
			<li>Accepts arbitrary children including links and action buttons.</li>
			<li>Matches other utility primitives with shared surface styles.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Open in Chat.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Open in Chat component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
