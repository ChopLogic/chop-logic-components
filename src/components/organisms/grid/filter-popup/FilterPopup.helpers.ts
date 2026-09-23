import { GridFilterType } from '@enums';

/**
 * Label map for filter type options displayed in the FilterPopup.
 */
export const FILTER_TYPE_LABELS: Record<GridFilterType, string> = {
  [GridFilterType.StartsWith]: 'Starts with',
  [GridFilterType.Includes]: 'Includes',
  [GridFilterType.Equals]: 'Equals to',
};

/**
 * Ordered list of filter types for rendering the radio group.
 */
export const FILTER_TYPES: GridFilterType[] = [
  GridFilterType.StartsWith,
  GridFilterType.Includes,
  GridFilterType.Equals,
];
