import { OrientationMode } from '@enums';
import { ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface TabsProps extends ChopLogicComponentProps {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: OrientationMode;
  stretched?: boolean;
  editable?: boolean;
  extendable?: boolean;
  extendedTabLabel?: string;
  extendedTabContent?: ReactElement;
  onTabTitleChange?: (tabId: string, newTitle: string) => void;
  onTabAdd?: () => void;
  onTabSelect?: (id: string) => void;
  onTabDelete?: (id: string) => void;
}

export interface ChopLogicTabItem {
  content: ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
}
