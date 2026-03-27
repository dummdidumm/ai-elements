<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	type ImageProps = Omit<HTMLImgAttributes, 'src'> & {
		base64: string;
		mediaType: string;
	};

	let { class: className, base64, mediaType, alt = 'Generated image', ...rest }: ImageProps = $props();
</script>

<img
	alt={alt}
	class={cn('h-auto max-w-full overflow-hidden rounded-md', className)}
	data-slot="image"
	src={`data:${mediaType};base64,${base64}`}
	{...rest}
/>
