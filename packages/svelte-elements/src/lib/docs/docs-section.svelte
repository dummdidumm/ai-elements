<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let {
		title,
		description,
		class: className,
		children
	}: {
		title: string;
		description?: string;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<section class={cn('space-y-5', className)}>
	<div class="space-y-2">
		<h2 class="text-2xl font-semibold tracking-tight md:text-[1.65rem]">{title}</h2>
		{#if description}
			<p class="text-sm leading-6 text-muted-foreground">{description}</p>
		{/if}
	</div>
	<Separator class="bg-border/80" />
	<div class="space-y-4">
		{@render children?.()}
	</div>
</section>
