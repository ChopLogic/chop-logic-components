import { useRef } from 'react';
import styled from 'styled-components';

import { useChopLogicTheme } from '@/hooks';
import { ChopLogicTheme } from '@/models';

import { useClickOutside } from '..';

const StyledDiv = styled.div<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapBig};
  cursor: pointer;
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  border: ${(props) => props.$theme.borderLight};
`;

const UseClickOutsideExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();
  useClickOutside({
    ref,
    onClickOutsideHandler: () => alert('Clicked outside!'),
  });

  return (
    <StyledDiv $theme={theme} ref={ref}>
      Click outside this box to trigger the handler.
    </StyledDiv>
  );
};

export default UseClickOutsideExample;
