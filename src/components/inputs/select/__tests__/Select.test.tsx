import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicSelect, { SelectValue } from '../Select';
import userEvent from '@testing-library/user-event';

const LANGUAGES: SelectValue[] = [
  {
    id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7',
    label: 'English',
  },
  {
    id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7',
    label: 'Russian',
  },
  {
    id: '641fc722-af5a-4426-8f8a-1566cc492b91',
    label: 'German',
  },
];

describe('ChopLogicSelect component', () => {
  const testProps = {
    id: 'test-select-id',
    name: 'language',
    label: 'Select your language',
    values: LANGUAGES,
    onSelect: vi.fn(),
    placeholder: 'Test placeholder',
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
    expect(options).toHaveLength(LANGUAGES.length);
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(LANGUAGES[index].label);
    });
  });

  it('should call onSelect handler', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    const option = screen.getByText(LANGUAGES[0].label);
    await userEvent.click(option);
    expect(testProps.onSelect).toHaveBeenCalledOnce();
  });

  it('should allow the user to select an option', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveValue('');
    await userEvent.click(combobox);
    const option = screen.getByText(LANGUAGES[1].label);
    await userEvent.click(option);
    expect(combobox).toHaveValue(LANGUAGES[1].id);
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

  it('pressing ArrowDown button should move focus to the next option', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('pressing ArrowUp button should move focus to the previous option', async () => {
    render(<ChopLogicSelect {...testProps} />);
    const options = screen.getAllByRole('option');
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });
});
