import { useChopLogicTheme } from '@hooks';

import { ExampleDivContainer } from '../../../__docs__/styles/ExampleDivContainer.styled.tsx';
import { useWindowDimensions } from '..';

const UseWindowDimensionsExample = () => {
  const { width, height } = useWindowDimensions();
  const theme = useChopLogicTheme();

  return (
    <ExampleDivContainer $theme={theme}>
      <p>Window width: {width}px;</p>
      <p>Window height: {height}px;</p>
    </ExampleDivContainer>
  );
};

export default UseWindowDimensionsExample;
