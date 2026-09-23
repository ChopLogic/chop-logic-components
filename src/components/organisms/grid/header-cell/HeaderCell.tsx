import './HeaderCell.css';

import type { GridSortDirection } from '@enums';
import type { GridFilterCondition } from '@types';
import { getClassName } from '@utils';
import { type FC, useId, useRef, useState } from 'react';

import { FilterButton } from '../filter-button/FilterButton';
import { FilterPopup } from '../filter-popup/FilterPopup';
import { SortButton } from '../sort-button/SortButton';

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
    // Return focus to the FilterButton after popup closes
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

  const handleCancel = () => {
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
          <div className="cl-grid-header-cell__controls">
            {hasSortButton && onSortClick && (
              <SortButton
                direction={sortDirection ?? null}
                columnTitle={title}
                onClick={onSortClick}
              />
            )}
            {hasFilterButton && (
              <FilterButton
                ref={filterButtonRef}
                columnTitle={title}
                isActive={isActive}
                isOpen={isPopupOpen}
                onClick={toggle}
              />
            )}
          </div>
          {isPopupOpen && (
            <FilterPopup
              columnTitle={title}
              popupId={popupId}
              hasActiveConditions={isActive}
              buttonRef={filterButtonRef}
              onApply={handleApply}
              onClear={handleClear}
              onCancel={handleCancel}
            />
          )}
        </div>
      </th>
    );
  }

  return <th className={cellClass}>{content}</th>;
};
