import { RadioGroupOption } from '../../../types';
import { ChangeEventHandler, FC, KeyboardEventHandler, RefObject } from '../../../../node_modules/react';
export declare const RadioGroupOptionContainer: FC<{
    option: RadioGroupOption;
    ref: RefObject<HTMLInputElement | null>;
    name: string;
    isOptionDisabled: boolean;
    isOptionSelected: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    optionId: string;
    tabIndex: number;
}>;
