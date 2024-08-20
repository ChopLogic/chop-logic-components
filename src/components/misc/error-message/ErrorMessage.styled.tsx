import { COLORS, FONTS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledErrorMessage = styled.span<{ $visible: boolean }>`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  color: ${COLORS.accent};
  display: ${(props) => (props.$visible ? 'block' : 'none')};
`;
