import React, { useState } from 'react';
import ChopLogicModal, { ChopLogicModalProps } from '../Modal';
import { ChopLogicButton } from 'components/index';

const Example: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, title }) => {
  const [modalOpen, setModalOpen] = useState(isOpened);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    if (onClose) onClose();
  };

  const modalContent = (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque soluta ullam repudiandae facere dolore modi reiciendis
        doloribus tempore. Magnam veniam ducimus consectetur quasi vitae perferendis voluptatum quisquam numquam tempora.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ChopLogicButton text='Action' view='primary' />
        <ChopLogicButton text='Close modal' view='secondary' onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicButton text='Open modal' onClick={handleOpen} />
      <ChopLogicModal isOpened={modalOpen} onClose={handleClose} title={title}>
        {modalContent}
      </ChopLogicModal>
    </div>
  );
};

export default Example;
