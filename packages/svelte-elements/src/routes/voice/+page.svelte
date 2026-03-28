<script lang="ts">
	import {
		AudioPlayer,
		MicSelector,
		Persona,
		SpeechInput,
		Transcription,
		VoiceSelector
	} from '../../lib/index.js';

	let currentTime = $state(0);

	const transcriptionSegments = [
		{ startSecond: 0, endSecond: 1.4, text: 'Hello' },
		{ startSecond: 1.4, endSecond: 3.6, text: 'this is a short voice demo.' },
		{ startSecond: 3.6, endSecond: 5.5, text: 'Click any segment to seek.' }
	];

	const handleSeek = (time: number) => {
		currentTime = time;
	};
</script>

<div class="mx-auto flex w-full max-w-6xl flex-col gap-8 p-6 md:p-10">
	<header class="space-y-3">
		<h1 class="text-3xl font-semibold tracking-tight">Voice components showcase</h1>
		<p class="text-muted-foreground max-w-3xl text-sm">
			This page demonstrates simple, stable usage patterns for voice-focused UI components. Each
			section includes a short usage note and a live visual example.
		</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2">
		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">AudioPlayer</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap your audio controls in <code>&lt;AudioPlayer&gt;</code> to present a lightweight
				playback surface.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<AudioPlayer>
					<button
						class="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm"
						type="button"
					>
						Play
					</button>
					<button class="rounded-md border px-3 py-1.5 text-sm" type="button">Pause</button>
					<span class="text-muted-foreground text-xs">00:42 / 02:10</span>
				</AudioPlayer>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">MicSelector</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Place a microphone picker control inside <code>&lt;MicSelector&gt;</code> for recording
				setup.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<MicSelector>
					<label class="sr-only" for="mic-selector-demo">Select microphone</label>
					<select class="bg-background rounded-md border px-2 py-1 text-sm" id="mic-selector-demo">
						<option>Built-in microphone</option>
						<option>USB microphone</option>
						<option>Bluetooth headset</option>
					</select>
				</MicSelector>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Persona</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Persona&gt;</code> as a compact voice identity/avatar placeholder.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<div class="flex items-center gap-3">
					<Persona>
						<span class="font-medium">AI</span>
					</Persona>
					<div>
						<p class="text-sm font-medium">Narrator voice</p>
						<p class="text-muted-foreground text-xs">Warm tone • English (US)</p>
					</div>
				</div>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">SpeechInput</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render a record trigger with <code>&lt;SpeechInput&gt;</code> and pair it with status
				text.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<div class="flex items-center gap-3">
					<SpeechInput aria-label="Start recording">
						<span aria-hidden="true">🎙️</span>
					</SpeechInput>
					<span class="text-sm">Tap to start recording</span>
				</div>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Transcription</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Pass segment timing data to <code>&lt;Transcription&gt;</code> and optionally handle
				seek clicks.
			</p>
			<div class="mt-4 space-y-3 rounded-lg border p-3">
				<Transcription segments={transcriptionSegments} {currentTime} onSeek={handleSeek} />
				<p class="text-muted-foreground text-xs">
					Current playback second: {currentTime.toFixed(1)}
				</p>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">VoiceSelector</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;VoiceSelector&gt;</code> as a container around voice choice controls.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<VoiceSelector class="p-3">
					<div class="grid gap-2 sm:grid-cols-2">
						<button class="bg-muted rounded-md border px-3 py-2 text-left text-sm" type="button">
							<span class="block font-medium">Alloy</span>
							<span class="text-muted-foreground text-xs">Neutral and clear</span>
						</button>
						<button class="bg-muted/60 rounded-md border px-3 py-2 text-left text-sm" type="button">
							<span class="block font-medium">Verse</span>
							<span class="text-muted-foreground text-xs">Expressive storytelling</span>
						</button>
					</div>
				</VoiceSelector>
			</div>
		</section>
	</div>
</div>
