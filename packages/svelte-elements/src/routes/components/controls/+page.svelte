<script lang="ts">
	import { Controls } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Controls } from '$lib/index.js';

<Controls>
	<button class="rounded px-2 py-1 text-xs" type="button">+</button>
	<button class="rounded px-2 py-1 text-xs" type="button">-</button>
	<button class="rounded px-2 py-1 text-xs" type="button">Reset</button>
</Controls>`;
	const usageCode = `import { Controls } from '$lib/index.js';

<Controls>
	<button type="button">Fit</button>
	<button type="button">Center</button>
</Controls>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for positioning and appearance.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Interactive controls rendered inside the container.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			required: false,
			defaultValue: '—',
			description: 'Forwarded native div attributes.'
		}
	];
</script>

<DocsPage
	title="Controls"
	description="Group canvas actions like zoom, reset, and fit-view into a compact cluster."
>
	<DocsSection
		title="Intro"
		description="Controls groups common workflow actions into a compact, toolbar-like cluster."
	>
		<p class="text-sm text-muted-foreground">
			It works well for zoom, fit, and reset actions that need to stay near your canvas.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A compact control group for zoom and reset.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Controls>
					<button class="rounded px-2 py-1 text-xs" type="button">+</button>
					<button class="rounded px-2 py-1 text-xs" type="button">-</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Reset</button>
				</Controls>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Controls.">
		<InstallerTabs slug="controls" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Inline layout optimized for compact control groups.</li>
			<li>Consistent padding and border treatment for toolbar-like controls.</li>
			<li>Works with native buttons or fully custom action elements.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Compose app-specific actions inside the control row.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Controls>
					<button class="rounded border px-2 py-1 text-xs" type="button">Fit</button>
					<button class="rounded border px-2 py-1 text-xs" type="button">Center</button>
				</Controls>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Controls.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
