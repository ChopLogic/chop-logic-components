import { Tooltip } from '@atoms';
import type { ComponentType, FC } from 'react';

type WithTooltipProps = {
  tooltip?: string;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};

export function withTooltip<P extends object>(
  Component: ComponentType<P>,
): FC<P & WithTooltipProps> {
  return ({ tooltip, visibleOn, ...props }: WithTooltipProps) =>
    tooltip?.length ? (
      <Tooltip tooltipContent={tooltip} visibleOn={visibleOn}>
        <Component {...(props as P)} />
      </Tooltip>
    ) : (
      <Component {...(props as P)} />
    );
}
