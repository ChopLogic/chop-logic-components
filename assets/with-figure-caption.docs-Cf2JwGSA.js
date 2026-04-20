import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./with-figure-caption.stories-OlpSRqKo.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:s,title:`withFigureCaption`}),`
`,(0,d.jsx)(t.h1,{id:`withfigurecaption`,children:`withFigureCaption`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`withFigureCaption`}),` HOC wraps a component in a semantic `,(0,d.jsx)(t.code,{children:`<figure>`}),` with a `,(0,d.jsx)(t.code,{children:`<figcaption>`}),` when `,(0,d.jsx)(t.code,{children:`caption`}),` is a non-empty string after trimming. If `,(0,d.jsx)(t.code,{children:`caption`}),` is omitted, empty, or only whitespace, the wrapped component renders as usual with no figure wrapper.`]}),`
`,(0,d.jsxs)(t.p,{children:[`The design-system `,(0,d.jsx)(t.code,{children:`Image`}),` component applies this HOC so consumers can pass `,(0,d.jsx)(t.code,{children:`caption`}),` on `,(0,d.jsx)(t.code,{children:`Image`}),`; use `,(0,d.jsx)(t.code,{children:`withFigureCaption`}),` when you want the same behavior around other media or content.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { withFigureCaption } from "chop-logic-components";

type Props = { src: string; alt: string };

const Photo: React.FC<Props> = ({ src, alt }) => <img src={src} alt={alt} />;

const PhotoWithOptionalCaption = withFigureCaption(Photo);

const Example = () => (
  <>
    <PhotoWithOptionalCaption src="/a.jpg" alt="Product" />
    <PhotoWithOptionalCaption src="/b.jpg" alt="Diagram" caption="Figure 1: System overview" />
  </>
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Semantics`}),`: Use for real figures (images, diagrams, quoted excerpts) where a caption describes the content; avoid purely decorative wrappers.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Whitespace`}),`: Empty or whitespace-only captions intentionally skip the figure shell—validate user input if you need stricter rules.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Always provide meaningful `,(0,d.jsx)(t.code,{children:`alt`}),` on images; the caption complements but does not replace alternative text.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsxs)(t.p,{children:[`Controls below apply to the demo wrapper. Your wrapped component receives its own props; the HOC adds optional `,(0,d.jsx)(t.code,{children:`caption`}),`.`]}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),c()}))();export{u as default};