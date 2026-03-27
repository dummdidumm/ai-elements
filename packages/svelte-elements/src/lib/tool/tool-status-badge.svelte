<script lang="ts">
	import CheckCircleIcon from 'lucide-svelte/icons/check-circle';
	import CircleIcon from 'lucide-svelte/icons/circle';
	import ClockIcon from 'lucide-svelte/icons/clock';
	import XCircleIcon from 'lucide-svelte/icons/x-circle';
	import type { ComponentProps } from 'svelte';
	import { Badge } from '../components/ui/badge/index.js';
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

	const statusVariant: Record<
		ToolPart['state'],
		ComponentProps<typeof Badge>['variant']
	> = {
		'approval-requested': 'outline',
		'approval-responded': 'secondary',
		'input-available': 'secondary',
		'input-streaming': 'outline',
		'output-available': 'default',
		'output-denied': 'destructive',
		'output-error': 'destructive'
	};

	type Props = Omit<ComponentProps<typeof Badge>, 'children' | 'variant'> & {
		status: ToolPart['state'];
	};

	let { status, class: className, ...rest }: Props = $props();
</script>

<Badge
	class={cn(
		'gap-1.5 rounded-full font-medium [&>svg]:size-3',
		className
	)}
	variant={statusVariant[status]}
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
</Badge>
