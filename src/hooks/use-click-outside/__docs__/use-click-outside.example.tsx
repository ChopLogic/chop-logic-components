import styles from '@__docs__/styles/Container.module.scss';
import { useRef } from 'react';

import { useClickOutside } from '../use-click-outside';

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
