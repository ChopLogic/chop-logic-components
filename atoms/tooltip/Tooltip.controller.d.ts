import { MouseEvent } from '../../../node_modules/react';
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
    handleContextMenu: (e: MouseEvent) => void;
    top: number;
    left: number;
    isOpened: boolean;
    wrapperRef: import('../../../node_modules/react').RefObject<null>;
    tooltipRef: import('../../../node_modules/react').RefObject<HTMLDivElement | null>;
};
export {};
