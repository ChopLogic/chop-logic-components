import { TooltipProps } from '@models';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Tooltip from '../Tooltip';

const tooltipContent = 'Tooltip content';

const renderTooltip = (props: Partial<TooltipProps> = {}) => {
  return render(
    <Tooltip id='test-tooltip-id' tooltipContent={tooltipContent} {...props}>
      <button>Hover or Click me</button>
    </Tooltip>,
  );
};

describe('Tooltip', () => {
  it('should render the child component', () => {
    renderTooltip();
    expect(screen.getByText('Hover or Click me')).toBeInTheDocument();
  });

  it('should show and hide tooltip on hover', async () => {
    renderTooltip({ visibleOn: 'hover' });
    const triggerElement = screen.getByText('Hover or Click me');
    await userEvent.hover(triggerElement);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    await userEvent.unhover(triggerElement);
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });

  it('should show and hide tooltip on click', async () => {
    renderTooltip({ visibleOn: 'click' });
    const triggerElement = screen.getByText('Hover or Click me');
    await userEvent.click(triggerElement);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    await userEvent.click(triggerElement);
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });

  it('should show and hide tooltip on focus', async () => {
    renderTooltip({ visibleOn: 'focus' });
    const triggerElement = screen.getByText('Hover or Click me');
    fireEvent.focus(triggerElement);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    fireEvent.blur(triggerElement);
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });

  it('should show and hide tooltip on contextmenu', async () => {
    renderTooltip({ visibleOn: 'contextmenu' });
    const triggerElement = screen.getByText('Hover or Click me');
    await userEvent.pointer([{ keys: '[MouseRight]', target: triggerElement }]);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    await userEvent.click(document.body);
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });

  it('should close tooltip on Escape key press', async () => {
    renderTooltip({ visibleOn: 'click' });
    const triggerElement = screen.getByText('Hover or Click me');
    await userEvent.click(triggerElement);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });

  it('should close tooltip when clicking outside', async () => {
    renderTooltip({ visibleOn: 'click' });
    const triggerElement = screen.getByText('Hover or Click me');
    await userEvent.click(triggerElement);
    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
    await userEvent.click(document.body);
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();
  });
});
