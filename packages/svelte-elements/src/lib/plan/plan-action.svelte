<script lang="ts">
	import * as Card from '../components/ui/card/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Card.Action
	class={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
	data-slot="plan-action"
	{...rest}
>
	{@render children?.()}
</Card.Action>
