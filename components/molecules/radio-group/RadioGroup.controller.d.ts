import { RadioGroupOption } from '../../../types';
import { KeyboardEvent, RefObject } from '../../../../node_modules/react';
export interface RadioGroupNavigationParams {
    options: RadioGroupOption[];
    disabled?: boolean;
    isLoading?: boolean;
}
export declare function useRadioGroupNavigation({ options, disabled, isLoading, }: RadioGroupNavigationParams): {
    handleKeyDown: (event: KeyboardEvent<HTMLInputElement>, currentIndex: number, refs: RefObject<HTMLInputElement | null>[]) => void;
    getNextEnabledIndex: (currentIndex: number, direction: 1 | -1) => number;
};
