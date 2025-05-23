import { describe, expect, it } from 'vitest';

import * as Exports from '../../index.ts';

describe('Index File Exports', () => {
  it('should export all expected modules without throwing', () => {
    expect(Exports).toBeDefined();
  });

  it('should export specific modules', () => {
    expect(Object.keys(Exports)).toEqual(
      expect.arrayContaining([
        'ChopLogicButton',
        'ChopLogicCheckbox',
        'ChopLogicMultiSelect',
        'ChopLogicNumericInput',
        'ChopLogicSelect',
        'ChopLogicTextInput',
        'ChopLogicDialog',
        'ChopLogicTooltip',
        'ChopLogicForm',
        'ChopLogicGrid',
        'ChopLogicMenu',
        'ChopLogicPortal',
        'ChopLogicTabs',
        'ChopLogicAlert',
        'ChopLogicFormContext',
        'ChopLogicIcon',
        'ChopLogicInputInnerButton',
        'ChopLogicAlertMode',
        'ChopLogicButtonView',
        'ChopLogicIconName',
        'ChopLogicOrientationMode',
        'ChopLogicThemeMode',
        'ChopLogicTooltipContainer',
        'useClickOutside',
        'useContainerDimensions',
        'useElementIds',
        'useKeyPress',
        'useModalFocusTrap',
        'useMount',
        'useResetFormInput',
        'useTooltipPosition',
        'useWindowDimensions',
        'useChopLogicTheme',
      ]),
    );
  });
});
