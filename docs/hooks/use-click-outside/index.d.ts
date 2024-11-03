import { default as React } from '../../../node_modules/react';

type UseClickOutsideParams = {
    ref: React.RefObject<HTMLDivElement>;
    onClickOutsideHandler: () => void;
    dependentRef?: React.RefObject<HTMLDivElement>;
};
export declare const useClickOutside: ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams) => void;
export {};
