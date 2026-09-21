import { GridSortDirection } from '@enums';
import type {
  GridColumn,
  GridItem,
  GridRowValue,
  GridSortState,
  RenderDataItemCallback,
} from '@types';
import type { ReactElement } from 'react';

export function sortGridData(data: GridItem[], sortState: GridSortState): GridItem[] {
  const { field, direction } = sortState;

  // No sorting applied
  if (field === null || direction === null) {
    return data;
  }

  // Create a stable sort by preserving original indices
  const indexed = data.map((item, index) => ({ item, index }));

  indexed.sort((a, b) => {
    const aValue = String(a.item[field] ?? '').toLowerCase();
    const bValue = String(b.item[field] ?? '').toLowerCase();

    // Empty values sort first in ascending, last in descending
    if (aValue === '' && bValue !== '') {
      return direction === GridSortDirection.Asc ? -1 : 1;
    }
    if (aValue !== '' && bValue === '') {
      return direction === GridSortDirection.Asc ? 1 : -1;
    }

    // Standard alphabetical comparison
    let comparison = aValue.localeCompare(bValue);

    // Reverse for descending
    if (direction === GridSortDirection.Desc) {
      comparison = -comparison;
    }

    // Stable sort: preserve original order for equal values
    if (comparison === 0) {
      return a.index - b.index;
    }

    return comparison;
  });

  return indexed.map(({ item }) => item);
}

export function getGridRowValues({
  item,
  columns,
  renderDataItem,
}: {
  item: GridItem;
  columns: GridColumn[];
  renderDataItem?: RenderDataItemCallback;
}): GridRowValue[] {
  const result: GridRowValue[] = [];
  for (const column of columns) {
    let value: string | ReactElement;

    if (renderDataItem && item[column.field]) {
      value = renderDataItem(item, column.field);
    } else if (item[column.field]) {
      value = (item[column.field] as string).toString();
    } else {
      value = '';
    }

    result.push({ field: column.field, value });
  }

  return result;
}

export function getNextSortState(current: GridSortState, clickedField: string): GridSortState {
  // Clicking a different column always starts ascending
  if (current.field !== clickedField) {
    return { field: clickedField, direction: GridSortDirection.Asc };
  }

  // Clicking the same column cycles: null → asc → desc → null
  switch (current.direction) {
    case null:
      return { field: clickedField, direction: GridSortDirection.Asc };
    case GridSortDirection.Asc:
      return { field: clickedField, direction: GridSortDirection.Desc };
    case GridSortDirection.Desc:
      return { field: null, direction: null };
  }
}
