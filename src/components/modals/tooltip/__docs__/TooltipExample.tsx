import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicButtonView } from '@/enums';
import { ChopLogicTooltipProps } from '@/types';

import ChopLogicTooltip from '../Tooltip';

const TooltipExample: React.FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id }) => {
  return (
    <div>
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id}>
        {visibleOn === 'click' && <ChopLogicButton text='Click me' view={ChopLogicButtonView.Flat} />}
        {visibleOn === 'hover' && <ChopLogicButton text='Hover on me' view={ChopLogicButtonView.Flat} />}
        {visibleOn === 'focus' && <ChopLogicButton text='Focus on me' view={ChopLogicButtonView.Flat} />}
        {visibleOn === 'contextmenu' && <ChopLogicButton text='Right click on me' view={ChopLogicButtonView.Flat} />}
      </ChopLogicTooltip>
    </div>
  );
};

export default TooltipExample;
