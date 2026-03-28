<script lang="ts">
	import { AudioPlayer } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<AudioPlayer class="w-full max-w-xl">
	<button class="rounded border px-3 py-1 text-xs" type="button">Play</button>
	<div class="h-1 flex-1 rounded bg-muted"><div class="h-full w-1/3 rounded bg-primary"></div></div>
	<span class="text-xs text-muted-foreground">00:42 / 02:10</span>
</AudioPlayer>`;
	const usageCode = `<AudioPlayer class="w-full max-w-xl gap-3 p-3">
	<button class="rounded border px-3 py-1 text-xs" type="button">-10s</button>
	<button class="rounded border px-3 py-1 text-xs" type="button">Pause</button>
	<button class="rounded border px-3 py-1 text-xs" type="button">+10s</button>
	<span class="ml-auto text-xs text-muted-foreground">voice-result.mp3</span>
</AudioPlayer>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Custom classes for the component container.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Composable child content rendered inside the component.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root element.'
		}
	];
</script>

<DocsPage
	title="Audio Player"
	description="Build customizable audio playback interfaces for generated speech and media responses."
>
	<DocsSection
		title="Intro"
		description="AudioPlayer provides a composable shell for playback controls, timeline content, and metadata."
	>
		<p class="text-sm text-muted-foreground">
			Use it for inline chat playback, spoken answer cards, or compact media controls in assistant
			surfaces.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A compact player row with play state and timeline.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<AudioPlayer class="w-full max-w-xl">
					<button class="rounded border px-3 py-1 text-xs" type="button">Play</button>
					<div class="h-1 flex-1 rounded bg-muted">
						<div class="h-full w-1/3 rounded bg-primary"></div>
					</div>
					<span class="text-xs text-muted-foreground">00:42 / 02:10</span>
				</AudioPlayer>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Audio Player.">
		<InstallerTabs slug="audio-player" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Composable playback controls for generated voice output.</li>
			<li>Supports timeline, duration, and metadata rows.</li>
			<li>Fits inline chat playback and standalone audio cards.</li>
			<li>Lightweight structure that can be themed to product styles.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage and API"
		description="Compose seek controls and metadata around playback state."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<AudioPlayer class="w-full max-w-xl gap-3 p-3">
					<button class="rounded border px-3 py-1 text-xs" type="button">-10s</button>
					<button class="rounded border px-3 py-1 text-xs" type="button">Pause</button>
					<button class="rounded border px-3 py-1 text-xs" type="button">+10s</button>
					<span class="ml-auto text-xs text-muted-foreground">voice-result.mp3</span>
				</AudioPlayer>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for AudioPlayer.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
