import type { ToolUIPart } from 'ai';
import * as Collapsible from '../components/ui/collapsible/index.js';
import * as Tabs from '../components/ui/tabs/index.js';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type SandboxProps = ComponentProps<typeof Collapsible.Root>;

export type SandboxHeaderProps = {
	title?: string;
	state: ToolUIPart['state'];
} & ComponentProps<typeof Collapsible.Trigger>;

export type SandboxContentProps = ComponentProps<typeof Collapsible.Content>;
export type SandboxTabsProps = ComponentProps<typeof Tabs.Root>;
export type SandboxTabsBarProps = HTMLAttributes<HTMLDivElement>;
export type SandboxTabsListProps = ComponentProps<typeof Tabs.List>;
export type SandboxTabsTriggerProps = ComponentProps<typeof Tabs.Trigger>;
export type SandboxTabContentProps = ComponentProps<typeof Tabs.Content>;
