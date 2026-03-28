<script lang="ts">
	import { VoiceSelector, CodeBlock } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { VoiceSelector } from '$lib/index.js';

<VoiceSelector>
	<div class="flex items-center justify-between gap-4 p-3 text-sm">
		<span>Alloy</span>
		<span class="text-muted-foreground">Default</span>
	</div>
</VoiceSelector>`;
	const usageCode = `import { VoiceSelector } from '$lib/index.js';

<VoiceSelector>
	<ul class="space-y-1 p-2 text-sm">
		<li>Alloy</li>
		<li>Verse</li>
		<li>Nova</li>
	</ul>
</VoiceSelector>`;

	const props = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes merged onto the selector container.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Custom voice selection UI rendered inside the wrapper.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native div attributes such as id, data-*, and aria-*.'
		}
	];
</script>

<DocsPage
	title="Voice Selector"
	description="Wrap selectable voice options in a stylized container."
>
	<p class="text-sm leading-6 text-muted-foreground">
		Voice Selector provides a neutral container for speaker or synthesis voice controls.
	</p>

	<DocsSection title="Preview" description="See Voice Selector in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<VoiceSelector>
					<div class="flex items-center justify-between gap-4 p-3 text-sm">
						<span>Alloy</span>
						<span class="text-muted-foreground">Default</span>
					</div>
				</VoiceSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Voice Selector to your project with your preferred setup path."
	>
		<InstallerTabs slug="voice-selector" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Voice Selector component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Provides consistent border and surface styling for voice pickers.</li>
			<li>Works with any child content including lists, menus, or command patterns.</li>
			<li>Accepts standard div attributes for layout composition.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Voice Selector.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Voice Selector component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
