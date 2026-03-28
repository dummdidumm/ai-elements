<script lang="ts">
	import { MicSelector } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<MicSelector class="w-full max-w-sm justify-between px-2 py-1.5">
	<span class="text-xs">MacBook Pro Microphone</span>
	<span class="rounded border px-1.5 py-0.5 text-[10px]">selected</span>
</MicSelector>`;
	const usageCode = `<MicSelector class="w-full max-w-sm justify-between px-2 py-1.5">
	<span class="text-xs">USB Audio Interface</span>
	<button class="rounded border px-2 py-0.5 text-[10px]" type="button">Change</button>
</MicSelector>`;

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
	title="Mic Selector"
	description="Create microphone selection controls for speech and voice-enabled assistant experiences."
>
	<DocsSection
		title="Intro"
		description="MicSelector mirrors the original selection UX concept with a composable shell for current device display and actions."
	>
		<p class="text-sm text-muted-foreground">
			This page mirrors the original docs composition with shared Svelte docs primitives and
			practical example snippets.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A selected microphone row with status badge.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<MicSelector class="w-full max-w-sm justify-between px-2 py-1.5">
					<span class="text-xs">MacBook Pro Microphone</span>
					<span class="rounded border px-1.5 py-0.5 text-[10px]">selected</span>
				</MicSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Mic Selector.">
		<InstallerTabs slug="mic-selector" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Inline shell for selected microphone labels and actions.</li>
			<li>Works with controlled and uncontrolled device state in app logic.</li>
			<li>Can host trigger, status, and helper metadata content.</li>
			<li>Fits command palettes, popovers, or compact toolbar controls.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render the active input and provide a change action.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<MicSelector class="w-full max-w-sm justify-between px-2 py-1.5">
					<span class="text-xs">USB Audio Interface</span>
					<button class="rounded border px-2 py-0.5 text-[10px]" type="button">Change</button>
				</MicSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Mic Selector.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
