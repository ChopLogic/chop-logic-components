import styles from '@__docs__/styles/Container.module.scss';
import type { FC, PropsWithChildren } from 'react';

import Portal from '../Portal';

export const PortalExample: FC<PropsWithChildren> = (props) => {
  return (
    <Portal>
      <div className={styles.container}>{props.children}</div>
    </Portal>
  );
};
