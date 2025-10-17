import { FormValues, MultiSelectValue, SelectValue } from '@models';
import { describe, expect, it } from 'vitest';

import { getMultiSelectFormValues, getMultiSelectInitialValues } from '../MultiSelect.helpers';

describe('getMultiSelectSelectValues', () => {
  const options: SelectValue[] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  it('should return MultiSelectValue[] with selected true for options in initialValues', () => {
    const initialValues: FormValues = { mySelect: ['1', '3'] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: true },
    ];
    expect(result).toEqual(expected);
  });

  it('should return MultiSelectValue[] with selected true for options in defaultValue if initialValues is absent', () => {
    const defaultValue = ['2'];
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      defaultValue,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: true },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should return MultiSelectValue[] with all selected false if neither initialValues nor defaultValue matches any options', () => {
    const initialValues: FormValues = { mySelect: ['4', '5'] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should prioritize initialValues over defaultValue', () => {
    const initialValues: FormValues = { mySelect: ['1'] };
    const defaultValue = ['2'];
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
      defaultValue,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should handle complex initialValues with SelectValue objects', () => {
    const initialValues: FormValues = { mySelect: [{ id: '1' }, { id: '3' }] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: true },
    ];
    expect(result).toEqual(expected);
  });

  it('should return MultiSelectValue[] with all selected false if no initialValues or defaultValue are provided', () => {
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
    });
    const expected: MultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });
});

describe('getMultiSelectFormValues', () => {
  it('returns an array of selected item ids', () => {
    const options = [
      { id: '1', selected: true },
      { id: '2', selected: false },
      { id: '3', selected: true },
    ] as MultiSelectValue[];

    const result = getMultiSelectFormValues(options);

    expect(result).toEqual(['1', '3']);
  });

  it('returns an empty array when no items are selected', () => {
    const options = [
      { id: '1', selected: false },
      { id: '2', selected: false },
    ] as MultiSelectValue[];

    const result = getMultiSelectFormValues(options);

    expect(result).toEqual([]);
  });

  it('returns an empty array when options are empty', () => {
    const options = [] as MultiSelectValue[];

    const result = getMultiSelectFormValues(options);

    expect(result).toEqual([]);
  });
});
