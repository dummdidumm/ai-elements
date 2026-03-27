<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		title,
		description,
		class: className,
		headerActions,
		children
	}: {
		title: string;
		description?: string;
		class?: string;
		headerActions?: Snippet;
		children?: Snippet;
	} = $props();
</script>

<div class={cn('mx-auto flex w-full max-w-7xl flex-col gap-8 p-6 md:p-10', className)}>
	<header class="flex flex-wrap items-start justify-between gap-4">
		<div class="space-y-2">
			<h1 class="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
			{#if description}
				<p class="max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
			{/if}
		</div>
		{#if headerActions}
			<div class="flex items-center gap-2">
				{@render headerActions()}
			</div>
		{/if}
	</header>
	<div class="space-y-8">
		{@render children?.()}
	</div>
</div>
