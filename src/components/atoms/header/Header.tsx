import type { HeaderProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './Header.css';

const Header: FC<HeaderProps> = ({ as = 'h1', icon, children, className, ...rest }) => {
  const HeaderTag = as;
  const headerClass = getClassName([
    className,
    'cl-header',
    icon,
    {
      'cl-header__h1': as === 'h1',
      'cl-header__h2': as === 'h2',
      'cl-header__h3': as === 'h3',
      'cl-header__h4': as === 'h4',
      'cl-header__h5': as === 'h5',
      'cl-header__h6': as === 'h6',
    },
  ]);

  return (
    <HeaderTag className={headerClass} {...rest}>
      {children}
    </HeaderTag>
  );
};

export default Header;
