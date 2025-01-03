import { ExampleDivContainer } from '@elements/styled/ExampleDivContainer.styled';
import { useChopLogicTheme } from '@hooks';

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
