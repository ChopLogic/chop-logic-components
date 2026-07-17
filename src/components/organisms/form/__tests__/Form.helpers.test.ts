import type { FormInputParams, FormValidationState, FormValues } from '@types';
import { describe, expect, it } from 'vitest';

import { getInitialValidationState, isFormDataValid, updateValidationState } from '../Form.helpers';

describe('getInitialValidationState', () => {
  it('should return an empty array when no data is provided', () => {
    const result = getInitialValidationState();
    expect(result).toEqual([]);
  });

  it('should return a validation state where all values are set to true', () => {
    const data: FormValues = {
      field1: 'value1',
      field2: 'value2',
    };

    const result = getInitialValidationState(data);
    expect(result).toEqual([
      ['field1', true],
      ['field2', true],
    ]);
  });

  it('should handle an empty data object', () => {
    const data: FormValues = {};
    const result = getInitialValidationState(data);
    expect(result).toEqual([]);
  });

  it('should return an empty array when data is undefined', () => {
    const result = getInitialValidationState(undefined);
    expect(result).toEqual([]);
  });

  it('should handle data with a single field', () => {
    const data: FormValues = { name: 'John' };
    const result = getInitialValidationState(data);
    expect(result).toEqual([['name', true]]);
  });

  it('should handle data with various value types', () => {
    const data: FormValues = {
      text: 'hello',
      number: 42,
      bool: true,
      empty: '',
      nullable: null,
    };

    const result = getInitialValidationState(data);
    expect(result).toHaveLength(5);
    expect(result.every((item) => item[1] === true)).toBe(true);
  });

  it('should use object keys as field names', () => {
    const data: FormValues = { firstName: 'A', lastName: 'B' };
    const result = getInitialValidationState(data);
    expect(result.map((item) => item[0])).toEqual(['firstName', 'lastName']);
  });
});

describe('updateValidationState', () => {
  it('should update the validation state when a valid parameter is passed', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', true],
    ];
    const params: FormInputParams = { name: 'field1', value: 'new value', valid: false };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([
      ['field1', false],
      ['field2', true],
    ]);
  });

  it('should return the original state if valid parameter is undefined', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', true],
    ];
    const params: FormInputParams = { name: 'field1', value: 'new value' }; // No valid property

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual(state);
  });

  it('should not update other fields in the state', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', false],
    ];
    const params: FormInputParams = { name: 'field2', value: 'some value', valid: true };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([
      ['field1', true],
      ['field2', true],
    ]);
  });

  it('should not change state when name does not match any field', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', false],
    ];
    const params: FormInputParams = { name: 'nonExistent', value: 'val', valid: true };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([
      ['field1', true],
      ['field2', false],
    ]);
  });

  it('should handle empty state array', () => {
    const state: FormValidationState = [];
    const params: FormInputParams = { name: 'field1', value: 'val', valid: false };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([]);
  });

  it('should set valid to true when params.valid is truthy', () => {
    const state: FormValidationState = [['field1', false]];
    const params: FormInputParams = { name: 'field1', value: 'val', valid: true };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([['field1', true]]);
  });

  it('should handle state with many fields and only update the matching one', () => {
    const state: FormValidationState = [
      ['a', true],
      ['b', true],
      ['c', true],
      ['d', false],
      ['e', true],
    ];
    const params: FormInputParams = { name: 'c', value: 'x', valid: false };

    const updatedState = updateValidationState(state, params);
    expect(updatedState).toEqual([
      ['a', true],
      ['b', true],
      ['c', false],
      ['d', false],
      ['e', true],
    ]);
  });

  it('should coerce valid=false to boolean false in the result', () => {
    const state: FormValidationState = [['field1', true]];
    const params: FormInputParams = { name: 'field1', value: '', valid: false };

    const updatedState = updateValidationState(state, params);
    expect(updatedState[0][1]).toBe(false);
    expect(typeof updatedState[0][1]).toBe('boolean');
  });
});

describe('isFormDataValid', () => {
  it('should return true if all validation states are true', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', true],
    ];
    const result = isFormDataValid(state);
    expect(result).toBe(true);
  });

  it('should return false if any validation state is false', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', false],
    ];
    const result = isFormDataValid(state);
    expect(result).toBe(false);
  });

  it('should return true for an empty validation state', () => {
    const state: FormValidationState = [];
    const result = isFormDataValid(state);
    expect(result).toBe(true); // Assuming no fields means it's valid
  });

  it('should return false if only the first field is invalid', () => {
    const state: FormValidationState = [
      ['field1', false],
      ['field2', true],
      ['field3', true],
    ];
    const result = isFormDataValid(state);
    expect(result).toBe(false);
  });

  it('should return false if only the last field is invalid', () => {
    const state: FormValidationState = [
      ['field1', true],
      ['field2', true],
      ['field3', false],
    ];
    const result = isFormDataValid(state);
    expect(result).toBe(false);
  });

  it('should return false if all fields are invalid', () => {
    const state: FormValidationState = [
      ['field1', false],
      ['field2', false],
    ];
    const result = isFormDataValid(state);
    expect(result).toBe(false);
  });

  it('should return true for a single valid field', () => {
    const state: FormValidationState = [['field1', true]];
    const result = isFormDataValid(state);
    expect(result).toBe(true);
  });

  it('should return false for a single invalid field', () => {
    const state: FormValidationState = [['field1', false]];
    const result = isFormDataValid(state);
    expect(result).toBe(false);
  });
});
