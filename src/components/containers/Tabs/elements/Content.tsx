import React from 'react';

const ChopLogicTabContent = ({ content, tabId }: { content?: React.ReactElement; tabId: string }): React.ReactElement => {
  return (
    <section role='tabpanel' aria-labelledby={tabId} className='tab-list__content'>
      {content}
    </section>
  );
};

export default ChopLogicTabContent;
