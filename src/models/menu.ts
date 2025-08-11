import { IconName, OrientationMode } from '@enums';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicMenuProps extends ChopLogicComponentProps {
  items: ChopLogicMenuItem[];
  mode?: OrientationMode;
  openedOn?: 'hover' | 'click';
}

export interface ChopLogicMenuItem {
  label: string;
  id: string;
  nestedItems?: ChopLogicMenuItem[];
  icon?: IconName;
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
}
