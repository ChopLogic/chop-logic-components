import type { GridProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './Grid.css';
import { GridBody } from './body/GridBody';
import { GridColumnGroup } from './column-group/GridColumnGroup';
import { useGridController } from './Grid.controller';
import { GridHead } from './head/GridHead';

const Grid: FC<GridProps> = ({
  columns,
  data,
  id,
  onSelect,
  renderDataItem,
  caption,
  selectable = false,
  sortableByDefault = false,
  sortField,
  sortDirection,
  onSortChange,
  filterableByDefault = false,
  filterState,
  onFilterChange,
  className,
  ...rest
}) => {
  const {
    elementId,
    handleSelectAll,
    handleDeselectAll,
    isAllCheckboxDisabled,
    isAllSelected,
    handleDeselectRowById,
    handleSelectRowById,
    selectedIds,
    sortState,
    handleSortClick,
    filterState: currentFilterState,
    filteredAndSortedData,
    handleApplyFilter,
    handleClearFilter,
    isEmpty,
  } = useGridController({
    id,
    data,
    onSelect,
    sortField,
    sortDirection,
    onSortChange,
    filterState,
    onFilterChange,
  });

  const colSpan = columns.length + (selectable ? 1 : 0);

  return (
    <div className="cl-grid__wrapper">
      <table {...rest} className={getClassName(['cl-grid', className])}>
        {caption && <caption className="cl-grid__caption">{caption}</caption>}
        <GridColumnGroup columns={columns} selectable={selectable} />
        <GridHead
          gridId={elementId}
          columns={columns}
          selectable={selectable}
          selectAll={handleSelectAll}
          deselectAll={handleDeselectAll}
          isAllSelected={isAllSelected}
          isAllCheckboxDisabled={isAllCheckboxDisabled}
          sortableByDefault={sortableByDefault}
          sortState={sortState}
          onSortClick={handleSortClick}
          filterableByDefault={filterableByDefault}
          filterState={currentFilterState}
          onApplyFilter={handleApplyFilter}
          onClearFilter={handleClearFilter}
        />
        <GridBody
          columns={columns}
          data={filteredAndSortedData}
          selectable={selectable}
          selectRowById={handleSelectRowById}
          deselectRowById={handleDeselectRowById}
          selectedIds={selectedIds}
          renderDataItem={renderDataItem}
          isEmpty={isEmpty}
          colSpan={colSpan}
        />
      </table>
    </div>
  );
};

export default Grid;
