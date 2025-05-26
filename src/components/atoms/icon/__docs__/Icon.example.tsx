import React from 'react';
import { ChopLogicIconName } from '@enums';
import { ChopLogicIconProps } from '@models';
import styles from '@styles/storybook/Grid.module.scss';
import { getClassName } from '@utils';
import ChopLogicIcon from '../Icon';

const IconExample: React.FC<ChopLogicIconProps> = () => {
  const iconNames = Object.values(ChopLogicIconName);

  return (
    <div className={getClassName([styles.grid, styles.grid__medium])}>
      {iconNames.map((name) => (
        <div key={name} className={styles.tile}>
          <ChopLogicIcon name={name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconExample;
