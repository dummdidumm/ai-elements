<script lang="ts">
	import type { AgentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: AgentProps = $props();
</script>

<div class={cn('not-prose w-full rounded-md border', className)} data-slot="agent" {...rest}>
	{@render children?.()}
</div>
