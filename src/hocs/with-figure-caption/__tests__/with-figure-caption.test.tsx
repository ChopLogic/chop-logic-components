import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { withFigureCaption } from '../with-figure-caption';

const MockComponent = vi.fn((props: { alt: string; src: string }) => (
  <img src={props.src} alt={props.alt} data-testid="mock-image" />
));

describe('withFigureCaption', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('wraps component with figure and figcaption when caption is provided', () => {
    const ComponentWithCaption = withFigureCaption(MockComponent);

    render(
      <ComponentWithCaption src="test.jpg" alt="Test image" caption="This is a test caption" />,
    );

    // Should render figure element
    const figure = screen.getByRole('figure');
    expect(figure).toBeInTheDocument();

    // Should render figcaption with correct text
    const caption = screen.getByText('This is a test caption');
    expect(caption).toBeInTheDocument();
    expect(caption.tagName).toBe('FIGCAPTION');

    // Should render the wrapped component
    const image = screen.getByTestId('mock-image');
    expect(image).toBeInTheDocument();
  });

  it('does not wrap component when caption is empty string', () => {
    const ComponentWithCaption = withFigureCaption(MockComponent);

    render(<ComponentWithCaption src="test.jpg" alt="Test image" caption="" />);

    // Should not render figure element
    const figure = screen.queryByRole('figure');
    expect(figure).not.toBeInTheDocument();

    // Should not render figcaption
    const caption = screen.queryByText('', { selector: 'figcaption' });
    expect(caption).not.toBeInTheDocument();

    // Should render the wrapped component directly
    const image = screen.getByTestId('mock-image');
    expect(image).toBeInTheDocument();
  });

  it('does not wrap component when caption is undefined', () => {
    const ComponentWithCaption = withFigureCaption(MockComponent);

    render(<ComponentWithCaption src="test.jpg" alt="Test image" />);

    // Should not render figure element
    const figure = screen.queryByRole('figure');
    expect(figure).not.toBeInTheDocument();

    // Should not render figcaption
    const caption = screen.queryByText('', { selector: 'figcaption' });
    expect(caption).not.toBeInTheDocument();

    // Should render the wrapped component directly
    const image = screen.getByTestId('mock-image');
    expect(image).toBeInTheDocument();
  });

  it('handles whitespace-only captions as invalid captions and doest not render them', () => {
    const ComponentWithCaption = withFigureCaption(MockComponent);

    render(<ComponentWithCaption src="test.jpg" alt="Test image" caption="   " />);

    const figure = screen.queryByRole('figure');
    expect(figure).not.toBeInTheDocument();

    const caption = screen.queryByText('', { selector: 'figcaption' });
    expect(caption).not.toBeInTheDocument();
  });

  it('maintains component hierarchy when caption is provided', () => {
    const ComponentWithCaption = withFigureCaption(MockComponent);

    render(<ComponentWithCaption src="test.jpg" alt="Test image" caption="Test caption" />);

    const figure = screen.getByRole('figure');
    const image = screen.getByTestId('mock-image');
    const caption = screen.getByText('Test caption');

    // Image should be inside figure
    expect(figure).toContainElement(image);

    // Caption should be inside figure
    expect(figure).toContainElement(caption);

    // Image and caption should be siblings
    expect(image.parentNode).toBe(figure);
    expect(caption.parentNode).toBe(figure);
  });

  it('does not modify the displayName of the wrapped component', () => {
    const TestComponent = () => <div>Test</div>;
    TestComponent.displayName = 'CustomDisplayName';

    const WrappedComponent = withFigureCaption(TestComponent);

    expect(WrappedComponent.displayName).toBeUndefined();
  });
});
