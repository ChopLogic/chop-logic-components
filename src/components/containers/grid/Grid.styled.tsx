import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledGrid = styled.table`
  border-collapse: collapse;
`;

export const StyledGridHeader = styled.thead<{ $theme: ChopLogicTheme }>`
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  font-size: ${(props) => props.$theme.fontSizeBase};
`;

export const StyledGridBody = styled.tbody<{ $theme: ChopLogicTheme }>`
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
`;

export const StyledGridHeaderCell = styled.th<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapMedium};
  text-align: left;
`;

export const StyledGridHeaderRow = styled.tr<{ $theme: ChopLogicTheme }>`
  font-weight: bold;
  border-top: ${(props) => props.$theme.borderLight};
  border-bottom: ${(props) => props.$theme.borderLight};
  background-color: ${(props) => props.$theme.backgroundColorBase};
`;

export const StyledGridCell = styled.td<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapMedium};
`;

export const StyledGridCaption = styled.caption<{ $theme: ChopLogicTheme }>`
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  padding: ${(props) => props.$theme.gapMedium};
  font-weight: bold;
`;

export const StyledGridRow = styled.tr<{ $selected: boolean; $theme: ChopLogicTheme }>`
  border-bottom: ${(props) => props.$theme.borderLight};

  ${(props) =>
    props.$selected &&
    `
      background-color: ${props.$theme.backgroundColorLight};
    `}
`;

export const StyledGridColumn = styled.col<{ $isFirst: boolean; $highlighted: boolean; $theme: ChopLogicTheme }>`
  border-right: ${(props) => props.$theme.borderLight};

  ${(props) => props.$isFirst && `border-left: ${props.$theme.borderLight};`}
  ${(props) => props.$highlighted && `background-color: ${props.$theme.backgroundColorLight};`}
`;

export const StyledGridCheckboxWrapper = styled.div<{ $disabled: boolean; $checked: boolean; $theme: ChopLogicTheme }>`
  display: flex;
  gap: ${(props) => props.$theme.gapSmall};
  padding: ${(props) => props.$theme.gapSmall} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${(props) => (props.$checked ? props.$theme.fontColorBase : props.$theme.fontColorLight)};
  }

  label {
    cursor: pointer;
    gap: ${(props) => props.$theme.gapSmall};
    font-size: ${(props) => props.$theme.fontSizeBase} !important;
    &:hover,
    &:active {
      text-shadow: ${(props) => props.$theme.textShadow};
    }
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const StyledGridCheckboxInput = styled.input<{ $theme: ChopLogicTheme }>`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: 2px;
  }
`;
