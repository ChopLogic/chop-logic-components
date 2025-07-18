import { useRef } from 'react';
import styles from '@styles/storybook/Container.module.scss';
import { useClickOutside } from '../use-click-outside.ts';

export const UseClickOutsideExample = () => {
  const ref = useRef(null);
  useClickOutside({
    ref,
    onClickOutsideHandler: () => alert('Clicked outside!'),
  });

  return (
    <div className={styles.container} ref={ref}>
      Click outside this box to trigger the handler.
    </div>
  );
};
