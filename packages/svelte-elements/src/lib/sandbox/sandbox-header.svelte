<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import CodeIcon from 'lucide-svelte/icons/code';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import type { SandboxHeaderProps } from './types.js';
	import ToolStatusBadge from '../tool/tool-status-badge.svelte';
	import { cn } from '../utils.js';

	let { class: className, title, state, children, ...rest }: SandboxHeaderProps = $props();
</script>

<Collapsible.Trigger
	class={cn('flex w-full items-center justify-between gap-4 p-3', className)}
	data-slot="sandbox-header"
	{...rest}
>
	<div class="flex items-center gap-2">
		<CodeIcon class="size-4 text-muted-foreground" />
		<span class="font-medium text-sm">{title}</span>
		<ToolStatusBadge status={state} />
	</div>
	<ChevronDownIcon
		class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
	/>
</Collapsible.Trigger>
