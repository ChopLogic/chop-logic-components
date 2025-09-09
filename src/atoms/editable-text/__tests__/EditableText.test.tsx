import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import EditableText from '../EditableText';

describe('EditableText', () => {
  const defaultProps = {
    value: 'Initial Value',
    onChange: vi.fn(),
    onClick: vi.fn(),
  };

  it('renders ReadView by default', () => {
    const { asFragment } = render(<EditableText {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct aria attributes', () => {
    render(<EditableText {...defaultProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Editable text')).toBeInTheDocument();
  });

  it('renders an input when the text is clicked', async () => {
    render(<EditableText {...defaultProps} />);

    await userEvent.click(screen.getByText(defaultProps.value));

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('allows to change the text by typing in a new value', async () => {
    render(<EditableText {...defaultProps} />);
    expect(screen.getByText(defaultProps.value)).toBeInTheDocument();

    await userEvent.click(screen.getByText(defaultProps.value));
    await userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test');
    await userEvent.tab();

    expect(screen.queryByText(defaultProps.value)).not.toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
