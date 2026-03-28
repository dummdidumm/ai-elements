<script lang="ts">
	import { Toolbar } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Toolbar } from '$lib/index.js';

<Toolbar>
	<button class="rounded px-2 py-1 text-xs" type="button">Add</button>
	<button class="rounded px-2 py-1 text-xs" type="button">Duplicate</button>
	<button class="rounded px-2 py-1 text-xs" type="button">Publish</button>
</Toolbar>`;
	const usageCode = `import { Toolbar } from '$lib/index.js';

<Toolbar>
	<button type="button">Undo</button>
	<button type="button">Redo</button>
</Toolbar>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for toolbar styling and positioning.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Action content rendered inside the toolbar.'
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
	title="Toolbar"
	description="Arrange frequently used workflow actions in a lightweight command row."
>
	<DocsSection
		title="Intro"
		description="Toolbar provides an inline command row for frequently used workflow actions."
	>
		<p class="text-sm text-muted-foreground">
			Compose it with buttons, menu triggers, and segmented controls for canvas-level operations.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A compact toolbar for common workflow actions.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Toolbar>
					<button class="rounded px-2 py-1 text-xs" type="button">Add</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Duplicate</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Publish</button>
				</Toolbar>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Toolbar.">
		<InstallerTabs slug="toolbar" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Horizontal toolbar primitive with spacing and border defaults.</li>
			<li>Composable with icon buttons, dropdown triggers, and segmented controls.</li>
			<li>Supports standard div attributes for layout placement.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Build focused command sets for canvas editing.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Toolbar>
					<button class="rounded border px-2 py-1 text-xs" type="button">Undo</button>
					<button class="rounded border px-2 py-1 text-xs" type="button">Redo</button>
				</Toolbar>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Toolbar.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
