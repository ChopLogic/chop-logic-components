import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { PropsWithChildren, useRef, useState } from 'react';
import ChopLogicPortal from 'components/elements/portal/Portal';
import { useTooltipPosition } from 'hooks/use-tooltip-position';

export type ChopLogicTooltipProps = PropsWithChildren & React.HTMLAttributes<HTMLSpanElement>;

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({ className, children, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  console.log('top', top, 'left', left);

  const handleContainerClick = () => {
    setIsOpened(!isOpened);
  };

  const tooltipClass = createClassName([className, styles.tooltip]);

  return (
    <span className={styles.container} {...rest} onClick={handleContainerClick} tabIndex={-1} ref={wrapperRef}>
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <div className={tooltipClass} style={{ top: top, left: left }} ref={tooltipRef}>
            TooltipTooltipTooltipTooltipTooltip
          </div>
        </ChopLogicPortal>
      )}
    </span>
  );
};

export default ChopLogicTooltip;
