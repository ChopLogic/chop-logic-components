import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import { userEvent } from '@testing-library/user-event';

describe('ChopLogicButton component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button text='Test' id='test-id' className='test-class' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible role', () => {
    render(<Button id='test-id' />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<Button onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });
});
