import React from 'react';

import { ChopLogicTabItem } from '../Tabs';
import { StyledTabContent } from '../Tabs.styled';

type ChopLogicTabContentProps = {
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
};

const ChopLogicTabContent: React.FC<ChopLogicTabContentProps> = ({ tabs, selectedTabId }): React.ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  return (
    <StyledTabContent role='tabpanel' aria-labelledby={selectedTabId} id={contentId}>
      {content}
    </StyledTabContent>
  );
};

export default ChopLogicTabContent;
