import { Button } from '@atoms';
import { ButtonView } from '@enums';
import styles from '@styles/storybook/Container.module.scss';
import { useRef, useState } from 'react';

import { useModalFocusTrap } from '../use-modal-focus-trap';

export const UseModalFocusTrapExample = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div style={{ padding: '1rem' }}>
      <Button onClick={() => setIsOpened(true)} text='Open modal' view={ButtonView.Secondary} />
      {isOpened && (
        <div ref={modalRef} tabIndex={-1} className={styles.container}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type='text' placeholder='Focusable Input' />
        </div>
      )}
    </div>
  );
};
