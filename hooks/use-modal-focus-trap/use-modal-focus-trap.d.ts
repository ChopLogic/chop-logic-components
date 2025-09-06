import { RefObject } from '../../../node_modules/react';
type ModalFocusTrapParams = {
    modalRef: RefObject<HTMLDivElement | null>;
    isOpened: boolean;
};
export declare const useModalFocusTrap: ({ modalRef, isOpened }: ModalFocusTrapParams) => void;
export {};
