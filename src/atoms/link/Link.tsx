import { Icon } from '@atoms';
import { LinkProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Link.module.scss';

const Link: FC<LinkProps> = ({ href, children, icon, iconPosition = 'left', external = false, className, rel, target, ...rest }) => {
  const linkClass = getClassName([styles.link, className]);

  // Determine if link is external based on href or explicit prop
  const isExternal = external || href.startsWith('http') || href.startsWith('//');

  // Set secure defaults for external links
  const linkRel = isExternal ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ') : rel;

  const linkTarget = isExternal ? target || '_blank' : target;

  const iconElement = icon ? <Icon name={icon} className={styles.linkIcon} aria-hidden='true' /> : null;

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
      {icon && iconPosition === 'left' && iconElement}
      <span className={styles.linkText}>{children}</span>
      {icon && iconPosition === 'right' && iconElement}
    </a>
  );
};

export default Link;
