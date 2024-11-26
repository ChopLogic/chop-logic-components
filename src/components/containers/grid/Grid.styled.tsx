import styled from 'styled-components';

export const StyledGrid = styled.table`
  border-collapse: collapse;
`;

export const StyledGridHeader = styled.thead`
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.baseFontSize};
`;

export const StyledGridBody = styled.tbody`
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.primaryColor};
`;

export const StyledGridHeaderCell = styled.th`
  padding: ${(props) => props.theme.mediumGap};
  text-align: left;
`;

export const StyledGridHeaderRow = styled.tr`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.backgroundColor};

  svg {
    color: ${(props) => props.theme.backgroundColor} !important;
  }
`;

export const StyledGridCell = styled.td`
  padding: ${(props) => props.theme.mediumGap};
`;

export const StyledGridCaption = styled.caption`
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.mediumGap};
  font-weight: bold;
`;

export const StyledGridRow = styled.tr<{ $selected: boolean }>`
  border-bottom: ${(props) => props.theme.regularBorder};

  ${(props) =>
    props.$selected &&
    `
      background-color: ${props.theme.tertiaryColor};
    `}
`;

export const StyledGridColumn = styled.col<{ $isFirst: boolean; $highlighted: boolean }>`
  border-right: ${(props) => props.theme.regularBorder};

  ${(props) => props.$isFirst && `border-left: ${props.theme.regularBorder};`}
  ${(props) => props.$highlighted && `background-color: ${props.theme.tertiaryColor};`}
`;

export const StyledGridCheckboxWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: ${(props) => props.theme.smallGap};
  padding: ${(props) => props.theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${(props) => props.theme.secondaryColor};
  }

  label {
    cursor: pointer;
    gap: ${(props) => props.theme.smallGap};
    font-size: ${(props) => props.theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${(props) => props.theme.textShadow};
    }
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const StyledGridCheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${(props) => props.theme.outlineBorder};
    outline-offset: 2px;
  }
`;
