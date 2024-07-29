import { useRef, useState } from 'react';

import { useModalFocusTrap } from '..';

const Example = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open Modal</button>
      {isOpened && (
        <div ref={modalRef} tabIndex={-1}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type='text' placeholder='Focusable Input' />
        </div>
      )}
    </div>
  );
};

export default Example;
