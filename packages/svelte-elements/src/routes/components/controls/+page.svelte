<script lang="ts">
	import { Controls, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Controls provides a compact container for graph and workflow interaction buttons.
	</p>

	<DocsSection title="Preview" description="See Controls in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Controls>
					<button class="rounded px-2 py-1 text-xs" type="button">+</button>
					<button class="rounded px-2 py-1 text-xs" type="button">-</button>
					<button class="rounded px-2 py-1 text-xs" type="button">Reset</button>
				</Controls>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Controls to your project with your preferred setup path."
	>
		<InstallerTabs slug="controls" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Controls component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Inline layout optimized for compact control groups.</li>
			<li>Consistent padding and border treatment for toolbar-like controls.</li>
			<li>Works with native buttons or fully custom action elements.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Controls.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Controls component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
