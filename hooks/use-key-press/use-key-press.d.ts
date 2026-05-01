import { RefObject } from '../../../node_modules/react';
type useKeyPressParams = {
    keyCode: string;
    ref: RefObject<HTMLElement | null>;
    onKeyPress: () => void;
};
export declare const useKeyPress: ({ ref, keyCode, onKeyPress }: useKeyPressParams) => void;
export {};
