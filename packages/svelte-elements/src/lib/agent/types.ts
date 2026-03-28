import type { Tool } from 'ai';
import * as Accordion from '../components/ui/accordion/index.js';
import type { ComponentProps } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type AgentProps = HTMLAttributes<HTMLDivElement>;

export type AgentHeaderProps = {
	name: string;
	model?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AgentContentProps = HTMLAttributes<HTMLDivElement>;

export type AgentInstructionsProps = {
	instructions?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AgentToolsProps = ComponentProps<typeof Accordion.Root>;

export type AgentToolProps = {
	tool: Tool;
} & ComponentProps<typeof Accordion.Item>;

export type AgentOutputProps = {
	schema: string;
} & HTMLAttributes<HTMLDivElement>;
