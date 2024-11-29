import styled from 'styled-components';

export const StyledSelect = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${(props) => props.theme.mediumGap};
  background: transparent;
`;

export const StyledSelectCombobox = styled.button`
  text-align: left;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.mediumGap};
  padding: ${(props) => props.theme.mediumGap};
  border: ${(props) => props.theme.regularBorder};
  border-radius: ${(props) => props.theme.blockBorderRadius};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & > span:nth-child(1) {
    font-size: ${(props) => props.theme.baseFontSize};
    color: ${(props) => props.theme.primaryColor};
    font-family: ${(props) => props.theme.coreFontFamily};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.secondaryColor};
    height: ${(props) => props.theme.iconSize};
    width: ${(props) => props.theme.iconSize};

    &:hover {
      color: ${(props) => props.theme.tertiaryColor};
      filter: drop-shadow(${(props) => props.theme.textShadow});
    }
  }

  &:focus-visible {
    outline: ${(props) => props.theme.outlineBorder};
    outline-offset: 2px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const StyledSelectDropdown = styled.ul<{ $opened: boolean }>`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background: ${(props) => props.theme.backgroundColor};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${(props) => props.theme.dropdownIndex};
  width: 100%;
  top: 70px;
  left: -1px;
  border: ${(props) => props.theme.regularBorder};
  border-radius: ${(props) => props.theme.blockBorderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow-y: auto;
  max-height: 180px;

  ${(props) => props.$opened && `visibility: visible; opacity: 1;`}
`;

export const StyledSelectOption = styled.li`
  padding: ${(props) => props.theme.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.mediumGap};
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.coreFontFamily};

  &:hover,
  &:active {
    text-shadow: ${(props) => props.theme.textShadow};
  }

  &:focus-visible {
    outline: ${(props) => props.theme.outlineBorder};
    outline-offset: -4px;
  }

  svg {
    color: ${(props) => props.theme.secondaryColor};
    width: ${(props) => props.theme.iconSize};
    height: ${(props) => props.theme.iconSize};
  }
`;

export const StyledMultiSelectOption = styled(StyledSelectOption)`
  justify-content: flex-start;
`;
