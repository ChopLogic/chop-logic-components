import { Form } from '@components/organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  const testProps = {
    id: 'test-checkbox-id',
    name: 'checkbox',
    label: 'Test label',
  };

  it('should render the input correctly', () => {
    const { asFragment } = render(<Checkbox {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByText(testProps.label)).toBeInTheDocument();
  });

  it('should be enabled by default', () => {
    render(<Checkbox {...testProps} />);
    expect(screen.getByRole('checkbox')).toBeEnabled();
  });

  it('could be disable by prop', () => {
    render(<Checkbox {...testProps} disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('could be checked by default', () => {
    render(<Checkbox {...testProps} defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should check and uncheck the checkbox on click', async () => {
    render(<Checkbox {...testProps} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should call onChange handler on click', async () => {
    const mockOnChange = vi.fn();
    render(<Checkbox {...testProps} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledOnce();
  });

  it('should call onChange handler on Space key press', async () => {
    const mockOnChange = vi.fn();
    render(<Checkbox {...testProps} onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await userEvent.keyboard('[Space]');
    expect(mockOnChange).toHaveBeenCalledOnce();
  });

  it('should take an initial value from the form context', async () => {
    render(
      <Form initialValues={{ checkbox: true }}>
        <Checkbox {...testProps} />
      </Form>,
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should ignore the defaultChecked prop is initial values is provided from the form context', async () => {
    render(
      <Form initialValues={{ checkbox: false }}>
        <Checkbox {...testProps} defaultChecked />
      </Form>,
    );
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  // Stateless mode tests
  describe('Stateless mode', () => {
    it('should use stateless checked prop when stateless is true', () => {
      const { rerender } = render(
        <Checkbox {...testProps} stateless checked={true} onChange={vi.fn()} />,
      );

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();

      rerender(<Checkbox {...testProps} stateless checked={false} onChange={vi.fn()} />);
      expect(checkbox).not.toBeChecked();
    });

    it('should call onChange when checkbox is toggled in stateless mode', async () => {
      const handleChange = vi.fn();
      render(<Checkbox {...testProps} stateless checked={false} onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should not update internal state when stateless is true', async () => {
      const { rerender } = render(
        <Checkbox {...testProps} stateless checked={false} onChange={vi.fn()} />,
      );

      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);

      // Checkbox should still be unchecked because stateless mode doesn't update internal state
      expect(checkbox).not.toBeChecked();

      // Only update when parent re-renders with new checked value
      rerender(<Checkbox {...testProps} stateless checked={true} onChange={vi.fn()} />);
      expect(checkbox).toBeChecked();
    });

    it('should render correctly with stateless mode and no checked prop', () => {
      render(<Checkbox {...testProps} stateless onChange={vi.fn()} />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });

    it('should be disabled in stateless mode when disabled prop is true', () => {
      render(<Checkbox {...testProps} stateless checked={false} disabled onChange={vi.fn()} />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should toggle on Space key press in stateless mode', async () => {
      const mockOnChange = vi.fn();
      render(<Checkbox {...testProps} stateless checked={false} onChange={mockOnChange} />);
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      await userEvent.keyboard('[Space]');
      expect(mockOnChange).toHaveBeenCalledOnce();
    });
  });
});

// Loading state tests
describe('Loading state', () => {
  const testProps = {
    id: 'test-checkbox-id',
    name: 'checkbox',
    label: 'Test label',
  };

  it('should have loading BEM modifier class when isLoading is true', () => {
    render(<Checkbox {...testProps} isLoading />);
    const container = screen.getByRole('checkbox').closest('.cl-checkbox');
    expect(container).toHaveClass('cl-checkbox_loading');
  });

  it('should not have loading BEM modifier class when isLoading is false', () => {
    render(<Checkbox {...testProps} isLoading={false} />);
    const container = screen.getByRole('checkbox').closest('.cl-checkbox');
    expect(container).not.toHaveClass('cl-checkbox_loading');
  });

  it('should have aria-busy="true" when isLoading is true', () => {
    render(<Checkbox {...testProps} isLoading />);
    const container = screen.getByRole('checkbox').closest('.cl-checkbox');
    expect(container).toHaveAttribute('aria-busy', 'true');
  });

  it('should NOT change checked state on click when isLoading is true', async () => {
    render(<Checkbox {...testProps} isLoading />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should NOT change checked state on click when isLoading is true (starting checked)', async () => {
    render(<Checkbox {...testProps} isLoading defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should NOT change checked state on Space key press when isLoading is true', async () => {
    render(<Checkbox {...testProps} isLoading />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    checkbox.focus();
    await userEvent.keyboard('[Space]');
    expect(checkbox).not.toBeChecked();
  });

  it('should NOT call onChange handler when isLoading is true', async () => {
    const mockOnChange = vi.fn();
    render(<Checkbox {...testProps} isLoading onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should be disabled when isLoading is true (input element)', () => {
    render(<Checkbox {...testProps} isLoading />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  // Stateless mode loading tests
  describe('Stateless mode with loading', () => {
    it('should have loading class when isLoading is true in stateless mode', () => {
      render(<Checkbox {...testProps} stateless checked={false} isLoading onChange={vi.fn()} />);
      const container = screen.getByRole('checkbox').closest('.cl-checkbox');
      expect(container).toHaveClass('cl-checkbox_loading');
    });

    it('should NOT call onChange on click when isLoading is true in stateless mode', async () => {
      const mockOnChange = vi.fn();
      render(
        <Checkbox {...testProps} stateless checked={false} isLoading onChange={mockOnChange} />,
      );
      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);
      expect(mockOnChange).not.toHaveBeenCalled();
    });

    it('should NOT call onChange on Space key press when isLoading is true in stateless mode', async () => {
      const mockOnChange = vi.fn();
      render(
        <Checkbox {...testProps} stateless checked={false} isLoading onChange={mockOnChange} />,
      );
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      await userEvent.keyboard('[Space]');
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
