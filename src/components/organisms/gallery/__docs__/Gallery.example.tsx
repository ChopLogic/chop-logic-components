import type { GalleryItem, GalleryProps } from '@types';
import type { FC } from 'react';

import Gallery from '../Gallery';

export const sampleImages: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/1/400/300', alt: 'Sample image 1' },
  { src: 'https://picsum.photos/seed/2/400/500', alt: 'Sample image 2' },
  { src: 'https://picsum.photos/seed/3/400/350', alt: 'Sample image 3' },
  { src: 'https://picsum.photos/seed/4/400/450', alt: 'Sample image 4' },
  { src: 'https://picsum.photos/seed/5/400/280', alt: 'Sample image 5' },
  { src: 'https://picsum.photos/seed/6/400/400', alt: 'Sample image 6' },
  { src: 'https://picsum.photos/seed/7/400/320', alt: 'Sample image 7' },
  { src: 'https://picsum.photos/seed/8/400/380', alt: 'Sample image 8' },
  { src: 'https://picsum.photos/seed/9/400/420', alt: 'Sample image 9' },
];

export const masonryImages: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/10/400/600', alt: 'Tall image 1' },
  { src: 'https://picsum.photos/seed/11/400/300', alt: 'Short image 1' },
  { src: 'https://picsum.photos/seed/12/400/450', alt: 'Medium image 1' },
  { src: 'https://picsum.photos/seed/13/400/350', alt: 'Medium image 2' },
  { src: 'https://picsum.photos/seed/14/400/550', alt: 'Tall image 2' },
  { src: 'https://picsum.photos/seed/15/400/280', alt: 'Short image 2' },
  { src: 'https://picsum.photos/seed/16/400/500', alt: 'Tall image 3' },
  { src: 'https://picsum.photos/seed/17/400/320', alt: 'Short image 3' },
  { src: 'https://picsum.photos/seed/18/400/400', alt: 'Medium image 3' },
];

export const carouselImages: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/20/600/400', alt: 'Carousel image 1' },
  { src: 'https://picsum.photos/seed/21/600/400', alt: 'Carousel image 2' },
  { src: 'https://picsum.photos/seed/22/600/400', alt: 'Carousel image 3' },
  { src: 'https://picsum.photos/seed/23/600/400', alt: 'Carousel image 4' },
  { src: 'https://picsum.photos/seed/24/600/400', alt: 'Carousel image 5' },
  { src: 'https://picsum.photos/seed/25/600/400', alt: 'Carousel image 6' },
];

const GalleryExample: FC<GalleryProps> = (props) => {
  return <Gallery {...props} />;
};

export default GalleryExample;
