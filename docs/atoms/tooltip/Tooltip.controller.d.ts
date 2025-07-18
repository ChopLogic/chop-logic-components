import { default as React } from '../../../node_modules/react';
type Params = {
    autoClose: boolean;
    autoCloseDelay: number;
    id?: string;
};
export declare const useChopLogicTooltipController: ({ id, autoClose, autoCloseDelay }: Params) => {
    elementId: string;
    openTooltip: () => void;
    closeTooltip: () => void;
    toggleTooltip: () => void;
    handleContextMenu: (e: React.MouseEvent) => void;
    top: number;
    left: number;
    isOpened: boolean;
    wrapperRef: React.RefObject<null>;
    tooltipRef: React.RefObject<HTMLDivElement | null>;
};
export {};
