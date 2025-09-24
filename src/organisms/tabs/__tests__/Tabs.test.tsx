import { OrientationMode } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Tabs from '../Tabs';

describe('Tabs', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Content 1</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Content 2</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Content 3</> },
  ];

  const testProps = {
    tabs,
    defaultTabId: 'tab-1',
    mode: OrientationMode.Horizontal,
    className: 'test-class',
    id: 'tabs-id',
    stretched: true,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Tabs {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render another tab content when user clicks on tabs', async () => {
    render(<Tabs {...testProps} />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 3'));
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.getByText('Content 3')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 1'));
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('should render another tab content when user switches tabs via keyboard', async () => {
    render(<Tabs {...testProps} />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    const firstTab = screen.getByText('Tab 1');
    firstTab.focus();
    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.getByText('Content 3')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowLeft]');
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 3')).toBeInTheDocument();
  });

  describe('Editable Tabs', () => {
    it('should allow editing tab titles when editable is true', async () => {
      const onTabTitleChange = vi.fn();
      render(<Tabs {...testProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByLabelText('Edit tab');
      await userEvent.click(editButton);

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'New Title{Enter}');

      expect(onTabTitleChange).toHaveBeenCalledWith('tab-1', 'New Title');
    });

    it('should trim the entered value', async () => {
      const onTabTitleChange = vi.fn();
      render(<Tabs {...testProps} editable={true} onTabTitleChange={onTabTitleChange} />);

      const editButton = screen.getByLabelText('Edit tab');
      await userEvent.click(editButton);

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, '   New Title    {Enter}');

      expect(onTabTitleChange).toHaveBeenCalledWith('tab-1', 'New Title');
    });

    it('should update tab title internally when edited', async () => {
      render(<Tabs {...testProps} editable={true} />);

      await userEvent.click(screen.getByText('Tab 2'));

      const editButton = screen.getByLabelText('Edit tab');
      await userEvent.click(editButton);

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'Custom Title{Enter}');

      // The tab should now show the new title
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
      expect(screen.queryByText('Tab 2')).not.toBeInTheDocument();
    });

    it('should cancel tab editing on click cancel button', async () => {
      render(<Tabs {...testProps} editable={true} />);

      await userEvent.click(screen.getByText('Tab 2'));

      const editButton = screen.getByLabelText('Edit tab');
      await userEvent.click(editButton);

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'Custom Title');

      const cancelButton = screen.getByLabelText('Cancel tab title change');
      await userEvent.click(cancelButton);

      expect(screen.queryByText('Custom Title')).not.toBeInTheDocument();
      expect(screen.queryByText('Tab 2')).toBeInTheDocument();
    });

    it('should cancel tab editing on click Escape', async () => {
      render(<Tabs {...testProps} editable={true} />);

      await userEvent.click(screen.getByText('Tab 2'));

      const editButton = screen.getByLabelText('Edit tab');
      await userEvent.click(editButton);

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'Custom Title{Escape}');

      // The tab should now show the new title
      expect(screen.queryByText('Custom Title')).not.toBeInTheDocument();
      expect(screen.queryByText('Tab 2')).toBeInTheDocument();
    });

    it('should not show edit buttons when editable is false', () => {
      render(<Tabs {...testProps} editable={false} />);

      expect(screen.queryByTestId('Edit tab')).not.toBeInTheDocument();
    });
  });

  describe('Extendable Tabs', () => {
    it('should show add button when extendable is true', () => {
      render(<Tabs {...testProps} extendable={true} />);

      expect(screen.getByLabelText('Add Tab')).toBeInTheDocument();
    });

    it('should add new tab when add button is clicked', async () => {
      render(<Tabs {...testProps} extendable={true} />);

      const initialTabs = screen.getAllByText(/Tab [123]/);
      expect(initialTabs).toHaveLength(3);

      const addButton = screen.getByLabelText('Add Tab');
      await userEvent.click(addButton);

      // Should now have 4 tabs (original 3 + new one)
      const tabsAfterAdd = screen.getAllByText(/Tab [1234]|New Tab/);
      expect(tabsAfterAdd).toHaveLength(4);
    });

    it('should use extendedTabLabel for new tab title', async () => {
      render(<Tabs {...testProps} extendable={true} extendedTabLabel='Custom Tab Name' />);

      const addButton = screen.getByLabelText('Add Tab');
      await userEvent.click(addButton);

      expect(screen.getByText('Custom Tab Name')).toBeInTheDocument();
    });

    it('should call onTabAdd callback when tab is added', async () => {
      const onTabAdd = vi.fn();
      render(<Tabs {...testProps} extendable={true} onTabAdd={onTabAdd} />);

      const addButton = screen.getByLabelText('Add Tab');
      await userEvent.click(addButton);

      expect(onTabAdd).toHaveBeenCalledTimes(1);
    });

    it('should auto-select newly added tab', async () => {
      render(<Tabs {...testProps} extendable={true} extendedTabContent={<>New Content</>} />);

      // Initially selected is Tab 1
      expect(screen.getByText('Content 1')).toBeInTheDocument();

      const addButton = screen.getByLabelText('Add Tab');
      await userEvent.click(addButton);

      // New tab content should be visible automatically
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.getByText('New Content')).toBeInTheDocument();
    });

    it('should show delete buttons on tabs when extendable is true', () => {
      render(<Tabs {...testProps} extendable={true} />);

      expect(screen.getByLabelText('Delete tab')).toBeInTheDocument();
    });

    it('should delete tab when delete button is clicked', async () => {
      render(<Tabs {...testProps} extendable={true} />);

      const initialTabs = screen.getAllByText(/Tab [123]/);
      expect(initialTabs).toHaveLength(3);

      await userEvent.click(screen.getByText('Tab 2'));
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      const deleteButton = screen.getByLabelText('Delete tab');
      await userEvent.click(deleteButton);

      const tabsAfterDelete = screen.getAllByText(/Tab [123]/);
      expect(tabsAfterDelete).toHaveLength(2);
      expect(screen.queryByText('Tab 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });

    it('should call onTabDelete callback when tab is deleted', async () => {
      const onTabDelete = vi.fn();
      render(<Tabs {...testProps} extendable={true} onTabDelete={onTabDelete} />);

      await userEvent.click(screen.getByText('Tab 3'));
      const deleteButton = screen.getByLabelText('Delete tab');
      await userEvent.click(deleteButton);

      expect(onTabDelete).toHaveBeenCalledWith('tab-3');
      expect(onTabDelete).toHaveBeenCalledTimes(1);
    });

    it('should select previous tab when current tab is deleted', async () => {
      render(<Tabs {...testProps} extendable={true} />);

      // Select Tab 2
      await userEvent.click(screen.getByText('Tab 2'));
      expect(screen.getByText('Content 2')).toBeInTheDocument();

      // Delete Tab 2
      const deleteButton = screen.getByLabelText('Delete tab');
      await userEvent.click(deleteButton);

      // Should auto-select Tab 1 (previous tab)
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });

    it('should select next tab when first tab is deleted', async () => {
      render(<Tabs {...testProps} extendable={true} />);

      // Tab 1 is selected by default
      expect(screen.getByText('Content 1')).toBeInTheDocument();

      // Delete Tab 1
      const deleteButton = screen.getByLabelText('Delete tab');
      await userEvent.click(deleteButton);

      // Should auto-select Tab 2 (next tab)
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('should handle deleting the only tab', async () => {
      const singleTab = [{ id: 'single-tab', title: 'Single Tab', content: <>Single content</> }];
      render(<Tabs {...testProps} tabs={singleTab} extendable={true} />);

      expect(screen.getByText('Single Tab')).toBeInTheDocument();

      const deleteButton = screen.getByLabelText('Delete tab');
      await userEvent.click(deleteButton);

      // Should handle gracefully when no tabs left
      expect(screen.queryByText('Single Tab')).not.toBeInTheDocument();
    });
  });
});
