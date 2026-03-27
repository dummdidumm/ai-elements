<script lang="ts">
	import * as Card from '../components/ui/card/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Card.Footer
	class={cn('flex items-center px-6 [.border-t]:pt-6', className)}
	data-slot="plan-footer"
	{...rest}
>
	{@render children?.()}
</Card.Footer>
