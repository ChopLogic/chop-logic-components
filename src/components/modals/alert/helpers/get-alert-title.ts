import { ChopLogicAlertMode } from '../types';

export function getAlertTitle(mode: ChopLogicAlertMode, title?: string): string {
  if (title) return title;

  switch (mode) {
    case 'info':
      return 'Info';
    case 'warning':
      return 'Warning';
    case 'error':
      return 'Error';
    case 'success':
      return 'Success';
    default:
      return '';
  }
}
