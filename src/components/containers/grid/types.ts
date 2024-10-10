export type ChopLogicGridProps = React.HTMLAttributes<HTMLElement> & {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  id?: string;
  selectable?: boolean;
  renderDataItem?: (item: ChopLogicGridItem) => JSX.Element;
  onSelect?: (ids: string[]) => void;
};

export type ChopLogicGridColumn = {
  field?: string;
  title?: string;
  component?: React.ReactElement;
};

export type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};
