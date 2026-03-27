import * as Collapsible from '../components/ui/collapsible/index.js';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type PlanProps = ComponentProps<typeof Collapsible.Root> & {
	isStreaming?: boolean;
};

export type PlanHeaderProps = HTMLAttributes<HTMLDivElement>;
export type PlanTitleProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
export type PlanDescriptionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
export type PlanActionProps = HTMLAttributes<HTMLDivElement>;
export type PlanContentProps = HTMLAttributes<HTMLDivElement>;
export type PlanFooterProps = HTMLAttributes<HTMLDivElement>;
export type PlanTriggerProps = ComponentProps<typeof Collapsible.Trigger>;
