import { LoaderView } from '@enums';
import type { LoaderProps } from '@types';
import type { FC } from 'react';

import Loader from '../Loader';
import styles from './Loader.module.scss';

export const LoaderExample: FC<LoaderProps> = () => {
  const loaders = Object.values(LoaderView);

  return (
    <div className={styles.grid}>
      {loaders.map((view) => (
        <div key={view} className={styles.tile}>
          <Loader view={view} />
          <span>{view}</span>
        </div>
      ))}
    </div>
  );
};
