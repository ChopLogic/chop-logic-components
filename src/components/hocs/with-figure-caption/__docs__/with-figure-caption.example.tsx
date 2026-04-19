import type { FC } from 'react';

import { withFigureCaption } from '../with-figure-caption';

type DemoPictureProps = {
  src: string;
  alt: string;
};

const DemoPicture: FC<DemoPictureProps> = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
);

const DemoWithCaption = withFigureCaption(DemoPicture);

export type WithFigureCaptionExampleProps = DemoPictureProps & {
  caption?: string;
};

export const WithFigureCaptionExample: FC<WithFigureCaptionExampleProps> = (props) => (
  <div style={{ maxWidth: 420 }}>
    <DemoWithCaption {...props} />
  </div>
);
