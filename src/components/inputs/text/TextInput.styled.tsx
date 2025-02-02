import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledTextInput = styled.div<{ $theme: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$theme.gapMedium};
  position: relative;

  & > div:nth-child(2) {
    display: flex;
    gap: ${(props) => props.$theme.gapMedium};
    align-items: center;
    border: ${(props) => props.$theme.borderLight};
    border-radius: ${(props) => props.$theme.blockBorderRadius};
    padding: ${(props) => props.$theme.gapMedium};
    background-color: ${(props) => props.$theme.backgroundColorBase};

    &:has(input:focus) {
      border: ${(props) => props.$theme.borderOutline};
    }

    &:has(input[aria-invalid='true']) {
      border: ${(props) => props.$theme.borderAccent};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: ${(props) => props.$theme.gapSmall};
      align-items: center;
    }
  }

  & input {
    font-size: ${(props) => props.$theme.fontSizeBase};
    padding: 0;
    border: none;
    font-family: ${(props) => props.$theme.fontFamilyCore};
    color: ${(props) => props.$theme.fontColorBase};
    display: inline-block;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
    min-width: 0;

    &:focus-visible {
      outline: none;
    }

    &:placeholder-shown + span {
      display: none !important;
    }
  }
`;
