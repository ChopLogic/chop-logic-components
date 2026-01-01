import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Icon from '../Icon';

describe('Icon', () => {
  it('renders the correct icon after it loads', async () => {
    render(<Icon name={IconName.Warning} testId="warning-icon" />);
    const warningIcon = await screen.findByTestId('warning-icon');
    expect(warningIcon).toBeInTheDocument();
  });

  it('does not render anything if name is not provided', () => {
    const { container } = render(<Icon name={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders icon with title when provided', async () => {
    render(<Icon name={IconName.Warning} title="Warning Icon" testId="warning-icon" />);
    const warningIcon = await screen.findByTestId('warning-icon');
    const titleElement = warningIcon.querySelector('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Warning Icon');
  });

  it('does not render title element when title prop is not provided', async () => {
    render(<Icon name={IconName.Warning} testId="warning-icon" />);
    const warningIcon = await screen.findByTestId('warning-icon');
    const titleElement = warningIcon.querySelector('title');
    expect(titleElement).not.toBeInTheDocument();
  });

  it('updates title when prop changes', async () => {
    const { rerender } = render(
      <Icon name={IconName.Warning} title="Initial Title" testId="warning-icon" />,
    );
    const warningIcon = await screen.findByTestId('warning-icon');
    let titleElement = warningIcon.querySelector('title');
    expect(titleElement).toHaveTextContent('Initial Title');

    // Rerender with new title
    rerender(<Icon name={IconName.Warning} title="Updated Title" testId="warning-icon" />);
    titleElement = warningIcon.querySelector('title');
    expect(titleElement).toHaveTextContent('Updated Title');
  });
});
