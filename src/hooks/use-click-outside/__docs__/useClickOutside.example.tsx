import { useRef } from 'react';
import { useChopLogicTheme } from '@hooks';

import { ExampleDivContainer } from '../../../__docs__/styles/ExampleDivContainer.styled.tsx';
import { useClickOutside } from '..';

const UseClickOutsideExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();
  useClickOutside({
    ref,
    onClickOutsideHandler: () => alert('Clicked outside!'),
  });

  return (
    <ExampleDivContainer $theme={theme} ref={ref}>
      Click outside this box to trigger the handler.
    </ExampleDivContainer>
  );
};

export default UseClickOutsideExample;
