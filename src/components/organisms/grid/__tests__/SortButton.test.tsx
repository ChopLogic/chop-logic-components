import { GridSortDirection } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { SortButton } from '../sort-button/SortButton';

describe('SortButton', () => {
  const defaultProps = {
    direction: null as GridSortDirection | null,
    onClick: vi.fn(),
  };

  describe('icon rendering for each direction', () => {
    it('should render PlusSquare icon when direction is null', () => {
      render(<SortButton {...defaultProps} direction={null} />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('chop-icon__circle');
    });

    it('should render ChevronsUp icon when direction is asc', () => {
      render(<SortButton {...defaultProps} direction={GridSortDirection.Asc} />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('chop-icon__arrow-up-circle');
    });

    it('should render ChevronsDown icon when direction is desc', () => {
      render(<SortButton {...defaultProps} direction={GridSortDirection.Desc} />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('chop-icon__arrow-down-circle');
    });
  });

  describe('aria-label with column title', () => {
    it('should have aria-label "Sort by {title} ascending" when direction is null', () => {
      render(<SortButton {...defaultProps} direction={null} columnTitle="Name" />);
      const button = screen.getByRole('button', { name: 'Sort by Name ascending' });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label "Sort by {title} descending" when direction is asc', () => {
      render(<SortButton {...defaultProps} direction={GridSortDirection.Asc} columnTitle="Name" />);
      const button = screen.getByRole('button', { name: 'Sort by Name descending' });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label "Clear {title} sorting" when direction is desc', () => {
      render(
        <SortButton {...defaultProps} direction={GridSortDirection.Desc} columnTitle="Name" />,
      );
      const button = screen.getByRole('button', { name: 'Clear Name sorting' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('aria-label without column title', () => {
    it('should have aria-label "Sort ascending" when direction is null and no title', () => {
      render(<SortButton {...defaultProps} direction={null} />);
      const button = screen.getByRole('button', { name: 'Sort ascending' });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label "Sort descending" when direction is asc and no title', () => {
      render(<SortButton {...defaultProps} direction={GridSortDirection.Asc} />);
      const button = screen.getByRole('button', { name: 'Sort descending' });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label "Clear sorting" when direction is desc and no title', () => {
      render(<SortButton {...defaultProps} direction={GridSortDirection.Desc} />);
      const button = screen.getByRole('button', { name: 'Clear sorting' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('click handler', () => {
    it('should invoke onClick handler when clicked', async () => {
      const onClick = vi.fn();
      render(<SortButton direction={null} onClick={onClick} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard activation', () => {
    it('should invoke onClick when Enter key is pressed', async () => {
      const onClick = vi.fn();
      render(<SortButton direction={null} onClick={onClick} />);

      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard('{Enter}');

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should invoke onClick when Space key is pressed', async () => {
      const onClick = vi.fn();
      render(<SortButton direction={null} onClick={onClick} />);

      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard(' ');

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('button attributes', () => {
    it('should have type="button" attribute', () => {
      render(<SortButton {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should be focusable via keyboard', () => {
      render(<SortButton {...defaultProps} />);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should have tabIndex allowing keyboard navigation', () => {
      render(<SortButton {...defaultProps} />);
      const button = screen.getByRole('button');
      // Button elements have default tabIndex of 0, making them keyboard accessible
      expect(button.tabIndex).toBe(0);
    });
  });
});
