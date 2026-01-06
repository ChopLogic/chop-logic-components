import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MultiSelectComboboxSelectedValues } from '../MultiSelectComboboxSelectedValues';

describe('MultiSelectComboboxSelectedValues', () => {
  it('renders placeholder when values is undefined', () => {
    const placeholder = 'Select items';
    render(<MultiSelectComboboxSelectedValues placeholder={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it('renders placeholder when no items are selected', () => {
    const placeholder = 'Select items';
    const values = [
      { id: '1', label: 'Item 1', selected: false },
      { id: '2', label: 'Item 2', selected: false },
    ];
    render(<MultiSelectComboboxSelectedValues values={values} placeholder={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it('renders single selected item label', () => {
    const values = [
      { id: '1', label: 'Item 1', selected: true },
      { id: '2', label: 'Item 2', selected: false },
    ];
    render(<MultiSelectComboboxSelectedValues values={values} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders count when multiple items are selected', () => {
    const values = [
      { id: '1', label: 'Item 1', selected: true },
      { id: '2', label: 'Item 2', selected: true },
      { id: '3', label: 'Item 3', selected: false },
    ];
    render(<MultiSelectComboboxSelectedValues values={values} />);
    expect(screen.getByText('2 items selected')).toBeInTheDocument();
  });

  it('renders "All items selected" when all items are selected', () => {
    const values = [
      { id: '1', label: 'Item 1', selected: true },
      { id: '2', label: 'Item 2', selected: true },
      { id: '3', label: 'Item 3', selected: true },
    ];
    render(<MultiSelectComboboxSelectedValues values={values} />);
    expect(screen.getByText('All items selected')).toBeInTheDocument();
  });

  it('renders placeholder when values array is empty', () => {
    const placeholder = 'Choose items';
    render(<MultiSelectComboboxSelectedValues values={[]} placeholder={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });
});
