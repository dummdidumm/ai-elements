import { Collapsible } from 'bits-ui';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type ReasoningProps = ComponentProps<typeof Collapsible.Root> & {
	isStreaming?: boolean;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	duration?: number;
};

export type ReasoningTriggerProps = ComponentProps<typeof Collapsible.Trigger> & {
	getThinkingMessage?: (isStreaming: boolean, duration?: number) => string;
};

export type ReasoningContentProps = {
	content?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
