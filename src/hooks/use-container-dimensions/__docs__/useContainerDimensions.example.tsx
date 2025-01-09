import { useRef } from 'react';
import { ExampleDivContainer } from '@elements/styled/ExampleDivContainer.styled';
import { useChopLogicTheme, useContainerDimensions } from '@hooks';

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
