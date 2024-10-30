import { default as React } from '../../../node_modules/react';

type useKeyPressParams = {
  keyCode: string;
  ref: React.RefObject<HTMLDivElement>;
  onKeyPress: () => void;
};
export declare const useKeyPress: ({ ref, keyCode, onKeyPress }: useKeyPressParams) => void;
export {};
