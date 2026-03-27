<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import { setReasoningContext } from './reasoning-context.js';
	import type { ReasoningContextValue } from './reasoning-context.js';
	import type { ReasoningProps } from './types.js';
	import { cn } from '../utils.js';

	const AUTO_CLOSE_DELAY = 1000;
	const MS_IN_S = 1000;

	let {
		class: className,
		isStreaming = false,
		open: openProp,
		defaultOpen,
		onOpenChange,
		duration: durationProp,
		children,
		...rest
	}: ReasoningProps = $props();

	let uncontrolledOpen = $state(false);
	let durationInternal = $state<number | undefined>(undefined);
	let hasEverStreamed = $state(false);
	let hasAutoClosed = $state(false);
	let startTime = $state<number | null>(null);
	let initialized = $state(false);

	$effect(() => {
		if (initialized) {
			return;
		}
		uncontrolledOpen = defaultOpen ?? isStreaming;
		hasEverStreamed = isStreaming;
		startTime = isStreaming ? Date.now() : null;
		initialized = true;
	});

	const resolvedOpen = $derived(openProp !== undefined ? openProp : uncontrolledOpen);
	const isExplicitlyClosed = $derived(defaultOpen === false);

	const resolvedDuration = $derived(durationProp !== undefined ? durationProp : durationInternal);

	function setIsOpen(next: boolean) {
		if (openProp === undefined) {
			uncontrolledOpen = next;
		}
		onOpenChange?.(next);
	}

	function handleOpenChange(next: boolean) {
		setIsOpen(next);
	}

	$effect(() => {
		if (isStreaming) {
			hasEverStreamed = true;
			if (startTime === null) {
				startTime = Date.now();
			}
		} else if (startTime !== null) {
			durationInternal = Math.ceil((Date.now() - startTime) / MS_IN_S);
			startTime = null;
		}
	});

	$effect(() => {
		if (isStreaming && !resolvedOpen && !isExplicitlyClosed) {
			setIsOpen(true);
		}
	});

	$effect(() => {
		if (!hasEverStreamed || isStreaming || !resolvedOpen || hasAutoClosed) {
			return;
		}
		const timer = setTimeout(() => {
			setIsOpen(false);
			hasAutoClosed = true;
		}, AUTO_CLOSE_DELAY);
		return () => {
			clearTimeout(timer);
		};
	});

	function setIsOpenWrapper(next: boolean) {
		setIsOpen(next);
	}

	const reasoning: ReasoningContextValue = $state({
		isStreaming: false,
		isOpen: false,
		duration: undefined,
		setIsOpen: setIsOpenWrapper
	});

	$effect(() => {
		reasoning.isStreaming = isStreaming;
		reasoning.isOpen = resolvedOpen;
		reasoning.duration = resolvedDuration;
	});

	setReasoningContext(reasoning);
</script>

<Collapsible.Root
	class={cn('not-prose mb-4', className)}
	open={resolvedOpen}
	onOpenChange={handleOpenChange}
	{...rest}
>
	{@render children?.()}
</Collapsible.Root>
