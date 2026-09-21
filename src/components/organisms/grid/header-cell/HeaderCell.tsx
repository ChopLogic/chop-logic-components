import './HeaderCell.css';

import type { GridSortDirection } from '@enums';
import type { FC } from 'react';

import { SortButton } from '../sort-button/SortButton';

export type GridHeaderCellProps = {
  title?: string;
  component?: React.ReactElement;
  sortable?: boolean;
  sortDirection?: GridSortDirection | null;
  onSortClick?: () => void;
};

export const GridHeaderCell: FC<GridHeaderCellProps> = ({
  title,
  component,
  sortable,
  sortDirection,
  onSortClick,
}) => {
  const content = component ?? title ?? '';

  if (sortable && onSortClick) {
    return (
      <th className="cl-grid-header-cell cl-grid-header-cell_sortable">
        <div className="cl-grid-header-cell__content">
          <span className="cl-grid-header-cell__title">{content}</span>
          <SortButton direction={sortDirection ?? null} columnTitle={title} onClick={onSortClick} />
        </div>
      </th>
    );
  }

  return <th className="cl-grid-header-cell">{content}</th>;
};
