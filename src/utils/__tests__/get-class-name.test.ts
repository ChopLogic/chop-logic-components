import { describe, expect, it } from 'vitest';

import { getClassName } from '../get-class-name';

describe('getClassName', () => {
  it('returns a string for input [string]', () => {
    const result = getClassName(['test']);
    expect(result).toBe('test');
  });

  it('return an empty string for input [undefined]', () => {
    expect(getClassName([undefined])).toBe('');
    expect(getClassName([null])).toBe('');
    expect(getClassName([null, undefined])).toBe('');
  });

  it('return a joined string for input [string, string, ...]', () => {
    expect(getClassName(['1', '2'])).toBe('1 2');
    expect(getClassName(['A', 'B', 'C'])).toBe('A B C');
  });

  it('returns a joined string for input [string, undefined]', () => {
    expect(getClassName(['1', undefined])).toBe('1');
    expect(getClassName(['A', undefined, 'C'])).toBe('A C');
    expect(getClassName(['A', undefined, null, 'B', undefined])).toBe('A B');
  });

  it('works with the ClassNameProp type', () => {
    expect(getClassName([{ test1: true }])).toBe('test1');
    expect(getClassName([{ test1: false }])).toBe('');
    expect(getClassName([{ test1: true, test2: false, test3: true }])).toBe('test1 test3');
    expect(getClassName([{ test1: true, test2: false, test4: true }])).toBe('test1 test4');
  });

  it('works with a mixed input', () => {
    expect(getClassName([{ test1: true }, 'test2', undefined])).toBe('test1 test2');
    expect(getClassName(['test1', { test2: false }, 'test3', undefined])).toBe('test1 test3');
    expect(getClassName(['test1', { test2: false, test3: true }, null, 'test4'])).toBe(
      'test1 test3 test4',
    );
  });

  it('trims the input strings', () => {
    expect(getClassName(['1  ', '  2'])).toBe('1 2');
    expect(getClassName([' A \n', '\nB', '   C'])).toBe('A B C');
    expect(getClassName([{ 'test1   ': true }])).toBe('test1');
    expect(getClassName([{ '\n test1  \n': true }])).toBe('test1');
  });
});
