import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SelectValue } from '@/types';
import { handleDropdownListKeyPress } from '@/utils';

describe('handleDropdownListKeyPress', () => {
  let options: SelectValue[];
  let onClose: () => void;

  beforeEach(() => {
    // Set up the options and onClose mock
    options = [
      { id: 'option-1', label: 'Option 1' },
      { id: 'option-2', label: 'Option 2' },
      { id: 'option-3', label: 'Option 3' },
    ];
    onClose = vi.fn();

    // Render each option element in the document
    render(
      <ul>
        {options.map((option) => (
          <li key={option.id} id={option.id} tabIndex={0}>
            {option.label}
          </li>
        ))}
      </ul>,
    );
  });

  it('focuses on the next option when ArrowDown is pressed', () => {
    document.getElementById('option-1')?.focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(document.activeElement?.id).toBe('option-2');
  });

  it('focuses on the previous option when ArrowUp is pressed', () => {
    document.getElementById('option-2')?.focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(document.activeElement?.id).toBe('option-1');
  });

  it('focuses on the first option if currently focused on the last option and ArrowDown is pressed', () => {
    document.getElementById('option-3')?.focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(document.activeElement?.id).toBe('option-1');
  });

  it('focuses on the last option if currently focused on the first option and ArrowUp is pressed', () => {
    document.getElementById('option-1')?.focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(document.activeElement?.id).toBe('option-3');
  });

  it('closes the dropdown when Escape is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('focuses on the next option when Tab is pressed', () => {
    document.getElementById('option-1')?.focus();
    const event = new KeyboardEvent('keydown', { key: 'Tab' });
    handleDropdownListKeyPress({
      e: event as unknown as React.KeyboardEvent<HTMLUListElement>,
      options,
      onClose,
    });

    expect(document.activeElement?.id).toBe('option-2');
  });
});
