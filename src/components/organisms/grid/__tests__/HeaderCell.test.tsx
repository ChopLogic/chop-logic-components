import { GridFilterType, GridSortDirection } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { GridHeaderCell } from '../header-cell/HeaderCell';

describe('GridHeaderCell', () => {
  describe('SortButton rendering based on sortable prop', () => {
    it('should render SortButton when sortable is true and onSortClick is provided', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.getByRole('button', { name: /sort/i });
      expect(sortButton).toBeInTheDocument();
    });

    it('should NOT render SortButton when sortable is false', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={false} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.queryByRole('button');
      expect(sortButton).not.toBeInTheDocument();
    });

    it('should NOT render SortButton when sortable is undefined', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.queryByRole('button');
      expect(sortButton).not.toBeInTheDocument();
    });

    it('should NOT render SortButton when onSortClick is undefined even if sortable is true', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.queryByRole('button');
      expect(sortButton).not.toBeInTheDocument();
    });
  });

  describe('sort direction passed to SortButton', () => {
    it('should display PlusSquare icon when sortDirection is null', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={null}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toHaveClass('chop-icon__circle');
    });

    it('should display ChevronsUp icon when sortDirection is asc', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={GridSortDirection.Asc}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toHaveClass('chop-icon__arrow-up-circle');
    });

    it('should display ChevronsDown icon when sortDirection is desc', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={GridSortDirection.Desc}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toHaveClass('chop-icon__arrow-down-circle');
    });

    it('should default to null direction (PlusSquare) when sortDirection is undefined', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toHaveClass('chop-icon__circle');
    });
  });

  describe('onSortClick handler invocation', () => {
    it('should invoke onSortClick handler when SortButton is clicked', async () => {
      const onSortClick = vi.fn();
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={onSortClick} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.getByRole('button');
      await userEvent.click(sortButton);

      expect(onSortClick).toHaveBeenCalledTimes(1);
    });

    it('should invoke onSortClick via keyboard Enter', async () => {
      const onSortClick = vi.fn();
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={onSortClick} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.getByRole('button');
      sortButton.focus();
      await userEvent.keyboard('{Enter}');

      expect(onSortClick).toHaveBeenCalledTimes(1);
    });

    it('should invoke onSortClick via keyboard Space', async () => {
      const onSortClick = vi.fn();
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={onSortClick} />
            </tr>
          </thead>
        </table>,
      );

      const sortButton = screen.getByRole('button');
      sortButton.focus();
      await userEvent.keyboard(' ');

      expect(onSortClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('title display alongside SortButton', () => {
    it('should display title alongside SortButton when sortable', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should display title without SortButton when not sortable', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={false} />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('custom component display alongside SortButton', () => {
    it('should display custom component alongside SortButton when sortable', () => {
      const CustomComponent = <span data-testid="custom-component">Custom Content</span>;
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell component={CustomComponent} sortable={true} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByTestId('custom-component')).toBeInTheDocument();
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should display custom component without SortButton when not sortable', () => {
      const CustomComponent = <span data-testid="custom-component">Custom Content</span>;
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell component={CustomComponent} sortable={false} />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByTestId('custom-component')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should prioritize component over title when both are provided', () => {
      const CustomComponent = <span data-testid="custom-component">Custom Content</span>;
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Fallback Title"
                component={CustomComponent}
                sortable={true}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByTestId('custom-component')).toBeInTheDocument();
      expect(screen.queryByText('Fallback Title')).not.toBeInTheDocument();
    });
  });

  describe('header cell structure', () => {
    it('should render as a th element', () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" />
            </tr>
          </thead>
        </table>,
      );

      const th = container.querySelector('th');
      expect(th).toBeInTheDocument();
    });

    it('should have sortable class when sortable and onSortClick are provided', () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      const th = container.querySelector('th');
      expect(th).toHaveClass('cl-grid-header-cell');
      expect(th).toHaveClass('cl-grid-header-cell_sortable');
    });

    it('should NOT have sortable class when sortable is false', () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell title="Name" sortable={false} />
            </tr>
          </thead>
        </table>,
      );

      const th = container.querySelector('th');
      expect(th).toHaveClass('cl-grid-header-cell');
      expect(th).not.toHaveClass('cl-grid-header-cell_sortable');
    });
  });

  describe('aria-label on SortButton', () => {
    it('should have correct aria-label for ascending with title', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={null}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByRole('button', { name: 'Sort by Name ascending' })).toBeInTheDocument();
    });

    it('should have correct aria-label for descending with title', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={GridSortDirection.Asc}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByRole('button', { name: 'Sort by Name descending' })).toBeInTheDocument();
    });

    it('should have correct aria-label for clearing with title', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell
                title="Name"
                sortable={true}
                sortDirection={GridSortDirection.Desc}
                onSortClick={vi.fn()}
              />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByRole('button', { name: 'Clear Name sorting' })).toBeInTheDocument();
    });

    it('should have correct aria-label without title', () => {
      render(
        <table>
          <thead>
            <tr>
              <GridHeaderCell sortable={true} sortDirection={null} onSortClick={vi.fn()} />
            </tr>
          </thead>
        </table>,
      );

      expect(screen.getByRole('button', { name: 'Sort ascending' })).toBeInTheDocument();
    });
  });
});

