import { useContainerDimensions } from 'hooks/index';
import { useRef } from 'react';

const Example = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref}>
      Width: {width}px, Height: {height}px
    </div>
  );
};

export default Example;
