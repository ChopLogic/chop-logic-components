import { default as React } from '../../../node_modules/react';

type UseClickOutsideParams = {
    ref: React.RefObject<HTMLElement>;
    onClickOutsideHandler: () => void;
    dependentRef?: React.RefObject<HTMLElement>;
};
export declare const useClickOutside: ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams) => void;
export {};
