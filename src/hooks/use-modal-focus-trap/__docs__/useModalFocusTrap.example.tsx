import { useRef, useState } from 'react';
import { ChopLogicButton } from '@components';
import { ExampleDivContainer } from '@css/__docs__/ExampleDivContainer.styled.tsx';
import { ChopLogicButtonView } from '@enums';
import { useChopLogicTheme } from '@hooks';

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
