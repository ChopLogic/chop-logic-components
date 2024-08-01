import { COLORS, FONTS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  display: flex;
  align-items: center;
  gap: ${UNITS.smallGap};
  color: ${COLORS.primary};
`;

export const StyledLabelText = styled.span`
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledRequiredSign = styled.abbr`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  text-decoration: none;
  color: ${COLORS.accent};
  cursor: pointer;
`;
