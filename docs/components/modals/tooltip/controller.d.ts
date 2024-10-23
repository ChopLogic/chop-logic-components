/// <reference types="react" />
export declare const useChopLogicTooltipController: ({ id }: { id?: string }) => {
  elementId: string;
  openTooltip: () => void;
  closeTooltip: () => void;
  toggleTooltip: () => void;
  handleContextMenu: (e: React.MouseEvent) => void;
  top: number;
  left: number;
  isOpened: boolean;
  wrapperRef: import('../../../../node_modules/react').MutableRefObject<null>;
  tooltipRef: import('../../../../node_modules/react').RefObject<HTMLDivElement>;
};
