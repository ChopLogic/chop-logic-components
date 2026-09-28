import { GridFilterType } from '@enums';
import type { RadioGroupOption } from '@types';

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

export const FILTER_TYPE_OPTIONS: RadioGroupOption[] = FILTER_TYPES.map((type) => ({
  value: type,
  label: FILTER_TYPE_LABELS[type],
}));
