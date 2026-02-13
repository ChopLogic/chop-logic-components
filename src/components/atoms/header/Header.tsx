import type { HeaderProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import styles from './Header.module.scss';

const Header: FC<HeaderProps> = ({ as = 'h1', icon, children, className, ...rest }) => {
  const HeaderTag = as;
  const headerClass = getClassName([
    className,
    styles.header,
    icon,
    {
      [styles.header__h1]: as === 'h1',
      [styles.header__h2]: as === 'h2',
      [styles.header__h3]: as === 'h3',
      [styles.header__h4]: as === 'h4',
      [styles.header__h5]: as === 'h5',
      [styles.header__h6]: as === 'h6',
    },
  ]);

  return (
    <HeaderTag className={headerClass} {...rest}>
      {children}
    </HeaderTag>
  );
};

export default Header;
