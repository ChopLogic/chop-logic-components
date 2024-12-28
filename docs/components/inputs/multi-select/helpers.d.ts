import { ChopLogicFormData, ChopLogicMultiSelectValue, ChopLogicSelectValue } from '../../../models';

export declare function getMultiSelectInitialValues({ name, options, initialValues, defaultValue, }: {
    name: string;
    options: ChopLogicSelectValue[];
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): ChopLogicMultiSelectValue[];
export declare const getMultiSelectFormValues: (options: ChopLogicMultiSelectValue[]) => string[];
export declare const getMultiSelectUpdatedValues: (options: ChopLogicMultiSelectValue[], id: string) => ChopLogicMultiSelectValue[];
