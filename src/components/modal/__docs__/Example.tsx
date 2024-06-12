import React, { useState } from 'react';
import ChopLogicModal, { ChopLogicModalProps } from '../Modal';
import { ChopLogicButton, ChopLogicSelect } from 'components/index';
import { SELECT_LANGUAGES } from '__mocks__/select-values';

const Example: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, title, className, openDelay }) => {
  const [modalOpen, setModalOpen] = useState(isOpened);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    if (onClose) onClose();
  };

  const modalContent = (
    <div>
      <p>Modal content</p>
      <ChopLogicSelect id='example-select' name='laguage' values={SELECT_LANGUAGES} label='Select your language' />
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
      <ChopLogicModal isOpened={modalOpen} onClose={handleClose} title={title} className={className} openDelay={openDelay}>
        {modalContent}
      </ChopLogicModal>
    </div>
  );
};

export default Example;
