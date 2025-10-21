import styles from '@styles/storybook/Container.module.scss';
import { useRef, useState } from 'react';

import { useTooltipPosition } from '../use-tooltip-position';

export const UseTooltipPositionExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <div
          className={styles.container}
          ref={tooltipRef}
          style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};
