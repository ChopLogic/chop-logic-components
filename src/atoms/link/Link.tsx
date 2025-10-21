import { Icon } from '@atoms';
import type { LinkProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';

import styles from './Link.module.scss';

const Link: FC<LinkProps> = ({
  href,
  children,
  icon,
  iconPosition = 'left',
  external = false,
  disabled = false,
  className,
  target,
  ...rest
}) => {
  const linkClass = getClassName([styles.link, className, { [styles.link__disabled]: disabled }]);
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  const linkTarget = isExternal ? target || '_blank' : target;
  const iconElement = icon ? (
    <Icon name={icon} className={styles.link_icon} aria-hidden="true" />
  ) : null;
  const isLeftIcon = icon && iconPosition === 'left';
  const isRightIcon = icon && iconPosition === 'right';

  return (
    <a
      href={href}
      className={linkClass}
      target={linkTarget}
      {...(isExternal && {
        'aria-label':
          typeof children === 'string'
            ? `${children} (opens in new window)`
            : 'Opens in new window',
      })}
      aria-disabled={disabled}
      {...rest}
    >
      {isLeftIcon && iconElement}
      <span className={styles.link_text}>{children}</span>
      {isRightIcon && iconElement}
    </a>
  );
};

export default Link;
