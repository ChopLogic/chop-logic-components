import { useId } from 'react';
import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { useElementIds } from '..';

// Mock the useId hook
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useId: vi.fn(),
  };
});

describe('useElementIds', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return elementId, errorId, and dropdownId based on provided id', () => {
    const customId = 'custom-element-id';
    const { result } = renderHook(() => useElementIds(customId));

    expect(result.current.elementId).toBe(customId);
    expect(result.current.errorId).toBe(`${customId}_error`);
    expect(result.current.dropdownId).toBe(`${customId}_dropdown`);
  });

  it('should return elementId, errorId, and dropdownId based on generated id if no id is provided', () => {
    const mockGeneratedId = 'random-generated-id';
    (useId as Mock).mockReturnValue(mockGeneratedId);

    const { result } = renderHook(() => useElementIds());

    expect(result.current.elementId).toBe(mockGeneratedId);
    expect(result.current.errorId).toBe(`${mockGeneratedId}_error`);
    expect(result.current.dropdownId).toBe(`${mockGeneratedId}_dropdown`);
  });

  it('should call useId when no id is provided', () => {
    const mockGeneratedId = 'random-generated-id';
    (useId as Mock).mockReturnValue(mockGeneratedId);

    renderHook(() => useElementIds());

    expect(useId).toHaveBeenCalled();
  });
});
