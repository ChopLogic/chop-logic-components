/// <reference types="react" />
export type ChopLogicGridProps = {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  id?: string;
  selectable?: boolean;
  tabIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
};
export type ChopLogicGridColumn = {
  field: string;
  title?: string;
  component?: React.ReactElement;
  highlighted?: boolean;
  className?: string;
};
export type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};
export type RenderDataItemCallback = (item: ChopLogicGridItem, field: string) => JSX.Element;
