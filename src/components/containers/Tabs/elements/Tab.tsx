import React from 'react';

type TabProps = {
  title: string;
  tabId: string;
  isActive: boolean;
  onSelect: (value: React.SetStateAction<string>) => void;
};

const ChopLogicTab = ({ title, onSelect, tabId, isActive }: TabProps): React.ReactElement => {
  const onClickTab = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.stopPropagation();
    onSelect(tabId);
  };

  return (
    <h3 role='tab' id={tabId} onClick={onClickTab} aria-selected={isActive} data-testid={tabId}>
      {title}
    </h3>
  );
};

export default ChopLogicTab;
