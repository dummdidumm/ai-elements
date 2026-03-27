<script lang="ts">
	import BotIcon from 'lucide-svelte/icons/bot';
	import type { AgentHeaderProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, name, model, children, ...rest }: AgentHeaderProps = $props();
</script>

<div
	class={cn('flex w-full items-center justify-between gap-4 p-3', className)}
	data-slot="agent-header"
	{...rest}
>
	<div class="flex items-center gap-2">
		<BotIcon class="text-muted-foreground size-4" />
		<span class="text-sm font-medium">{name}</span>
		{#if model}
			<span
				class="bg-secondary text-secondary-foreground inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-transparent px-2 py-0.5 font-mono text-xs font-medium whitespace-nowrap transition-[color,box-shadow]"
				data-slot="agent-model-badge"
			>
				{model}
			</span>
		{/if}
	</div>
	{@render children?.()}
</div>
