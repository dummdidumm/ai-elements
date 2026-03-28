<script lang="ts">
	import BotIcon from 'lucide-svelte/icons/bot';
	import { Badge } from '../components/ui/badge/index.js';
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
		<span class="text-sm font-medium">{name}</span>
		{#if model}
			<Badge
				class="rounded-full font-mono text-xs"
				data-slot="agent-model-badge"
				variant="secondary"
			>
				{model}
			</Badge>
		{/if}
	</div>
	{@render children?.()}
</div>
