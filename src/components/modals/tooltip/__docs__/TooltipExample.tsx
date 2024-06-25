import React from 'react';

import ChopLogicTooltip, { ChopLogicTooltipProps } from '../Tooltip';

const Example: React.FC<ChopLogicTooltipProps> = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicTooltip>
        <div>Test content</div>
      </ChopLogicTooltip>
    </div>
  );
};

export default Example;
