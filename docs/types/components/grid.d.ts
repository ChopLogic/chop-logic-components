import { ReactElement } from '../../../node_modules/react';
import { CommonComponentProps } from './_common';

export type ChopLogicGridProps = CommonComponentProps & {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  selectable?: boolean;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
};
export type ChopLogicGridColumn = {
  field: string;
  title?: string;
  component?: ReactElement;
  highlighted?: boolean;
  className?: string;
};
export type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};
export type RenderDataItemCallback = (item: ChopLogicGridItem, field: string) => ReactElement;
