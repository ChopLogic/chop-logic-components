import styles from '@__docs__/styles/Container.module.scss';
import { useKeyPress } from '@hooks';
import { useRef } from 'react';

export const UseKeyPressExample = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    alert('Space Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Space', onKeyPress: handleKeyPress });

  return (
    <div className={styles.container}>
      <input type="text" ref={ref} placeholder="Focus and Press Space key" />
    </div>
  );
};
