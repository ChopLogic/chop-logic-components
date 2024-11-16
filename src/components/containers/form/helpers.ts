import { ChopLogicFormData, ChopLogicFormInputParams, ChopLogicFormValidationState } from './types';

export function getInitialValidationState(data?: ChopLogicFormData): ChopLogicFormValidationState {
  if (!data) return [];

  return Object.keys(data).map((key) => [key, true]);
}

export function updateValidationState(state: ChopLogicFormValidationState, params: ChopLogicFormInputParams): ChopLogicFormValidationState {
  if (params?.valid === undefined) return state;

  return state.map((item) => {
    if (item[0] !== params.name) return item;
    return [item[0], !!params?.valid];
  });
}

export function isFormDataValid(state: ChopLogicFormValidationState): boolean {
  return state.every((item) => item[1]);
}
