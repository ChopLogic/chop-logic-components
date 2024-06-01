import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Checkbox from '../Checkbox';

describe('ChopLogicTextInput component', () => {
  const testProps = {
    id: 'test-checkbox-id',
    name: 'testCheckbox',
    label: 'Test checkbox:',
  };

  it('should render the input correctly', () => {
    const { asFragment } = render(<Checkbox {...testProps} />);
    screen.debug();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should be enabled by default', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByRole('checkbox')).toBeEnabled();
  });
});
