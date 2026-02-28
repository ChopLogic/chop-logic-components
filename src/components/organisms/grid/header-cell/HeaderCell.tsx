import type { FC } from 'react';

export const GridHeaderCell: FC<{ title?: string; component?: React.ReactElement }> = ({
  title,
  component,
}) => {
  return <th>{component ?? title ?? ''}</th>;
};
