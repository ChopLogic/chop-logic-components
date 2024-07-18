import { useState } from 'react';
import ChopLogicAlert from '../Alert';

const Example = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClose = () => setIsOpened(false);

  return <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title='Alert Title' message='This is an alert message.' mode='info' />;
};

export default Example;
