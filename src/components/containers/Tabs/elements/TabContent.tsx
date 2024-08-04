import React from 'react';

import { ChopLogicTabItem } from '../types';

type ChopLogicTabContentProps = {
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
};

const ChopLogicTabContent: React.FC<ChopLogicTabContentProps> = ({ tabs, selectedTabId }): React.ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  return (
    <div role='tabpanel' aria-labelledby={selectedTabId} id={contentId}>
      {content}
    </div>
  );
};

export default ChopLogicTabContent;
