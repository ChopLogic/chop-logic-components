import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Header.module.scss';
import { getClassName } from '@utils';
import { ChopLogicIconName } from '@enums';
import { ChopLogicIcon } from '@atoms';

type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeaderProps = {
  children: ReactNode;
  as?: HeaderLevel;
  icon?: ChopLogicIconName;
} & HTMLAttributes<HTMLHeadingElement>;

const Header: FC<HeaderProps> = ({ as = 'h1', icon, children, className, ...rest }) => {
  const HeaderTag = as;
  const headerClass = getClassName([
    className,
    styles.header,
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
      {icon && <ChopLogicIcon name={icon} />}
      {children}
    </HeaderTag>
  );
};

export default Header;
