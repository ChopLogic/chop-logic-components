import { useRef } from 'react';
import styled from 'styled-components';

import { useChopLogicTheme, useContainerDimensions } from '@/hooks';
import { ChopLogicTheme } from '@/models';

const StyledDiv = styled.div<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapBig};
  cursor: pointer;
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  border: ${(props) => props.$theme.borderLight};
`;

const UseContainerDimensionsExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <StyledDiv ref={ref} $theme={theme}>
      Width: {width}px, Height: {height}px
    </StyledDiv>
  );
};

export default UseContainerDimensionsExample;
