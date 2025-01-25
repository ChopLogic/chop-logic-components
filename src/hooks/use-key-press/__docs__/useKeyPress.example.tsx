import { useRef } from 'react';
import { useChopLogicTheme, useKeyPress } from '@hooks';

import { ExampleDivContainer } from '../../../__docs__/styles/ExampleDivContainer.styled.tsx';

const UseKeyPressExample = () => {
  const ref = useRef(null);
  const theme = useChopLogicTheme();

  const handleKeyPress = () => {
    alert('Enter Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <ExampleDivContainer ref={ref} tabIndex={0} $theme={theme}>
      Press Enter key
    </ExampleDivContainer>
  );
};

export default UseKeyPressExample;
