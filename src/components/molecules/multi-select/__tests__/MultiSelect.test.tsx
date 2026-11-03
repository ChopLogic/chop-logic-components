import { Form } from '@components/organisms';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { SelectValue } from '@types';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

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
    const option = screen.getAllByRole('option')[0] as HTMLElement;
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
    expect(combobox).toHaveValue(
      `${MULTI_SELECT_VALUES[0].id},${MULTI_SELECT_VALUES[1].id},${MULTI_SELECT_VALUES[2].id}`,
    );
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
    // Tab should move focus out of the dropdown (natural browser behavior)
    // This is the correct accessibility behavior - Tab navigates between components, not within
    await userEvent.tab();
    expect(options[0]).not.toHaveFocus();
  });

  it('should move focus to the next option on pressing ArrowDown button', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option') as [HTMLElement, HTMLElement];
    options[0].focus();
    await userEvent.keyboard('[ArrowDown]');
    expect(options[1]).toHaveFocus();
  });

  it('should move focus to the previous option pressing ArrowUp button', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option') as [HTMLElement, HTMLElement];
    options[1].focus();
    await userEvent.keyboard('[ArrowUp]');
    expect(options[0]).toHaveFocus();
  });

  it('should move focus to the first option by pressing Home', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option');
    options[3].focus();
    await userEvent.keyboard('[Home]');
    expect(options[0]).toHaveFocus();
  });

  it('should move focus to the last option by pressing End', async () => {
    render(<MultiSelect {...testProps} />);
    await userEvent.click(screen.getByRole('combobox'));

    const options = screen.getAllByRole('option');
    options[0].focus();
    await userEvent.keyboard('[End]');
    expect(options[3]).toHaveFocus();
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

describe('MultiSelect loading state', () => {
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

  it('should have aria-busy="true" on the wrapper when isLoading is true', () => {
    const { container } = render(<MultiSelect {...testProps} isLoading={true} />);
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveAttribute('aria-busy', 'true');
  });

  it('should have cl-multi-select_loading class when isLoading is true', () => {
    const { container } = render(<MultiSelect {...testProps} isLoading={true} />);
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('cl-multi-select_loading');
  });

  it('should have aria-busy="true" on the combobox when isLoading is true', () => {
    render(<MultiSelect {...testProps} isLoading={true} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-busy', 'true');
  });

  it('should disable the combobox when isLoading is true', () => {
    render(<MultiSelect {...testProps} isLoading={true} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeDisabled();
  });

  it('should render shimmer element when isLoading is true', () => {
    const { container } = render(<MultiSelect {...testProps} isLoading={true} />);
    expect(container.querySelector('.cl-select-combobox__shimmer')).toBeInTheDocument();
  });

  it('should not render shimmer element when isLoading is false', () => {
    const { container } = render(<MultiSelect {...testProps} isLoading={false} />);
    expect(container.querySelector('.cl-select-combobox__shimmer')).not.toBeInTheDocument();
  });

  it('should keep the combobox collapsed when clicking while loading', async () => {
    render(<MultiSelect {...testProps} isLoading={true} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    expect(combobox).toHaveAttribute('aria-expanded', 'false');
  });

  it('should have cl-select-combobox_loading class on combobox when isLoading is true', () => {
    const { container } = render(<MultiSelect {...testProps} isLoading={true} />);
    const combobox = container.querySelector('.cl-select-combobox');
    expect(combobox).toHaveClass('cl-select-combobox_loading');
  });
});

describe('MultiSelect searchable functionality', () => {
  const MULTI_SELECT_VALUES: SelectValue[] = [
    { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
    { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish' },
    { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French' },
    { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
    { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', label: 'Italian' },
  ];

  const TWO_OPTIONS: SelectValue[] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
  ];

  const testProps = {
    id: 'multi-select-searchable',
    name: 'languages',
    label: 'Select your languages',
    options: MULTI_SELECT_VALUES,
    onChange: vi.fn(),
    placeholder: 'Not selected',
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('filter input rendering', () => {
    it('should not render filter input when isSearchable is false', async () => {
      render(<MultiSelect {...testProps} isSearchable={false} />);

      await userEvent.click(screen.getByRole('combobox'));

      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Filter options...')).not.toBeInTheDocument();
    });

    it('should not render filter input when isSearchable is not provided', async () => {
      render(<MultiSelect {...testProps} />);

      await userEvent.click(screen.getByRole('combobox'));

      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('should render filter input when isSearchable is true even with few options', async () => {
      render(<MultiSelect {...testProps} options={TWO_OPTIONS} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render filter input when isSearchable is true', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      expect(filterInput).toBeInTheDocument();
      expect(filterInput).toHaveAttribute('aria-label', 'Filter options');
    });

    it('should render filter input with custom placeholder', async () => {
      render(<MultiSelect {...testProps} isSearchable searchPlaceholder="Search languages..." />);

      await userEvent.click(screen.getByRole('combobox'));

      expect(screen.getByPlaceholderText('Search languages...')).toBeInTheDocument();
    });
  });

  describe('option filtering', () => {
    it('should filter options as user types', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      // Initially all options are visible
      expect(screen.getAllByRole('option')).toHaveLength(5);

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'Eng' } });

      // Only English should match
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(1);
      expect(options[0]).toHaveTextContent('English');
    });

    /**
     * **Validates: Requirements 4.1**
     * Filtering should be case-insensitive
     */
    it('should filter options case-insensitively', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'SPANISH' } });

      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(1);
      expect(options[0]).toHaveTextContent('Spanish');
    });

    it('should filter options by substring match', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'an' } }); // Matches German, Spanish, Italian

      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      expect(options.map((o) => o.textContent)).toEqual(
        expect.arrayContaining(['Spanish', 'German', 'Italian']),
      );
    });

    it('should display all options when filter query is empty', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      // Filter to "an" which matches Spanish, German, Italian (3 options)
      fireEvent.change(filterInput, { target: { value: 'an' } });
      expect(screen.getAllByRole('option')).toHaveLength(3);

      // Clear the filter
      fireEvent.change(filterInput, { target: { value: '' } });

      expect(screen.getAllByRole('option')).toHaveLength(5);
    });

    it('should display all options when filter query is whitespace only', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: '   ' } });

      expect(screen.getAllByRole('option')).toHaveLength(5);
    });
  });

  describe('no matching options', () => {
    it('should display "No matching options" when filter returns empty', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'xyz123' } });

      expect(screen.queryAllByRole('option')).toHaveLength(0);
      const noMatchMessage = screen.getByRole('status');
      expect(noMatchMessage).toHaveTextContent('No matching options');
    });

    it('should have role="status" on "No matching options" message', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'nonexistent' } });

      const statusMessage = screen.getByRole('status');
      expect(statusMessage).toBeInTheDocument();
      expect(statusMessage).toHaveTextContent('No matching options');
    });
  });

  describe('filter reset on dropdown close', () => {
    it('should reset filter when dropdown closes by clicking outside', async () => {
      render(
        <div>
          <button type="button">Outside button</button>
          <MultiSelect {...testProps} isSearchable />
        </div>,
      );

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'Eng' } });

      // Verify filter is applied
      expect(screen.getAllByRole('option')).toHaveLength(1);

      // Click outside to close
      await userEvent.click(screen.getByText('Outside button'));

      // Reopen the dropdown
      await userEvent.click(screen.getByRole('combobox'));

      // Filter should be reset, all options visible
      expect(screen.getAllByRole('option')).toHaveLength(5);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('should reset filter when dropdown closes by pressing Escape', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'Ger' } });

      // Verify filter is applied
      expect(screen.getAllByRole('option')).toHaveLength(1);

      // Press Escape to close
      await userEvent.keyboard('{Escape}');

      // Reopen the dropdown
      await userEvent.click(screen.getByRole('combobox'));

      // Filter should be reset
      expect(screen.getAllByRole('option')).toHaveLength(5);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('should reset filter when dropdown closes by clicking the combobox', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      const combobox = screen.getByRole('combobox');

      // Open dropdown
      await userEvent.click(combobox);

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'Spa' } });

      // Verify filter is applied
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(screen.getByRole('option')).toHaveTextContent('Spanish');

      // Close dropdown by clicking combobox again
      await userEvent.click(combobox);

      // Reopen the dropdown
      await userEvent.click(combobox);

      // Filter should be reset, all options visible
      expect(screen.getAllByRole('option')).toHaveLength(5);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('should not reset filter when opening dropdown via combobox', async () => {
      render(<MultiSelect {...testProps} isSearchable />);

      const combobox = screen.getByRole('combobox');

      // Open dropdown (this should NOT trigger filter reset since we're opening, not closing)
      await userEvent.click(combobox);

      // Dropdown should be open with all options
      expect(screen.getAllByRole('option')).toHaveLength(5);

      // Filter input should be empty (not affected by the toggle)
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });

  describe('aria-live announcements', () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true });
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should announce filtered count via aria-live region after debounce', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(<MultiSelect {...testProps} isSearchable />);

      await user.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'an' } }); // Matches Spanish, German, Italian

      // Before debounce, aria-live message may not be updated
      const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
      expect(ariaLiveRegion).toBeInTheDocument();

      // Fast-forward timers to trigger debounce
      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      // After debounce, should announce count
      expect(ariaLiveRegion).toHaveTextContent('3 options available');
    });

    it('should announce "No matching options" via aria-live when no matches', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(<MultiSelect {...testProps} isSearchable />);

      await user.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'xyz' } });

      // Fast-forward timers to trigger debounce
      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
      expect(ariaLiveRegion).toHaveTextContent('No matching options');
    });

    it('should use singular form when only one option matches', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(<MultiSelect {...testProps} isSearchable />);

      await user.click(screen.getByRole('combobox'));

      const filterInput = screen.getByRole('textbox');
      fireEvent.change(filterInput, { target: { value: 'English' } });

      // Fast-forward timers to trigger debounce
      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
      expect(ariaLiveRegion).toHaveTextContent('1 option available');
    });
  });
});
