import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FilterButton } from '../filter-button/FilterButton';

describe('FilterButton', () => {
  const defaultProps = {
    isActive: false,
    isOpen: false,
    onClick: vi.fn(),
  };

  describe('icon rendering', () => {
    it('should render Filter icon', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('chop-icon__filter');
    });

    it('should render icon at small size', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('cl-icon_small');
    });
  });

  describe('active state modifier', () => {
    it('should apply active modifier class when isActive is true', () => {
      render(<FilterButton {...defaultProps} isActive={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-grid-filter-button_active');
    });

    it('should not apply active modifier class when isActive is false', () => {
      render(<FilterButton {...defaultProps} isActive={false} />);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('cl-grid-filter-button_active');
    });

    it('should always have base class', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-grid-filter-button');
    });
  });

  describe('aria-label with column title', () => {
    it('should have aria-label "Filter by {title}" when columnTitle is provided', () => {
      render(<FilterButton {...defaultProps} columnTitle="Name" />);
      const button = screen.getByRole('button', { name: 'Filter by Name' });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label "Filter column" when columnTitle is not provided', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button', { name: 'Filter column' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('aria-haspopup and aria-expanded', () => {
    it('should have aria-haspopup="dialog"', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    });

    it('should have aria-expanded="false" when isOpen is false', () => {
      render(<FilterButton {...defaultProps} isOpen={false} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should have aria-expanded="true" when isOpen is true', () => {
      render(<FilterButton {...defaultProps} isOpen={true} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('click handler', () => {
    it('should invoke onClick handler when clicked', async () => {
      const onClick = vi.fn();
      render(<FilterButton {...defaultProps} onClick={onClick} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('keyboard activation', () => {
    it('should invoke onClick when Enter key is pressed', async () => {
      const onClick = vi.fn();
      render(<FilterButton {...defaultProps} onClick={onClick} />);

      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard('{Enter}');

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should invoke onClick when Space key is pressed', async () => {
      const onClick = vi.fn();
      render(<FilterButton {...defaultProps} onClick={onClick} />);

      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard(' ');

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('button attributes', () => {
    it('should have type="button" attribute', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should be focusable via keyboard', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('should have tabIndex allowing keyboard navigation', () => {
      render(<FilterButton {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button.tabIndex).toBe(0);
    });
  });
});
