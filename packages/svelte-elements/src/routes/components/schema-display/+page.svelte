<script lang="ts">
	import { SchemaDisplay } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<SchemaDisplay class="w-full max-w-2xl p-4">
	<div class="space-y-2 text-sm">
		<div class="flex items-center gap-2">
			<span class="rounded bg-emerald-100 px-2 py-0.5 text-xs text-emerald-900">GET</span>
			<code>/api/projects/{'{'}id{'}'}</code>
		</div>
		<p class="text-muted-foreground">Fetch a project by id.</p>
	</div>
</SchemaDisplay>`;
	const usageCode = `<SchemaDisplay class="w-full max-w-2xl space-y-4 p-4">
	<div class="space-y-1">
		<p class="font-medium">Parameters</p>
		<ul class="list-disc pl-5 text-sm text-muted-foreground">
			<li>id: string (path, required)</li>
			<li>includeTasks: boolean (query)</li>
		</ul>
	</div>
	<div class="space-y-1">
		<p class="font-medium">Response</p>
		<pre class="rounded-md bg-muted p-3 text-xs">{\`{"id":"proj_123","name":"Docs"}\`}</pre>
	</div>
</SchemaDisplay>`;

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
	title="Schema Display"
	description="Show endpoint metadata, parameters, and request/response schemas in a structured panel."
>
	<DocsSection title="Preview" description="An endpoint summary with method and path.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<SchemaDisplay class="w-full max-w-2xl p-4">
					<div class="space-y-2 text-sm">
						<div class="flex items-center gap-2">
							<span class="rounded bg-emerald-100 px-2 py-0.5 text-xs text-emerald-900">GET</span>
							<code>/api/projects/{'{'}id{'}'}</code>
						</div>
						<p class="text-muted-foreground">Fetch a project by id.</p>
					</div>
				</SchemaDisplay>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Schema Display.">
		<InstallerTabs slug="schema-display" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Supports HTTP method and route presentation patterns.</li>
			<li>Good fit for parameter, request, and response sections.</li>
			<li>Composable for nested object and array examples.</li>
			<li>Works with generated docs and manually curated schemas.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Method Colors" description="Recommended colors for common HTTP methods.">
		<div class="overflow-x-auto rounded-md border">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
					<tr>
						<th class="px-3 py-2 font-medium">Method</th>
						<th class="px-3 py-2 font-medium">Color</th>
						<th class="px-3 py-2 font-medium">Intent</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">GET</td>
						<td class="px-3 py-2">green</td>
						<td class="px-3 py-2">Read</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">POST</td>
						<td class="px-3 py-2">blue</td>
						<td class="px-3 py-2">Create</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">PUT</td>
						<td class="px-3 py-2">amber</td>
						<td class="px-3 py-2">Update</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">DELETE</td>
						<td class="px-3 py-2">red</td>
						<td class="px-3 py-2">Remove</td>
					</tr>
				</tbody>
			</table>
		</div>
	</DocsSection>

	<DocsSection title="Examples" description="Compose parameter and response sections directly in markup.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<SchemaDisplay class="w-full max-w-2xl space-y-4 p-4">
					<div class="space-y-1">
						<p class="font-medium">Parameters</p>
						<ul class="list-disc pl-5 text-sm text-muted-foreground">
							<li>id: string (path, required)</li>
							<li>includeTasks: boolean (query)</li>
						</ul>
					</div>
					<div class="space-y-1">
						<p class="font-medium">Response</p>
						<pre class="rounded-md bg-muted p-3 text-xs">{`{"id":"proj_123","name":"Docs"}`}</pre>
					</div>
				</SchemaDisplay>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Schema Display.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
