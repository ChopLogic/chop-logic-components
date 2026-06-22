import './Tag.css';

import { Tooltip } from '@components/atoms';
import { TooltipContainer } from '@enums';
import type { TagProps } from '@types';
import { getClassName } from '@utils';
import type { CSSProperties, FC } from 'react';

const Tag: FC<TagProps> = ({ name, description, color, className, style, ...rest }) => {
  const tagClass = getClassName(['cl-tag', className]);
  const tagStyle: CSSProperties = {
    ...style,
    ...(color ? ({ '--cl-tag-color': color } as CSSProperties) : {}),
  };

  const tagElement = (
    <span className={tagClass} style={tagStyle} {...rest}>
      {name}
    </span>
  );

  if (description) {
    return (
      <Tooltip tooltipContent={description} visibleOn="hover" containerTag={TooltipContainer.Span}>
        {tagElement}
      </Tooltip>
    );
  }

  return tagElement;
};

export default Tag;
