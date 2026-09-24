import { GridFilterType } from '@enums';

export const FILTER_TYPE_LABELS: Record<GridFilterType, string> = {
  [GridFilterType.StartsWith]: 'Starts with',
  [GridFilterType.Includes]: 'Includes',
  [GridFilterType.Equals]: 'Equals to',
};

export const FILTER_TYPES: GridFilterType[] = [
  GridFilterType.StartsWith,
  GridFilterType.Includes,
  GridFilterType.Equals,
];
