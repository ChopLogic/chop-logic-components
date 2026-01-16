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
