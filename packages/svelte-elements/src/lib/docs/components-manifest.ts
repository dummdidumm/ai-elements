export type ComponentSectionId = 'chatbot' | 'code' | 'voice' | 'workflow' | 'utilities';

export interface ComponentDocEntry {
	slug: string;
	title: string;
	description: string;
}

export interface ComponentDocSection {
	id: ComponentSectionId;
	title: string;
	description: string;
	items: ComponentDocEntry[];
}

export const COMPONENT_DOC_SECTIONS: ComponentDocSection[] = [
	{
		id: 'chatbot',
		title: 'Chatbot',
		description: 'Conversation and assistant interaction building blocks.',
		items: [
			{
				slug: 'attachments',
				title: 'Attachments',
				description: 'Display attached files and media chips near prompts or messages.'
			},
			{
				slug: 'chain-of-thought',
				title: 'Chain of Thought',
				description: 'Render high-level reasoning summaries for assistant outputs.'
			},
			{
				slug: 'checkpoint',
				title: 'Checkpoint',
				description: 'Show progress checkpoints for long-running tasks.'
			},
			{
				slug: 'confirmation',
				title: 'Confirmation',
				description: 'Present explicit approve or deny confirmation states.'
			},
			{
				slug: 'context',
				title: 'Context',
				description: 'Display lightweight conversational metadata.'
			},
			{
				slug: 'conversation',
				title: 'Conversation',
				description: 'Wrap and structure chat transcripts.'
			},
			{
				slug: 'inline-citation',
				title: 'Inline Citation',
				description: 'Insert source references inline with assistant responses.'
			},
			{
				slug: 'message',
				title: 'Message',
				description: 'Render individual user or assistant messages.'
			},
			{
				slug: 'model-selector',
				title: 'Model Selector',
				description: 'Choose inference models for prompts or sessions.'
			},
			{
				slug: 'plan',
				title: 'Plan',
				description: 'Build expandable planning blocks with progress details.'
			},
			{
				slug: 'prompt-input',
				title: 'Prompt Input',
				description: 'Compose prompt input layouts and controls.'
			},
			{
				slug: 'queue',
				title: 'Queue',
				description: 'Represent ordered pending operations or work items.'
			},
			{
				slug: 'reasoning',
				title: 'Reasoning',
				description: 'Render collapsible reasoning summaries.'
			},
			{
				slug: 'shimmer',
				title: 'Shimmer',
				description: 'Show loading shimmer placeholders in conversational surfaces.'
			},
			{
				slug: 'sources',
				title: 'Sources',
				description: 'List source references and citations.'
			},
			{
				slug: 'suggestion',
				title: 'Suggestion',
				description: 'Render one-click suggested prompt buttons.'
			},
			{
				slug: 'task',
				title: 'Task',
				description: 'Group related assistant workflow tasks.'
			},
			{
				slug: 'tool',
				title: 'Tool',
				description: 'Display tool invocation input and output states.'
			}
		]
	},
	{
		id: 'code',
		title: 'Code',
		description: 'Code-first UI patterns for IDE-like and tooling experiences.',
		items: [
			{
				slug: 'agent',
				title: 'Agent',
				description: 'Render assistant planning and execution output blocks.'
			},
			{
				slug: 'artifact',
				title: 'Artifact',
				description: 'Present generated code or report artifacts.'
			},
			{
				slug: 'code-block',
				title: 'Code Block',
				description: 'Display highlighted source code with actions and metadata.'
			},
			{
				slug: 'commit',
				title: 'Commit',
				description: 'Show commit metadata and summarized changes.'
			},
			{
				slug: 'environment-variables',
				title: 'Environment Variables',
				description: 'Render key-value environment settings.'
			},
			{
				slug: 'file-tree',
				title: 'File Tree',
				description: 'Visualize repository or project file structures.'
			},
			{
				slug: 'jsx-preview',
				title: 'JSX Preview',
				description: 'Preview JSX-like rendered component snippets.'
			},
			{
				slug: 'package-info',
				title: 'Package Info',
				description: 'Show package name, version, and metadata.'
			},
			{
				slug: 'sandbox',
				title: 'Sandbox',
				description: 'Embed interactive tabbed preview and output areas.'
			},
			{
				slug: 'schema-display',
				title: 'Schema Display',
				description: 'Present structured field schemas and payload details.'
			},
			{
				slug: 'snippet',
				title: 'Snippet',
				description: 'Render compact inline command and code snippets.'
			},
			{
				slug: 'stack-trace',
				title: 'Stack Trace',
				description: 'Display runtime errors and call traces.'
			},
			{
				slug: 'terminal',
				title: 'Terminal',
				description: 'Show terminal commands and output logs.'
			},
			{
				slug: 'test-results',
				title: 'Test Results',
				description: 'Surface automated check and test outcomes.'
			},
			{
				slug: 'web-preview',
				title: 'Web Preview',
				description: 'Embed lightweight URL and rendered web previews.'
			}
		]
	},
	{
		id: 'voice',
		title: 'Voice',
		description: 'Audio and speech interaction components.',
		items: [
			{
				slug: 'audio-player',
				title: 'Audio Player',
				description: 'Play audio clips and spoken responses.'
			},
			{
				slug: 'mic-selector',
				title: 'Mic Selector',
				description: 'Select available microphone input devices.'
			},
			{
				slug: 'persona',
				title: 'Persona',
				description: 'Display speaker personas and voice identities.'
			},
			{
				slug: 'speech-input',
				title: 'Speech Input',
				description: 'Capture and display spoken user input states.'
			},
			{
				slug: 'transcription',
				title: 'Transcription',
				description: 'Render text output from speech transcription.'
			},
			{
				slug: 'voice-selector',
				title: 'Voice Selector',
				description: 'Choose synthesis voices for generated speech.'
			}
		]
	},
	{
		id: 'workflow',
		title: 'Workflow',
		description: 'Canvas and graph-oriented process building blocks.',
		items: [
			{
				slug: 'canvas',
				title: 'Canvas',
				description: 'Host diagram and workflow surfaces.'
			},
			{
				slug: 'connection',
				title: 'Connection',
				description: 'Render links between nodes or workflow entities.'
			},
			{
				slug: 'controls',
				title: 'Controls',
				description: 'Add zoom, pan, and diagram control affordances.'
			},
			{
				slug: 'edge',
				title: 'Edge',
				description: 'Draw graph edges between related nodes.'
			},
			{
				slug: 'node',
				title: 'Node',
				description: 'Render workflow node containers and content.'
			},
			{
				slug: 'panel',
				title: 'Panel',
				description: 'Display side panels for node or canvas details.'
			},
			{
				slug: 'toolbar',
				title: 'Toolbar',
				description: 'Provide workflow actions and tool controls.'
			}
		]
	},
	{
		id: 'utilities',
		title: 'Utilities',
		description: 'Small helpers commonly used across AI experiences.',
		items: [
			{
				slug: 'image',
				title: 'Image',
				description: 'Render media content in AI interfaces.'
			},
			{
				slug: 'open-in-chat',
				title: 'Open in Chat',
				description: 'Link users from docs or pages into chat flows.'
			}
		]
	}
];

export const ALL_COMPONENT_DOCS = COMPONENT_DOC_SECTIONS.flatMap((section) => section.items);

export const COMPONENT_DOC_COUNT = ALL_COMPONENT_DOCS.length;
