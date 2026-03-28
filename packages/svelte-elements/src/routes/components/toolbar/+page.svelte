<script lang="ts">
	import { Toolbar, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Toolbar gives you an inline row for quick actions such as add, duplicate, and publish.
	</p>

	<DocsSection title="Preview" description="See Toolbar in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Toolbar>
					<button class="rounded px-2 py-1 text-xs" type="button">Add</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Duplicate</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Publish</button>
				</Toolbar>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Toolbar to your project with your preferred setup path."
	>
		<InstallerTabs slug="toolbar" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Toolbar component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Horizontal toolbar primitive with spacing and border defaults.</li>
			<li>Composable with icon buttons, dropdown triggers, and segmented controls.</li>
			<li>Supports standard div attributes for layout placement.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Toolbar.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Toolbar component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
