<script lang="ts">
	import { Persona } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Persona class="size-20 border bg-gradient-to-br from-violet-200 to-blue-200">
	<span class="text-[10px] font-medium">listening</span>
</Persona>`;
	const usageCode = `<div class="flex gap-3">
	<Persona class="size-16 border bg-muted"><span class="text-[10px]">idle</span></Persona>
	<Persona class="size-16 border bg-muted"><span class="text-[10px]">listening</span></Persona>
	<Persona class="size-16 border bg-muted"><span class="text-[10px]">thinking</span></Persona>
	<Persona class="size-16 border bg-muted"><span class="text-[10px]">speaking</span></Persona>
</div>`;

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
	title="Persona"
	description="Display AI persona visuals for listening, thinking, and speaking states."
>
	<DocsSection
		title="Intro"
		description="Persona provides a compact visual primitive for assistant identity and voice state."
	>
		<p class="text-sm text-muted-foreground">
			Use it in headers, voice controls, and status rows to communicate listening, thinking, or
			speaking states.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A single persona in listening mode.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Persona class="size-20 border bg-gradient-to-br from-violet-200 to-blue-200">
					<span class="text-[10px] font-medium">listening</span>
				</Persona>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Persona.">
		<InstallerTabs slug="persona" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Compact circular visual for AI identity or state.</li>
			<li>Easy to theme for multiple variants and design systems.</li>
			<li>Works with state labels, icons, or animated overlays.</li>
			<li>Fits chat headers, voice controls, and status strips.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Render multiple persona states side-by-side.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<div class="flex gap-3">
					<Persona class="size-16 border bg-muted"><span class="text-[10px]">idle</span></Persona>
					<Persona class="size-16 border bg-muted"
						><span class="text-[10px]">listening</span></Persona
					>
					<Persona class="size-16 border bg-muted"
						><span class="text-[10px]">thinking</span></Persona
					>
					<Persona class="size-16 border bg-muted"
						><span class="text-[10px]">speaking</span></Persona
					>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Persona.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
