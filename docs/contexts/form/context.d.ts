import { default as React } from '../../../node_modules/react';
import { ChopLogicFormData, ChopLogicFormInputParams } from '../../models';
export interface ChopLogicFormContextProps {
    onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
    initialValues?: ChopLogicFormData;
    resetSignal?: number;
}
export declare const ChopLogicFormContext: React.Context<ChopLogicFormContextProps>;
