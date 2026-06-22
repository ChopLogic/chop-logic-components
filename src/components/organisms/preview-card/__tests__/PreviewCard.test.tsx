import { LinkTarget } from '@enums';
import { render, screen } from '@testing-library/react';
import type { PreviewCardProps } from '@types';
import { describe, expect, it } from 'vitest';

import PreviewCard from '../PreviewCard';

const defaultProps: PreviewCardProps = {
  link: 'https://example.com/article',
  image: { src: 'https://example.com/image.jpg', alt: 'Test image' },
  title: 'Test Article Title',
  authors: [],
  tags: [],
};

function renderPreviewCard(props: Partial<PreviewCardProps> = {}) {
  return render(<PreviewCard {...defaultProps} {...props} />);
}

describe('PreviewCard', () => {
  describe('DOM order', () => {
    it('renders all sections in correct DOM order', () => {
      const { container } = renderPreviewCard({
        summary: 'A brief summary',
        authors: [
          { id: '1', name: 'Author One', email: 'a@b.com', imageUrl: 'https://example.com/a.jpg' },
        ],
        tags: [{ id: '1', name: 'React' }],
      });

      const article = container.querySelector('article')!;
      const children = Array.from(article.children);

      expect(children[0]).toHaveClass('cl-preview-card__image-link');
      expect(children[1].tagName).toBe('H3');
      expect(children[2].tagName).toBe('P');
      expect(children[3]).toHaveAttribute('aria-label', 'Authors');
      expect(children[4]).toHaveAttribute('aria-label', 'Tags');
    });
  });

  describe('image anchor', () => {
    it('wraps image in anchor with correct href', () => {
      renderPreviewCard();

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('href', 'https://example.com/article');
    });

    it('sets anchor target to _self by default', () => {
      renderPreviewCard();

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('target', '_self');
    });

    it('sets anchor target to specified linkTarget', () => {
      renderPreviewCard({ linkTarget: LinkTarget.Blank });

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('target', '_blank');
    });

    it('contains an img element inside the anchor', () => {
      renderPreviewCard();

      const anchor = screen.getByRole('link');
      const img = anchor.querySelector('img');
      expect(img).toBeInTheDocument();
    });
  });

  describe('title', () => {
    it('renders title as h3 element', () => {
      renderPreviewCard({ title: 'My Article' });

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('My Article');
    });
  });

  describe('summary', () => {
    it('renders summary as p element when provided', () => {
      renderPreviewCard({ summary: 'This is a summary' });

      const paragraph = screen.getByText('This is a summary');
      expect(paragraph.tagName).toBe('P');
    });

    it('omits summary section when not provided', () => {
      const { container } = renderPreviewCard({ summary: undefined });

      const paragraph = container.querySelector('.cl-preview-card__summary');
      expect(paragraph).not.toBeInTheDocument();
    });
  });

  describe('authors', () => {
    it('renders authors as Avatar list when authors are provided', () => {
      renderPreviewCard({
        authors: [
          {
            id: '1',
            name: 'Alice',
            email: 'alice@test.com',
            imageUrl: 'https://example.com/alice.jpg',
          },
          { id: '2', name: 'Bob', email: 'bob@test.com', imageUrl: 'https://example.com/bob.jpg' },
        ],
      });

      const authorsList = screen.getByLabelText('Authors');
      expect(authorsList.tagName).toBe('UL');

      const items = authorsList.querySelectorAll('li');
      expect(items).toHaveLength(2);
    });

    it('omits authors section when authors array is empty', () => {
      renderPreviewCard({ authors: [] });

      expect(screen.queryByLabelText('Authors')).not.toBeInTheDocument();
    });
  });

  describe('tags', () => {
    it('renders tags as Tag list when tags are provided', () => {
      renderPreviewCard({
        tags: [
          { id: '1', name: 'React' },
          { id: '2', name: 'TypeScript' },
          { id: '3', name: 'CSS' },
        ],
      });

      const tagsList = screen.getByLabelText('Tags');
      expect(tagsList.tagName).toBe('UL');

      const items = tagsList.querySelectorAll('li');
      expect(items).toHaveLength(3);
    });

    it('omits tags section when tags array is empty', () => {
      renderPreviewCard({ tags: [] });

      expect(screen.queryByLabelText('Tags')).not.toBeInTheDocument();
    });
  });

  describe('article root and aria-label', () => {
    it('renders root as article element', () => {
      renderPreviewCard();

      const article = screen.getByRole('article');
      expect(article).toBeInTheDocument();
    });

    it('sets aria-label to title text', () => {
      renderPreviewCard({ title: 'My Great Article' });

      const article = screen.getByRole('article');
      expect(article).toHaveAttribute('aria-label', 'My Great Article');
    });

    it('uses fallback aria-label "Preview card" when title is empty', () => {
      renderPreviewCard({ title: '' });

      const article = screen.getByRole('article');
      expect(article).toHaveAttribute('aria-label', 'Preview card');
    });
  });

  describe('_blank target accessibility', () => {
    it('appends "(opens in new window)" to anchor aria-label for _blank', () => {
      renderPreviewCard({ title: 'External Link', linkTarget: LinkTarget.Blank });

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute(
        'aria-label',
        'View article: External Link (opens in new window)',
      );
    });

    it('does not append "(opens in new window)" for _self', () => {
      renderPreviewCard({ title: 'Internal Link', linkTarget: LinkTarget.Self });

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('aria-label', 'View article: Internal Link');
    });

    it('uses fallback anchor aria-label with "(opens in new window)" when title is empty and target is _blank', () => {
      renderPreviewCard({ title: '', linkTarget: LinkTarget.Blank });

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('aria-label', 'Preview card (opens in new window)');
    });
  });

  describe('rel attribute', () => {
    it('adds rel="noopener noreferrer" when target is _blank', () => {
      renderPreviewCard({ linkTarget: LinkTarget.Blank });

      const anchor = screen.getByRole('link');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('does not add rel when target is not _blank', () => {
      renderPreviewCard({ linkTarget: LinkTarget.Self });

      const anchor = screen.getByRole('link');
      expect(anchor).not.toHaveAttribute('rel');
    });
  });
});
