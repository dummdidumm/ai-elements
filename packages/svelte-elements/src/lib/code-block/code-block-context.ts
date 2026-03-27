import { getContext, setContext } from 'svelte';

export const CODE_BLOCK_CONTEXT_KEY = Symbol('code-block');

export type CodeBlockContextValue = {
	readonly code: string;
};

export function setCodeBlockContext(value: CodeBlockContextValue) {
	setContext(CODE_BLOCK_CONTEXT_KEY, value);
}

export function getCodeBlockContext(): CodeBlockContextValue {
	const value = getContext<CodeBlockContextValue | undefined>(CODE_BLOCK_CONTEXT_KEY);
	if (!value) {
		return { code: '' };
	}
	return value;
}
