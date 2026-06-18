import type { GalleryItem, ImageSource } from '@types';
import { describe, expect, it } from 'vitest';

import { getFullscreenImageProps, getLargestImageSource } from '../Gallery.helpers';

describe('Gallery.helpers', () => {
  describe('getLargestImageSource', () => {
    it('returns undefined for an empty sources array', () => {
      const result = getLargestImageSource([]);

      expect(result).toBeUndefined();
    });

    it('returns the source with the largest width descriptor', () => {
      const sources: ImageSource[] = [
        { src: '/small.jpg', descriptor: '480w' },
        { src: '/large.jpg', descriptor: '1920w' },
        { src: '/medium.jpg', descriptor: '1024w' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/large.jpg', descriptor: '1920w' });
    });

    it('returns the last source when no width descriptors are present', () => {
      const sources: ImageSource[] = [
        { src: '/first.jpg' },
        { src: '/second.jpg' },
        { src: '/last.jpg' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/last.jpg' });
    });

    it('returns the last source when all descriptors are non-width formats', () => {
      const sources: ImageSource[] = [
        { src: '/1x.jpg', descriptor: '1x' },
        { src: '/2x.jpg', descriptor: '2x' },
        { src: '/3x.jpg', descriptor: '3x' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/3x.jpg', descriptor: '3x' });
    });

    it('returns the largest source when only some have width descriptors', () => {
      const sources: ImageSource[] = [
        { src: '/no-descriptor.jpg' },
        { src: '/small.jpg', descriptor: '480w' },
        { src: '/pixel-density.jpg', descriptor: '2x' },
        { src: '/large.jpg', descriptor: '1200w' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/large.jpg', descriptor: '1200w' });
    });

    it('handles single source array', () => {
      const sources: ImageSource[] = [{ src: '/only.jpg', descriptor: '800w' }];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/only.jpg', descriptor: '800w' });
    });

    it('handles single source without descriptor', () => {
      const sources: ImageSource[] = [{ src: '/only.jpg' }];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/only.jpg' });
    });

    it('correctly parses multi-digit width values', () => {
      const sources: ImageSource[] = [
        { src: '/small.jpg', descriptor: '99w' },
        { src: '/large.jpg', descriptor: '12000w' },
        { src: '/medium.jpg', descriptor: '1000w' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/large.jpg', descriptor: '12000w' });
    });

    it('handles sources with additional properties', () => {
      const sources: ImageSource[] = [
        { src: '/small.jpg', descriptor: '480w', type: 'image/webp' },
        { src: '/large.jpg', descriptor: '1920w', type: 'image/webp' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({
        src: '/large.jpg',
        descriptor: '1920w',
        type: 'image/webp',
      });
    });

    it('handles width of 0 in descriptor', () => {
      const sources: ImageSource[] = [
        { src: '/zero.jpg', descriptor: '0w' },
        { src: '/small.jpg', descriptor: '100w' },
      ];

      const result = getLargestImageSource(sources);

      expect(result).toEqual({ src: '/small.jpg', descriptor: '100w' });
    });

    it('returns first largest when multiple sources have the same max width', () => {
      const sources: ImageSource[] = [
        { src: '/first-large.jpg', descriptor: '1920w' },
        { src: '/second-large.jpg', descriptor: '1920w' },
      ];

      const result = getLargestImageSource(sources);

      // First one with max width should be returned (not updated when equal)
      expect(result).toEqual({ src: '/first-large.jpg', descriptor: '1920w' });
    });
  });

  describe('getFullscreenImageProps', () => {
    it('returns image props with largest source when sources are provided', () => {
      const image: GalleryItem = {
        src: '/fallback.jpg',
        alt: 'Test image',
        caption: 'Test caption',
        sources: [
          { src: '/small.jpg', descriptor: '480w' },
          { src: '/large.jpg', descriptor: '1920w' },
        ],
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/large.jpg',
        alt: 'Test image',
        sources: undefined,
      });
    });

    it('excludes caption from the returned props', () => {
      const image: GalleryItem = {
        src: '/test.jpg',
        alt: 'Test image',
        caption: 'Should be excluded',
      };

      const result = getFullscreenImageProps(image);

      expect(result).not.toHaveProperty('caption');
      expect(result).toEqual({
        src: '/test.jpg',
        alt: 'Test image',
        sources: undefined,
      });
    });

    it('preserves additional image properties', () => {
      const image: GalleryItem = {
        src: '/test.jpg',
        alt: 'Test image',
        width: 800,
        height: 600,
        loading: 'lazy',
        decoding: 'async',
        className: 'custom-class',
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/test.jpg',
        alt: 'Test image',
        width: 800,
        height: 600,
        loading: 'lazy',
        decoding: 'async',
        className: 'custom-class',
        sources: undefined,
      });
    });

    it('returns original src when sources array is empty', () => {
      const image: GalleryItem = {
        src: '/original.jpg',
        alt: 'Test image',
        sources: [],
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/original.jpg',
        alt: 'Test image',
        sources: [],
      });
    });

    it('returns original src when sources is undefined', () => {
      const image: GalleryItem = {
        src: '/original.jpg',
        alt: 'Test image',
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/original.jpg',
        alt: 'Test image',
        sources: undefined,
      });
    });

    it('returns original src when no largest source can be determined', () => {
      const image: GalleryItem = {
        src: '/original.jpg',
        alt: 'Test image',
        sources: [{ src: '/responsive.jpg', descriptor: '2x' }],
      };

      const result = getFullscreenImageProps(image);

      // When no width descriptor, fallback to last source
      expect(result).toEqual({
        src: '/responsive.jpg',
        alt: 'Test image',
        sources: undefined,
      });
    });

    it('handles image with aspectRatio property', () => {
      const image: GalleryItem = {
        src: '/test.jpg',
        alt: 'Test image',
        aspectRatio: '16/9',
        sources: [{ src: '/large.jpg', descriptor: '1920w' }],
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/large.jpg',
        alt: 'Test image',
        aspectRatio: '16/9',
        sources: undefined,
      });
    });

    it('handles decorative image property', () => {
      const image: GalleryItem = {
        src: '/decorative.jpg',
        alt: '',
        decorative: true,
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/decorative.jpg',
        alt: '',
        decorative: true,
        sources: undefined,
      });
    });

    it('handles image with sizes property', () => {
      const image: GalleryItem = {
        src: '/test.jpg',
        alt: 'Test image',
        sizes: '(max-width: 600px) 100vw, 50vw',
        sources: [{ src: '/large.jpg', descriptor: '1920w' }],
      };

      const result = getFullscreenImageProps(image);

      expect(result).toEqual({
        src: '/large.jpg',
        alt: 'Test image',
        sizes: '(max-width: 600px) 100vw, 50vw',
        sources: undefined,
      });
    });
  });
});
