import React from 'react';

type ChopLogicTabContentProps = {
  content?: React.ReactElement;
  tabId: string;
  tabPanelId: string;
};

const ChopLogicTabContent: React.FC<ChopLogicTabContentProps> = ({ content, tabId, tabPanelId }): React.ReactElement => {
  return (
    <section role='tabpanel' aria-labelledby={tabId} id={tabPanelId}>
      {content}
    </section>
  );
};

export default ChopLogicTabContent;
