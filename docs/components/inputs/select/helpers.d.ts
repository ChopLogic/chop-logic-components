import { SelectValue } from '../../../../../../../../../src/utils/types.ts';
import { ChopLogicFormData } from '../../../../../../../../../src/components/containers/form/types';

export declare function getSelectInitialValue({ name, options, initialValues, defaultValue, }: {
    name: string;
    options: SelectValue[];
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): SelectValue | undefined;
