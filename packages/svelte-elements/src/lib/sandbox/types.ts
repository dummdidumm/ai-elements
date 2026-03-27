import { Collapsible, Tabs } from 'bits-ui';
import type { ToolUIPart } from 'ai';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type SandboxProps = ComponentProps<typeof Collapsible.Root>;

export type SandboxHeaderProps = {
	title?: string;
	state: ToolUIPart['state'];
} & HTMLAttributes<HTMLButtonElement>;

export type SandboxContentProps = ComponentProps<typeof Collapsible.Content>;
export type SandboxTabsProps = ComponentProps<typeof Tabs.Root>;
export type SandboxTabsBarProps = HTMLAttributes<HTMLDivElement>;
export type SandboxTabsListProps = ComponentProps<typeof Tabs.List>;
export type SandboxTabsTriggerProps = ComponentProps<typeof Tabs.Trigger>;
export type SandboxTabContentProps = ComponentProps<typeof Tabs.Content>;
