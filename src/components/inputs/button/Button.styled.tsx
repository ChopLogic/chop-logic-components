import styled from 'styled-components';

import { ChopLogicButtonView } from './types';
//
// const primaryStyles = `
//     border-radius: ${UNITS.blockBorderRadius};
//     color: ${COLORS.background};
//     box-chop-logic-button_shadow: ${chop-logic-button_shadowS.box};
//     filter: brightness(100%);
//     transition: 0.3s;
//     background: ${GRADIENTS.primary};
//
//     &:hover,
//     &:active {
//     filter: brightness(130%);
//     }
// `;
//
// const dangerStyles = `
//     border-radius: ${UNITS.blockBorderRadius};
//     color: ${COLORS.background};
//     box-chop-logic-button_shadow: ${chop-logic-button_shadowS.box};
//     filter: brightness(100%);
//     transition: 0.3s;
//     background: ${GRADIENTS.accent};
//
//     &:hover,
//     &:active {
//       filter: brightness(130%);
//     }
// `;
//
// const secondaryStyles = `
//     background: none;
//     color: ${COLORS.primary};
//     text-chop-logic-button_shadow: none;
//     transition: 0.3s;
//
//     & .cl-button__text {
//       text-decoration: underline;
//     }
//
//     &:hover,
//     &:active {
//       text-chop-logic-button_shadow: ${chop-logic-button_shadowS.text};
//     }
//
//     &.cl-button_disabled {
//       opacity: 0.6;
//     }
// `;
//
// const iconStyles = `
//     gap: 0;
//     background: transparent;
//     font-weight: normal;
//     font-size: 1.4rem;
//     border-radius: ${UNITS.blockBorderRadius};
//     color: ${COLORS.secondary};
//
//     &:hover,
//     &:active {
//       background-color: ${COLORS.shade};
//     }
// `;

export const StyledButton = styled.button<{ $view: ChopLogicButtonView; $disabled: boolean; $extended: boolean }>`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  .chop-logic-button_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.blockBorderRadius};
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .chop-logic-button_edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.blockBorderRadius};
    background: ${(props) => props.theme.primaryGradient};
  }

  .chop-logic-button_front {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.smallGap};
    position: relative;
    padding: ${(props) => `${props.theme.mediumGap} ${props.theme.bigGap}`};
    border-radius: ${(props) => props.theme.blockBorderRadius};
    font-size: ${(props) => props.theme.baseFontSize};
    color: ${(props) => props.theme.backgroundColor};
    background: ${(props) => props.theme.secondaryColor};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .chop-logic-button_front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .chop-logic-button_shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

// border: none;
// cursor: pointer;
// background: ${(props) => props.theme.tertiaryColor};
// padding: ${(props) => props.theme.mediumGap};
// border-radius: ${(props) => props.theme.blockBorderRadius};
// font-family: ${(props) => props.theme.coreFontFamily};
// color: ${(props) => props.theme.backgroundColor};
// display: flex;
// align-items: center;
// justify-content: center;
// gap: ${(props) => props.theme.smallGap};
// overflow: hidden;
//
// &:focus-visible {
//   outline: ${(props) => props.theme.outlineBorder};
//   outline-offset: 2px;
// }

// export const StyledButtonText = styled.span`
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// ${(props) => {
//   switch (props.$view) {
//     case 'primary':
//       return primaryStyles;
//     case 'secondary':
//       return secondaryStyles;
//     case 'danger':
//       return dangerStyles;
//     case 'icon':
//       return iconStyles;
//     default:
//       return '';
//   }
// }}

// ${(props) =>
//   props.$disabled &&
//   `
//     pointer-events: none;
//     filter: grayscale(80%);
//     opacity: 0.9;
//   `}
//
//   ${(props) => props.$extended && `width: 100%;`}
