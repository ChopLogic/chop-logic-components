import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicSelect, { SelectValue } from '../Select';

const LANGUAGES: SelectValue[] = [
  {
    id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7',
    label: 'English',
  },
  {
    id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7',
    label: 'Russian',
  },
  {
    id: '641fc722-af5a-4426-8f8a-1566cc492b91',
    label: 'German',
  },
];

describe('ChopLogicSelect component', () => {
  const testProps = {
    id: 'test-select-id',
    name: 'language',
    label: 'Select your language',
    values: LANGUAGES,
    onSelect: vi.fn(),
    placeholder: 'Test placeholder',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<ChopLogicSelect {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the label', () => {
    render(<ChopLogicSelect {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });
});
