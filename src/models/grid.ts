import { ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface GridProps extends ChopLogicComponentProps {
  columns: GridColumn[];
  data: GridItem[];
  caption?: string;
  selectable?: boolean;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
}

export type GridColumn = {
  field: string;
  title?: string;
  component?: ReactElement;
  highlighted?: boolean;
  className?: string;
};

export type GridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};

export type RenderDataItemCallback = (item: GridItem, field: string) => ReactElement;
