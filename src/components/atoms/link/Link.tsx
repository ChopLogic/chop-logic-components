import { Icon } from '@components/atoms';
import type { LinkProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './Link.css';

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
  const linkClass = getClassName(['cl-link', className, { 'cl-link_disabled': disabled }]);
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  const linkTarget = isExternal ? target || '_blank' : target;
  const iconElement = icon ? <Icon name={icon} className="cl-link__icon" hidden /> : null;
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
      <span className="cl-link__text">{children}</span>
      {isRightIcon && iconElement}
    </a>
  );
};

export default Link;
