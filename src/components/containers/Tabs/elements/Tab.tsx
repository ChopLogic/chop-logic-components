import React from 'react';

type ChopLogicTabButtonProps = {
  title: string;
  tabId: string;
  tabPanelId: string;
  isActive: boolean;
  onSelect: (value: React.SetStateAction<string>) => void;
};

const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps> = ({ title, onSelect, tabId, isActive, tabPanelId }) => {
  const onClickTab = () => {
    onSelect(tabId);
  };

  return (
    <button role='tab' id={tabId} onClick={onClickTab} aria-selected={isActive} aria-controls={tabPanelId}>
      {title}
    </button>
  );
};

export default ChopLogicTabButton;
