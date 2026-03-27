<script lang="ts">
	import type { AgentInstructionsProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, instructions = '', children, ...rest }: AgentInstructionsProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-instructions" {...rest}>
	<span class="text-muted-foreground text-sm font-medium">Instructions</span>
	<div class="bg-muted/50 text-muted-foreground rounded-md p-3 text-sm">
		{#if children}
			{@render children()}
		{:else}
			<p>{instructions}</p>
		{/if}
	</div>
</div>
