import { IconName, OrientationMode } from '@enums';

import { ChopLogicComponentProps } from './_common';

export interface MenuProps extends ChopLogicComponentProps {
  items: MenuItem[];
  mode?: OrientationMode;
  openedOn?: 'hover' | 'click';
}

export interface MenuItem {
  label: string;
  id: string;
  nestedItems?: MenuItem[];
  icon?: IconName;
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
}
