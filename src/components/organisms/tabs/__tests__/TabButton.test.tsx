import { OrientationMode } from '@enums';
import { fireEvent, render, screen } from '@testing-library/react';
import type { ButtonProps } from '@types';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TabButton } from '../button/TabButton';

// Mock the Button component
vi.mock('@components/atoms', () => ({
  Button: ({ icon, onClick, label, tooltip }: ButtonProps) => (
    <button
      data-testid={`button-${icon}`}
      type="button"
      onClick={onClick}
      aria-label={label}
      title={tooltip}
    >
      {icon} Button
    </button>
  ),
}));

// Mock the TabEditInput component
vi.mock('../edit-input/TabEditInput', () => ({
  TabEditInput: ({
    editValue,
    onInputChange,
    onInputBlur,
    onInputKeyDown,
    onSave,
    onCancel,
    cancelButtonId,
  }: {
    tabId: string;
    isEditMode: boolean;
    editValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onCancel: () => void;
    cancelButtonId: string;
  }) => (
    <div data-testid="tab-edit-input">
      <input
        data-testid="edit-input"
        value={editValue}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
        aria-labelledby={cancelButtonId}
      />
      <button data-testid="save-button" type="button" onClick={onSave}>
        Save
      </button>
      <button data-testid="cancel-button" type="button" onClick={onCancel} id={cancelButtonId}>
        Cancel
      </button>
    </div>
  ),
}));

const defaultProps = {
  title: 'Test Tab',
  tabId: 'tab-1',
  onTabSelect: vi.fn(),
  tabPanelId: 'tabpanel-1',
  isSelected: true,
  mode: OrientationMode.Horizontal,
  isDisabled: false,
  stretched: false,
  editable: false,
  extendable: false,
};

