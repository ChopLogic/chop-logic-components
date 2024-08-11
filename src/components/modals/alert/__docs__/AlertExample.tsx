import { useState } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';

import ChopLogicAlert from '../Alert';

const Example = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicButton onClick={handleOpen} view='danger'>
        Open Alert
      </ChopLogicButton>
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title='Alert Title' message='This is an alert message.' mode='info' />
    </div>
  );
};

export default Example;
