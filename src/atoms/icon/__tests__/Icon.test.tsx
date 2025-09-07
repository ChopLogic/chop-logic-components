import { ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicIcon from '../Icon.tsx';

describe('ChopLogicIcon', () => {
  it('renders the correct icon after it loads', async () => {
    render(<ChopLogicIcon name={ChopLogicIconName.Warning} testId='warning-icon' />);
    const warningIcon = await screen.findByTestId('warning-icon');
    expect(warningIcon).toBeInTheDocument();
  });

  it('does not render anything if name is not provided', () => {
    const { container } = render(<ChopLogicIcon name={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
