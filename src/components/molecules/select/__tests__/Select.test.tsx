import { Form } from '@components/organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { SelectValue } from '@types';
import { describe, expect, it, vi } from 'vitest';

import Select from '../Select';

describe('Select', () => {
  const SELECT_LANGUAGES: SelectValue[] = [
    { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
    { id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7', label: 'Russian' },
    { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
  ];

  const testProps = {
    id: 'select-id',
    name: 'language',
    className: 'test-class',
    style: { width: '400px' },
    label: 'Select your language',
    options: SELECT_LANGUAGES,
    onChange: vi.fn(),
    placeholder: 'Not selected',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<Select {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<Select {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should have accessible roles', async () => {
    render(<Select {...testProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<Select {...testProps} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('could be required', () => {
    render(<Select {...testProps} required />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('should display all values as options', async () => {
    render(<Select {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(SELECT_LANGUAGES.length);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(SELECT_LANGUAGES[index].label);
    });
  });

  it('should call onSelectChange handler', async () => {
    render(<Select {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const option = screen.getByText(SELECT_LANGUAGES[0].label);
    await userEvent.click(option);
    expect(testProps.onChange).toHaveBeenCalledOnce();
  });

  it('should allow the user to select an option', async () => {
    render(<Select {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(SELECT_LANGUAGES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(SELECT_LANGUAGES[1].id);
  });

  it('should allow the user to deselect the same option', async () => {
    render(<Select {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(SELECT_LANGUAGES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(SELECT_LANGUAGES[1].id);
    await userEvent.click(option);
    expect(combobox).not.toHaveValue(SELECT_LANGUAGES[1].id);
  });

  it('should move the focus correctly on Tab press', async () => {
    render(<Select {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);

    const options = screen.getAllByRole('option');
    options[0].focus();
    // Tab should move focus out of the dropdown (natural browser behavior)
    // This is the correct accessibility behavior - Tab navigates between components, not within
    await userEvent.tab();
    expect(options[0]).not.toHaveFocus();
  });

  it('should move focus to the next option by pressing ArrowDown button', async () => {
    render(<Select {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('should move focus to the previous option by pressing ArrowUp button', async () => {
    render(<Select {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });

  it('should move focus to the first option by pressing Home', async () => {
    render(<Select {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    options[2].focus();
    await userEvent.keyboard('[Home]');
    expect(options[0]).toHaveFocus();
  });

  it('should move focus to the last option by pressing End', async () => {
    render(<Select {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[End]');
    expect(options[2]).toHaveFocus();
  });

  it('should take an initial value from the form context', async () => {
    render(
      <Form initialValues={{ language: SELECT_LANGUAGES[2] }}>
        <Select {...testProps} />
      </Form>,
    );
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue(SELECT_LANGUAGES[2].id);
  });

  // Loading state tests
  describe('Loading state', () => {
    it('should render shimmer overlay when isLoading is true', () => {
      const { container } = render(<Select {...testProps} isLoading />);
      expect(container.querySelector('.cl-select-combobox__shimmer')).toBeInTheDocument();
    });

    it('should not render shimmer overlay when isLoading is false', () => {
      const { container } = render(<Select {...testProps} isLoading={false} />);
      expect(container.querySelector('.cl-select-combobox__shimmer')).not.toBeInTheDocument();
    });

    it('should not render shimmer overlay when isLoading prop is not provided', () => {
      const { container } = render(<Select {...testProps} />);
      expect(container.querySelector('.cl-select-combobox__shimmer')).not.toBeInTheDocument();
    });

    it('should set aria-busy to true when isLoading is true', () => {
      const { container } = render(<Select {...testProps} isLoading />);
      const wrapperDiv = container.querySelector('.cl-select');
      expect(wrapperDiv).toHaveAttribute('aria-busy', 'true');
    });

    it('should apply loading modifier class when isLoading is true', () => {
      const { container } = render(<Select {...testProps} isLoading />);
      expect(container.querySelector('.cl-select_loading')).toBeInTheDocument();
    });

    it('should disable combobox when isLoading is true', () => {
      render(<Select {...testProps} isLoading />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('should prevent dropdown from opening when isLoading is true', async () => {
      render(<Select {...testProps} isLoading />);
      const combobox = screen.getByRole('combobox');
      await userEvent.click(combobox);
      // Dropdown exists but should not have the opened class
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
    });

    it('should not call onChange handler when isLoading is true', async () => {
      const mockedOnChange = vi.fn();
      render(<Select {...testProps} isLoading onChange={mockedOnChange} />);
      const combobox = screen.getByRole('combobox');
      await userEvent.click(combobox);
      // Combobox is disabled, so click has no effect
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(mockedOnChange).not.toHaveBeenCalled();
    });

    it('should render shimmer inside combobox, not covering the label', () => {
      const { container } = render(<Select {...testProps} isLoading />);
      const label = screen.getByText(testProps.label);
      const shimmer = container.querySelector('.cl-select-combobox__shimmer');

      // Label should not contain the shimmer
      expect(label.querySelector('.cl-select-combobox__shimmer')).toBeNull();

      // Shimmer should be inside the combobox
      const combobox = container.querySelector('.cl-select-combobox');
      expect(combobox).toContainElement(shimmer as HTMLElement);
    });

    it('should apply loading modifier class to combobox when isLoading is true', () => {
      const { container } = render(<Select {...testProps} isLoading />);
      expect(container.querySelector('.cl-select-combobox_loading')).toBeInTheDocument();
    });
  });
});
