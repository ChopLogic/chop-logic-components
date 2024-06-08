import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ChopLogicMultiSelect from '../MultiSelect';
import { MULTI_SELECT_VALUES } from '__mocks__/select-values';
import userEvent from '@testing-library/user-event';

describe('ChopLogicSelect component', () => {
  const testProps = {
    id: 'language-select-id',
    name: 'languages',
    label: 'Select your languages',
    values: MULTI_SELECT_VALUES,
    onSelect: vi.fn(),
    placeholder: 'Not selected',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<ChopLogicMultiSelect {...testProps} />);
    screen.debug();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should have accessible roles', () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<ChopLogicMultiSelect {...testProps} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('could be required', () => {
    render(<ChopLogicMultiSelect {...testProps} required />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('should display all values as options', () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(MULTI_SELECT_VALUES.length);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(MULTI_SELECT_VALUES[index].label);
    });
  });

  it('should call onSelect handler', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const option = screen.getAllByRole('option')[0];
    screen.debug(option);
    await userEvent.click(option);
    expect(testProps.onSelect).toHaveBeenCalledOnce();
  });

  it('should allow the user to select an option', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(MULTI_SELECT_VALUES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(MULTI_SELECT_VALUES[1].id);
  });

  it('should allow the user to deselect an option', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(MULTI_SELECT_VALUES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(MULTI_SELECT_VALUES[1].id);
    await userEvent.click(option);
    expect(combobox).toHaveValue('');
  });

  it('should allow the user to select several options', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const optionOne = screen.getByText(MULTI_SELECT_VALUES[0].label);
    const optionTwo = screen.getByText(MULTI_SELECT_VALUES[1].label);
    const optionThree = screen.getByText(MULTI_SELECT_VALUES[2].label);
    await userEvent.click(optionOne);
    await userEvent.click(optionTwo);
    await userEvent.click(optionThree);
    expect(combobox).toHaveValue(`${MULTI_SELECT_VALUES[0].id},${MULTI_SELECT_VALUES[1].id},${MULTI_SELECT_VALUES[2].id}`);
  });

  it('should move the focus correctly on Tab press', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);

    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.tab();
    expect(options[1]).toHaveFocus();
    await userEvent.tab();
    expect(options[2]).toHaveFocus();
    await userEvent.tab();
    expect(options[3]).toHaveFocus();
    await userEvent.tab();
    expect(options[0]).toHaveFocus();
  });

  it('pressing ArrowDown button should move focus to the next option', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('pressing ArrowUp button should move focus to the previous option', async () => {
    render(<ChopLogicMultiSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });
});
