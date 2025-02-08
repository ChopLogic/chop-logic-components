import { default as React } from '../../../../node_modules/react';
export declare const useChopLogicTooltipController: ({ id }: {
    id?: string;
}) => {
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
