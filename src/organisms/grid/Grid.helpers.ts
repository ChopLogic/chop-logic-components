import type { GridColumn, GridItem, GridRowValue, RenderDataItemCallback } from '@models';
import type { ReactElement } from 'react';

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
