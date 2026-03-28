<script lang="ts">
	import { VoiceSelector } from '$lib/index.js';
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

	const propsRows = [
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
	description="Wrap selectable voice options in a consistent, stylized container."
>
	<DocsSection
		title="Intro"
		description="VoiceSelector provides shared surface styling for voice-picking interfaces."
	>
		<p class="text-sm text-muted-foreground">
			Compose it with list items, radio groups, or command-style menus for text-to-speech settings.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A compact row for selected voice and status.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
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

	<DocsSection title="Installation" description="Install Voice Selector.">
		<InstallerTabs slug="voice-selector" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Provides consistent border and surface styling for voice pickers.</li>
			<li>Works with any child content including lists, menus, or command patterns.</li>
			<li>Accepts standard div attributes for layout composition.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render selectable options inside the shared shell.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<VoiceSelector>
					<ul class="space-y-1 p-2 text-sm">
						<li>Alloy</li>
						<li>Verse</li>
						<li>Nova</li>
					</ul>
				</VoiceSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for VoiceSelector.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
