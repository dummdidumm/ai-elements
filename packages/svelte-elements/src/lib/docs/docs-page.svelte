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

<div
	class={cn('mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-8 md:px-8 md:py-10', className)}
>
	<header class="flex flex-wrap items-start justify-between gap-5">
		<div class="space-y-3">
			<h1 class="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
			{#if description}
				<p class="max-w-3xl text-sm leading-6 text-muted-foreground md:text-[0.95rem]">
					{description}
				</p>
			{/if}
		</div>
		{#if headerActions}
			<div class="flex items-center gap-2 pt-1">
				{@render headerActions()}
			</div>
		{/if}
	</header>
	<div class="space-y-10">
		{@render children?.()}
	</div>
</div>
