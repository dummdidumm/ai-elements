<script lang="ts">
	import { SpeechInput, CodeBlock } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { SpeechInput } from '$lib/index.js';

<SpeechInput aria-label="Start voice input">Start</SpeechInput>`;
	const usageCode = `import { SpeechInput } from '$lib/index.js';

<SpeechInput aria-label="Start voice input">Start</SpeechInput>`;

	const props = [
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
	description="Capture spoken prompts with a compact mic-style trigger button."
>
	<p class="text-sm leading-6 text-muted-foreground">
		Speech Input provides a button-like trigger you can wire to your voice capture workflow and
		state handling.
	</p>

	<DocsSection title="Preview" description="See Speech Input in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<SpeechInput aria-label="Start voice input">Start</SpeechInput>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Speech Input to your project with your preferred setup path."
	>
		<InstallerTabs slug="speech-input" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Speech Input component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Button primitive that is easy to connect to Web Speech or custom recording logic.</li>
			<li>Supports standard button attributes for accessibility and behavior control.</li>
			<li>Accepts child content so you can render text, icons, or both.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Speech Input.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Speech Input component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
