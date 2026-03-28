<script lang="ts">
	import { CodeBlock, Shimmer } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<Shimmer as="h3" class="text-xl font-semibold" duration={2.2}>
	Generating release summary...
</Shimmer>`;

	const usageCode = `<script lang="ts">
	import { Shimmer } from '$lib/index.js';
<\\/script>

<Shimmer as="span" duration={1.8} spread={2.5}>
	Thinking through tool results...
</Shimmer>`;

	const propsRows = [
		{
			name: 'as',
			type: 'keyof HTMLElementTagNameMap',
			description: 'Element tag rendered by the shimmer component.',
			defaultValue: '"p"'
		},
		{
			name: 'duration',
			type: 'number',
			description: 'Animation duration in seconds.',
			defaultValue: '2'
		},
		{
			name: 'spread',
			type: 'number',
			description: 'Controls shimmer gradient width relative to text length.',
			defaultValue: '2'
		},
		{
			name: 'class / className',
			type: 'string',
			description: 'Additional classes for sizing and typography.'
		}
	];
</script>

<DocsPage
	title="Shimmer"
	description="Animated shimmer text for loading and progressive response states."
>
	<p class="text-sm text-muted-foreground">
		<code>Shimmer</code> applies a gradient sweep across text, making loading or generation states feel
		alive.
	</p>

	<DocsSection title="Preview" description="Live shimmer animation and source code.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<Shimmer as="h3" class="text-xl font-semibold" duration={2.2}>
					Generating release summary...
				</Shimmer>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install with your preferred workflow.">
		<InstallerTabs slug="shimmer" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the shimmer component.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Theme-aware animated gradient shimmer.</li>
			<li>Custom element rendering via the <code>as</code> prop.</li>
			<li>Duration and spread controls for effect intensity.</li>
			<li>Works with plain text and custom typography classes.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Drop into loading or thinking indicators.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Common shimmer props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
