import { IconDictionary } from '@assets/icons';
import { IconProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Icon.module.scss';

const Icon: FC<IconProps> = ({ name, testId, className, hidden, ...rest }) => {
  if (!name) return null;
  const Component = IconDictionary[name];
  const iconClass = getClassName([className, styles.icon]);

  return <Component data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest} />;
};

export default Icon;
