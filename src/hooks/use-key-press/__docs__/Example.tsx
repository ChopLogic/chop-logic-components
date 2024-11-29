import { useRef } from 'react';

import { useKeyPress } from '@/hooks';

const Example = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    console.log('Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0}>
      Press Enter key
    </div>
  );
};

export default Example;
