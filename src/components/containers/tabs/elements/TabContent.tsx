import React from 'react';

import { ChopLogicTabItem } from '@/types';

import { StyledTabContent } from '../Tabs.styled';

const ChopLogicTabContent: React.FC<{
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
}> = ({ tabs, selectedTabId }): React.ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  return (
    <StyledTabContent role='tabpanel' aria-labelledby={selectedTabId} id={contentId}>
      {content}
    </StyledTabContent>
  );
};

export default ChopLogicTabContent;
