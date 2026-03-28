<script lang="ts">
	import { Transcription, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Transcription maps speech segments to readable text and can highlight playback progress as audio
		advances.
	</p>

	<DocsSection title="Preview" description="See Transcription in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Transcription {segments} currentTime={1.7} />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Transcription to your project with your preferred setup path."
	>
		<InstallerTabs slug="transcription" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Transcription component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Renders each transcription segment with active and completed visual states.</li>
			<li>Optional seek callback lets users jump audio playback by clicking transcript words.</li>
			<li>Supports custom children rendering when you need a fully custom transcript layout.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Transcription.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Transcription component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
