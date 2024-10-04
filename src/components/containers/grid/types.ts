export type GridProps = React.HTMLAttributes<HTMLElement> & {
  columns: GridColumn[];
  data: GridItem[];
  selectable?: boolean;
  renderDataItem?: (item: GridItem) => JSX.Element;
  passSelectedIds?: (ids: string[]) => void;
};

export type GridColumn = {
  field?: string;
  title?: string;
  headerComponent?: React.ReactElement;
};

export type GridItem = {
  id: string;
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
  data: GridItem[];
  columns: GridColumn[];
  hasCheckboxColumn: boolean;
  className?: string;
} & GridIdsProps;

export type GridHeadProps = {
  columns: GridColumn[];
  hasCheckboxColumn: boolean;
  data: GridColumn[];
  className?: string;
  id?: string;
} & GridIdsProps;
