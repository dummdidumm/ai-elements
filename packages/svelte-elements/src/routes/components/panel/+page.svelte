<script lang="ts">
	import { Panel, CodeBlock } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `import { Panel } from '$lib/index.js';

<Panel class="w-full max-w-sm">
	<div class="p-3">
		<p class="font-medium">Node details</p>
		<p class="text-xs text-muted-foreground">Configure retries and timeout settings.</p>
	</div>
</Panel>`;
	const usageCode = `import { Panel } from '$lib/index.js';

<Panel class="w-80">
	<div class="p-4">Panel content</div>
</Panel>`;

	const props = [
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes for panel width, spacing, and styling.'
		},
		{
			name: 'children',
			type: 'Snippet',
			required: false,
			defaultValue: '—',
			description: 'Custom panel content.'
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

<DocsPage title="Panel" description="Present contextual workflow information in a framed panel.">
	<p class="text-sm leading-6 text-muted-foreground">
		Panel wraps auxiliary content such as inspectors, details, and settings beside your canvas.
	</p>

	<DocsSection title="Preview" description="See Panel in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
			{#snippet preview()}
				<Panel class="w-full max-w-sm">
					<div class="p-3">
						<p class="font-medium">Node details</p>
						<p class="text-xs text-muted-foreground">Configure retries and timeout settings.</p>
					</div>
				</Panel>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Add Panel to your project with your preferred setup path."
	>
		<InstallerTabs slug="panel" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Panel component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Framed panel primitive suited for inspectors and sidebars.</li>
			<li>Preserves child content structure without opinionated internal layout.</li>
			<li>Pairs well with canvas and toolbar components in workflow pages.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Panel.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Panel component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
