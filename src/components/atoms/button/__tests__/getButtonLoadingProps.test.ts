import { IconName } from '@enums';
import type { MouseEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { getButtonLoadingProps } from '../getButtonLoadingProps';

describe('getButtonLoadingProps', () => {
  const baseParams = {
    baseClass: 'cl-primary-button',
    iconBaseClass: 'cl-primary-button__icon',
    isLoading: false,
  };

  describe('buttonClass', () => {
    it('should return the base class when not loading and no custom className', () => {
      const { buttonClass } = getButtonLoadingProps(baseParams);
      expect(buttonClass).toBe('cl-primary-button');
    });

    it('should include custom className', () => {
      const { buttonClass } = getButtonLoadingProps({ ...baseParams, className: 'custom' });
      expect(buttonClass).toContain('cl-primary-button');
      expect(buttonClass).toContain('custom');
    });

    it('should include cl-button_loading when isLoading is true', () => {
      const { buttonClass } = getButtonLoadingProps({ ...baseParams, isLoading: true });
      expect(buttonClass).toContain('cl-button_loading');
    });

    it('should not include cl-button_loading when isLoading is false', () => {
      const { buttonClass } = getButtonLoadingProps(baseParams);
      expect(buttonClass).not.toContain('cl-button_loading');
    });
  });

  describe('iconClass', () => {
    it('should return the base icon class when not loading', () => {
      const { iconClass } = getButtonLoadingProps(baseParams);
      expect(iconClass).toBe('cl-primary-button__icon');
    });

    it('should include cl-button__icon_spinning when isLoading is true', () => {
      const { iconClass } = getButtonLoadingProps({ ...baseParams, isLoading: true });
      expect(iconClass).toContain('cl-button__icon_spinning');
    });

    it('should not include cl-button__icon_spinning when isLoading is false', () => {
      const { iconClass } = getButtonLoadingProps(baseParams);
      expect(iconClass).not.toContain('cl-button__icon_spinning');
    });
  });

  describe('displayIcon', () => {
    it('should return undefined when no icon is provided', () => {
      const { displayIcon } = getButtonLoadingProps(baseParams);
      expect(displayIcon).toBeUndefined();
    });

    it('should return the original icon when not loading', () => {
      const { displayIcon } = getButtonLoadingProps({
        ...baseParams,
        icon: IconName.Save,
      });
      expect(displayIcon).toBe(IconName.Save);
    });

    it('should return Loader icon when isLoading is true', () => {
      const { displayIcon } = getButtonLoadingProps({
        ...baseParams,
        icon: IconName.Save,
        isLoading: true,
      });
      expect(displayIcon).toBe(IconName.Loader);
    });

    it('should return undefined when no icon is provided even if loading', () => {
      const { displayIcon } = getButtonLoadingProps({ ...baseParams, isLoading: true });
      expect(displayIcon).toBeUndefined();
    });
  });

  describe('handleClick', () => {
    it('should call onClick when not loading', () => {
      const onClick = vi.fn();
      const { handleClick } = getButtonLoadingProps({ ...baseParams, onClick });
      const event = { preventDefault: vi.fn() } as unknown as MouseEvent<HTMLButtonElement>;

      handleClick(event);

      expect(onClick).toHaveBeenCalledOnce();
      expect(onClick).toHaveBeenCalledWith(event);
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should prevent default and not call onClick when loading', () => {
      const onClick = vi.fn();
      const { handleClick } = getButtonLoadingProps({
        ...baseParams,
        isLoading: true,
        onClick,
      });
      const event = { preventDefault: vi.fn() } as unknown as MouseEvent<HTMLButtonElement>;

      handleClick(event);

      expect(event.preventDefault).toHaveBeenCalledOnce();
      expect(onClick).not.toHaveBeenCalled();
    });

    it('should not throw when onClick is not provided', () => {
      const { handleClick } = getButtonLoadingProps(baseParams);
      const event = { preventDefault: vi.fn() } as unknown as MouseEvent<HTMLButtonElement>;

      expect(() => handleClick(event)).not.toThrow();
    });
  });
});
