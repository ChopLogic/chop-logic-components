import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicSelect from '../Select';
import userEvent from '@testing-library/user-event';
import { SELECT_LANGUAGES } from '__mocks__/select-values';

describe('ChopLogicSelect', () => {
  const testProps = {
    id: 'language-select-id',
    name: 'language',
    label: 'Select your language',
    values: SELECT_LANGUAGES,
    onSelectChange: vi.fn(),
    placeholder: 'Not selected',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<ChopLogicSelect {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<ChopLogicSelect {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should have accessible roles', () => {
    render(<ChopLogicSelect {...testProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<ChopLogicSelect {...testProps} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('could be required', () => {
    render(<ChopLogicSelect {...testProps} required />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('should display all values as options', () => {
    render(<ChopLogicSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(SELECT_LANGUAGES.length);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(SELECT_LANGUAGES[index].label);
    });
  });

  it('should call onSelectChange handler', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const option = screen.getByText(SELECT_LANGUAGES[0].label);
    await userEvent.click(option);
    expect(testProps.onSelectChange).toHaveBeenCalledOnce();
  });

  it('should allow the user to select an option', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(SELECT_LANGUAGES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(SELECT_LANGUAGES[1].id);
  });

  it('should move the focus correctly on Tab press', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);

    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.tab();
    expect(options[1]).toHaveFocus();
    await userEvent.tab();
    expect(options[2]).toHaveFocus();
    await userEvent.tab();
    expect(options[0]).toHaveFocus();
  });

  it('should move focus to the next option by pressing ArrowDown button', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('should move focus to the previous option by pressing ArrowUp button', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });
});
