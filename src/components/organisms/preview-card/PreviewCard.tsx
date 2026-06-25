import './PreviewCard.css';

import { Avatar, Header, Image, Tag } from '@components/atoms';
import { LinkTarget } from '@enums';
import type { PreviewCardProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

const PreviewCard: FC<PreviewCardProps> = ({
  link,
  linkTarget = LinkTarget.Self,
  image,
  title,
  summary,
  authors = [],
  tags = [],
  className,
  ...rest
}) => {
  const cardClass = getClassName(['cl-preview-card', className]);
  const isBlank = linkTarget === LinkTarget.Blank;
  const articleLabel = title || 'Preview card';
  const anchorLabel = title
    ? `View article: ${title}${isBlank ? ' (opens in new window)' : ''}`
    : `Preview card${isBlank ? ' (opens in new window)' : ''}`;

  return (
    <article className={cardClass} aria-label={articleLabel} {...rest}>
      <a
        href={link}
        target={linkTarget}
        rel={isBlank ? 'noopener noreferrer' : undefined}
        aria-label={anchorLabel}
        className="cl-preview-card__image-link"
      >
        <Image {...image} className="cl-preview-card__image" />
      </a>

      <Header as="h5" className="cl-preview-card__title">
        {title}
      </Header>

      {summary && <p className="cl-preview-card__summary">{summary}</p>}

      {authors.length > 0 && (
        <ul className="cl-preview-card__authors" aria-label="Authors">
          {authors.map((author) => (
            <li key={author.id} className="cl-preview-card__author-item">
              <Avatar {...author} />
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <ul className="cl-preview-card__tags" aria-label="Tags">
          {tags.map((tag) => (
            <li key={tag.id} className="cl-preview-card__tag-item">
              <Tag {...tag} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default PreviewCard;
