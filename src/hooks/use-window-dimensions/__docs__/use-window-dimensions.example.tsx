import '@__docs__/styles/Container.css';

import { useWindowDimensions } from '../use-window-dimensions';

export const UseWindowDimensionsExample = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="container">
      <p>Window width: {width}px;</p>
      <p>Window height: {height}px;</p>
    </div>
  );
};
