import '@__docs__/styles/Container.css';
import { useRef } from 'react';

import { useContainerDimensions } from '../use-container-dimensions';

export const UseContainerDimensionsExample = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref} className="container">
      Width: {width}px, Height: {height}px
    </div>
  );
};
