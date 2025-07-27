import { ChopLogicOrientationMode } from '@enums';
import { ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

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
