import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Icon from '../Icon';

describe('Icon', () => {
  it('renders the correct icon after it loads', async () => {
    render(<Icon name={IconName.Warning} testId='warning-icon' />);
    const warningIcon = await screen.findByTestId('warning-icon');
    expect(warningIcon).toBeInTheDocument();
  });

  it('does not render anything if name is not provided', () => {
    const { container } = render(<Icon name={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
