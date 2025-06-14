import { useRef, useState } from 'react';
import { ChopLogicButtonView } from '@enums';
import styles from '@styles/storybook/Container.module.scss';
import { useModalFocusTrap } from '../use-modal-focus-trap';
import { ChopLogicButton } from '@molecules';

export const UseModalFocusTrapExample = () => {
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
