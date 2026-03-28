<script lang="ts">
	import * as Card from '../components/ui/card/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Card.Header
	class={cn(
		'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6',
		'flex items-start justify-between',
		className
	)}
	data-slot="plan-header"
	{...rest}
>
	{@render children?.()}
</Card.Header>
