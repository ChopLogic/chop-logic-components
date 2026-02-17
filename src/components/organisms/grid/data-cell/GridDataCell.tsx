import type { FC, ReactElement } from 'react';

import './GridDataCell.css';

export const GridDataCell: FC<{ value: ReactElement | string }> = ({ value }) => {
  return <td className="cl-grid-data-cell">{value}</td>;
};
