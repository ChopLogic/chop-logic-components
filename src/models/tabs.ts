import { OrientationMode } from '@enums';
import { ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface TabsProps extends ChopLogicComponentProps {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: OrientationMode;
  stretched?: boolean;
}

export interface ChopLogicTabItem {
  content: ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
}
