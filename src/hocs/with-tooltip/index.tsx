import React from 'react';
import { ChopLogicTooltip } from '@atoms';

type WithTooltipProps = {
  tooltip?: string;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};

export function withTooltip<P extends object>(Component: React.ComponentType<P>): React.FC<P & WithTooltipProps> {
  return ({ tooltip, visibleOn, ...props }: WithTooltipProps) =>
    tooltip?.length ? (
      <ChopLogicTooltip tooltipContent={tooltip} visibleOn={visibleOn}>
        <Component {...(props as P)} />
      </ChopLogicTooltip>
    ) : (
      <Component {...(props as P)} />
    );
}
