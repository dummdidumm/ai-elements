<script lang="ts">
	import { Transcription } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';
	const segments = [
		{ text: 'Open the workflow canvas and add a node.', startSecond: 0, endSecond: 2.5 },
		{ text: 'Then connect it to the review panel.', startSecond: 2.5, endSecond: 5 }
	];

	const previewCode = `import { Transcription } from '$lib/index.js';

const segments = [
	{ text: 'Open the workflow canvas and add a node.', startSecond: 0, endSecond: 2.5 },
	{ text: 'Then connect it to the review panel.', startSecond: 2.5, endSecond: 5 }
];

<Transcription {segments} currentTime={1.7} />`;
	const usageCode = `import { Transcription } from '$lib/index.js';

const segments = [
	{ text: 'Start recording', startSecond: 0, endSecond: 1.1 },
	{ text: 'Generate a summary', startSecond: 1.1, endSecond: 3.2 }
];

const handleSeek = (time: number) => {
	// Seek media playback to this timestamp.
};

<Transcription {segments} currentTime={0.8} onSeek={handleSeek} />`;

	const propsRows = [
		{
			name: 'segments',
			type: '{ text: string; startSecond: number; endSecond: number }[]',
			required: false,
			defaultValue: '[]',
			description: 'Transcription segments rendered when no children snippet is provided.'
		},
		{
			name: 'currentTime',
			type: 'number',
			required: false,
			defaultValue: '0',
			description: 'Current playback time used to highlight active and completed segments.'
		},
		{
			name: 'onSeek',
			type: '(time: number) => void',
			required: false,
			defaultValue: '—',
			description: 'Called with a segment start time when a segment is clicked.'
		},
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for transcript container styling.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Optional custom content that replaces built-in segment rendering.'
		}
	];
</script>

<DocsPage
	title="Transcription"
	description="Render live or completed speech-to-text segments with timeline awareness."
>
	<DocsSection
		title="Intro"
		description="Transcription maps timestamped segments to readable, interactive transcript text."
	>
		<p class="text-sm text-muted-foreground">
			Use segment highlighting and seek callbacks to synchronize transcript reading with audio
			playback.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A transcript with active-segment highlighting.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Transcription {segments} currentTime={1.7} />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Transcription.">
		<InstallerTabs slug="transcription" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Renders each transcription segment with active and completed visual states.</li>
			<li>Optional seek callback lets users jump audio playback by clicking transcript words.</li>
			<li>Supports custom children rendering when you need a fully custom transcript layout.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Provide onSeek to make transcript text clickable.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Transcription
					segments={[
						{ text: 'Start recording', startSecond: 0, endSecond: 1.1 },
						{ text: 'Generate a summary', startSecond: 1.1, endSecond: 3.2 }
					]}
					currentTime={0.8}
				/>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Transcription.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
