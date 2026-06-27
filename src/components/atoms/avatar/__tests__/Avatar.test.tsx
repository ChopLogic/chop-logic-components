import { LinkTarget } from '@enums';
import { fireEvent, render, screen } from '@testing-library/react';
import type { AvatarProps } from '@types';
import { describe, expect, it, vi } from 'vitest';

import Avatar from '../Avatar';

vi.mock('@components/hocs', () => ({
  withTooltip: vi.fn((Component) => Component),
  withFigureCaption: vi.fn((Component) => Component),
}));

const defaultProps: AvatarProps = {
  name: 'John Doe',
  tooltip: 'john@example.com',
  imageUrl: 'https://example.com/avatar.jpg',
};

function renderAvatar(props: Partial<AvatarProps> = {}) {
  return render(<Avatar {...defaultProps} {...props} />);
}

describe('Avatar', () => {
  describe('image rendering', () => {
    it('renders image with correct src and alt', () => {
      renderAvatar();

      const img = screen.getByAltText('John Doe');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    });
  });

  describe('link wrapping', () => {
    it('wraps image in anchor when link is provided', () => {
      renderAvatar({ link: 'https://example.com' });

      const anchor = screen.getByRole('link');
      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute('href', 'https://example.com');
    });

    it('does not render anchor when link is not provided', () => {
      renderAvatar();

      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('link target', () => {
    it('applies correct target for LinkTarget.Self', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Self });

      expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
    });

    it('applies correct target for LinkTarget.Blank', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Blank });

      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('applies correct target for LinkTarget.Parent', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Parent });

      expect(screen.getByRole('link')).toHaveAttribute('target', '_parent');
    });

    it('applies correct target for LinkTarget.Top', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Top });

      expect(screen.getByRole('link')).toHaveAttribute('target', '_top');
    });

    it('defaults target to _self when linkTarget is not specified', () => {
      renderAvatar({ link: 'https://example.com' });

      expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
    });
  });

  describe('rel attribute', () => {
    it('adds rel="noopener noreferrer" when target is _blank', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Blank });

      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('does not add rel when target is not _blank', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Self });

      expect(screen.getByRole('link')).not.toHaveAttribute('rel');
    });
  });

  describe('fallback rendering', () => {
    it('shows fallback letter on image error', () => {
      renderAvatar();

      const img = screen.getByAltText('John Doe');
      fireEvent.error(img);

      expect(screen.queryByAltText('John Doe')).not.toBeInTheDocument();
      expect(screen.getByText('J')).toBeInTheDocument();
    });

    it('renders uppercase first character of name as fallback', () => {
      renderAvatar({ name: 'alice' });

      const img = screen.getByAltText('alice');
      fireEvent.error(img);

      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('sets aria-label on fallback container', () => {
      renderAvatar({ name: 'Jane Smith' });

      const img = screen.getByAltText('Jane Smith');
      fireEvent.error(img);

      expect(screen.getByLabelText('Jane Smith')).toBeInTheDocument();
    });

    it('marks fallback letter as aria-hidden', () => {
      renderAvatar();

      const img = screen.getByAltText('John Doe');
      fireEvent.error(img);

      const letter = screen.getByText('J');
      expect(letter).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('CSS class', () => {
    it('applies cl-avatar class to root element', () => {
      const { container } = renderAvatar();

      const root = container.firstElementChild;
      expect(root).toHaveClass('cl-avatar');
    });

    it('composes className with cl-avatar', () => {
      const { container } = renderAvatar({ className: 'custom-class' });

      const root = container.firstElementChild;
      expect(root).toHaveClass('cl-avatar');
      expect(root).toHaveClass('custom-class');
    });
  });

  describe('rest props spreading', () => {
    it('spreads rest props onto root element', () => {
      const { container } = renderAvatar({ id: 'avatar-1', title: 'Avatar Title' });

      const root = container.firstElementChild;
      expect(root).toHaveAttribute('id', 'avatar-1');
      expect(root).toHaveAttribute('title', 'Avatar Title');
    });
  });

  describe('aria-label on anchor', () => {
    it('sets aria-label to name when target is not _blank', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Self });

      expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'John Doe');
    });

    it('sets aria-label with "(opens in new window)" when target is _blank', () => {
      renderAvatar({ link: 'https://example.com', linkTarget: LinkTarget.Blank });

      expect(screen.getByRole('link')).toHaveAttribute(
        'aria-label',
        'John Doe (opens in new window)',
      );
    });
  });
});
