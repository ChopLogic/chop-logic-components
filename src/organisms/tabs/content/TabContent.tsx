import { ChopLogicTabItem } from '@models';
import { FC, ReactElement } from 'react';

import styles from './TabContent.module.scss';

export const TabContent: FC<{
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
  extendable?: boolean;
  extendedTabContent?: ReactElement;
}> = ({ tabs, selectedTabId, extendable, extendedTabContent }): ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  // If extendable is true and we're on the "new tab" (which would be handled by parent),
  // show the extended content
  const isExtendedTab = extendable && selectedTabId === 'new-tab';

  return (
    <div role='tabpanel' aria-labelledby={selectedTabId} id={contentId} className={styles.tabContent}>
      {isExtendedTab ? extendedTabContent : content}
    </div>
  );
};