describe('TabButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders tab button with correct title and attributes', () => {
    render(<TabButton {...defaultProps} />);

    const tabButton = screen.getByRole('tab');
    expect(tabButton).toHaveTextContent('Test Tab');
    expect(tabButton).toHaveAttribute('id', 'tab-1');
    expect(tabButton).toHaveAttribute('aria-selected', 'true');
    expect(tabButton).toHaveAttribute('aria-controls', 'tabpanel-1');
  });

  it('calls onTabSelect when clicked', () => {
    render(<TabButton {...defaultProps} />);

    const tabButton = screen.getByRole('tab');
    fireEvent.click(tabButton);

    expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab-1');
  });

  it('does not call onTabSelect when disabled', () => {
    render(<TabButton {...defaultProps} isDisabled={true} />);

    const tabButton = screen.getByRole('tab');
    fireEvent.click(tabButton);

    expect(defaultProps.onTabSelect).not.toHaveBeenCalled();
  });

  it('shows edit button when editable and selected', () => {
    render(<TabButton {...defaultProps} editable={true} />);

    expect(screen.getByTestId('button-chop-icon__edit')).toBeInTheDocument();
    expect(screen.getByLabelText('Edit tab')).toBeInTheDocument();
  });

  it('does not show edit button when not selected', () => {
    render(<TabButton {...defaultProps} editable={true} isSelected={false} />);

    expect(screen.queryByTestId('button-edit')).not.toBeInTheDocument();
  });

  it('does not show edit button when disabled', () => {
    render(<TabButton {...defaultProps} editable={true} isDisabled={true} />);

    expect(screen.queryByTestId('button-edit')).not.toBeInTheDocument();
  });

  it('enters edit mode when edit button is clicked', () => {
    render(<TabButton {...defaultProps} editable={true} />);

    const editButton = screen.getByLabelText('Edit tab');
    fireEvent.click(editButton);

    expect(screen.getByTestId('tab-edit-input')).toBeInTheDocument();
    expect(screen.getByTestId('edit-input')).toHaveValue('Test Tab');
  });

  it('does not enter edit mode when disabled', () => {
    render(<TabButton {...defaultProps} editable={true} isDisabled={true} />);

    // Edit button shouldn't be visible when disabled, but if it were:
    const editButton = screen.queryByTestId('button-edit');
    expect(editButton).not.toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('saves changes when Enter key is pressed', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.change(input, { target: { value: 'New Title' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(onTabTitleChange).toHaveBeenCalledWith('New Title');
      expect(screen.queryByTestId('tab-edit-input')).not.toBeInTheDocument();
    });

    it('cancels edit when Escape key is pressed', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.change(input, { target: { value: 'New Title' } });
      fireEvent.keyDown(input, { key: 'Escape' });

      expect(onTabTitleChange).not.toHaveBeenCalled();
      expect(screen.queryByTestId('tab-edit-input')).not.toBeInTheDocument();
    });

    it('saves changes when save button is clicked', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.change(input, { target: { value: 'New Title' } });

      const saveButton = screen.getByTestId('save-button');
      fireEvent.click(saveButton);

      expect(onTabTitleChange).toHaveBeenCalledWith('New Title');
    });

    it('cancels edit when cancel button is clicked', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.change(input, { target: { value: 'New Title' } });

      const cancelButton = screen.getByTestId('cancel-button');
      fireEvent.click(cancelButton);

      expect(onTabTitleChange).not.toHaveBeenCalled();
    });

    it('does not save empty title', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.change(input, { target: { value: '   ' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(onTabTitleChange).not.toHaveBeenCalled();
    });

    it('does not save unchanged title', () => {
      const onTabTitleChange = vi.fn();
      render(<TabButton {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByTestId('button-chop-icon__edit');
      fireEvent.click(editButton);

      const input = screen.getByTestId('edit-input');
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(onTabTitleChange).not.toHaveBeenCalled();
    });
  });

  it('shows delete button when extendable and onTabDelete provided', () => {
    const onTabDelete = vi.fn();
    render(<TabButton {...defaultProps} extendable={true} onTabDelete={onTabDelete} />);

    expect(screen.getByTestId('button-chop-icon__delete')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete tab')).toBeInTheDocument();
  });

  it('calls onTabDelete when delete button is clicked', () => {
    const onTabDelete = vi.fn();
    render(<TabButton {...defaultProps} extendable={true} onTabDelete={onTabDelete} />);

    const deleteButton = screen.getByTestId('button-chop-icon__delete');
    fireEvent.click(deleteButton);

    expect(onTabDelete).toHaveBeenCalledWith('tab-1');
  });

  it('does not show delete button when not selected', () => {
    const onTabDelete = vi.fn();
    render(
      <TabButton
        {...defaultProps}
        extendable={true}
        onTabDelete={onTabDelete}
        isSelected={false}
      />,
    );

    expect(screen.queryByTestId('button-delete')).not.toBeInTheDocument();
  });

  it('does not show delete button when no onTabDelete provided', () => {
    render(<TabButton {...defaultProps} extendable={true} />);

    expect(screen.queryByTestId('button-delete')).not.toBeInTheDocument();
  });

  it('updates title when prop changes', () => {
    const { rerender } = render(<TabButton {...defaultProps} />);

    expect(screen.getByRole('tab')).toHaveTextContent('Test Tab');

    rerender(<TabButton {...defaultProps} title="Updated Title" />);

    expect(screen.getByRole('tab')).toHaveTextContent('Updated Title');
  });

  it('does not select tab while in edit mode', () => {
    render(<TabButton {...defaultProps} editable={true} />);

    // Enter edit mode
    const editButton = screen.getByTestId('button-chop-icon__edit');
    fireEvent.click(editButton);

    // Try to click the tab (which is now replaced by edit input)
    const editInput = screen.getByTestId('tab-edit-input');
    fireEvent.click(editInput);

    expect(defaultProps.onTabSelect).not.toHaveBeenCalled();
  });
});
