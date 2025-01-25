import { useRef } from 'react';
import { useChopLogicTheme, useContainerDimensions } from '@hooks';

import { ExampleDivContainer } from '../../../__docs__/styles/ExampleDivContainer.styled.tsx';

const UseContainerDimensionsExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <ExampleDivContainer ref={ref} $theme={theme}>
      Width: {width}px, Height: {height}px
    </ExampleDivContainer>
  );
};

export default UseContainerDimensionsExample;
