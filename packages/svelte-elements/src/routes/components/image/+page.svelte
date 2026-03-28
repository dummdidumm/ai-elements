<script lang="ts">
	import { Image } from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';
	const transparentPixel =
		'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9WnVw5gAAAAASUVORK5CYII=';

	const previewCode = `import { Image } from '$lib/index.js';

const transparentPixel =
	'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9WnVw5gAAAAASUVORK5CYII=';

<Image alt="Generated sample" base64={transparentPixel} mediaType="image/png" class="max-w-40 border" />`;
	const usageCode = `import { Image } from '$lib/index.js';

const mediaType = 'image/png';
const base64 = '...';

<Image alt="Generated result" {base64} {mediaType} class="w-full rounded-md" />`;

	const propsRows = [
		{
			name: 'base64',
			type: 'string',
			required: true,
			defaultValue: '—',
			description: 'Base64-encoded binary image payload.'
		},
		{
			name: 'mediaType',
			type: 'string',
			required: true,
			defaultValue: '—',
			description: 'MIME media type used to construct the data URL.'
		},
		{
			name: 'alt',
			type: 'string',
			required: false,
			defaultValue: '"Generated image"',
			description: 'Accessible alternative text for the image.'
		},
		{
			name: 'class',
			type: 'string',
			required: false,
			defaultValue: '—',
			description: 'Additional classes applied to the image element.'
		},
		{
			name: '...rest',
			type: "Omit<HTMLImgAttributes, 'src'>",
			required: false,
			defaultValue: '—',
			description: 'Forwarded native img attributes except src.'
		}
	];
</script>

<DocsPage title="Image" description="Display generated or uploaded media from base64 payloads.">
	<DocsSection
		title="Intro"
		description="Image converts base64 payloads into renderable media for AI-generated outputs."
	>
		<p class="text-sm text-muted-foreground">
			Use it for generated images, attachment previews, and inline visual responses in chat UIs.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A generated image rendered from a base64 payload.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Image
					alt="Generated sample"
					base64={transparentPixel}
					mediaType="image/png"
					class="max-w-40 border"
				/>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install Image.">
		<InstallerTabs slug="image" />
	</DocsSection>

	<DocsSection title="Features" description="Common usage patterns.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Renders inlined image data without additional network requests.</li>
			<li>Useful for model-generated images returned as base64 payloads.</li>
			<li>Supports standard img attributes like alt, width, and height.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage and API" description="Provide mediaType and base64 for any renderable image.">
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="min-h-[240px] items-center">
			{#snippet preview()}
				<Image alt="Generated result" base64={transparentPixel} mediaType="image/png" class="w-40 border" />
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for Image.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
