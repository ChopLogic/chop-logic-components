import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import styles from '@styles/storybook/Grid.module.scss';
import { ChopLogicLoader } from '@atoms';

const LoaderExample: React.FC<ChopLogicLoaderProps> = () => {
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

export default LoaderExample;
