<script lang="ts">
	import { Panel } from '$lib/index.js';
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

	const propsRows = [
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
	<DocsSection
		title="Intro"
		description="Panel wraps contextual content such as inspectors, settings, and details."
	>
		<p class="text-sm text-muted-foreground">
			Place it next to your canvas to expose node configuration and workflow metadata.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A sidebar-style panel for selected node details.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
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

	<DocsSection title="Installation" description="Install Panel.">
		<InstallerTabs slug="panel" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Framed panel primitive suited for inspectors and sidebars.</li>
			<li>Preserves child content structure without opinionated internal layout.</li>
			<li>Pairs well with canvas and toolbar components in workflow pages.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Use Panel for focused side content and metadata.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Panel class="w-80">
					<div class="p-4">Panel content</div>
				</Panel>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Panel.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
