import type { ComponentProps } from 'svelte';
import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContainer,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockFilename,
	CodeBlockHeader,
	CodeBlockLanguageSelector,
	CodeBlockLanguageSelectorItem,
	CodeBlockTitle,
	createRawTokens,
	highlightCode,
	tokenInlineStyle,
	tokenStyleProps,
	type BundledLanguage,
	type KeyedLine,
	type KeyedToken,
	type TokenizedCode
} from './code-block/index.js';
import {
	Agent,
	AgentContent,
	AgentHeader,
	AgentInstructions,
	AgentOutput,
	AgentTool,
	AgentTools
} from './agent/index.js';
import Shimmer from './components/shimmer.svelte';
import {
	Plan,
	PlanAction,
	PlanContent,
	PlanDescription,
	PlanFooter,
	PlanHeader,
	PlanTitle,
	PlanTrigger
} from './plan/index.js';
import { Reasoning, ReasoningContent, ReasoningTrigger } from './reasoning/index.js';
import {
	Sandbox,
	SandboxContent,
	SandboxHeader,
	SandboxTabContent,
	SandboxTabs,
	SandboxTabsBar,
	SandboxTabsList,
	SandboxTabsTrigger
} from './sandbox/index.js';
import {
	Tool,
	ToolContent,
	ToolHeader,
	ToolInput,
	ToolOutput,
	ToolStatusBadge
} from './tool/index.js';

export { Shimmer };
export type TextShimmerProps = ComponentProps<typeof Shimmer>;

export {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContainer,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockFilename,
	CodeBlockHeader,
	CodeBlockLanguageSelector,
	CodeBlockLanguageSelectorItem,
	CodeBlockTitle,
	createRawTokens,
	highlightCode,
	tokenInlineStyle,
	tokenStyleProps,
	type BundledLanguage,
	type KeyedLine,
	type KeyedToken,
	type TokenizedCode
};

export type CodeBlockProps = ComponentProps<typeof CodeBlock>;
export type CodeBlockCopyButtonProps = ComponentProps<typeof CodeBlockCopyButton>;

export {
	Tool,
	ToolContent,
	ToolHeader,
	ToolInput,
	ToolOutput,
	ToolStatusBadge,
	Plan,
	PlanAction,
	PlanContent,
	PlanDescription,
	PlanFooter,
	PlanHeader,
	PlanTitle,
	PlanTrigger,
	Reasoning,
	ReasoningContent,
	ReasoningTrigger,
	Agent,
	AgentContent,
	AgentHeader,
	AgentInstructions,
	AgentOutput,
	AgentTool,
	AgentTools,
	Sandbox,
	SandboxContent,
	SandboxHeader,
	SandboxTabContent,
	SandboxTabs,
	SandboxTabsBar,
	SandboxTabsList,
	SandboxTabsTrigger
};

export type ToolProps = ComponentProps<typeof Tool>;
export type ToolHeaderProps = ComponentProps<typeof ToolHeader>;
export type ToolContentProps = ComponentProps<typeof ToolContent>;
export type ToolInputProps = ComponentProps<typeof ToolInput>;
export type ToolOutputProps = ComponentProps<typeof ToolOutput>;
export type ToolStatusBadgeProps = ComponentProps<typeof ToolStatusBadge>;

export type PlanProps = ComponentProps<typeof Plan>;
export type PlanActionProps = ComponentProps<typeof PlanAction>;
export type PlanContentProps = ComponentProps<typeof PlanContent>;
export type PlanDescriptionProps = ComponentProps<typeof PlanDescription>;
export type PlanFooterProps = ComponentProps<typeof PlanFooter>;
export type PlanHeaderProps = ComponentProps<typeof PlanHeader>;
export type PlanTitleProps = ComponentProps<typeof PlanTitle>;
export type PlanTriggerProps = ComponentProps<typeof PlanTrigger>;

export type ReasoningProps = ComponentProps<typeof Reasoning>;
export type ReasoningContentProps = ComponentProps<typeof ReasoningContent>;
export type ReasoningTriggerProps = ComponentProps<typeof ReasoningTrigger>;

export type AgentProps = ComponentProps<typeof Agent>;
export type AgentContentProps = ComponentProps<typeof AgentContent>;
export type AgentHeaderProps = ComponentProps<typeof AgentHeader>;
export type AgentInstructionsProps = ComponentProps<typeof AgentInstructions>;
export type AgentOutputProps = ComponentProps<typeof AgentOutput>;
export type AgentToolProps = ComponentProps<typeof AgentTool>;
export type AgentToolsProps = ComponentProps<typeof AgentTools>;

export type SandboxProps = ComponentProps<typeof Sandbox>;
export type SandboxContentProps = ComponentProps<typeof SandboxContent>;
export type SandboxHeaderProps = ComponentProps<typeof SandboxHeader>;
export type SandboxTabContentProps = ComponentProps<typeof SandboxTabContent>;
export type SandboxTabsProps = ComponentProps<typeof SandboxTabs>;
export type SandboxTabsBarProps = ComponentProps<typeof SandboxTabsBar>;
export type SandboxTabsListProps = ComponentProps<typeof SandboxTabsList>;
export type SandboxTabsTriggerProps = ComponentProps<typeof SandboxTabsTrigger>;
