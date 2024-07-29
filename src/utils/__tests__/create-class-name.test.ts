import createClassName from 'utils/create-class-name';
import { describe, expect, it } from 'vitest';

describe('createClassName tests:', () => {
  it('should return a string for input [string]', () => {
    const result = createClassName(['test']);
    expect(result).toBe('test');
  });

  it('should return an empty string for input [undefined]', () => {
    expect(createClassName([undefined])).toBe('');
    expect(createClassName([null])).toBe('');
    expect(createClassName([null, undefined])).toBe('');
  });

  it('should return a joined string for input [string, string, ...]', () => {
    expect(createClassName(['1', '2'])).toBe('1 2');
    expect(createClassName(['A', 'B', 'C'])).toBe('A B C');
  });

  it('should return a joined string for input [string, undefined]', () => {
    expect(createClassName(['1', undefined])).toBe('1');
    expect(createClassName(['A', undefined, 'C'])).toBe('A C');
    expect(createClassName(['A', undefined, null, 'B', undefined])).toBe('A B');
  });

  it('should work with the ClassNameCondition type', () => {
    expect(createClassName([{ test1: true }])).toBe('test1');
    expect(createClassName([{ test1: false }])).toBe('');
    expect(createClassName([{ test1: true, test2: false, test3: true }])).toBe('test1 test3');
    expect(createClassName([{ test1: true, test2: false, test3: !!undefined, test4: true }])).toBe('test1 test4');
  });

  it('should work with a mixed input', () => {
    expect(createClassName([{ test1: true }, 'test2', undefined])).toBe('test1 test2');
    expect(createClassName(['test1', { test2: false }, 'test3', undefined])).toBe('test1 test3');
    expect(createClassName(['test1', { test2: false, test3: true }, null, 'test4'])).toBe('test1 test3 test4');
  });

  it('should trim the input strings', () => {
    expect(createClassName(['1  ', '  2'])).toBe('1 2');
    expect(createClassName([' A \n', '\nB', '   C'])).toBe('A B C');
    expect(createClassName([{ 'test1   ': true }])).toBe('test1');
    expect(createClassName([{ '\n test1  \n': true }])).toBe('test1');
  });
});
