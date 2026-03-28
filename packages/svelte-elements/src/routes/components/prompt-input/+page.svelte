<script lang="ts">
	import { Attachments, PromptInput } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import { Attachments, PromptInput } from '$lib/index.js';
<\/script>

<PromptInput class="space-y-2 rounded-xl border p-3" onsubmit={(event) => event.preventDefault()}>
	<Attachments>
		<span class="rounded-full border bg-muted px-3 py-1 text-xs">requirements.md</span>
	</Attachments>
	<label class="sr-only" for="prompt">Prompt</label>
	<textarea class="min-h-24 w-full rounded-md border p-2 text-sm" id="prompt" placeholder="Ask anything..."></textarea>
	<div class="flex justify-end">
		<button class="rounded bg-primary px-3 py-1.5 text-sm text-primary-foreground" type="submit">Send</button>
	</div>
</PromptInput>`;

	const usageCode = `<script lang="ts">
	import { PromptInput } from '$lib/index.js';
	let text = '';

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		if (!text.trim()) return;
		text = '';
	};
<\/script>

<PromptInput class="rounded-xl border p-3" onsubmit={handleSubmit}>
	<label class="sr-only" for="prompt-text">Prompt</label>
	<textarea bind:value={text} class="min-h-20 w-full rounded-md border p-2 text-sm" id="prompt-text" />
	<div class="mt-2 flex justify-end">
		<button disabled={!text.trim()} type="submit">Submit</button>
	</div>
</PromptInput>`;

	const propsRows = [
		{ name: 'class', type: 'string', description: 'Additional classes for the root form.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Textarea, tools, attachments, and submit controls.'
		},
		{
			name: '...rest',
			type: 'HTMLAttributes<HTMLFormElement>',
			description: 'Form attributes such as onsubmit, method, and action.'
		}
	];
</script>

<DocsPage
	title="Prompt Input"
	description="A form wrapper for prompt text, attachments, and submit actions in chat-driven applications."
>
	<p class="text-sm text-muted-foreground">
		PromptInput acts as the root form for chat submission. Add any controls you need while keeping a
		consistent input shell.
	</p>

	<DocsSection
		title="Preview"
		description="A practical prompt composer with attachment and submit button."
	>
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<PromptInput
					class="space-y-2 rounded-xl border p-3"
					onsubmit={(event: SubmitEvent) => event.preventDefault()}
				>
					<Attachments>
						<span class="rounded-full border bg-muted px-3 py-1 text-xs">requirements.md</span>
					</Attachments>
					<label class="sr-only" for="prompt-preview">Prompt</label>
					<textarea
						class="min-h-24 w-full rounded-md border p-2 text-sm"
						id="prompt-preview"
						placeholder="Ask anything..."
					></textarea>
					<div class="flex justify-end">
						<button
							class="rounded bg-primary px-3 py-1.5 text-sm text-primary-foreground"
							type="submit">Send</button
						>
					</div>
				</PromptInput>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection
		title="Installation"
		description="Install prompt-input and related chatbot components."
	>
		<InstallerTabs slug="prompt-input" />
	</DocsSection>

	<DocsSection title="Features" description="Core behaviors for modern prompt composers.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Form-first structure that works with keyboard submit flows.</li>
			<li>Composable toolbar area for attachments, model pickers, and tool toggles.</li>
			<li>Easy integration with AI SDK message submission handlers.</li>
			<li>Supports simple and advanced chat composer layouts.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage and API"
		description="Bind text state and submit through an onsubmit handler."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<PromptInput
					class="rounded-xl border p-3"
					onsubmit={(event: SubmitEvent) => event.preventDefault()}
				>
					<label class="sr-only" for="prompt-usage">Prompt</label>
					<textarea
						class="min-h-20 w-full rounded-md border p-2 text-sm"
						id="prompt-usage"
						value="Summarize the latest release notes."
					></textarea>
					<div class="mt-2 flex justify-end">
						<button class="rounded border px-3 py-1.5 text-sm" type="submit">Submit</button>
					</div>
				</PromptInput>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for PromptInput.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
