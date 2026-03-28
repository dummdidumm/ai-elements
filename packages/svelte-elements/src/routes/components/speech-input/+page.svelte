<script lang="ts">
	import { SpeechInput } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<SpeechInput aria-label="Start voice input">Start</SpeechInput>`;
	const usageCode = `<div class="flex items-center gap-3">
	<SpeechInput aria-label="Start recording">Rec</SpeechInput>
	<div class="text-xs text-muted-foreground">Listening for your next command...</div>
</div>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes merged into the base speech input styles.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Optional content rendered inside the trigger button.'
		},
		{
			name: 'type',
			type: '"button" | "submit" | "reset"',
			required: false,
			defaultValue: '"button"',
			description: 'Native button type forwarded to the root element.'
		},
		{
			name: 'aria-label',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Recommended accessible label when rendering icon-only content.'
		}
	];
</script>

<DocsPage
	title="Speech Input"
	description="Capture spoken prompts with a compact, microphone-style trigger."
>
	<DocsSection
		title="Intro"
		description="SpeechInput is a lightweight button primitive for voice-first interactions."
	>
		<p class="text-sm text-muted-foreground">
			Use it to start recording, show listening state, or hand off to your own speech orchestration
			logic.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A minimal trigger ready for voice capture flows.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<SpeechInput aria-label="Start voice input">Start</SpeechInput>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Speech Input.">
		<InstallerTabs slug="speech-input" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Composes with Web Speech, media recorder, or custom voice pipelines.</li>
			<li>Supports standard button semantics for accessibility and form behavior.</li>
			<li>Renders text, icons, or mixed content through child snippets.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Pair the trigger with listening-state UI.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<div class="flex items-center gap-3">
					<SpeechInput aria-label="Start recording">Rec</SpeechInput>
					<div class="text-xs text-muted-foreground">Listening for your next command...</div>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for SpeechInput.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
