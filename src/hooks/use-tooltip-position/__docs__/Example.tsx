import { useRef, useState } from 'react';

import { useTooltipPosition } from '..';

const Example = () => {
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
          ref={tooltipRef}
          style={{ position: 'absolute', top: `${top}px`, left: `${left}px`, border: '1px solid black', padding: '10px' }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

export default Example;
