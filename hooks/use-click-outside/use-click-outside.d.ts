import { RefObject } from '../../../node_modules/react';
type UseClickOutsideParams = {
    ref: RefObject<HTMLElement | null>;
    onClickOutsideHandler: () => void;
    dependentRef?: RefObject<HTMLElement | null>;
};
export declare const useClickOutside: ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams) => void;
export {};
