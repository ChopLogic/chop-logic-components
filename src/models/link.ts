import { IconName } from '@enums';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The URL the link points to */
  href: string;
  /** Link text content */
  children: React.ReactNode;
  /** Optional icon to display with the link */
  icon?: IconName;
  /** Position of the icon relative to the text */
  iconPosition?: 'left' | 'right';
  /** Whether the link points to an external site */
  external?: boolean;
  /** Custom class name for additional styling */
  className?: string;
}
