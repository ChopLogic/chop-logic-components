import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BxXWrdMh.js";import{i as n,r}from"./react-CD1Hm7R8.js";import{a as i,d as a,u as o}from"./blocks-CKHDPeoR.js";import{n as s,t as c}from"./Tooltip.stories-DMgzsCGB.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Tooltip`}),`
`,(0,d.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Tooltip`}),` component provides contextual information when users interact with elements. It supports multiple trigger methods and positioning options, with accessible markup and flexible content.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Tooltip } from "chop-logic-components";

const TooltipUsageExample = () => {
  return (
    <Tooltip tooltipContent="This is a tooltip" containerTag="span" visibleOn="hover" id="tooltip">
      <span>Hover over me</span>
    </Tooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Basic usage`}),`: Keep tooltip text concise (1-2 sentences max). Use for supplemental information only.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Visibility`}),`: Ensure tooltips don't obscure important content. Test positioning at different screen sizes.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Prefer hover for most cases, click for complex content. Consider mobile touch interactions (hover may not work).`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};