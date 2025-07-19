import styles from '@styles/storybook/Container.module.scss';
import React from 'react';

import ChopLogicPortal from '../Portal.tsx';

export const PortalExample: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ChopLogicPortal>
      <div className={styles.container}>{props.children}</div>
    </ChopLogicPortal>
  );
};
