import { useState } from 'react';
import ChopLogicAlert from '../Alert';
import ChopLogicButton from 'components/controls/button/Button';

const Example = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <>
      <ChopLogicButton onClick={handleOpen} view='danger'>
        Toggle Alert
      </ChopLogicButton>
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title='Alert Title' message='This is an alert message.' mode='info' />
    </>
  );
};

export default Example;
