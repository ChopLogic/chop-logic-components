import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-D4KZ0eBP.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Header.stories-D301pZJR.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Header`}),`
`,(0,d.jsx)(t.h1,{id:`header`,children:`Header`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Header`}),` component provides a flexible heading element that can render as any HTML heading level (h1-h6) and optionally include an icon. It's designed to maintain consistent styling across all heading levels while providing semantic HTML structure.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Header, IconName } from "chop-logic-components";

const PageHeader = () => (
  <div>
    <Header as="h1" icon={IconName.Home}>
      Welcome
    </Header>
    <Header as="h2">Section Title</Header>
    <Header as="h3" className="special-header" id="subsection">
      With Custom Class
    </Header>
  </div>
);

export default PageHeader;
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Semantic Hierarchy`}),`: Use the appropriate heading level (`,(0,d.jsx)(t.code,{children:`as`}),` prop) to maintain proper document structure (h1 for main title, h2 for sections, h3 for subsections, etc.).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Icon Selection`}),`: Choose icons that are relevant to the header content and enhance understanding.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Ensure heading levels follow a logical hierarchy for screen reader users.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content Clarity`}),`: Keep header text concise and descriptive.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Consistent Styling`}),`: Use the className prop for consistent styling across similar header levels.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`ID Usage`}),`: Provide id attributes when headers need to be linked or referenced.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};