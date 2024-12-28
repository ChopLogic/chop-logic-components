import { ChopLogicFormData, ChopLogicSelectValue } from '../../../models';

export declare function getSelectInitialValue({ name, options, initialValues, defaultValue, }: {
    name: string;
    options: ChopLogicSelectValue[];
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): ChopLogicSelectValue | undefined;
