import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicTooltipProps } from '@/types';

import ChopLogicTooltip from '../Tooltip';

const TooltipExample: React.FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id }) => {
  return (
    <div>
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id}>
        {visibleOn === 'click' && <ChopLogicButton text='Click me' />}
        {visibleOn === 'hover' && <span>Hover over me</span>}
        {visibleOn === 'focus' && <p>Focus on me</p>}
        {visibleOn === 'contextmenu' && <strong>Right click on me</strong>}
      </ChopLogicTooltip>
    </div>
  );
};

export default TooltipExample;
