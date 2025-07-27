import { ChopLogicLoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import React from 'react';

import ChopLogicLoader from '../Loader';
import styles from './Loader.module.scss';

export const LoaderExample: React.FC<ChopLogicLoaderProps> = () => {
  const loaders = Object.values(ChopLogicLoaderView);

  return (
    <div className={styles.grid}>
      {loaders.map((view) => (
        <div key={view} className={styles.tile}>
          <ChopLogicLoader view={view} />
          <span>{view}</span>
        </div>
      ))}
    </div>
  );
};
