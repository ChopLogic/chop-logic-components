import { Form } from '@components/organisms';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { SelectValue } from '@types';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

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

  describe('Searchable functionality', () => {
    const SEARCHABLE_OPTIONS: SelectValue[] = [
      { id: '1', label: 'Apple' },
      { id: '2', label: 'Banana' },
      { id: '3', label: 'Cherry' },
      { id: '4', label: 'Date' },
      { id: '5', label: 'Elderberry' },
    ];

    const searchableProps = {
      ...testProps,
      options: SEARCHABLE_OPTIONS,
      isSearchable: true,
    };

    const TWO_OPTIONS: SelectValue[] = [
      { id: '1', label: 'Apple' },
      { id: '2', label: 'Banana' },
    ];

    it('should not render filter input when isSearchable is false', async () => {
      render(<Select {...testProps} isSearchable={false} />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.queryByPlaceholderText('Filter options...')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Filter options')).not.toBeInTheDocument();
    });

    it('should render filter input when isSearchable is true even with few options', async () => {
      render(<Select {...testProps} options={TWO_OPTIONS} isSearchable />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByPlaceholderText('Filter options...')).toBeInTheDocument();
      expect(screen.getByLabelText('Filter options')).toBeInTheDocument();
    });

    it('should render filter input when isSearchable is true', async () => {
      render(<Select {...searchableProps} />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByPlaceholderText('Filter options...')).toBeInTheDocument();
      expect(screen.getByLabelText('Filter options')).toBeInTheDocument();
    });

    it('should filter options as user types', async () => {
      render(<Select {...searchableProps} />);
      await userEvent.click(screen.getByRole('combobox'));

      // All 5 options should be visible initially
      expect(screen.getAllByRole('option')).toHaveLength(5);

      // Type to filter - "erry" matches only "Cherry" and "Elderberry"
      const filterInput = screen.getByPlaceholderText('Filter options...');
      await userEvent.type(filterInput, 'erry');

      // Only Cherry and Elderberry should remain visible (contain "erry")
      const filteredOptions = screen.getAllByRole('option');
      expect(filteredOptions).toHaveLength(2);
      expect(filteredOptions.map((o) => o.textContent)).toEqual(
        expect.arrayContaining(['Cherry', 'Elderberry']),
      );
    });

    it('should display "No matching options" when filter returns empty', async () => {
      render(<Select {...searchableProps} />);
      await userEvent.click(screen.getByRole('combobox'));

      // Type a query that matches nothing
      const filterInput = screen.getByPlaceholderText('Filter options...');
      await userEvent.type(filterInput, 'xyz');

      // No options should be visible
      expect(screen.queryAllByRole('option')).toHaveLength(0);

      // "No matching options" message should be displayed with role="status"
      expect(screen.getByRole('status')).toHaveTextContent('No matching options');
    });

    it('should reset filter when dropdown closes by clicking outside', async () => {
      render(
        <div>
          <button type="button">Outside button</button>
          <Select {...searchableProps} />
        </div>,
      );
      const combobox = screen.getByRole('combobox');

      // Open dropdown and filter
      await userEvent.click(combobox);
      const filterInput = screen.getByPlaceholderText('Filter options...');
      // Use "erry" which matches Cherry and Elderberry (2 options)
      await userEvent.type(filterInput, 'erry');

      // Verify filter is applied
      expect(screen.getAllByRole('option')).toHaveLength(2);

      // Close dropdown by clicking outside element
      await userEvent.click(screen.getByText('Outside button'));

      // Reopen dropdown - all options should be visible again
      await userEvent.click(combobox);
      expect(screen.getAllByRole('option')).toHaveLength(5);

      // Filter input should be cleared
      const newFilterInput = screen.getByPlaceholderText('Filter options...');
      expect(newFilterInput).toHaveValue('');
    });

    it('should reset filter when dropdown closes by pressing Escape', async () => {
      render(<Select {...searchableProps} />);
      const combobox = screen.getByRole('combobox');

      // Open dropdown and filter
      await userEvent.click(combobox);
      const filterInput = screen.getByPlaceholderText('Filter options...');
      // Use "ple" which matches Apple only, but need at least 3 options filtered for filter to show
      // So use "a" which matches Apple, Banana, Date, Elderberry (4 options)
      await userEvent.type(filterInput, 'pple');

      // Verify filter is applied - only Apple matches "pple"
      const filteredOptions = screen.getAllByRole('option');
      expect(filteredOptions).toHaveLength(1);
      expect(filteredOptions[0]).toHaveTextContent('Apple');

      // Press Escape to close
      await userEvent.keyboard('{Escape}');

      // Reopen the dropdown
      await userEvent.click(combobox);

      // Filter should be reset, all options visible
      expect(screen.getAllByRole('option')).toHaveLength(5);
      expect(screen.getByPlaceholderText('Filter options...')).toHaveValue('');
    });

    it('should reset filter when dropdown closes by clicking the combobox', async () => {
      render(<Select {...searchableProps} />);
      const combobox = screen.getByRole('combobox');

      // Open dropdown and filter
      await userEvent.click(combobox);
      const filterInput = screen.getByPlaceholderText('Filter options...');
      await userEvent.type(filterInput, 'Banana');

      // Verify filter is applied - only Banana matches
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(screen.getByRole('option')).toHaveTextContent('Banana');

      // Close dropdown by clicking combobox again
      await userEvent.click(combobox);

      // Reopen dropdown
      await userEvent.click(combobox);

      // Filter should be reset, all options visible
      expect(screen.getAllByRole('option')).toHaveLength(5);
      expect(screen.getByPlaceholderText('Filter options...')).toHaveValue('');
    });

    it('should not reset filter when opening dropdown via combobox', async () => {
      render(<Select {...searchableProps} />);
      const combobox = screen.getByRole('combobox');

      // Open dropdown (this should NOT trigger filter reset since we're opening, not closing)
      await userEvent.click(combobox);

      // Dropdown should be open with all options
      expect(screen.getAllByRole('option')).toHaveLength(5);

      // Filter input should be empty (not affected by the toggle)
      expect(screen.getByPlaceholderText('Filter options...')).toHaveValue('');
    });

    describe('Aria-live announcements', () => {
      beforeEach(() => {
        vi.useFakeTimers({ shouldAdvanceTime: true });
      });

      afterEach(() => {
        vi.useRealTimers();
      });

      it('should announce filtered count via aria-live region after debounce', async () => {
        render(<Select {...searchableProps} />);

        await userEvent.click(screen.getByRole('combobox'));

        // Type to filter - "a" matches Apple, Banana, Date, Elderberry
        const filterInput = screen.getByPlaceholderText('Filter options...');
        await userEvent.type(filterInput, 'a');

        // Find the aria-live region
        const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
        expect(ariaLiveRegion).toBeInTheDocument();

        // Fast-forward timers to trigger debounce (300ms)
        await act(async () => {
          vi.advanceTimersByTime(300);
        });

        // Should announce count of matching options
        expect(ariaLiveRegion).toHaveTextContent(/\d+ options? available/);
      });

      it('should announce "No matching options" via aria-live region when filter returns empty', async () => {
        render(<Select {...searchableProps} />);

        await userEvent.click(screen.getByRole('combobox'));

        // Type a query that matches nothing
        const filterInput = screen.getByPlaceholderText('Filter options...');
        await userEvent.type(filterInput, 'xyz');

        // Find the aria-live region
        const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
        expect(ariaLiveRegion).toBeInTheDocument();

        // Fast-forward timers to trigger debounce (300ms)
        await act(async () => {
          vi.advanceTimersByTime(300);
        });

        // Should announce no matching options
        expect(ariaLiveRegion).toHaveTextContent('No matching options');
      });

      it('should use singular form when only one option matches', async () => {
        render(<Select {...searchableProps} />);

        await userEvent.click(screen.getByRole('combobox'));

        // Type to filter - "Cherry" matches only one option exactly
        const filterInput = screen.getByPlaceholderText('Filter options...');
        await userEvent.type(filterInput, 'Cherry');

        // Find the aria-live region
        const ariaLiveRegion = document.querySelector('.cl-select-dropdown__aria-live');
        expect(ariaLiveRegion).toBeInTheDocument();

        // Fast-forward timers to trigger debounce (300ms)
        await act(async () => {
          vi.advanceTimersByTime(300);
        });

        // Should announce singular form
        expect(ariaLiveRegion).toHaveTextContent('1 option available');
      });
    });

    it('should use custom searchPlaceholder when provided', async () => {
      render(<Select {...searchableProps} searchPlaceholder="Search fruits..." />);
      await userEvent.click(screen.getByRole('combobox'));
      expect(screen.getByPlaceholderText('Search fruits...')).toBeInTheDocument();
    });

    it('should filter options case-insensitively', async () => {
      render(<Select {...searchableProps} />);
      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByPlaceholderText('Filter options...');
      await userEvent.type(filterInput, 'APPLE');

      const filteredOptions = screen.getAllByRole('option');
      expect(filteredOptions).toHaveLength(1);
      expect(filteredOptions[0]).toHaveTextContent('Apple');
    });

    it('should display all options when filter query is cleared', async () => {
      render(<Select {...searchableProps} />);

      await userEvent.click(screen.getByRole('combobox'));

      const filterInput = screen.getByPlaceholderText('Filter options...');

      // Type to filter - "a" matches Apple, Banana, Date, Elderberry (4 options)
      fireEvent.change(filterInput, { target: { value: 'a' } });

      // Verify filter is applied (should be 4 options matching 'a')
      expect(screen.getAllByRole('option').length).toBeLessThan(5);

      // Clear the filter using fireEvent.change as specified in task
      fireEvent.change(filterInput, { target: { value: '' } });

      // All 5 options should be visible again
      expect(screen.getAllByRole('option')).toHaveLength(5);
    });
  });
});
