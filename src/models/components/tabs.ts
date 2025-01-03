import { ReactElement } from 'react';
import { ChopLogicOrientationMode } from '@enums';

import { ChopLogicComponentProps } from '../common.ts';

export interface ChopLogicTabsProps extends ChopLogicComponentProps {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicOrientationMode;
}

export interface ChopLogicTabItem {
  content: ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
}
