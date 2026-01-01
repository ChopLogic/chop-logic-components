import { Button } from '@components/atoms';
import { ButtonView } from '@enums';
import type { TooltipProps } from '@models';
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
        {visibleOn === 'click' && <Button text="Click me" view={ButtonView.Secondary} />}
        {visibleOn === 'hover' && <Button text="Hover on me" view={ButtonView.Secondary} />}
        {visibleOn === 'focus' && <Button text="Focus on me" view={ButtonView.Secondary} />}
        {visibleOn === 'contextmenu' && (
          <Button text="Right click on me" view={ButtonView.Secondary} />
        )}
      </Tooltip>
    </div>
  );
};
