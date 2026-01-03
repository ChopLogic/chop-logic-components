import type { ChopLogicTabItem } from '@types';
import type { FC, ReactElement } from 'react';

import styles from './TabContent.module.scss';

export const TabContent: FC<{
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
  extendable?: boolean;
  extendedTabContent?: ReactElement;
}> = ({ tabs, selectedTabId, extendable, extendedTabContent }): ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;
  const isExtendedTab = extendable && !content;

  return (
    <div
      role="tabpanel"
      data-testid="tab-content"
      aria-labelledby={selectedTabId}
      id={contentId}
      className={styles.tabContent}
    >
      {isExtendedTab ? extendedTabContent : content}
    </div>
  );
};
