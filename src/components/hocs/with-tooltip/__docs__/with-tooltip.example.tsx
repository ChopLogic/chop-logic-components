import { Button } from '@components/atoms';
import type { FC } from 'react';
import { withTooltip } from '../with-tooltip';

type DemoTargetProps = {
  label: string;
};

const DemoTarget: FC<DemoTargetProps> = ({ label }) => <Button text={label} />;

const DemoWithTooltip = withTooltip(DemoTarget);

export type WithTooltipExampleProps = DemoTargetProps & {
  tooltip?: string;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};

export const WithTooltipExample: FC<WithTooltipExampleProps> = ({
  tooltip,
  visibleOn = 'hover',
  label,
}) => (
  <div style={{ padding: '2rem' }}>
    <DemoWithTooltip label={label} tooltip={tooltip} visibleOn={visibleOn} />
  </div>
);
