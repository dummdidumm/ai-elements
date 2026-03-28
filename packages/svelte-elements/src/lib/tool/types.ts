import type { DynamicToolUIPart, ToolUIPart } from 'ai';
import * as Collapsible from '../components/ui/collapsible/index.js';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type ToolPart = ToolUIPart | DynamicToolUIPart;

export type ToolProps = ComponentProps<typeof Collapsible.Root>;

type BaseToolHeaderProps = Omit<ComponentProps<typeof Collapsible.Trigger>, 'child' | 'type'> & {
	title?: string;
	state: ToolPart['state'];
	toolName?: string;
};

export type ToolHeaderProps = BaseToolHeaderProps & {
	type: ToolUIPart['type'] | DynamicToolUIPart['type'];
};

export type ToolContentProps = ComponentProps<typeof Collapsible.Content>;

export type ToolInputProps = {
	input: ToolPart['input'];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type ToolOutputProps = {
	output: ToolPart['output'];
	errorText: ToolPart['errorText'];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
