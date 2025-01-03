import React from 'react';
import { ChopLogicPortal } from '@components';
import { ChopLogicTooltipContainer } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicTooltipProps } from '@models';

import { useChopLogicTooltipController } from './controller';
import { StyledTooltip } from './Tooltip.styled';

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  children,
  tooltipContent,
  containerTag = ChopLogicTooltipContainer.Span,
  visibleOn = 'hover',
  id,
  style,
  ...rest
}) => {
  const ContainerComponent = containerTag;
  const theme = useChopLogicTheme();
  const { openTooltip, closeTooltip, toggleTooltip, handleContextMenu, elementId, top, left, isOpened, wrapperRef, tooltipRef } =
    useChopLogicTooltipController({ id });

  return (
    <ContainerComponent
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={visibleOn === 'click' ? toggleTooltip : undefined}
      onMouseOver={visibleOn === 'hover' ? openTooltip : undefined}
      onMouseLeave={visibleOn === 'hover' ? closeTooltip : undefined}
      onFocus={visibleOn === 'focus' ? openTooltip : undefined}
      onBlur={visibleOn === 'focus' ? closeTooltip : undefined}
      onContextMenu={visibleOn === 'contextmenu' ? (e: React.MouseEvent) => handleContextMenu(e) : undefined}
      tabIndex={0}
      ref={wrapperRef}
      aria-describedby={elementId}
    >
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <StyledTooltip style={{ ...style, top, left }} ref={tooltipRef} role='tooltip' id={elementId} $theme={theme} {...rest}>
            {tooltipContent}
          </StyledTooltip>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
