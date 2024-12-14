import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicTooltipProps } from '@/types';

import ChopLogicTooltip from '../Tooltip';

const TooltipExample: React.FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id }) => {
  return (
    <div>
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id}>
        {visibleOn === 'click' && <ChopLogicButton text='Click me' view='flat' />}
        {visibleOn === 'hover' && <ChopLogicButton text='Hover on me' view='flat' />}
        {visibleOn === 'focus' && <ChopLogicButton text='Focus on me' view='flat' />}
        {visibleOn === 'contextmenu' && <ChopLogicButton text='Right click on me' view='flat' />}
      </ChopLogicTooltip>
    </div>
  );
};

export default TooltipExample;
