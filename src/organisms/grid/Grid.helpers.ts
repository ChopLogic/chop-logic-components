import { GridColumn, GridItem, RenderDataItemCallback } from '@models';
import { ReactElement } from 'react';

export function getGridRowValues({
  item,
  columns,
  renderDataItem,
}: {
  item: GridItem;
  columns: GridColumn[];
  renderDataItem?: RenderDataItemCallback;
}): (string | ReactElement)[] {
  const values = [];
  for (const column of columns) {
    let value;

    if (renderDataItem && item[column.field]) {
      value = renderDataItem(item, column.field);
    } else if (item[column.field]) {
      value = (item[column.field] as string).toString();
    } else {
      value = '';
    }

    values.push(value);
  }

  return values;
}
