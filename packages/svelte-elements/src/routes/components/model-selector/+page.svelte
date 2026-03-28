<script lang="ts">
	import { ModelSelector } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { ModelSelector } from '$lib/index.js';
<\/script>

<ModelSelector class="p-2">
	<input class="w-full rounded border px-2 py-1 text-sm" placeholder="Search models..." />
	<ul class="mt-2 space-y-1 text-sm">
		<li class="rounded border bg-muted/30 px-2 py-1">openai/gpt-5.3</li>
		<li class="rounded border bg-muted/30 px-2 py-1">anthropic/claude-4-opus</li>
	</ul>
</ModelSelector>`;

	const usageCode = `<script lang="ts">
	import { ModelSelector } from '$lib/index.js';

	const models = ['openai/gpt-5.3', 'openai/gpt-5.3-mini', 'anthropic/claude-4-opus'];
	let selected = models[0];
<\/script>

<ModelSelector class="space-y-2 p-2">
	<label class="text-xs font-medium" for="model">Model</label>
	<select bind:value={selected} class="w-full rounded border px-2 py-1 text-sm" id="model">
		{#each models as model (model)}
			<option value={model}>{model}</option>
		{/each}
	</select>
</ModelSelector>`;

	const propsRows = [
		{
			name: 'class',
			type: 'string',
			description: 'Optional classes for dialog or panel presentation.'
		},
		{
			name: 'children',
			type: 'Snippet',
			description: 'Search input, model list, and provider groups.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLDivElement>',
			description: 'Forwarded to the root div.'
		}
	];
</script>

<DocsPage
	title="Model Selector"
	description="A wrapper for model-picking controls, command palette content, and searchable provider groups."
>
	<DocsSection
		title="Overview"
		description="Build model selection flows for chat and tool execution."
	>
		<p class="text-sm text-muted-foreground">
			ModelSelector is a styled container that can host command-style search, grouped options, and
			provider-specific branding.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A lightweight selector with search and popular models.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<ModelSelector class="p-2">
					<input class="w-full rounded border px-2 py-1 text-sm" placeholder="Search models..." />
					<ul class="mt-2 space-y-1 text-sm">
						<li class="rounded border bg-muted/30 px-2 py-1">openai/gpt-5.3</li>
						<li class="rounded border bg-muted/30 px-2 py-1">anthropic/claude-4-opus</li>
					</ul>
				</ModelSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install the model selector component.">
		<InstallerTabs slug="model-selector" />
	</DocsSection>

	<DocsSection title="Features" description="Useful model-routing UX patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Good base for searchable model lists and grouped providers.</li>
			<li>Integrates with keyboard-first command palette patterns.</li>
			<li>Easy to compose with Context and PromptInput components.</li>
			<li>Supports fully custom selection UI while keeping consistent styling.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage"
		description="Bind selected model state from your app store or local state."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<ModelSelector class="space-y-2 p-2">
					<label class="text-xs font-medium" for="model-select-demo">Model</label>
					<select class="w-full rounded border px-2 py-1 text-sm" id="model-select-demo">
						<option>openai/gpt-5.3</option>
						<option>openai/gpt-5.3-mini</option>
						<option>anthropic/claude-4-opus</option>
					</select>
				</ModelSelector>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for ModelSelector.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
