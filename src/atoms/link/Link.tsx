import { Icon } from '@atoms';
import { LinkProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Link.module.scss';

const Link: FC<LinkProps> = ({ href, children, icon, iconPosition = 'left', external = false, className, rel, target, ...rest }) => {
  const linkClass = getClassName([styles.link, className]);
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  const linkRel = isExternal ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ') : rel;
  const linkTarget = isExternal ? target || '_blank' : target;
  const iconElement = icon ? <Icon name={icon} className={styles.linkIcon} aria-hidden='true' /> : null;
  const isLeftIcon = icon && iconPosition === 'left';
  const isRightIcon = icon && iconPosition === 'right';

  return (
    <a
      href={href}
      className={linkClass}
      rel={linkRel}
      target={linkTarget}
      {...(isExternal && {
        'aria-label': typeof children === 'string' ? `${children} (opens in new window)` : 'Opens in new window',
      })}
      {...rest}
    >
      {isLeftIcon && iconElement}
      <span className={styles.linkText}>{children}</span>
      {isRightIcon && iconElement}
    </a>
  );
};

export default Link;
