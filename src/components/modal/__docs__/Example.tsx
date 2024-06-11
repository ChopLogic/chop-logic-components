import React, { useState } from 'react';
import ChopLogicModal, { ChopLogicModalProps } from '../Modal';
import { ChopLogicButton } from 'components/index';

const Example: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, title, className, openDelay }) => {
  const [modalOpen, setModalOpen] = useState(isOpened);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    if (onClose) onClose();
  };

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
      <ChopLogicModal isOpened={modalOpen} onClose={handleClose} title={title} className={className} openDelay={openDelay} />
    </div>
  );
};

export default Example;
