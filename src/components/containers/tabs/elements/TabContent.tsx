import React from 'react';
import { ChopLogicTabItem } from '@models';
import styles from '../Tabs.module.scss';

const ChopLogicTabContent: React.FC<{
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
}> = ({ tabs, selectedTabId }): React.ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  return (
    <div role='tabpanel' aria-labelledby={selectedTabId} id={contentId} className={styles.tabContent}>
      {content}
    </div>
  );
};

export default ChopLogicTabContent;
