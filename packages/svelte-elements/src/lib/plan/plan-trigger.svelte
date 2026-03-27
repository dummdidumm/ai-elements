<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import ChevronsUpDownIcon from 'lucide-svelte/icons/chevrons-up-down';
	import type { ComponentProps } from 'svelte';
	import { cn } from '../utils.js';

	type Props = ComponentProps<typeof Collapsible.Trigger>;

	let { class: className, children, ...rest }: Props = $props();
</script>

<Collapsible.Trigger {...rest}>
	{#snippet child({ props })}
		<button
			type="button"
			{...props}
			class={cn(
				'inline-flex size-8 shrink-0 items-center justify-center gap-2 rounded-md font-medium text-sm whitespace-nowrap transition-all outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
				className
			)}
			data-slot="plan-trigger"
		>
			{#if children}
				{@render children()}
			{:else}
				<ChevronsUpDownIcon class="size-4" />
				<span class="sr-only">Toggle plan</span>
			{/if}
		</button>
	{/snippet}
</Collapsible.Trigger>
