import { SelectValue } from '@models';
import { Form } from '@organisms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MultiSelect from '../MultiSelect';

describe('MultiSelect', () => {
  const MULTI_SELECT_VALUES: SelectValue[] = [
    { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
    { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish' },
    { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French' },
    { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
  ];

  const testProps = {
    id: 'multi-select-id',
    className: 'test-class',
    style: { width: '400px' },
    name: 'languages',
    label: 'Select your languages',
    options: MULTI_SELECT_VALUES,
    onChange: vi.fn(),
    placeholder: 'Not selected',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<MultiSelect {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<MultiSelect {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should have accessible roles', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('could be disabled', () => {
    render(<MultiSelect {...testProps} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('could be required', () => {
    render(<MultiSelect {...testProps} required />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true');
  });

  it('should display all values as options', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(MULTI_SELECT_VALUES.length);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(MULTI_SELECT_VALUES[index].label);
    });
  });

  it('should call onSelectChange handler', async () => {
    render(<MultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const option = screen.getAllByRole('option')[0];
    await userEvent.click(option);
    expect(testProps.onChange).toHaveBeenCalledOnce();
  });

  it('should allow the user to select an option', async () => {
    render(<MultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(MULTI_SELECT_VALUES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(MULTI_SELECT_VALUES[1].id);
  });

  it('should allow the user to deselect an option', async () => {
    render(<MultiSelect {...testProps} />);
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
    render(<MultiSelect {...testProps} />);
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

  it('should display a correct placeholder when some items selected', async () => {
    render(<MultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(screen.getByText(testProps.placeholder)).toBeInTheDocument();
    await userEvent.click(combobox);
    const optionOne = screen.getByText(MULTI_SELECT_VALUES[0].label);
    const optionTwo = screen.getByText(MULTI_SELECT_VALUES[1].label);
    const optionThree = screen.getByText(MULTI_SELECT_VALUES[2].label);
    await userEvent.click(optionOne);
    await userEvent.click(optionTwo);
    expect(screen.getByText('2 items selected')).toBeInTheDocument();
    await userEvent.click(optionThree);
    expect(screen.getByText('3 items selected')).toBeInTheDocument();
  });

  it('should display a correct placeholder when all items selected', async () => {
    render(<MultiSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const optionOne = screen.getByText(MULTI_SELECT_VALUES[0].label);
    const optionTwo = screen.getByText(MULTI_SELECT_VALUES[1].label);
    const optionThree = screen.getByText(MULTI_SELECT_VALUES[2].label);
    const optionFour = screen.getByText(MULTI_SELECT_VALUES[3].label);
    await userEvent.click(optionOne);
    await userEvent.click(optionTwo);
    await userEvent.click(optionThree);
    await userEvent.click(optionFour);
    expect(screen.getByText('All items selected')).toBeInTheDocument();
  });

  it('should move the focus correctly on Tab press', async () => {
    render(<MultiSelect {...testProps} />);
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

  it('should move focus to the next option on pressing ArrowDown button', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('should move focus to the previous option pressing ArrowUp button', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option');
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });

  it('should take an initial value from the form context', async () => {
    render(
      <Form initialValues={{ languages: [MULTI_SELECT_VALUES[2], MULTI_SELECT_VALUES[3]] }}>
        <MultiSelect {...testProps} />
      </Form>,
    );
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue(`${MULTI_SELECT_VALUES[2].id},${MULTI_SELECT_VALUES[3].id}`);
    expect(screen.getByText('2 items selected')).toBeInTheDocument();
  });
});
