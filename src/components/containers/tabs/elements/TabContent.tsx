import React from 'react';

import { ChopLogicTabItem, ChopLogicTheme } from '@/models';

import { StyledTabContent } from '../Tabs.styled';

const ChopLogicTabContent: React.FC<{
  tabs: ChopLogicTabItem[];
  selectedTabId: string;
  theme: ChopLogicTheme;
}> = ({ tabs, selectedTabId, theme }): React.ReactElement => {
  const content = tabs.find((item) => item.id === selectedTabId)?.content;
  const contentId = `tabpanel_${selectedTabId}`;

  return (
    <StyledTabContent role='tabpanel' aria-labelledby={selectedTabId} id={contentId} $theme={theme}>
      {content}
    </StyledTabContent>
  );
};

export default ChopLogicTabContent;
