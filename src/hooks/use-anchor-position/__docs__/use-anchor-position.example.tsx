import '@__docs__/styles/Container.css';
import { useRef, useState } from 'react';

import { useAnchorPosition } from '../use-anchor-position';

export const UseAnchorPositionExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const anchorRef = useRef(null);
  const floatingRef = useRef(null);
  const { top, left } = useAnchorPosition({
    anchorRef,
    floatingRef,
    isOpened,
  });

  return (
    <div>
      <button type="button" onClick={() => setIsOpened(!isOpened)} ref={anchorRef}>
        Click me
      </button>
      {isOpened && (
        <div
          className="container"
          ref={floatingRef}
          style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}
        >
          Floating Content
        </div>
      )}
    </div>
  );
};
