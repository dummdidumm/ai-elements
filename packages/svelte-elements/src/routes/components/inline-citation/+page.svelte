<script lang="ts">
	import { InlineCitation } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { InlineCitation } from '$lib/index.js';
<\/script>

<p class="text-sm leading-relaxed">
	The deployment process now includes automatic rollback guidance
	<InlineCitation class="ml-1 text-primary">[1]</InlineCitation>
	for failed health checks.
</p>`;

	const usageCode = `<script lang="ts">
	import { InlineCitation } from '$lib/index.js';

	const paragraph = 'Model routing reduced latency in production';
<\/script>

<p class="text-sm">
	{paragraph}
	<InlineCitation class="ml-1 text-primary">[2]</InlineCitation>
</p>
<p class="text-xs text-muted-foreground">[2] internal-observability/report-2026-03</p>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Optional classes for inline badge styling.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Citation marker content such as [1] or source ID.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLSpanElement>',
			description: 'Additional attributes forwarded to the span.'
		}
	];
</script>

<DocsPage
	title="Inline Citation"
	description="Render citation markers inline with model output to keep sources discoverable without breaking reading flow."
>
	<DocsSection
		title="Overview"
		description="Add source markers directly in AI-generated responses."
	>
		<p class="text-sm text-muted-foreground">
			InlineCitation keeps references close to the claim they support, which helps users quickly
			verify generated content.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="Citation marker embedded in response text.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<p class="text-sm leading-relaxed">
					The deployment process now includes automatic rollback guidance
					<InlineCitation class="ml-1 text-primary">[1]</InlineCitation>
					for failed health checks.
				</p>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install this component in your docs stack.">
		<InstallerTabs slug="inline-citation" />
	</DocsSection>

	<DocsSection title="Features" description="Designed for source-aware responses.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Inline placement preserves reading flow.</li>
			<li>Works with source lists, tool outputs, or hover cards.</li>
			<li>Composable span wrapper for custom badge UI.</li>
			<li>Useful for research-style AI answers and verification UX.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Pair citation markers with a source list.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<p class="text-sm">
					Model routing reduced latency in production
					<InlineCitation class="ml-1 text-primary">[2]</InlineCitation>
				</p>
				<p class="text-xs text-muted-foreground">[2] internal-observability/report-2026-03</p>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for InlineCitation.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
