import { FormInputParams, FormValidationState, FormValues } from '@models';
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
});
