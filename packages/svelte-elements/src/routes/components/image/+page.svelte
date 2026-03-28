<script lang="ts">
	import { Image, CodeBlock } from '$lib/index.js';
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

	const props = [
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
	<p class="text-sm leading-6 text-muted-foreground">
		Image converts a base64 payload and media type into a renderable data URL image element.
	</p>

	<DocsSection title="Preview" description="See Image in context.">
		<PreviewCodeTabs
			code={previewCode}
			language="svelte"
			previewClass="grid min-h-[220px] place-items-center"
		>
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

	<DocsSection
		title="Installation"
		description="Add Image to your project with your preferred setup path."
	>
		<InstallerTabs slug="image" />
	</DocsSection>

	<DocsSection title="Features" description="Highlights of the Image component.">
		<ul class="ml-5 list-disc space-y-2 text-sm leading-6 text-muted-foreground">
			<li>Renders inlined image data without additional network requests.</li>
			<li>Useful for model-generated images returned as base64 payloads.</li>
			<li>Supports standard img attributes like alt, width, and height.</li>
		</ul>
	</DocsSection>

	<DocsSection title="Usage" description="Basic usage example for Image.">
		<CodeBlock code={usageCode} language="svelte" />
	</DocsSection>

	<DocsSection title="Props" description="Supported props for the Image component.">
		<PropsTable rows={props} />
	</DocsSection>
</DocsPage>