describe('FilterButton rendering based on filterable prop', () => {
  it('should render FilterButton when filterable is true', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    expect(filterButton).toBeInTheDocument();
  });

  it('should NOT render FilterButton when filterable is false', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={false} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.queryByRole('button', { name: /filter/i });
    expect(filterButton).not.toBeInTheDocument();
  });

  it('should NOT render FilterButton when filterable is undefined', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.queryByRole('button', { name: /filter/i });
    expect(filterButton).not.toBeInTheDocument();
  });
});

describe('FilterButton and SortButton DOM order', () => {
  it('should render FilterButton after SortButton in DOM order when both are present', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    // First button should be sort (based on aria-label)
    expect(buttons[0]).toHaveAttribute('aria-label', expect.stringMatching(/sort/i));
    // Second button should be filter (based on aria-label)
    expect(buttons[1]).toHaveAttribute('aria-label', expect.stringMatching(/filter/i));
  });

  it('should render only SortButton when only sortable is true', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} filterable={false} />
          </tr>
        </thead>
      </table>,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveAttribute('aria-label', expect.stringMatching(/sort/i));
  });

  it('should render only FilterButton when only filterable is true', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" sortable={false} filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveAttribute('aria-label', expect.stringMatching(/filter/i));
  });
});

describe('FilterPopup toggle open/close', () => {
  it('should open FilterPopup when FilterButton is clicked', async () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    const popup = screen.getByRole('dialog');
    expect(popup).toBeInTheDocument();
  });

  it('should close FilterPopup when FilterButton is clicked while open (toggle)', async () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });

    // Open
    await userEvent.click(filterButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Close by clicking button again
    await userEvent.click(filterButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should have aria-expanded="true" when popup is open', async () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    expect(filterButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(filterButton);
    expect(filterButton).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('focus return after popup closes', () => {
  it('should return focus to FilterButton when Cancel is clicked', async () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(filterButton).toHaveFocus();
  });

  it('should return focus to FilterButton when popup is toggled closed via FilterButton', async () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    // Close via toggle
    await userEvent.click(filterButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(filterButton).toHaveFocus();
  });
});

describe('apply/clear/cancel callback wiring', () => {
  it('should call onApplyFilter with the condition when Apply is clicked', async () => {
    const onApplyFilter = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} onApplyFilter={onApplyFilter} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    // Enter filter value
    const textInput = screen.getByRole('textbox');
    await userEvent.type(textInput, 'test value');

    // Click Apply
    const applyButton = screen.getByRole('button', { name: /apply/i });
    await userEvent.click(applyButton);

    expect(onApplyFilter).toHaveBeenCalledTimes(1);
    expect(onApplyFilter).toHaveBeenCalledWith({
      type: 'startsWith',
      value: 'test value',
      caseSensitive: false,
    });

    // Popup should close after Apply
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should call onClearFilter when Clear is clicked', async () => {
    const onClearFilter = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell
              title="Name"
              filterable={true}
              columnConditions={[
                { type: GridFilterType.StartsWith, value: 'test', caseSensitive: false },
              ]}
              onClearFilter={onClearFilter}
            />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    const clearButton = screen.getByRole('button', { name: /clear/i });
    await userEvent.click(clearButton);

    expect(onClearFilter).toHaveBeenCalledTimes(1);
    // Popup should remain open after Clear (per design)
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should close popup and not call any filter handlers when Cancel is clicked', async () => {
    const onApplyFilter = vi.fn();
    const onClearFilter = vi.fn();
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell
              title="Name"
              filterable={true}
              onApplyFilter={onApplyFilter}
              onClearFilter={onClearFilter}
            />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    await userEvent.click(filterButton);

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    expect(onApplyFilter).not.toHaveBeenCalled();
    expect(onClearFilter).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('header cell structure with filtering', () => {
  it('should have filterable class when filterable is true', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const th = container.querySelector('th');
    expect(th).toHaveClass('cl-grid-header-cell');
    expect(th).toHaveClass('cl-grid-header-cell_filterable');
  });

  it('should NOT have filterable class when filterable is false', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={false} />
          </tr>
        </thead>
      </table>,
    );

    const th = container.querySelector('th');
    expect(th).toHaveClass('cl-grid-header-cell');
    expect(th).not.toHaveClass('cl-grid-header-cell_filterable');
  });

  it('should have both sortable and filterable classes when both are true', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" sortable={true} onSortClick={vi.fn()} filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const th = container.querySelector('th');
    expect(th).toHaveClass('cl-grid-header-cell');
    expect(th).toHaveClass('cl-grid-header-cell_sortable');
    expect(th).toHaveClass('cl-grid-header-cell_filterable');
  });
});

describe('FilterButton active state', () => {
  it('should show active state when columnConditions has items', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell
              title="Name"
              filterable={true}
              columnConditions={[
                { type: GridFilterType.StartsWith, value: 'test', caseSensitive: false },
              ]}
            />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    expect(filterButton).toHaveClass('cl-grid-filter-button_active');
  });

  it('should NOT show active state when columnConditions is empty', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} columnConditions={[]} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    expect(filterButton).not.toHaveClass('cl-grid-filter-button_active');
  });

  it('should NOT show active state when columnConditions is undefined', () => {
    render(
      <table>
        <thead>
          <tr>
            <GridHeaderCell title="Name" filterable={true} />
          </tr>
        </thead>
      </table>,
    );

    const filterButton = screen.getByRole('button', { name: /filter/i });
    expect(filterButton).not.toHaveClass('cl-grid-filter-button_active');
  });
});
