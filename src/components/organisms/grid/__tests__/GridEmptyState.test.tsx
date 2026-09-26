import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GridEmptyState } from '../empty-state/GridEmptyState';

describe('GridEmptyState', () => {
  const renderInTable = (colSpan: number) => {
    return render(
      <table>
        <tbody>
          <GridEmptyState colSpan={colSpan} />
        </tbody>
      </table>,
    );
  };

  describe('structure', () => {
    it('should render a single table row', () => {
      renderInTable(3);

      const row = screen.getByRole('row');
      expect(row).toBeInTheDocument();
      expect(row).toHaveClass('cl-grid-empty-state');
    });

    it('should render a single cell within the row', () => {
      renderInTable(3);

      const cell = screen.getByRole('cell');
      expect(cell).toBeInTheDocument();
      expect(cell).toHaveClass('cl-grid-empty-state__cell');
    });
  });

  describe('colSpan', () => {
    it('should apply correct colSpan attribute to the cell', () => {
      renderInTable(5);

      const cell = screen.getByRole('cell');
      expect(cell).toHaveAttribute('colspan', '5');
    });

    it('should apply colSpan of 1 when only one column exists', () => {
      renderInTable(1);

      const cell = screen.getByRole('cell');
      expect(cell).toHaveAttribute('colspan', '1');
    });

    it('should handle large colSpan values', () => {
      renderInTable(10);

      const cell = screen.getByRole('cell');
      expect(cell).toHaveAttribute('colspan', '10');
    });
  });

  describe('text content', () => {
    it('should display exactly "No data matches the applied filters"', () => {
      renderInTable(3);

      const cell = screen.getByRole('cell');
      expect(cell).toHaveTextContent('No data matches the applied filters');
    });

    it('should not contain any additional text', () => {
      renderInTable(3);

      const cell = screen.getByRole('cell');
      expect(cell.textContent).toBe('No data matches the applied filters');
    });
  });

  describe('CSS classes', () => {
    it('should apply cl-grid-empty-state class to the row', () => {
      renderInTable(3);

      const row = screen.getByRole('row');
      expect(row).toHaveClass('cl-grid-empty-state');
    });

    it('should apply cl-grid-empty-state__cell class to the cell', () => {
      renderInTable(3);

      const cell = screen.getByRole('cell');
      expect(cell).toHaveClass('cl-grid-empty-state__cell');
    });
  });
});
