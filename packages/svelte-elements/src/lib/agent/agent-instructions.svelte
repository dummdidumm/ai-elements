<script lang="ts">
	import type { AgentInstructionsProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, instructions = '', children, ...rest }: AgentInstructionsProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-instructions" {...rest}>
	<span class="font-medium text-muted-foreground text-sm">Instructions</span>
	<div class="rounded-md bg-muted/50 p-3 text-muted-foreground text-sm">
		{#if children}
			{@render children()}
		{:else}
			<p>{instructions}</p>
		{/if}
	</div>
</div>
