import { OrientationMode } from '@enums';
import { ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicTabsProps extends ChopLogicComponentProps {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: OrientationMode;
}

export interface ChopLogicTabItem {
  content: ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
}
