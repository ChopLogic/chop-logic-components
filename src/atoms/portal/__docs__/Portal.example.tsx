import styles from '@styles/storybook/Container.module.scss';
import { FC, PropsWithChildren } from 'react';

import ChopLogicPortal from '../Portal.tsx';

export const PortalExample: FC<PropsWithChildren> = (props) => {
  return (
    <ChopLogicPortal>
      <div className={styles.container}>{props.children}</div>
    </ChopLogicPortal>
  );
};
