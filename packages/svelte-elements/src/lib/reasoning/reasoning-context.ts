import { getContext, setContext } from 'svelte';

const REASONING_CONTEXT_KEY = Symbol('reasoning');

export type ReasoningContextValue = {
	isStreaming: boolean;
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	duration: number | undefined;
};

export function setReasoningContext(value: ReasoningContextValue): void {
	setContext(REASONING_CONTEXT_KEY, value);
}

export function useReasoning(): ReasoningContextValue {
	const ctx = getContext<ReasoningContextValue | undefined>(REASONING_CONTEXT_KEY);
	if (!ctx) {
		throw new Error('Reasoning components must be used within Reasoning');
	}
	return ctx;
}
