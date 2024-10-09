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

export type GridIdsProps = {
  selectedIds: string[];
  setSelectedIds: (value: React.SetStateAction<string[]>) => void;
};

export type SelectAllCheckboxProps = {
  allRowIds: string[];
  tableId: string;
} & GridIdsProps;

export type SelectRowCheckboxProps = {
  rowId: string;
} & GridIdsProps;

export type GridBodyProps = {
  data: ChopLogicGridItem[];
  columns: ChopLogicGridColumn[];
  hasCheckboxColumn: boolean;
  className?: string;
} & GridIdsProps;

export type GridHeadProps = {
  columns: ChopLogicGridColumn[];
  hasCheckboxColumn: boolean;
  data: ChopLogicGridColumn[];
  className?: string;
  id?: string;
} & GridIdsProps;
