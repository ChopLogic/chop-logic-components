import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FilterPopup, type FilterPopupProps } from '../filter-popup/FilterPopup';

describe('FilterPopup', () => {
  const defaultProps: FilterPopupProps = {
    popupId: 'test-popup',
    hasActiveConditions: false,
    onApply: vi.fn(),
    onClear: vi.fn(),
    onCancel: vi.fn(),
  };

  const renderFilterPopup = (props: Partial<FilterPopupProps> = {}) => {
    return render(<FilterPopup {...defaultProps} {...props} />);
  };

  describe('dialog semantics', () => {
    it('should have role="dialog"', () => {
      renderFilterPopup();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('should have aria-modal="true"', () => {
      renderFilterPopup();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('should have aria-label with column title when provided', () => {
      renderFilterPopup({ columnTitle: 'Name' });
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-label', 'Filter Name');
    });

    it('should have aria-label "Filter column" when columnTitle is not provided', () => {
      renderFilterPopup();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-label', 'Filter column');
    });

    it('should have the provided popupId as id attribute', () => {
      renderFilterPopup({ popupId: 'my-filter-popup' });
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('id', 'my-filter-popup');
    });
  });

  describe('filter type options', () => {
    it('should render three filter type options', () => {
      renderFilterPopup();
      const radioGroup = screen.getByRole('radiogroup', { name: 'Filter type' });
      const options = within(radioGroup).getAllByRole('radio');
      expect(options).toHaveLength(3);
    });

    it('should render "Starts with" option', () => {
      renderFilterPopup();
      expect(screen.getByLabelText('Starts with')).toBeInTheDocument();
    });

    it('should render "Includes" option', () => {
      renderFilterPopup();
      expect(screen.getByLabelText('Includes')).toBeInTheDocument();
    });

    it('should render "Equals to" option', () => {
      renderFilterPopup();
      expect(screen.getByLabelText('Equals to')).toBeInTheDocument();
    });

    it('should have "Starts with" selected by default', () => {
      renderFilterPopup();
      const startsWithOption = screen.getByLabelText('Starts with');
      expect(startsWithOption).toBeChecked();
    });

    it('should have exactly one option selected (single-select)', () => {
      renderFilterPopup();
      const radioGroup = screen.getByRole('radiogroup', { name: 'Filter type' });
      const options = within(radioGroup).getAllByRole('radio');
      const checkedOptions = options.filter((option) => (option as HTMLInputElement).checked);
      expect(checkedOptions).toHaveLength(1);
    });

    it('should allow changing the selected filter type', async () => {
      renderFilterPopup();
      const includesOption = screen.getByLabelText('Includes');

      await userEvent.click(includesOption);

      expect(includesOption).toBeChecked();
      expect(screen.getByLabelText('Starts with')).not.toBeChecked();
      expect(screen.getByLabelText('Equals to')).not.toBeChecked();
    });
  });

  describe('text input', () => {
    it('should render a text input field', () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });
      expect(input).toBeInTheDocument();
    });

    it('should have maxLength of 1000', () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });
      expect(input).toHaveAttribute('maxLength', '1000');
    });

    it('should start with empty value', () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });
      expect(input).toHaveValue('');
    });

    it('should update value on user input', async () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });

      await userEvent.type(input, 'test value');

      expect(input).toHaveValue('test value');
    });
  });

  describe('case sensitivity checkbox', () => {
    it('should render a case-sensitivity checkbox', () => {
      renderFilterPopup();
      const checkbox = screen.getByRole('checkbox', { name: /case sensitive/i });
      expect(checkbox).toBeInTheDocument();
    });

    it('should be unchecked by default', () => {
      renderFilterPopup();
      const checkbox = screen.getByRole('checkbox', { name: /case sensitive/i });
      expect(checkbox).not.toBeChecked();
    });

    it('should toggle when clicked', async () => {
      renderFilterPopup();
      const checkbox = screen.getByRole('checkbox', { name: /case sensitive/i });

      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();

      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Apply, Cancel, Clear controls', () => {
    it('should render Apply button', () => {
      renderFilterPopup();
      const applyButton = screen.getByRole('button', { name: /apply filter/i });
      expect(applyButton).toBeInTheDocument();
    });

    it('should render Cancel button', () => {
      renderFilterPopup();
      const cancelButton = screen.getByRole('button', { name: /cancel filter/i });
      expect(cancelButton).toBeInTheDocument();
    });

    it('should render Clear button', () => {
      renderFilterPopup();
      const clearButton = screen.getByRole('button', { name: /clear filter/i });
      expect(clearButton).toBeInTheDocument();
    });
  });

  describe('Apply behavior', () => {
    it('should call onApply with condition when value is non-empty', async () => {
      const onApply = vi.fn();
      renderFilterPopup({ onApply });
      const input = screen.getByRole('textbox', { name: /filter value/i });
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      await userEvent.type(input, 'test');
      await userEvent.click(applyButton);

      expect(onApply).toHaveBeenCalledTimes(1);
      expect(onApply).toHaveBeenCalledWith({
        type: 'startsWith',
        value: 'test',
        caseSensitive: false,
      });
    });

    it('should include selected filter type in condition', async () => {
      const onApply = vi.fn();
      renderFilterPopup({ onApply });
      const input = screen.getByRole('textbox', { name: /filter value/i });
      const includesOption = screen.getByLabelText('Includes');
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      await userEvent.click(includesOption);
      await userEvent.type(input, 'search');
      await userEvent.click(applyButton);

      expect(onApply).toHaveBeenCalledWith({
        type: 'includes',
        value: 'search',
        caseSensitive: false,
      });
    });

    it('should include caseSensitive setting in condition', async () => {
      const onApply = vi.fn();
      renderFilterPopup({ onApply });
      const input = screen.getByRole('textbox', { name: /filter value/i });
      const checkbox = screen.getByRole('checkbox', { name: /case sensitive/i });
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      await userEvent.type(input, 'test');
      await userEvent.click(checkbox);
      await userEvent.click(applyButton);

      expect(onApply).toHaveBeenCalledWith({
        type: 'startsWith',
        value: 'test',
        caseSensitive: true,
      });
    });

    it('should show error and not call onApply when value is empty', async () => {
      const onApply = vi.fn();
      renderFilterPopup({ onApply });
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      await userEvent.click(applyButton);

      expect(onApply).not.toHaveBeenCalled();
      expect(screen.getByRole('alert')).toHaveTextContent('Filter value is required');
    });

    it('should show error and not call onApply when value is only whitespace', async () => {
      const onApply = vi.fn();
      renderFilterPopup({ onApply });
      const input = screen.getByRole('textbox', { name: /filter value/i });
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      await userEvent.type(input, '   ');
      await userEvent.click(applyButton);

      expect(onApply).not.toHaveBeenCalled();
      expect(screen.getByRole('alert')).toHaveTextContent('Filter value is required');
    });

    it('should clear error when user starts typing', async () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });
      const applyButton = screen.getByRole('button', { name: /apply filter/i });

      // Trigger error
      await userEvent.click(applyButton);
      expect(screen.getByRole('alert')).toBeInTheDocument();

      // Start typing to clear error
      await userEvent.type(input, 'a');
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
  });

  describe('Cancel behavior', () => {
    it('should call onCancel when Cancel button is clicked', async () => {
      const onCancel = vi.fn();
      renderFilterPopup({ onCancel });
      const cancelButton = screen.getByRole('button', { name: /cancel filter/i });

      await userEvent.click(cancelButton);

      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Clear behavior', () => {
    it('should call onClear when Clear button is clicked and hasActiveConditions is true', async () => {
      const onClear = vi.fn();
      renderFilterPopup({ onClear, hasActiveConditions: true });
      const clearButton = screen.getByRole('button', { name: /clear filter/i });

      await userEvent.click(clearButton);

      expect(onClear).toHaveBeenCalledTimes(1);
    });

    it('should disable Clear button when hasActiveConditions is false', () => {
      renderFilterPopup({ hasActiveConditions: false });
      const clearButton = screen.getByRole('button', { name: /clear filter/i });
      expect(clearButton).toBeDisabled();
    });

    it('should enable Clear button when hasActiveConditions is true', () => {
      renderFilterPopup({ hasActiveConditions: true });
      const clearButton = screen.getByRole('button', { name: /clear filter/i });
      expect(clearButton).not.toBeDisabled();
    });
  });

  describe('Escape key closes popup', () => {
    it('should call onCancel when Escape key is pressed', async () => {
      const onCancel = vi.fn();
      renderFilterPopup({ onCancel });

      await userEvent.keyboard('{Escape}');

      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('click outside closes popup', () => {
    it('should call onCancel when clicking outside the popup', async () => {
      const onCancel = vi.fn();
      const { container } = renderFilterPopup({ onCancel });

      // Simulate click outside by clicking on the container (outside dialog)
      await userEvent.click(container);

      expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('should not call onCancel when clicking inside the popup', async () => {
      const onCancel = vi.fn();
      renderFilterPopup({ onCancel });
      const dialog = screen.getByRole('dialog');

      await userEvent.click(dialog);

      expect(onCancel).not.toHaveBeenCalled();
    });
  });

  describe('focus on open', () => {
    it('should focus the first control on mount', () => {
      renderFilterPopup();
      const startsWithOption = screen.getByLabelText('Starts with');
      expect(startsWithOption).toHaveFocus();
    });
  });

  describe('focus trap', () => {
    it('should keep focus within the popup on Tab navigation', async () => {
      renderFilterPopup({ hasActiveConditions: true });
      const dialog = screen.getByRole('dialog');

      // Focus should be within the dialog
      const focusableElements = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      expect(focusableElements.length).toBeGreaterThan(0);

      // Tab through all elements
      for (let i = 0; i < focusableElements.length + 1; i++) {
        await userEvent.tab();
        expect(dialog.contains(document.activeElement)).toBe(true);
      }
    });

    it('should cycle focus backwards on Shift+Tab', async () => {
      renderFilterPopup({ hasActiveConditions: true });
      const dialog = screen.getByRole('dialog');

      // Tab to first element
      await userEvent.tab();
      expect(dialog.contains(document.activeElement)).toBe(true);

      // Shift+Tab should cycle to last element
      await userEvent.tab({ shift: true });
      expect(dialog.contains(document.activeElement)).toBe(true);
    });
  });

  describe('accessible labels', () => {
    it('should have accessible label for filter type radio group', () => {
      renderFilterPopup();
      const radioGroup = screen.getByRole('radiogroup', { name: 'Filter type' });
      expect(radioGroup).toBeInTheDocument();
    });

    it('should have accessible labels for each filter type option', () => {
      renderFilterPopup();
      expect(screen.getByLabelText('Starts with')).toBeInTheDocument();
      expect(screen.getByLabelText('Includes')).toBeInTheDocument();
      expect(screen.getByLabelText('Equals to')).toBeInTheDocument();
    });

    it('should have accessible label for text input', () => {
      renderFilterPopup();
      const input = screen.getByRole('textbox', { name: /filter value/i });
      expect(input).toBeInTheDocument();
    });

    it('should have accessible label for case-sensitivity checkbox', () => {
      renderFilterPopup();
      const checkbox = screen.getByRole('checkbox', { name: /case sensitive/i });
      expect(checkbox).toBeInTheDocument();
    });

    it('should have accessible label for Apply button', () => {
      renderFilterPopup();
      const applyButton = screen.getByRole('button', { name: /apply filter/i });
      expect(applyButton).toBeInTheDocument();
    });

    it('should have accessible label for Cancel button', () => {
      renderFilterPopup();
      const cancelButton = screen.getByRole('button', { name: /cancel filter/i });
      expect(cancelButton).toBeInTheDocument();
    });

    it('should have accessible label for Clear button', () => {
      renderFilterPopup();
      const clearButton = screen.getByRole('button', { name: /clear filter/i });
      expect(clearButton).toBeInTheDocument();
    });
  });

  describe('CSS class structure', () => {
    it('should have cl-grid-filter-popup class on root element', () => {
      renderFilterPopup();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveClass('cl-grid-filter-popup');
    });
  });
});
