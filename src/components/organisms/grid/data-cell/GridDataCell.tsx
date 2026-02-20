import type { FC, ReactElement } from 'react';

export const GridDataCell: FC<{ value: ReactElement | string }> = ({ value }) => {
  return <td>{value}</td>;
};
