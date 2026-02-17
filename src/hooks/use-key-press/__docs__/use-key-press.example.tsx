import '@__docs__/styles/Container.css';
import { useKeyPress } from '@hooks';
import { useRef } from 'react';

export const UseKeyPressExample = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    alert('Space Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Space', onKeyPress: handleKeyPress });

  return (
    <div className="container">
      <input type="text" ref={ref} placeholder="Focus and Press Space key" />
    </div>
  );
};
