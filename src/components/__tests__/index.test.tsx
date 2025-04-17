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
        'ChopLogicThemeContext',
        'ChopLogicErrorMessage',
        'ChopLogicIcon',
        'ChopLogicInputInnerButton',
        'ChopLogicLabel',
        'ChopLogicAlertMode',
        'ChopLogicButtonView',
        'ChopLogicIconName',
        'ChopLogicOrientationMode',
        'ChopLogicThemeMode',
        'ChopLogicTooltipContainer',
        'useChopLogicTheme',
        'useClickOutside',
        'useContainerDimensions',
        'useElementIds',
        'useKeyPress',
        'useModalFocusTrap',
        'useMount',
        'useResetFormInput',
        'useTooltipPosition',
        'useWindowDimensions',
      ]),
    );
  });
});
