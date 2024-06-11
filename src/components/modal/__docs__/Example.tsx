import React, { useState } from 'react';
import ChopLogicModal, { ChopLogicModalProps } from '../Modal';

const Example: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, title, className, openDelay }) => {
  const [modalOpen, setModalOpen] = useState(isOpened);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <ChopLogicModal isOpened={modalOpen} onClose={handleClose} title={title} className={className} openDelay={openDelay} />
    </>
  );
};

export default Example;
