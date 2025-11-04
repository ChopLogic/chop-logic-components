import type { ComponentType, FC } from 'react';

type WithFigureCaptionProps = {
  caption?: string;
};

export function withFigureCaption<P extends object>(
  Component: ComponentType<P>,
): FC<P & WithFigureCaptionProps> {
  return ({ caption, ...props }: WithFigureCaptionProps) =>
    caption?.trim()?.length ? (
      <figure>
        <Component {...(props as P)} />
        <figcaption>{caption}</figcaption>
      </figure>
    ) : (
      <Component {...(props as P)} />
    );
}
