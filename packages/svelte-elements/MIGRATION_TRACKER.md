# Svelte AI Elements Migration Tracker

This tracker mirrors `packages/elements/src/*.tsx` and follows dependency-first order.

## Foundational dependency chain

- [x] shimmer
- [x] code-block (language picker: native `CodeBlockLanguageSelector` + `CodeBlockLanguageSelectorItem` instead of Radix/shadcn `Select` compound parts)
- [x] tool (depends on code-block)
- [x] plan (depends on shimmer)
- [x] reasoning (depends on shimmer)
- [x] agent (depends on code-block)
- [x] sandbox (depends on tool)

## Remaining components by docs groups

### Chatbot

- [x] attachments
- [x] chain-of-thought
- [x] checkpoint
- [x] confirmation
- [x] context
- [x] conversation
- [x] inline-citation
- [x] message
- [x] model-selector
- [x] prompt-input
- [x] queue
- [x] sources
- [x] suggestion
- [x] task

### Code

- [x] artifact
- [x] commit
- [x] environment-variables
- [x] file-tree
- [x] jsx-preview
- [x] package-info
- [x] schema-display
- [x] snippet
- [x] stack-trace
- [x] terminal
- [x] test-results
- [x] web-preview

### Voice

- [x] audio-player
- [x] mic-selector
- [x] persona
- [x] speech-input
- [x] transcription
- [x] voice-selector

### Workflow

- [x] canvas
- [x] connection
- [x] controls
- [x] edge
- [x] node
- [x] panel
- [x] toolbar

### Utilities

- [x] image
- [x] open-in-chat

## Full source parity checklist

- [x] agent
- [x] artifact
- [x] attachments
- [x] audio-player
- [x] canvas
- [x] chain-of-thought
- [x] checkpoint
- [x] code-block
- [x] commit
- [x] confirmation
- [x] connection
- [x] context
- [x] controls
- [x] conversation
- [x] edge
- [x] environment-variables
- [x] file-tree
- [x] image
- [x] inline-citation
- [x] jsx-preview
- [x] message
- [x] mic-selector
- [x] model-selector
- [x] node
- [x] open-in-chat
- [x] package-info
- [x] panel
- [x] persona
- [x] plan
- [x] prompt-input
- [x] queue
- [x] reasoning
- [x] sandbox
- [x] schema-display
- [x] shimmer
- [x] snippet
- [x] sources
- [x] speech-input
- [x] stack-trace
- [x] suggestion
- [x] task
- [x] terminal
- [x] test-results
- [x] toolbar
- [x] tool
- [x] transcription
- [x] voice-selector
- [x] web-preview

## Parity notes / intentional deviations

- `audio-player`: React `media-chrome/react` composition is not part of this Svelte package baseline. Port provides a styled Svelte container API surface for composition.
- `persona`: React Rive/WebGL runtime integration is intentionally replaced with a lightweight visual placeholder component in Svelte.
- `speech-input`: Browser speech-recognition/media-recorder orchestration from React is intentionally simplified to a baseline interactive Svelte control.
- `mic-selector` and `voice-selector`: React command/dialog/popover controlled integrations are simplified to baseline composable Svelte wrappers.
- `canvas`, `connection`, `edge`, `node`, `panel`, `toolbar`, `controls`: React Flow-specific behavior is adapted to minimal Svelte primitives because `@xyflow/react` patterns are React-only.
- `jsx-preview`: React `react-jsx-parser` runtime parsing is not directly portable; Svelte port exposes slot-based rendering instead.
- `terminal`: React ANSI rendering dependency (`ansi-to-react`) is omitted; consumer-provided formatted output is supported through children.
