import { ChopLogicFormData } from '../../../../../../../../../src/components/containers/form/types';
import { SelectValue } from '../select/types';
import { MultiSelectValue } from './types';

export declare function getMultiSelectInitialValues({ name, options, initialValues, defaultValue, }: {
    name: string;
    options: SelectValue[];
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): MultiSelectValue[];
export declare const getMultiSelectFormValues: (options: MultiSelectValue[]) => string[];
export declare const getMultiSelectUpdatedValues: (options: MultiSelectValue[], id: string) => MultiSelectValue[];
