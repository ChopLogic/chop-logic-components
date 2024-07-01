import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ChopLogicTooltip from '../Tooltip';

describe('ChopLogicTooltip component', () => {
  const testTooltipProps = {
    tooltipContent: 'Test tooltip content',
    id: 'test-id',
  };

  it('ChopLogicTooltip should render the content', async () => {
    const { asFragment } = render(
      <ChopLogicTooltip {...testTooltipProps}>
        <span>Modal content</span>
      </ChopLogicTooltip>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
