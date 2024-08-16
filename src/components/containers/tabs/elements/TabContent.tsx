import React from 'react';

import { StyledTabContent } from '../Tabs.styled';
import { ChopLogicTabItem } from '../types';

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
