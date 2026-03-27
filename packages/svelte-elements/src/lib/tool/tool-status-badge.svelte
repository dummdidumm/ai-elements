<script lang="ts">
	import CheckCircleIcon from 'lucide-svelte/icons/check-circle';
	import CircleIcon from 'lucide-svelte/icons/circle';
	import ClockIcon from 'lucide-svelte/icons/clock';
	import XCircleIcon from 'lucide-svelte/icons/x-circle';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';
	import type { ToolPart } from './types.js';

	const statusLabels: Record<ToolPart['state'], string> = {
		'approval-requested': 'Awaiting Approval',
		'approval-responded': 'Responded',
		'input-available': 'Running',
		'input-streaming': 'Pending',
		'output-available': 'Completed',
		'output-denied': 'Denied',
		'output-error': 'Error'
	};

	type Props = {
		status: ToolPart['state'];
	} & HTMLAttributes<HTMLSpanElement>;

	let { status, class: className, ...rest }: Props = $props();
</script>

<span
	class={cn(
		'bg-secondary text-secondary-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] [&>svg]:pointer-events-none [&>svg]:size-3',
		className
	)}
	data-slot="tool-status-badge"
	{...rest}
>
	{#if status === 'approval-requested'}
		<ClockIcon class="size-4 text-yellow-600" />
	{:else if status === 'approval-responded'}
		<CheckCircleIcon class="size-4 text-blue-600" />
	{:else if status === 'input-available'}
		<ClockIcon class="size-4 animate-pulse" />
	{:else if status === 'input-streaming'}
		<CircleIcon class="size-4" />
	{:else if status === 'output-available'}
		<CheckCircleIcon class="size-4 text-green-600" />
	{:else if status === 'output-denied'}
		<XCircleIcon class="size-4 text-orange-600" />
	{:else}
		<XCircleIcon class="size-4 text-red-600" />
	{/if}
	{statusLabels[status]}
</span>
