import { Button } from '@atoms';
import { ButtonView } from '@enums';
import { ChopLogicTooltipProps } from '@models';
import { FC } from 'react';

import ChopLogicTooltip from '../Tooltip';

export const TooltipExample: FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id, ...rest }) => {
  return (
    <div>
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id} {...rest}>
        {visibleOn === 'click' && <Button text='Click me' view={ButtonView.Secondary} />}
        {visibleOn === 'hover' && <Button text='Hover on me' view={ButtonView.Secondary} />}
        {visibleOn === 'focus' && <Button text='Focus on me' view={ButtonView.Secondary} />}
        {visibleOn === 'contextmenu' && <Button text='Right click on me' view={ButtonView.Secondary} />}
      </ChopLogicTooltip>
    </div>
  );
};
