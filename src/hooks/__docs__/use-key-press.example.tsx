import { useRef } from 'react';
import { useKeyPress } from '@hooks';
import styles from '@styles/storybook/Container.module.scss';

export const UseKeyPressExample = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    alert('Enter Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0} className={styles.container}>
      Press Enter key
    </div>
  );
};
