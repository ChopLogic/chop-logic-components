import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledSelect = styled.div<{ $theme: ChopLogicTheme }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${(props) => props.$theme.gapMedium};
  background: transparent;
`;

export const StyledSelectCombobox = styled.button<{ $theme: ChopLogicTheme }>`
  text-align: left;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$theme.gapMedium};
  padding: ${(props) => props.$theme.gapMedium};
  border: ${(props) => props.$theme.borderBase};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & > span:nth-child(1) {
    font-size: ${(props) => props.$theme.fontSizeBase};
    color: ${(props) => props.$theme.fontColorBase};
    font-family: ${(props) => props.$theme.fontFamilyCore};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.$theme.fontColorLight};
    height: ${(props) => props.$theme.iconSize};
    width: ${(props) => props.$theme.iconSize};

    &:hover {
      color: ${(props) => props.$theme.fontColorAccent};
      filter: drop-shadow(${(props) => props.$theme.textShadow});
    }
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: 2px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const StyledSelectDropdown = styled.ul<{ $opened: boolean; $theme: ChopLogicTheme }>`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background: ${(props) => props.$theme.backgroundColorBase};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${(props) => props.$theme.zIndexPopup};
  width: 100%;
  top: 70px;
  left: -1px;
  border: ${(props) => props.$theme.borderBase};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  box-shadow: ${(props) => props.$theme.boxShadow};
  overflow-y: auto;
  max-height: 180px;

  ${(props) => props.$opened && `visibility: visible; opacity: 1;`}
`;

export const StyledSelectOption = styled.li<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapMedium};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$theme.gapMedium};
  font-size: ${(props) => props.$theme.fontSizeBase};
  color: ${(props) => props.$theme.fontColorBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};

  &:hover,
  &:active {
    text-shadow: ${(props) => props.$theme.textShadow};
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: -4px;
  }

  svg {
    color: ${(props) => props.$theme.backgroundColorLight};
    width: ${(props) => props.$theme.iconSize};
    height: ${(props) => props.$theme.iconSize};
  }
`;

export const StyledMultiSelectOption = styled(StyledSelectOption)`
  justify-content: flex-start;
`;
