import { ChopLogicFormData, ChopLogicFormInputParams } from '../../models';
export interface ChopLogicFormContextProps {
    onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
    initialValues?: ChopLogicFormData;
    resetSignal?: number;
}
export declare const ChopLogicFormContext: import('../../../node_modules/react').Context<ChopLogicFormContextProps>;
