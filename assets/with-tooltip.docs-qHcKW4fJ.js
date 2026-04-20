import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./with-tooltip.stories-Dsmceeaj.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:s,title:`withTooltip`}),`
`,(0,d.jsx)(t.h1,{id:`withtooltip`,children:`withTooltip`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`withTooltip`}),` higher-order component wraps any component with the library `,(0,d.jsx)(t.code,{children:`Tooltip`}),` when a non-empty `,(0,d.jsx)(t.code,{children:`tooltip`}),` string is provided. If `,(0,d.jsx)(t.code,{children:`tooltip`}),` is omitted or empty, the wrapped component renders unchanged.`]}),`
`,(0,d.jsxs)(t.p,{children:[`The design-system `,(0,d.jsx)(t.code,{children:`Button`}),` already uses this HOC internally; use `,(0,d.jsx)(t.code,{children:`withTooltip`}),` directly when you need tooltip behavior around a custom component.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { withTooltip } from "chop-logic-components";

type Props = { title: string };

const Card: React.FC<Props> = ({ title }) => <article>{title}</article>;

const CardWithOptionalTooltip = withTooltip(Card);

const Example = () => (
  <>
    <CardWithOptionalTooltip title="Plain card" />
    <CardWithOptionalTooltip title="Annotated card" tooltip="Extra context on hover" visibleOn="hover" />
  </>
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Conditional tooltips`}),`: Rely on the optional `,(0,d.jsx)(t.code,{children:`tooltip`}),` prop so the same component works with and without a tooltip (no redundant wrappers).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Triggers`}),`: Match `,(0,d.jsx)(t.code,{children:`visibleOn`}),` to the interaction you document (hover for discoverability on desktop; click or focus where hover is unreliable).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Prefer concise tooltip text; for essential information, expose it in visible copy or labels, not only in the tooltip.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsxs)(t.p,{children:[`Controls below target the demo wrapper. Any props accepted by your wrapped component are passed through; the HOC adds optional `,(0,d.jsx)(t.code,{children:`tooltip`}),` and `,(0,d.jsx)(t.code,{children:`visibleOn`}),`.`]}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),c()}))();export{u as default};