import * as Collapsible from '../components/ui/collapsible/index.js';
import type { ComponentProps } from 'svelte';

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
} & ComponentProps<typeof Collapsible.Content>;
