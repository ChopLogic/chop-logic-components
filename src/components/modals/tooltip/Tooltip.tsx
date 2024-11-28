import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicPortal from 'components/containers/portal';

import { useChopLogicTooltipController } from './controller';
import { StyledTooltip } from './Tooltip.styled';
import { ChopLogicTooltipProps } from './types';

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  children,
  tooltipContent,
  containerTag = 'span',
  visibleOn = 'hover',
  id,
  style,
  theme,
  ...rest
}) => {
  const ContainerComponent = containerTag;
  const { openTooltip, closeTooltip, toggleTooltip, handleContextMenu, elementId, top, left, isOpened, wrapperRef, tooltipRef } =
    useChopLogicTooltipController({ id });
  const themeValues = getChopLogicTheme(theme);

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
          <ThemeProvider theme={themeValues}>
            <StyledTooltip style={{ ...style, top, left }} ref={tooltipRef} role='tooltip' id={elementId} {...rest}>
              {tooltipContent}
            </StyledTooltip>
          </ThemeProvider>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
