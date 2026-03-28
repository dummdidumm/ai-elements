<script lang="ts">
	import FileIcon from 'lucide-svelte/icons/file';
	import {
		CodeBlock,
		CodeBlockActions,
		CodeBlockCopyButton,
		CodeBlockFilename,
		CodeBlockHeader,
		CodeBlockTitle
	} from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const sourceCode = `export function formatBytes(bytes: number): string {
	if (bytes < 1024) return \`\${bytes} B\`;
	const kb = bytes / 1024;
	return \`\${kb.toFixed(1)} KB\`;
}`;

	const previewCode = `<CodeBlock code={sourceCode} language="ts" showLineNumbers={true}>
	<CodeBlockHeader>
		<CodeBlockTitle>
			<FileIcon class="size-3.5" />
			<CodeBlockFilename>format-bytes.ts</CodeBlockFilename>
		</CodeBlockTitle>
		<CodeBlockActions>
			<CodeBlockCopyButton />
		</CodeBlockActions>
	</CodeBlockHeader>
</CodeBlock>`;

	const usageCode = `<script lang="ts">
	import {
		CodeBlock,
		CodeBlockHeader,
		CodeBlockTitle,
		CodeBlockFilename,
		CodeBlockActions,
		CodeBlockCopyButton
	} from '$lib/index.js';
<\\/script>

<CodeBlock code={code} language="typescript" showLineNumbers={true}>
	<CodeBlockHeader>
		<CodeBlockTitle>
			<CodeBlockFilename>example.ts</CodeBlockFilename>
		</CodeBlockTitle>
		<CodeBlockActions>
			<CodeBlockCopyButton />
		</CodeBlockActions>
	</CodeBlockHeader>
</CodeBlock>`;
	const examplesCode = `<CodeBlock code={'npm run check\\n✓ typecheck passed\\n✓ tests passed'} language="bash">
	<CodeBlockHeader>
		<CodeBlockTitle>
			<CodeBlockFilename>ci.log</CodeBlockFilename>
		</CodeBlockTitle>
		<CodeBlockActions>
			<CodeBlockCopyButton />
		</CodeBlockActions>
	</CodeBlockHeader>
</CodeBlock>`;

	const propsRows = [
		{
			name: 'CodeBlock.code',
			type: 'string',
			required: true,
			description: 'Source string rendered with syntax highlighting.'
		},
		{
			name: 'CodeBlock.language',
			type: 'BundledLanguage',
			required: true,
			description: 'Shiki language id used for tokenization.'
		},
		{
			name: 'CodeBlock.showLineNumbers',
			type: 'boolean',
			description: 'Enables line number column in the rendered output.',
			defaultValue: 'false'
		},
		{
			name: 'CodeBlockCopyButton.timeout',
			type: 'number',
			description: 'Copied state duration in milliseconds.',
			defaultValue: '2000'
		}
	];
</script>

<DocsPage
	title="Code Block"
	description="Syntax-highlighted code rendering with composable header and copy actions."
>
	<p class="text-sm text-muted-foreground">
		<code>CodeBlock</code> is a composable code viewer with line numbers, copy behavior, and header primitives.
	</p>

	<DocsSection title="Preview" description="Code block with title and copy action.">
		<PreviewCodeTabs code={previewCode} language="svelte">
			{#snippet preview()}
				<CodeBlock code={sourceCode} language="ts" showLineNumbers={true}>
					<CodeBlockHeader>
						<CodeBlockTitle>
							<FileIcon class="size-3.5" />
							<CodeBlockFilename>format-bytes.ts</CodeBlockFilename>
						</CodeBlockTitle>
						<CodeBlockActions>
							<CodeBlockCopyButton />
						</CodeBlockActions>
					</CodeBlockHeader>
				</CodeBlock>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install the code-block component package entry.">
		<InstallerTabs slug="code-block" />
	</DocsSection>

	<DocsSection title="Usage" description="Compose CodeBlock primitives in app code.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Features" description="CodeBlock capabilities.">
		<ul class="list-disc space-y-1 pl-5 text-sm">
			<li>Shiki-powered syntax highlighting.</li>
			<li>Optional line numbers for code review workflows.</li>
			<li>Composable header, title, filename, and action slots.</li>
			<li>Built-in clipboard copy action with visual feedback.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Examples" description="Render logs and command snippets with the same primitive.">
		<CodeBlock code={examplesCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Common CodeBlock props.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
