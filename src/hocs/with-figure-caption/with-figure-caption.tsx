import type { ComponentType, FC } from 'react';
import styles from './Figure.module.scss';

type WithFigureCaptionProps = {
  caption?: string;
};

export function withFigureCaption<P extends object>(
  Component: ComponentType<P>,
): FC<P & WithFigureCaptionProps> {
  return ({ caption, ...props }: WithFigureCaptionProps) =>
    caption?.trim()?.length ? (
      <figure className={styles.figure}>
        <Component {...(props as P)} />
        <figcaption className={styles.figure_caption}>{caption}</figcaption>
      </figure>
    ) : (
      <Component {...(props as P)} />
    );
}
