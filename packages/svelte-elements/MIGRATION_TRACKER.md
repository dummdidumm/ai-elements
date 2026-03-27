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

- [ ] attachments
- [ ] chain-of-thought
- [ ] checkpoint
- [ ] confirmation
- [ ] context
- [ ] conversation
- [ ] inline-citation
- [ ] message
- [ ] model-selector
- [ ] prompt-input
- [ ] queue
- [ ] sources
- [ ] suggestion
- [ ] task

### Code

- [ ] artifact
- [ ] commit
- [ ] environment-variables
- [ ] file-tree
- [ ] jsx-preview
- [ ] package-info
- [ ] schema-display
- [ ] snippet
- [ ] stack-trace
- [ ] terminal
- [ ] test-results
- [ ] web-preview

### Voice

- [ ] audio-player
- [ ] mic-selector
- [ ] persona
- [ ] speech-input
- [ ] transcription
- [ ] voice-selector

### Workflow

- [ ] canvas
- [ ] connection
- [ ] controls
- [ ] edge
- [ ] node
- [ ] panel
- [ ] toolbar

### Utilities

- [ ] image
- [ ] open-in-chat

## Full source parity checklist

- [x] agent
- [ ] artifact
- [ ] attachments
- [ ] audio-player
- [ ] canvas
- [ ] chain-of-thought
- [ ] checkpoint
- [x] code-block
- [ ] commit
- [ ] confirmation
- [ ] connection
- [ ] context
- [ ] controls
- [ ] conversation
- [ ] edge
- [ ] environment-variables
- [ ] file-tree
- [ ] image
- [ ] inline-citation
- [ ] jsx-preview
- [ ] message
- [ ] mic-selector
- [ ] model-selector
- [ ] node
- [ ] open-in-chat
- [ ] package-info
- [ ] panel
- [ ] persona
- [x] plan
- [ ] prompt-input
- [ ] queue
- [x] reasoning
- [x] sandbox
- [ ] schema-display
- [x] shimmer
- [ ] snippet
- [ ] sources
- [ ] speech-input
- [ ] stack-trace
- [ ] suggestion
- [ ] task
- [ ] terminal
- [ ] test-results
- [ ] toolbar
- [x] tool
- [ ] transcription
- [ ] voice-selector
- [ ] web-preview
