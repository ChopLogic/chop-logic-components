import './HeaderControls.css';

import type { GridSortDirection } from '@enums';
import type { FC, RefObject } from 'react';

import { FilterButton } from '../filter-button/FilterButton';
import { SortButton } from '../sort-button/SortButton';

export type HeaderControlsProps = {
  columnTitle?: string;
  hasSortButton: boolean;
  sortDirection?: GridSortDirection | null;
  onSortClick?: () => void;
  hasFilterButton: boolean;
  isFilterActive: boolean;
  isFilterOpen: boolean;
  filterButtonRef: RefObject<HTMLButtonElement | null>;
  onFilterToggle: () => void;
};

export const HeaderControls: FC<HeaderControlsProps> = ({
  columnTitle,
  hasSortButton,
  sortDirection,
  onSortClick,
  hasFilterButton,
  isFilterActive,
  isFilterOpen,
  filterButtonRef,
  onFilterToggle,
}) => {
  return (
    <div className="cl-grid-header-controls">
      {hasSortButton && onSortClick && (
        <SortButton
          direction={sortDirection ?? null}
          columnTitle={columnTitle}
          onClick={onSortClick}
        />
      )}
      {hasFilterButton && (
        <FilterButton
          ref={filterButtonRef}
          columnTitle={columnTitle}
          isActive={isFilterActive}
          isOpen={isFilterOpen}
          onClick={onFilterToggle}
        />
      )}
    </div>
  );
};
