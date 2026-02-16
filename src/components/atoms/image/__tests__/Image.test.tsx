import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BasicImage } from '../BasicImage';
import { FallbackImage } from '../FallBackImage';
import Image from '../Image';
import { ResponsivePicture } from '../ResponsivePicture';

vi.mock('@components/atoms', () => ({
  Icon: vi.fn(({ name, className }) => (
    <svg data-testid="fallback-icon" aria-hidden={true} className={className}>
      {name} icon
    </svg>
  )),
}));

describe('Image', () => {
  const defaultProps = {
    src: 'test.jpg',
    alt: 'Test image',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders normal image initially', () => {
    render(<Image {...defaultProps} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.alt)).toBeInTheDocument();
    expect(screen.queryByTestId('fallback-icon')).not.toBeInTheDocument();
  });

  it('should apply cl-image BEM class to wrapper', () => {
    const { container } = render(<Image {...defaultProps} />);
    const wrapper = container.querySelector('.cl-image');

    expect(wrapper).toBeInTheDocument();
  });

  it('should apply cl-image__img BEM class to img element', () => {
    render(<Image {...defaultProps} />);

    const img = screen.getByRole('img');
    expect(img).toHaveClass('cl-image__img');
  });

  it('should apply custom className along with cl-image', () => {
    const { container } = render(<Image {...defaultProps} className="custom-class" />);
    const wrapper = container.querySelector('.cl-image.custom-class');

    expect(wrapper).toBeInTheDocument();
  });

  it('should not have alt text if image is decorative', () => {
    render(<Image {...defaultProps} decorative={true} />);

    expect(screen.queryByAltText(defaultProps.alt)).not.toBeInTheDocument();
  });

  it('shows fallback when basic image fails to load', () => {
    render(<Image {...defaultProps} />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
    expect(screen.getByText('Image not available')).toBeInTheDocument();
  });

  it('should apply BEM classes to fallback elements', () => {
    const { container } = render(<Image {...defaultProps} />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    const fallback = container.querySelector('.cl-image__fallback');
    const fallbackIcon = container.querySelector('.cl-image__fallback-icon');
    const fallbackText = container.querySelector('.cl-image__fallback-text');

    expect(fallback).toBeInTheDocument();
    expect(fallbackIcon).toBeInTheDocument();
    expect(fallbackText).toBeInTheDocument();
  });

  it('shows fallback when responsive image fails to load', () => {
    const propsWithSources = {
      ...defaultProps,
      sources: [
        { src: 'test-400.jpg', descriptor: '400w' },
        { src: 'test-800.jpg', descriptor: '800w' },
      ],
    };

    render(<Image {...propsWithSources} />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
    expect(screen.getByText('Image not available')).toBeInTheDocument();
  });

  it('should apply cl-image__picture BEM class to picture element', () => {
    const propsWithSources = {
      ...defaultProps,
      sources: [
        { src: 'test-400.jpg', descriptor: '400w' },
        { src: 'test-800.jpg', descriptor: '800w' },
      ],
    };

    const { container } = render(<Image {...propsWithSources} />);

    const picture = container.querySelector('.cl-image__picture');
    expect(picture).toBeInTheDocument();
  });

  it('calls original onError handler when provided', () => {
    const onError = vi.fn();
    render(<Image {...defaultProps} onError={onError} />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
  });

  it('maintains fallback state after error', () => {
    const { rerender } = render(<Image {...defaultProps} />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    // Should still show fallback after re-render with same props
    rerender(<Image {...defaultProps} />);
    expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
  });
});

describe('Image snapshot tests', () => {
  it('Image with caption should match snapshot', () => {
    const { asFragment } = render(
      <Image src="snapshot.jpg" alt="Snapshot image" caption="Snapshot Image" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('BasicImage should match snapshot', () => {
    const { asFragment } = render(<BasicImage src="snapshot.jpg" alt="Snapshot image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('FallbackImage should match snapshot', () => {
    const { asFragment } = render(<FallbackImage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ResponsivePicture should match snapshot', () => {
    const mockedSources = [
      {
        src: 'https://picsum.photos/400/300',
        descriptor: '400w',
        media: '(max-width: 480px)',
      },
      {
        src: 'https://picsum.photos/800/600',
        descriptor: '800w',
        media: '(max-width: 1024px)',
      },
      {
        src: 'https://picsum.photos/1200/900',
        descriptor: '1200w',
      },
    ];

    const { asFragment } = render(
      <ResponsivePicture src="snapshot.jpg" alt="Snapshot image" sources={mockedSources} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('ResponsivePicture should match snapshot with empty descriptors', () => {
    const mockedSources = [
      {
        src: 'https://picsum.photos/400/300',
        media: '(max-width: 480px)',
      },
      {
        src: 'https://picsum.photos/800/600',
        media: '(max-width: 1024px)',
      },
      {
        src: 'https://picsum.photos/1200/900',
      },
    ];

    const { asFragment } = render(
      <ResponsivePicture src="snapshot.jpg" alt="Snapshot image" sources={mockedSources} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
