import { ChopLogicPortal } from '@atoms';
import { ChopLogicTooltipContainer } from '@enums';
import { ChopLogicTooltipProps } from '@models';
import { getClassName } from '@utils';
import React from 'react';

import { useChopLogicTooltipController } from './Tooltip.controller.ts';
import styles from './Tooltip.module.scss';

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  children,
  tooltipContent,
  id,
  style,
  className,
  containerTag = ChopLogicTooltipContainer.Span,
  visibleOn = 'hover',
  autoClose = false,
  autoCloseDelay = 3000,
  ...rest
}) => {
  const ContainerComponent = containerTag;
  const { openTooltip, closeTooltip, toggleTooltip, handleContextMenu, elementId, top, left, isOpened, wrapperRef, tooltipRef } =
    useChopLogicTooltipController({ id, autoClose, autoCloseDelay });
  const tooltipClass = getClassName([styles.tooltip, className]);

  return (
    <ContainerComponent
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={visibleOn === 'click' ? toggleTooltip : undefined}
      onMouseOver={visibleOn === 'hover' ? openTooltip : undefined}
      onMouseLeave={visibleOn === 'hover' ? closeTooltip : undefined}
      onFocus={visibleOn === 'focus' ? openTooltip : undefined}
      onBlur={visibleOn === 'focus' ? closeTooltip : undefined}
      onContextMenu={visibleOn === 'contextmenu' ? (e: React.MouseEvent) => handleContextMenu(e) : undefined}
      tabIndex={-1}
      ref={wrapperRef}
      aria-describedby={elementId}
    >
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <div style={{ ...style, top, left }} ref={tooltipRef} role='tooltip' id={elementId} {...rest} className={tooltipClass}>
            {tooltipContent}
          </div>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
