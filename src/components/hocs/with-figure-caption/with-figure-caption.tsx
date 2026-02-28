import type { ComponentType, FC } from 'react';
import './Figure.css';

type WithFigureCaptionProps = {
  caption?: string;
};

export function withFigureCaption<P extends object>(
  Component: ComponentType<P>,
): FC<P & WithFigureCaptionProps> {
  return ({ caption, ...props }: WithFigureCaptionProps) =>
    caption?.trim()?.length ? (
      <figure className="cl-figure">
        <Component {...(props as P)} />
        <figcaption className="cl-figure__caption">{caption}</figcaption>
      </figure>
    ) : (
      <Component {...(props as P)} />
    );
}
