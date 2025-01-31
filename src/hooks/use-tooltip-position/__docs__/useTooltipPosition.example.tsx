import { useRef, useState } from 'react';
import { ExampleDivContainer } from '@css/__docs__/ExampleDivContainer.styled.tsx';
import { useChopLogicTheme } from '@hooks';

import { useTooltipPosition } from '..';

const UseTooltipPositionExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  const theme = useChopLogicTheme();

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <ExampleDivContainer $theme={theme} ref={tooltipRef} style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}>
          Tooltip Content
        </ExampleDivContainer>
      )}
    </div>
  );
};

export default UseTooltipPositionExample;
