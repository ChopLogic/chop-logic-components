import { useRef } from 'react';
import { ExampleDivContainer } from '@css/__docs__/ExampleDivContainer.styled.tsx';
import { useChopLogicTheme } from '@hooks';

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
