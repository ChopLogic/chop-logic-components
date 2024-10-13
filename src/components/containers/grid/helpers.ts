import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from './types';

export function getGridRowValues({
  item,
  columns,
  renderDataItem,
}: {
  item: ChopLogicGridItem;
  columns: ChopLogicGridColumn[];
  renderDataItem?: RenderDataItemCallback;
}): (string | JSX.Element)[] {
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
