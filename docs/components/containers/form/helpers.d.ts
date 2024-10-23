import { ChopLogicFormData, ChopLogicFormInputParams, ChopLogicFormValidationState } from './types';

export declare function getInitialValidationState(data?: ChopLogicFormData): ChopLogicFormValidationState;
export declare function updateValidationState(state: ChopLogicFormValidationState, params: ChopLogicFormInputParams): ChopLogicFormValidationState;
export declare function isFormDataValid(state: ChopLogicFormValidationState): boolean;
