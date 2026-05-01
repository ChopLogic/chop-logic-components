import { FormInputParams, FormValidationState, FormValues } from '../../../types';
export declare function getInitialValidationState(data?: FormValues): FormValidationState;
export declare function updateValidationState(state: FormValidationState, params: FormInputParams): FormValidationState;
export declare function isFormDataValid(state: FormValidationState): boolean;
