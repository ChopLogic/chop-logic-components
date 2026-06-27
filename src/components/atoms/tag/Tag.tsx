import { withTooltip } from '@components/hocs';
import './Tag.css';

import type { TagProps } from '@types';
import { getClassName } from '@utils';
import type { CSSProperties, FC } from 'react';

const TagContainer: FC<TagProps> = ({ name, color, className, style, tooltip, ...rest }) => {
  const tagClass = getClassName(['cl-tag', className]);
  const tagStyle: CSSProperties = {
    ...style,
    ...(color ? ({ '--cl-tag-color': color } as CSSProperties) : {}),
  };

  return (
    <span className={tagClass} style={tagStyle} {...rest}>
      {name}
    </span>
  );
};

const Tag = withTooltip(TagContainer);

export default Tag;
