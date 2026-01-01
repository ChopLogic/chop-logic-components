import type { FormInputParams, FormValidationState, FormValues } from '@models';

export function getInitialValidationState(data?: FormValues): FormValidationState {
  if (!data) return [];

  return Object.keys(data).map((key) => [key, true]);
}

export function updateValidationState(
  state: FormValidationState,
  params: FormInputParams,
): FormValidationState {
  if (params?.valid === undefined) return state;

  return state.map((item) => {
    if (item[0] !== params.name) return item;
    return [item[0], !!params?.valid];
  });
}

export function isFormDataValid(state: FormValidationState): boolean {
  return state.every((item) => item[1]);
}
