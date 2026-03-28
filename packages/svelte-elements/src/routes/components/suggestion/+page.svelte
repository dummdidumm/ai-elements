<script lang="ts">
	import { CodeBlock, Suggestion } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<div class="flex flex-wrap gap-2">
	<Suggestion>Explain this error</Suggestion>
	<Suggestion>Generate migration plan</Suggestion>
	<Suggestion>Create test checklist</Suggestion>
</div>`;

	const usageCode = `<script lang="ts">
	import { Suggestion } from '$lib/index.js';

	const suggestions = ['Summarize commit', 'Draft release notes', 'Create rollback plan'];
	const onPick = (value: string) => sendMessage({ text: value });
<\\/script>

<div class="flex flex-wrap gap-2">
	{#each suggestions as suggestion}
		<Suggestion onclick={() => onPick(suggestion)}>
			{suggestion}
		</Suggestion>
	{/each}
</div>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Custom classes for button shape, colors, and spacing.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Suggestion label text or custom content inside the button.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLButtonElement>',
			description: 'Native button attributes such as onclick and disabled.'
		}
	];
</script>

<DocsPage
	title="Suggestion"
	description="A compact suggestion chip button for one-click prompt starters."
>
	<p class="text-sm text-muted-foreground">
		<code>Suggestion</code> renders an interactive button often used to seed chat prompts.
	</p>

	<DocsSection title="Preview" description="Suggestion chips with a live preview.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<div class="flex flex-wrap gap-2">
					<Suggestion>Explain this error</Suggestion>
					<Suggestion>Generate migration plan</Suggestion>
					<Suggestion>Create test checklist</Suggestion>
				</div>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install the component in your app.">
		<InstallerTabs slug="suggestion" />
	</DocsSection>

	<DocsSection title="Features" description="Why use Suggestion.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Pill-styled buttons optimized for quick prompt selection.</li>
			<li>Uses native button semantics for accessibility.</li>
			<li>Flexible content and event handling through standard props.</li>
			<li>Pairs naturally with prompt input and chat UIs.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Map suggestions to button actions.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Suggestion props and forwarded attributes.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
