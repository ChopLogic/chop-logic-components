import { Portal } from '@components/atoms';
import { TooltipContainer } from '@enums';
import type { TooltipProps } from '@types';
import { getClassName } from '@utils';
import type { FC, MouseEvent } from 'react';

import { useTooltipController } from './Tooltip.controller';
import styles from './Tooltip.module.scss';

const Tooltip: FC<TooltipProps> = ({
  children,
  tooltipContent,
  id,
  style,
  className,
  containerTag = TooltipContainer.Span,
  visibleOn = 'hover',
  autoClose = false,
  autoCloseDelay = 3000,
  ...rest
}) => {
  const ContainerComponent = containerTag;
  const {
    openTooltip,
    closeTooltip,
    toggleTooltip,
    handleContextMenu,
    elementId,
    top,
    left,
    isOpened,
    wrapperRef,
    tooltipRef,
  } = useTooltipController({ id, autoClose, autoCloseDelay });
  const tooltipClass = getClassName([styles.tooltip, className]);

  return (
    <ContainerComponent
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={visibleOn === 'click' ? toggleTooltip : undefined}
      onMouseOver={visibleOn === 'hover' ? openTooltip : undefined}
      onMouseLeave={visibleOn === 'hover' ? closeTooltip : undefined}
      onFocus={visibleOn === 'focus' ? openTooltip : undefined}
      onBlur={visibleOn === 'focus' ? closeTooltip : undefined}
      onContextMenu={
        visibleOn === 'contextmenu' ? (e: MouseEvent) => handleContextMenu(e) : undefined
      }
      tabIndex={-1}
      ref={wrapperRef}
      aria-describedby={elementId}
    >
      {children}
      {isOpened && (
        <Portal>
          <div
            style={{ ...style, top, left }}
            ref={tooltipRef}
            role="tooltip"
            id={elementId}
            {...rest}
            className={tooltipClass}
          >
            {tooltipContent}
          </div>
        </Portal>
      )}
    </ContainerComponent>
  );
};

export default Tooltip;
