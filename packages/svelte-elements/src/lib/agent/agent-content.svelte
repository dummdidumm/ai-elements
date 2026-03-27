<script lang="ts">
	import type { AgentContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: AgentContentProps = $props();
</script>

<div class={cn('space-y-4 p-4 pt-0', className)} data-slot="agent-content" {...rest}>
	{@render children?.()}
</div>
