<script lang="ts">
	import { Attachments } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Attachments } from '$lib/index.js';
<\/script>

<Attachments>
	<span class="rounded-full border bg-muted px-3 py-1 text-xs">project-brief.pdf</span>
	<span class="rounded-full border bg-muted px-3 py-1 text-xs">release-notes.md</span>
	<span class="rounded-full border bg-muted px-3 py-1 text-xs">screenshot.png</span>
</Attachments>`;

	const usageCode = `<script lang="ts">
	import { Attachments } from '$lib/index.js';

	const files = ['roadmap.md', 'wireframes.fig', 'error-log.txt'];
<\/script>

<Attachments class="rounded-lg border p-2">
	{#each files as file (file)}
		<span class="rounded-full border bg-muted px-3 py-1 text-xs">{file}</span>
	{/each}
</Attachments>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Optional classes applied to the attachments container.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Attachment chips, previews, or custom content rendered inside the wrapper.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Additional attributes forwarded to the root div.'
		}
	];
</script>

<DocsPage
	title="Attachments"
	description="A flexible container for rendering uploaded files, media chips, and source references in chat interfaces."
>
	<p class="text-sm text-muted-foreground">
		Use <code>Attachments</code> to group files with consistent spacing while keeping file rendering fully
		composable.
	</p>

	<DocsSection title="Preview" description="A compact attachment row for a chat composer.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Attachments>
					<span class="rounded-full border bg-muted px-3 py-1 text-xs">project-brief.pdf</span>
					<span class="rounded-full border bg-muted px-3 py-1 text-xs">release-notes.md</span>
					<span class="rounded-full border bg-muted px-3 py-1 text-xs">screenshot.png</span>
				</Attachments>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Install this component using your preferred workflow."
	>
		<InstallerTabs slug="attachments" />
	</DocsSection>

	<DocsSection title="Features" description="Why this component is useful in AI UIs.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Simple wrapper for file chips, thumbnails, or source links.</li>
			<li>Flexible layout that wraps naturally across screen sizes.</li>
			<li>Works with drag-and-drop and upload flows without extra state requirements.</li>
			<li>Easy to pair with prompt input, message, and queue components.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage and API"
		description="Render dynamic attachments from your local state."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Attachments class="rounded-lg border p-2">
					{#each ['roadmap.md', 'wireframes.fig', 'error-log.txt'] as file (file)}
						<span class="rounded-full border bg-muted px-3 py-1 text-xs">{file}</span>
					{/each}
				</Attachments>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for the Attachments root component.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
