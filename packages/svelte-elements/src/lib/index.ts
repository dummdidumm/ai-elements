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
import Attachments from './attachments.svelte';
import ChainOfThought from './chain-of-thought.svelte';
import Checkpoint from './checkpoint.svelte';
import Confirmation from './confirmation.svelte';
import Context from './context.svelte';
import Conversation from './conversation.svelte';
import InlineCitation from './inline-citation.svelte';
import Message from './message.svelte';
import ModelSelector from './model-selector.svelte';
import PromptInput from './prompt-input.svelte';
import Queue from './queue.svelte';
import Sources from './sources.svelte';
import Suggestion from './suggestion.svelte';
import Task from './task.svelte';
import Artifact from './artifact.svelte';
import Commit from './commit.svelte';
import EnvironmentVariables from './environment-variables.svelte';
import FileTree from './file-tree.svelte';
import JSXPreview from './jsx-preview.svelte';
import PackageInfo from './package-info.svelte';
import SchemaDisplay from './schema-display.svelte';
import Snippet from './snippet.svelte';
import StackTrace from './stack-trace.svelte';
import Terminal from './terminal.svelte';
import TestResults from './test-results.svelte';
import WebPreview from './web-preview.svelte';
import AudioPlayer from './audio-player.svelte';
import MicSelector from './mic-selector.svelte';
import Persona from './persona.svelte';
import SpeechInput from './speech-input.svelte';
import Transcription from './transcription.svelte';
import VoiceSelector from './voice-selector.svelte';
import Canvas from './canvas.svelte';
import Connection from './connection.svelte';
import Controls from './controls.svelte';
import Edge from './edge.svelte';
import Node from './node.svelte';
import Panel from './panel.svelte';
import Toolbar from './toolbar.svelte';
import Image from './image.svelte';
import OpenInChat from './open-in-chat.svelte';

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

export {
	Attachments,
	ChainOfThought,
	Checkpoint,
	Confirmation,
	Context,
	Conversation,
	InlineCitation,
	Message,
	ModelSelector,
	PromptInput,
	Queue,
	Sources,
	Suggestion,
	Task,
	Artifact,
	Commit,
	EnvironmentVariables,
	FileTree,
	JSXPreview,
	PackageInfo,
	SchemaDisplay,
	Snippet,
	StackTrace,
	Terminal,
	TestResults,
	WebPreview,
	AudioPlayer,
	MicSelector,
	Persona,
	SpeechInput,
	Transcription,
	VoiceSelector,
	Canvas,
	Connection,
	Controls,
	Edge,
	Node,
	Panel,
	Toolbar,
	Image,
	OpenInChat
};

export type AttachmentsProps = ComponentProps<typeof Attachments>;
export type ChainOfThoughtProps = ComponentProps<typeof ChainOfThought>;
export type CheckpointProps = ComponentProps<typeof Checkpoint>;
export type ConfirmationProps = ComponentProps<typeof Confirmation>;
export type ContextProps = ComponentProps<typeof Context>;
export type ConversationProps = ComponentProps<typeof Conversation>;
export type InlineCitationProps = ComponentProps<typeof InlineCitation>;
export type MessageProps = ComponentProps<typeof Message>;
export type ModelSelectorProps = ComponentProps<typeof ModelSelector>;
export type PromptInputProps = ComponentProps<typeof PromptInput>;
export type QueueProps = ComponentProps<typeof Queue>;
export type SourcesProps = ComponentProps<typeof Sources>;
export type SuggestionProps = ComponentProps<typeof Suggestion>;
export type TaskProps = ComponentProps<typeof Task>;
export type ArtifactProps = ComponentProps<typeof Artifact>;
export type CommitProps = ComponentProps<typeof Commit>;
export type EnvironmentVariablesProps = ComponentProps<typeof EnvironmentVariables>;
export type FileTreeProps = ComponentProps<typeof FileTree>;
export type JSXPreviewProps = ComponentProps<typeof JSXPreview>;
export type PackageInfoProps = ComponentProps<typeof PackageInfo>;
export type SchemaDisplayProps = ComponentProps<typeof SchemaDisplay>;
export type SnippetProps = ComponentProps<typeof Snippet>;
export type StackTraceProps = ComponentProps<typeof StackTrace>;
export type TerminalProps = ComponentProps<typeof Terminal>;
export type TestResultsProps = ComponentProps<typeof TestResults>;
export type WebPreviewProps = ComponentProps<typeof WebPreview>;
export type AudioPlayerProps = ComponentProps<typeof AudioPlayer>;
export type MicSelectorProps = ComponentProps<typeof MicSelector>;
export type PersonaProps = ComponentProps<typeof Persona>;
export type SpeechInputProps = ComponentProps<typeof SpeechInput>;
export type TranscriptionProps = ComponentProps<typeof Transcription>;
export type VoiceSelectorProps = ComponentProps<typeof VoiceSelector>;
export type CanvasProps = ComponentProps<typeof Canvas>;
export type ConnectionProps = ComponentProps<typeof Connection>;
export type ControlsProps = ComponentProps<typeof Controls>;
export type EdgeProps = ComponentProps<typeof Edge>;
export type NodeProps = ComponentProps<typeof Node>;
export type PanelProps = ComponentProps<typeof Panel>;
export type ToolbarProps = ComponentProps<typeof Toolbar>;
export type ImageProps = ComponentProps<typeof Image>;
export type OpenInChatProps = ComponentProps<typeof OpenInChat>;
