import { AlertMode, IconName } from '@enums';
import { describe, expect, it } from 'vitest';

import { getAlertIcon, getAlertTitle } from '../Alert.helpers';

describe('Alert.helpers', () => {
  describe('getAlertTitle', () => {
    it('returns the provided title if given', () => {
      expect(getAlertTitle(AlertMode.Info, 'Custom Title')).toBe('Custom Title');
    });

    it('returns default title based on mode', () => {
      expect(getAlertTitle(AlertMode.Info)).toBe('For your information');
      expect(getAlertTitle(AlertMode.Warning)).toBe('Please pay attention');
      expect(getAlertTitle(AlertMode.Error)).toBe('Something went wrong');
      expect(getAlertTitle(AlertMode.Success)).toBe('Everything is okay');
      expect(getAlertTitle(AlertMode.Help)).toBe('Useful tip');
    });

    it('returns generic title for unknown mode', () => {
      expect(getAlertTitle('unknown' as AlertMode)).toBe('Alert');
    });
  });

  describe('getAlertIcon', () => {
    it('returns the provided icon if given', () => {
      expect(getAlertIcon(AlertMode.Info, IconName.Save)).toBe(IconName.Save);
    });

    it('returns default icon based on mode', () => {
      expect(getAlertIcon(AlertMode.Info)).toBe(IconName.Info);
      expect(getAlertIcon(AlertMode.Warning)).toBe(IconName.Warning);
      expect(getAlertIcon(AlertMode.Error)).toBe(IconName.Error);
      expect(getAlertIcon(AlertMode.Success)).toBe(IconName.CheckboxChecked);
      expect(getAlertIcon(AlertMode.Help)).toBe(IconName.Help);
    });

    it('returns undefined for unknown mode', () => {
      expect(getAlertIcon('unknown' as AlertMode)).toBeUndefined();
    });
  });
});
