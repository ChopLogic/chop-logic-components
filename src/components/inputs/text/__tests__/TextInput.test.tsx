import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';

describe('ChopLogicTextInput component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TextInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
