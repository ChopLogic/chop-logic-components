import { useWindowDimensions } from '..';

const Example = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default Example;
