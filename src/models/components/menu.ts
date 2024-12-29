import { ChopLogicIconName, ChopLogicOrientationMode } from '@/enums';

export interface ChopLogicMenuProps {
  items: ChopLogicMenuItem[];
  mode: ChopLogicOrientationMode;
}

export interface ChopLogicMenuItem {
  label: string;
  level: number;
  id: string;
  parentId: string | null;
  icon?: ChopLogicIconName;
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
}
