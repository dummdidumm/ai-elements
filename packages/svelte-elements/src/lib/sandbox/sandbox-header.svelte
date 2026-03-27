<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
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
		<CodeIcon class="text-muted-foreground size-4" />
		<span class="text-sm font-medium">{title}</span>
		<ToolStatusBadge status={state} />
	</div>
	<ChevronDownIcon
		class="text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180"
	/>
</Collapsible.Trigger>
