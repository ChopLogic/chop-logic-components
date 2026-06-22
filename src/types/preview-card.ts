import type { LinkTarget } from '@enums';
import type { ChopLogicComponentProps } from './_common';
import type { ImageProps } from './image';

export interface Author {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  link?: string;
  linkTarget?: LinkTarget;
}

export interface TagData {
  id: string;
  name: string;
  description?: string;
  color?: string;
}

export interface AvatarProps extends ChopLogicComponentProps {
  name: string;
  email: string;
  imageUrl: string;
  link?: string;
  linkTarget?: LinkTarget;
}

export interface TagProps extends ChopLogicComponentProps {
  name: string;
  description?: string;
  color?: string;
}

export interface PreviewCardProps extends ChopLogicComponentProps {
  link: string;
  linkTarget?: LinkTarget;
  image: ImageProps;
  title: string;
  authors: Author[];
  tags: TagData[];
  summary?: string;
}
