import React from 'react';
import { ChopLogicPortal } from '@components';
import styles from '@styles/storybook/Container.module.scss';

const PortalExample: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ChopLogicPortal>
      <div className={styles.container}>{props.children}</div>
    </ChopLogicPortal>
  );
};

export default PortalExample;
