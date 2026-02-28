import '@__docs__/styles/Container.css';
import { type CSSProperties, type FC, useRef } from 'react';

import { useIsOverflow } from '../use-is-overflow';

const containerStyles: CSSProperties = {
  width: '400px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  border: '1px solid grey',
  padding: '1em',
};

export const UseIsOverflowExample: FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow({ ref: containerRef, dimension: 'width', isMounted: true });

  return (
    <div className="container">
      <div style={containerStyles} ref={containerRef}>
        {text}
      </div>
      {isWidthOverflow && <p>Text overflows the container.</p>}
    </div>
  );
};
