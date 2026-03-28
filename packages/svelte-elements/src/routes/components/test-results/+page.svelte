<script lang="ts">
	import { TestResults } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<TestResults class="w-full max-w-3xl p-4">
	<div class="grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
		<div class="rounded border p-2">Passed: 24</div>
		<div class="rounded border p-2">Failed: 1</div>
		<div class="rounded border p-2">Skipped: 2</div>
		<div class="rounded border p-2">Total: 27</div>
	</div>
</TestResults>`;
	const exampleCode = `<TestResults class="w-full max-w-3xl space-y-3 p-4">
	<div class="flex items-center justify-between rounded border px-3 py-2 text-xs">
		<span>api/auth.spec.ts</span>
		<span class="text-emerald-700">passed · 42ms</span>
	</div>
	<div class="flex items-center justify-between rounded border px-3 py-2 text-xs">
		<span>api/chat.spec.ts</span>
		<span class="text-red-700">failed · 91ms</span>
	</div>
</TestResults>`;

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
	title="Test Results"
	description="Show pass/fail summaries and detailed suite outcomes in a structured panel."
>
	<DocsSection title="Preview" description="A compact pass/fail summary grid.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<TestResults class="w-full max-w-3xl p-4">
					<div class="grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
						<div class="rounded border p-2">Passed: 24</div>
						<div class="rounded border p-2">Failed: 1</div>
						<div class="rounded border p-2">Skipped: 2</div>
						<div class="rounded border p-2">Total: 27</div>
					</div>
				</TestResults>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Test Results.">
		<InstallerTabs slug="test-results" />
	</DocsSection>

	<DocsSection title="Features" description="Key capabilities.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Summary counters for passed, failed, skipped, and total tests.</li>
			<li>Composable suites and individual test rows.</li>
			<li>Easy integration with error stack and duration metadata.</li>
			<li>Works for local test feedback and CI report UIs.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Status Colors" description="Suggested semantic colors for test outcomes.">
		<div class="overflow-x-auto rounded-md border">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
					<tr>
						<th class="px-3 py-2 font-medium">Status</th>
						<th class="px-3 py-2 font-medium">Color</th>
						<th class="px-3 py-2 font-medium">Use case</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">passed</td>
						<td class="px-3 py-2">green</td>
						<td class="px-3 py-2">Successful suites and tests</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">failed</td>
						<td class="px-3 py-2">red</td>
						<td class="px-3 py-2">Assertions or runtime failures</td>
					</tr>
					<tr class="border-t">
						<td class="px-3 py-2 font-mono text-xs">skipped</td>
						<td class="px-3 py-2">amber</td>
						<td class="px-3 py-2">Temporarily bypassed tests</td>
					</tr>
				</tbody>
			</table>
		</div>
	</DocsSection>

	<DocsSection title="Examples" description="Render suite-level statuses and durations.">
		<PreviewCodeTabs code={exampleCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<TestResults class="w-full max-w-3xl space-y-3 p-4">
					<div class="flex items-center justify-between rounded border px-3 py-2 text-xs">
						<span>api/auth.spec.ts</span>
						<span class="text-emerald-700">passed · 42ms</span>
					</div>
					<div class="flex items-center justify-between rounded border px-3 py-2 text-xs">
						<span>api/chat.spec.ts</span>
						<span class="text-red-700">failed · 91ms</span>
					</div>
				</TestResults>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="API reference for Test Results.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
