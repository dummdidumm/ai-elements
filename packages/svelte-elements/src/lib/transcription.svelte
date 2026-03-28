<script lang="ts">
	import type { Experimental_TranscriptionResult } from 'ai';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	type Segment = Experimental_TranscriptionResult['segments'][number];
	type Props = HTMLAttributes<HTMLDivElement> & {
		segments?: Segment[];
		currentTime?: number;
		onSeek?: (time: number) => void;
	};

	let {
		class: className,
		children,
		segments = [],
		currentTime = 0,
		onSeek,
		...rest
	}: Props = $props();
</script>

<div
	class={cn('flex flex-wrap gap-1 text-sm leading-relaxed', className)}
	data-slot="transcription"
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		{#each segments as segment}
			<button
				class={cn(
					'inline text-left',
					currentTime >= segment.startSecond && currentTime < segment.endSecond
						? 'text-primary'
						: currentTime >= segment.endSecond
							? 'text-muted-foreground'
							: 'text-muted-foreground/60',
					onSeek ? 'hover:text-foreground cursor-pointer' : 'cursor-default'
				)}
				onclick={() => onSeek?.(segment.startSecond)}
				type="button"
			>
				{segment.text}
			</button>
		{/each}
	{/if}
</div>
