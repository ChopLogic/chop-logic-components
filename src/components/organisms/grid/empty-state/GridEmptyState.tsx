import './GridEmptyState.css';

import type { FC } from 'react';

export type GridEmptyStateProps = {
  colSpan: number;
};

export const GridEmptyState: FC<GridEmptyStateProps> = ({ colSpan }) => {
  return (
    <tr className="cl-grid-empty-state">
      <td className="cl-grid-empty-state__cell" colSpan={colSpan}>
        No data matches the applied filters
      </td>
    </tr>
  );
};
