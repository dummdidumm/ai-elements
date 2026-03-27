<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import WrenchIcon from 'lucide-svelte/icons/wrench';
	import ToolStatusBadge from './tool-status-badge.svelte';
	import type { ToolHeaderProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, title, type, state, toolName, children, ...rest }: ToolHeaderProps = $props();

	const derivedName = $derived(
		type === 'dynamic-tool' ? (toolName ?? '') : type.split('-').slice(1).join('-')
	);
</script>

<Collapsible.Trigger
	class={cn('flex w-full items-center justify-between gap-4 p-3', className)}
	data-slot="tool-header"
	{...rest}
>
	<div class="flex items-center gap-2">
		<WrenchIcon class="size-4 text-muted-foreground" />
		<span class="font-medium text-sm">{title ?? derivedName}</span>
		<ToolStatusBadge status={state} />
	</div>
	<ChevronDownIcon
		class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
	/>
</Collapsible.Trigger>
