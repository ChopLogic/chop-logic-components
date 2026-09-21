import { GridSortDirection } from '@enums';
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
      expect(icon).toHaveClass('chop-icon__plus-square');
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
      expect(icon).toHaveClass('chop-icon__chevrons-up');
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
      expect(icon).toHaveClass('chop-icon__chevrons-down');
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
      expect(icon).toHaveClass('chop-icon__plus-square');
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
