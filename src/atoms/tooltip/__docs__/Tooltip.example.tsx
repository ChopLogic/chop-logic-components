import { ChopLogicButtonView } from '@enums';
import { ChopLogicTooltipProps } from '@models';
import { ChopLogicButton } from '@molecules';
import { FC } from 'react';

import ChopLogicTooltip from '../Tooltip';

export const TooltipExample: FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id, ...rest }) => {
  return (
    <div>
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id} {...rest}>
        {visibleOn === 'click' && <ChopLogicButton text='Click me' view={ChopLogicButtonView.Secondary} />}
        {visibleOn === 'hover' && <ChopLogicButton text='Hover on me' view={ChopLogicButtonView.Secondary} />}
        {visibleOn === 'focus' && <ChopLogicButton text='Focus on me' view={ChopLogicButtonView.Secondary} />}
        {visibleOn === 'contextmenu' && <ChopLogicButton text='Right click on me' view={ChopLogicButtonView.Secondary} />}
      </ChopLogicTooltip>
    </div>
  );
};
