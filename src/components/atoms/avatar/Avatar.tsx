import './Avatar.css';

import { LinkTarget } from '@enums';
import type { AvatarProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useState } from 'react';

const Avatar: FC<AvatarProps> = ({
  name,
  imageUrl,
  link,
  linkTarget = LinkTarget.Self,
  className,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const avatarClass = getClassName(['cl-avatar', className]);

  const content = hasError ? (
    <span className="cl-avatar__fallback" role="img" aria-label={name}>
      <span aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
    </span>
  ) : (
    <img className="cl-avatar__image" src={imageUrl} alt={name} onError={() => setHasError(true)} />
  );

  if (link) {
    const isBlank = linkTarget === LinkTarget.Blank;
    return (
      <span className={avatarClass} {...rest}>
        <a
          href={link}
          target={linkTarget}
          rel={isBlank ? 'noopener noreferrer' : undefined}
          aria-label={isBlank ? `${name} (opens in new window)` : name}
          className="cl-avatar__link"
        >
          {content}
        </a>
      </span>
    );
  }

  return (
    <span className={avatarClass} {...rest}>
      {content}
    </span>
  );
};

export default Avatar;
