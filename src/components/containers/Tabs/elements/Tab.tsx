import React from 'react';

type TabProps = {
  title: string;
  tabId: string;
  isActive: boolean;
  onSelect: (value: React.SetStateAction<string>) => void;
};

const ChopLogicTab = ({ title, onSelect, tabId, isActive }: TabProps): React.ReactElement => {
  const onClickTab = () => {
    onSelect(tabId);
  };

  return (
    <button role='tab' id={tabId} onClick={onClickTab} aria-selected={isActive} data-testid={tabId}>
      {title}
    </button>
  );
};

export default ChopLogicTab;
