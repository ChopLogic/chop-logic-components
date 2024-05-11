export enum UTFIcon {
  CheckMark,
  Ballot,
  ClockwiseTop,
  ClockwiseOpen,
  Pencil,
  Rightwards,
  Leftwards,
  Upwards,
  Downwards,
  Copyright,
  Warning,
  Question,
  Envelope,
  Hart,
  Scissors,
  Star,
}

export type UTFIconNames = keyof typeof UTFIcon;

export const UTF_ICONS: Record<UTFIconNames, string> = {
  CheckMark: '\u2713',
  Ballot: '\u2717',
  ClockwiseTop: '\u21B7',
  ClockwiseOpen: '\u21BB',
  Pencil: '\u270E',
  Rightwards: '\u21E8',
  Leftwards: '\u21E6',
  Upwards: '\u21E7',
  Downwards: '\u21E9',
  Copyright: '\u00A9',
  Warning: '\u26A0',
  Question: '\uFFFD',
  Envelope: '\u2709',
  Hart: '\u2665',
  Scissors: '\u2702',
  Star: '\u2605',
};
