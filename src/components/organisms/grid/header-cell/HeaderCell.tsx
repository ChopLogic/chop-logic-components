import type { FC } from 'react';

import './HeaderCell.css';

export const GridHeaderCell: FC<{ title?: string; component?: React.ReactElement }> = ({
  title,
  component,
}) => {
  return <th className="cl-header-cell">{component ?? title ?? ''}</th>;
};
