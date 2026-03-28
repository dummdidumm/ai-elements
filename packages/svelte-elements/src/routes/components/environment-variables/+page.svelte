<script lang="ts">
	import { CodeBlock, EnvironmentVariables } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<EnvironmentVariables class="divide-y text-sm">
	<div class="flex justify-between px-3 py-2">
		<span class="font-mono">NODE_ENV</span>
		<span class="text-muted-foreground">production</span>
	</div>
	<div class="flex justify-between px-3 py-2">
		<span class="font-mono">PUBLIC_API_BASE</span>
		<span class="text-muted-foreground">https://api.example.dev</span>
	</div>
</EnvironmentVariables>`;

	const usageCode = `<script lang="ts">
	import { EnvironmentVariables } from '$lib/index.js';
<\\/script>

<EnvironmentVariables class="divide-y text-xs">
	{#each envRows as variable}
		<div class="flex justify-between px-3 py-2">
			<span class="font-mono">{variable.name}</span>
			<span class="text-muted-foreground">{variable.value}</span>
		</div>
	{/each}
</EnvironmentVariables>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Controls layout, border, and row spacing.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Rows representing environment variable key/value entries.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional div attributes for wrappers and data attributes.'
		}
	];
</script>

<DocsPage
	title="Environment Variables"
	description="A container for presenting environment variable key/value rows in agent UIs."
>
	<p class="text-sm text-muted-foreground">
		<code>EnvironmentVariables</code> helps group runtime config rows in code, deployment, and troubleshooting
		views.
	</p>

	<DocsSection title="Preview" description="Example variable list with key/value rows.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<EnvironmentVariables class="divide-y text-sm">
					<div class="flex justify-between px-3 py-2">
						<span class="font-mono">NODE_ENV</span>
						<span class="text-muted-foreground">production</span>
					</div>
					<div class="flex justify-between px-3 py-2">
						<span class="font-mono">PUBLIC_API_BASE</span>
						<span class="text-muted-foreground">https://api.example.dev</span>
					</div>
				</EnvironmentVariables>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Add the component to your local library.">
		<InstallerTabs slug="environment-variables" />
	</DocsSection>

	<DocsSection title="Features" description="Environment variable surface benefits.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Provides a dedicated panel wrapper for env key/value rows.</li>
			<li>Easy to combine with masking and copy controls.</li>
			<li>Flexible enough for required badges and grouped sections.</li>
			<li>Works for both setup docs and runtime diagnostics.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Visibility and Copy Modes" description="Common controls for secrets handling.">
		<ul class="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
			<li>Mask sensitive values by default and reveal on demand.</li>
			<li>Support single-row copy buttons for targeted troubleshooting.</li>
			<li>Add export toggles for <code>.env</code> or <code>.env.local</code> output.</li>
			<li>Show required-variable badges for setup workflows.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Render environment entries from data arrays.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="EnvironmentVariables props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
