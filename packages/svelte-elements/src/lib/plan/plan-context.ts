import { getContext, setContext } from 'svelte';

const PLAN_CONTEXT_KEY = Symbol('plan');

export type PlanContextValue = {
	isStreaming: boolean;
};

export function setPlanContext(value: PlanContextValue): void {
	setContext(PLAN_CONTEXT_KEY, value);
}

export function usePlan(): PlanContextValue {
	const ctx = getContext<PlanContextValue | undefined>(PLAN_CONTEXT_KEY);
	if (!ctx) {
		throw new Error('Plan components must be used within Plan');
	}
	return ctx;
}
