import React from 'react';

type ChopLogicTabButtonProps = {
  title: string;
  tabId: string;
  tabPanelId: string;
  isSelected: boolean;
  onTabSelect: (id: string) => void;
};

const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps> = ({ title, onTabSelect, tabId, isSelected, tabPanelId }) => {
  return (
    <button role='tab' id={tabId} onClick={() => onTabSelect(tabId)} aria-selected={isSelected} aria-controls={tabPanelId}>
      {title}
    </button>
  );
};

export default ChopLogicTabButton;
