import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-SKv-7AQs.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Tabs.stories-DpDKcc2V.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Tabs`}),`
`,(0,d.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Tabs`}),` component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, editable titles, and dynamic tab management.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Tabs, { OrientationMode } from "chop-logic-components";

const ProductTabs = () => {
  const tabs = [
    {
      id: "details",
      title: "Details",
      content: <ProductDetails />,
    },
    {
      id: "specs",
      title: "Specifications",
      content: <ProductSpecs />,
    },
  ];

  return <Tabs tabs={tabs} mode={OrientationMode.Horizontal} defaultTabId="specs" />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Organization`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Keep tab titles concise (1-2 words)`}),`
`,(0,d.jsx)(t.li,{children:`Group related content together`}),`
`,(0,d.jsx)(t.li,{children:`Limit number of tabs (recommend max 5-7)`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Load heavy content dynamically`}),`
`,(0,d.jsx)(t.li,{children:`Consider lazy-loading hidden tabs`}),`
`,(0,d.jsx)(t.li,{children:`Maintain consistent tab heights`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`States`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Clearly indicate active tab`}),`
`,(0,d.jsx)(t.li,{children:`Visually distinguish disabled tabs`}),`
`,(0,d.jsx)(t.li,{children:`Provide loading states for async content`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Dynamic Tab Management`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide meaningful default names for new tabs`}),`
`,(0,d.jsx)(t.li,{children:`Consider implementing tab reordering if needed`}),`
`,(0,d.jsx)(t.li,{children:`Validate tab titles to prevent empty or duplicate names`}),`
`,(0,d.jsx)(t.li,{children:`Provide undo functionality for accidental tab deletion`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};