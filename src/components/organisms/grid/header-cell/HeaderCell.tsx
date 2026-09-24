import './HeaderCell.css';

import type { GridSortDirection } from '@enums';
import type { GridFilterCondition } from '@types';
import { getClassName } from '@utils';
import { type FC, useId, useRef, useState } from 'react';

import { FilterPopup } from '../filter-popup/FilterPopup';
import { HeaderControls } from '../header-controls/HeaderControls';

export type GridHeaderCellProps = {
  title?: string;
  component?: React.ReactElement;
  columnField?: string;
  sortable?: boolean;
  sortDirection?: GridSortDirection | null;
  onSortClick?: () => void;
  filterable?: boolean;
  columnConditions?: GridFilterCondition[];
  onApplyFilter?: (condition: GridFilterCondition) => void;
  onClearFilter?: () => void;
};

export const GridHeaderCell: FC<GridHeaderCellProps> = ({
  title,
  component,
  columnField,
  sortable,
  sortDirection,
  onSortClick,
  filterable,
  columnConditions,
  onApplyFilter,
  onClearFilter,
}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const uniqueId = useId();

  const content = component ?? title ?? '';
  const isActive = (columnConditions?.length ?? 0) > 0;
  const popupId = `filter-popup-${columnField ?? uniqueId}`;

  const openPopup = () => setPopupOpen(true);

  const closePopup = () => {
    setPopupOpen(false);
    filterButtonRef.current?.focus();
  };

  const toggle = () => {
    if (isPopupOpen) {
      closePopup();
    } else {
      openPopup();
    }
  };

  const handleApply = (condition: GridFilterCondition) => {
    onApplyFilter?.(condition);
    closePopup();
  };

  const handleClear = () => {
    onClearFilter?.();
  };

  const handleClose = () => {
    closePopup();
  };

  const hasSortButton = Boolean(sortable && onSortClick);
  const hasFilterButton = Boolean(filterable);
  const hasControls = hasSortButton || hasFilterButton;

  const cellClass = getClassName([
    'cl-grid-header-cell',
    { 'cl-grid-header-cell_sortable': hasSortButton },
    { 'cl-grid-header-cell_filterable': hasFilterButton },
  ]);

  if (hasControls) {
    return (
      <th className={cellClass}>
        <div className="cl-grid-header-cell__content">
          <span className="cl-grid-header-cell__title">{content}</span>
          <HeaderControls
            columnTitle={title}
            hasSortButton={hasSortButton}
            sortDirection={sortDirection}
            onSortClick={onSortClick}
            hasFilterButton={hasFilterButton}
            isFilterActive={isActive}
            isFilterOpen={isPopupOpen}
            filterButtonRef={filterButtonRef}
            onFilterToggle={toggle}
          />
          {isPopupOpen && (
            <FilterPopup
              columnTitle={title}
              popupId={popupId}
              hasActiveConditions={isActive}
              columnConditions={columnConditions}
              buttonRef={filterButtonRef}
              onApply={handleApply}
              onClear={handleClear}
              onClose={handleClose}
            />
          )}
        </div>
      </th>
    );
  }

  return <th className={cellClass}>{content}</th>;
};
