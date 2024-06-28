import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { PropsWithChildren, useRef, useState } from 'react';
import ChopLogicPortal from 'components/elements/portal/Portal';
import { useTooltipPosition } from 'hooks/use-tooltip-position';
import { useKeyPress } from 'hooks/use-key-press';
import { useClickOutside } from 'hooks/use-click-outside';

export type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    containerTag?: 'span' | 'div' | 'p' | 'strong' | 'em';
    visibleOn: 'hover' | 'click' | 'focus';
  };

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  className,
  children,
  tooltipContent,
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

  useKeyPress({ keyCode: 'Escape', ref: tooltipRef, onKeyPress: closeTooltip });
  useClickOutside({ ref: tooltipRef, onClickOutsideHandler: closeTooltip, dependentRef: wrapperRef });

  const handleContainerClick = () => {
    if (visibleOn === 'click') {
      openTooltip();
    }
  };

  const tooltipClass = createClassName([className, styles.tooltip]);

  return (
    <ContainerComponent
      className={styles.container}
      {...rest}
      onClick={handleContainerClick}
      onMouseOver={visibleOn === 'hover' ? openTooltip : undefined}
      onMouseLeave={visibleOn === 'hover' ? closeTooltip : undefined}
      tabIndex={0}
      ref={wrapperRef}
    >
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <div className={tooltipClass} style={{ top: top, left: left }} ref={tooltipRef}>
            {tooltipContent}
          </div>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
