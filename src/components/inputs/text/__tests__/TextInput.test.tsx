import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInput from '../TextInput';

describe('ChopLogicTextInput component', () => {
  const testProps = {
    id: 'test-input-id',
    name: 'testInput',
    label: 'Test Input:',
    valid: true,
  };

  it('should render the valid input correctly', () => {
    const { asFragment } = render(<TextInput {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label text', () => {
    render(<TextInput {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });
});
