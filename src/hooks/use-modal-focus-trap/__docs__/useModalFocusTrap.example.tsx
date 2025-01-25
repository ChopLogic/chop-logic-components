import { useRef, useState } from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicButtonView } from '@enums';
import { useChopLogicTheme } from '@hooks';

import { ExampleDivContainer } from '../../../__docs__/styles/ExampleDivContainer.styled.tsx';
import { useModalFocusTrap } from '..';

const UseModalFocusTrapExample = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const theme = useChopLogicTheme();

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div style={{ padding: '1rem' }}>
      <ChopLogicButton onClick={() => setIsOpened(true)} text='Open modal' view={ChopLogicButtonView.Flat} />
      {isOpened && (
        <ExampleDivContainer ref={modalRef} tabIndex={-1} $theme={theme}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type='text' placeholder='Focusable Input' />
        </ExampleDivContainer>
      )}
    </div>
  );
};

export default UseModalFocusTrapExample;
