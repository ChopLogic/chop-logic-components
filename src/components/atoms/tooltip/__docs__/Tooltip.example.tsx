import { Button } from '@components/atoms';
import type { TooltipProps } from '@types';
import type { FC } from 'react';

import Tooltip from '../Tooltip';

export const TooltipExample: FC<TooltipProps> = ({
  tooltipContent,
  containerTag,
  visibleOn,
  id,
  ...rest
}) => {
  return (
    <div>
      <Tooltip
        tooltipContent={tooltipContent}
        containerTag={containerTag}
        visibleOn={visibleOn}
        id={id}
        {...rest}
      >
        {visibleOn === 'click' && <Button text="Click me" />}
        {visibleOn === 'hover' && <Button text="Hover on me" />}
        {visibleOn === 'focus' && <Button text="Focus on me" />}
        {visibleOn === 'contextmenu' && <Button text="Right click on me" />}
      </Tooltip>
    </div>
  );
};
