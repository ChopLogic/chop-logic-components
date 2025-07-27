import { ChopLogicFormData, ChopLogicFormInputParams } from '../../models';
import { default as React } from '../../../node_modules/react';
export interface ChopLogicFormContextProps {
    onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
    initialValues?: ChopLogicFormData;
    resetSignal?: number;
}
export declare const ChopLogicFormContext: React.Context<ChopLogicFormContextProps>;
