import { FormValues, SelectValue } from '../../../types';
export declare function getSelectInitialValue({ name, options, initialValues, defaultValue, }: {
    name: string;
    options: SelectValue[];
    initialValues?: FormValues;
    defaultValue?: string | number | readonly string[];
}): SelectValue | undefined;
