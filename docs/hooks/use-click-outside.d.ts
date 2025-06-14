import { default as React } from '../../node_modules/react';
type UseClickOutsideParams = {
    ref: React.RefObject<HTMLElement | null>;
    onClickOutsideHandler: () => void;
    dependentRef?: React.RefObject<HTMLElement | null>;
};
export declare const useClickOutside: ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams) => void;
export {};
