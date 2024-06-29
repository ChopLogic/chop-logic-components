import { render, act } from '@testing-library/react';
import { useWindowDimensions } from 'hooks/use-window-dimensions';
import { beforeAll, describe, expect, it } from 'vitest';

const TestComponent = () => {
  const dimensions = useWindowDimensions();
  return <div>{`Width: ${dimensions.width}, Height: ${dimensions.height}`}</div>;
};

describe('useWindowDimensions tests:', () => {
  beforeAll(() => {
    global.innerWidth = 1024;
    global.innerHeight = 768;
  });

  it('should return the correct initial window dimensions', () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText('Width: 1024, Height: 768')).toBeInTheDocument();
  });

  it('should update the window dimensions on resize', () => {
    const { getByText } = render(<TestComponent />);

    act(() => {
      global.innerWidth = 800;
      global.innerHeight = 600;
      global.dispatchEvent(new Event('resize'));
    });

    expect(getByText('Width: 800, Height: 600')).toBeInTheDocument();
  });
});
