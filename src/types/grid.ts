import type { GridSortDirection } from '@enums';
import type { ReactElement } from 'react';

import type { ChopLogicComponentProps } from './_common';

export type GridSortState = {
  field: string | null;
  direction: GridSortDirection | null;
};

export interface GridProps extends ChopLogicComponentProps {
  columns: GridColumn[];
  data: GridItem[];
  caption?: string;
  selectable?: boolean;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
  sortableByDefault?: boolean;
  sortField?: string;
  sortDirection?: GridSortDirection;
  onSortChange?: (state: GridSortState) => void;
}

export type GridColumn = {
  field: string;
  title?: string;
  component?: ReactElement;
  highlighted?: boolean;
  className?: string;
  sortable?: boolean;
};

export type GridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};

export type RenderDataItemCallback = (item: GridItem, field: string) => ReactElement;

export type GridRowValue = {
  field: string;
  value: string | ReactElement;
};
