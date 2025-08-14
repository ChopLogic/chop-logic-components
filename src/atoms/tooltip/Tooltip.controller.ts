import { useAutoClose, useClickOutside, useElementIds, useKeyPress, useTooltipPosition } from '@hooks';
import { MouseEvent, useRef, useState } from 'react';

type Params = {
  autoClose: boolean;
  autoCloseDelay: number;
  id?: string;
};

export const useChopLogicTooltipController = ({ id, autoClose, autoCloseDelay }: Params) => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  const { elementId } = useElementIds(id);

  const closeTooltip = () => setIsOpened(false);
  const openTooltip = () => setIsOpened(true);
  const toggleTooltip = () => setIsOpened(!isOpened);
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    toggleTooltip();
  };

  useKeyPress({ keyCode: 'Escape', ref: tooltipRef, onKeyPress: closeTooltip });
  useClickOutside({ ref: tooltipRef, onClickOutsideHandler: closeTooltip, dependentRef: wrapperRef });
  useAutoClose({
    isOpened,
    onClose: closeTooltip,
    autoClose,
    autoCloseDelay,
  });

  return {
    elementId,
    openTooltip,
    closeTooltip,
    toggleTooltip,
    handleContextMenu,
    top,
    left,
    isOpened,
    wrapperRef,
    tooltipRef,
  };
};
