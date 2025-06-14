import { default as React } from '../../node_modules/react';
type ModalFocusTrapParams = {
    modalRef: React.RefObject<HTMLDivElement | null>;
    isOpened: boolean;
};
export declare const useModalFocusTrap: ({ modalRef, isOpened }: ModalFocusTrapParams) => void;
export {};
