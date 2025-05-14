import { useRef, useState } from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicButtonView } from '@enums';
import { useModalFocusTrap } from '..';
import styles from '@styles/storybook/Container.module.scss';

const UseModalFocusTrapExample = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div style={{ padding: '1rem' }}>
      <ChopLogicButton onClick={() => setIsOpened(true)} text='Open modal' view={ChopLogicButtonView.Flat} />
      {isOpened && (
        <div ref={modalRef} tabIndex={-1} className={styles.container}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type='text' placeholder='Focusable Input' />
        </div>
      )}
    </div>
  );
};

export default UseModalFocusTrapExample;
