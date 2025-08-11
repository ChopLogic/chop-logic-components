import { LoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import { FC } from 'react';

import ChopLogicLoader from '../Loader';
import styles from './Loader.module.scss';

export const LoaderExample: FC<ChopLogicLoaderProps> = () => {
  const loaders = Object.values(LoaderView);

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
