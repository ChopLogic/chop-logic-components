import { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';
import { useTooltipPosition } from 'hooks/use-tooltip-position';

import ChopLogicPortal from 'components/misc/portal';

import { StyledTooltip } from './Tooltip.styled';
import { ChopLogicTooltipProps } from './types';

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  children,
  tooltipContent,
  id,
  containerTag = 'span',
  visibleOn = 'hover',
  ...rest
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  const ContainerComponent = containerTag;

  const closeTooltip = () => setIsOpened(false);
  const openTooltip = () => setIsOpened(true);
  const toggleTooltip = () => setIsOpened(!isOpened);
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTooltip();
  };

  useKeyPress({ keyCode: 'Escape', ref: tooltipRef, onKeyPress: closeTooltip });
  useClickOutside({ ref: tooltipRef, onClickOutsideHandler: closeTooltip, dependentRef: wrapperRef });

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
      {...rest}
      ref={wrapperRef}
      aria-describedby={id}
    >
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <StyledTooltip style={{ top, left }} ref={tooltipRef} role='tooltip' id={id}>
            {tooltipContent}
          </StyledTooltip>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
