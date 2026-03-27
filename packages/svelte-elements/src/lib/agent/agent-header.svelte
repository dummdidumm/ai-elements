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
		<BotIcon class="size-4 text-muted-foreground" />
		<span class="font-medium text-sm">{name}</span>
		{#if model}
			<span
				class="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-transparent bg-secondary px-2 py-0.5 font-medium font-mono text-secondary-foreground text-xs whitespace-nowrap transition-[color,box-shadow]"
				data-slot="agent-model-badge"
			>
				{model}
			</span>
		{/if}
	</div>
	{@render children?.()}
</div>
