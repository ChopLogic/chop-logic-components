import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CMulKWTX.js";import{i as n,r}from"./react-DbA5CMOi.js";import{a as i,d as a,u as o}from"./blocks-BPZv-D9b.js";import{n as s,t as c}from"./Tabs.stories-DdNXyzCp.js";function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Tabs`}),`
`,(0,d.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Tabs`}),` component provides an accessible tabbed interface with support for both horizontal and vertical orientations, disabled states, editable titles, and dynamic tab management.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Tabs, OrientationMode } from "chop-logic-components";
import type { ChopLogicTabItem } from "chop-logic-components";

const ProductTabs = () => {
  const tabs: ChopLogicTabItem[] = [
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
    {
      id: "reviews",
      title: "Reviews",
      content: <ProductReviews />,
      disabled: true, // Optional: disable specific tabs
    },
  ];

  return <Tabs tabs={tabs} mode={OrientationMode.Horizontal} defaultTabId="details" onTabSelect={(id) => console.log(\`Selected tab: \${id}\`)} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsx)(t.p,{children:`The Tabs component implements comprehensive accessibility features following the WAI-ARIA Tabs pattern.`}),`
`,(0,d.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,d.jsx)(t.h4,{id:`horizontal-mode`,children:`Horizontal Mode`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Key`}),(0,d.jsx)(t.th,{children:`Action`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowRight`})}),(0,d.jsx)(t.td,{children:`Move to and select next tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowLeft`})}),(0,d.jsx)(t.td,{children:`Move to and select previous tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Home`})}),(0,d.jsx)(t.td,{children:`Move to and select first tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`End`})}),(0,d.jsx)(t.td,{children:`Move to and select last tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Tab`})}),(0,d.jsx)(t.td,{children:`Move focus out of tab list`})]})]})]}),`
`,(0,d.jsx)(t.h4,{id:`vertical-mode`,children:`Vertical Mode`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Key`}),(0,d.jsx)(t.th,{children:`Action`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowDown`})}),(0,d.jsx)(t.td,{children:`Move to and select next tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowUp`})}),(0,d.jsx)(t.td,{children:`Move to and select previous tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Home`})}),(0,d.jsx)(t.td,{children:`Move to and select first tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`End`})}),(0,d.jsx)(t.td,{children:`Move to and select last tab`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Tab`})}),(0,d.jsx)(t.td,{children:`Move focus out of tab list`})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`aria-attributes`,children:`ARIA Attributes`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Tab list uses `,(0,d.jsx)(t.code,{children:`role="tablist"`}),` with `,(0,d.jsx)(t.code,{children:`aria-orientation`}),` matching the mode`]}),`
`,(0,d.jsxs)(t.li,{children:[`Each tab button uses `,(0,d.jsx)(t.code,{children:`role="tab"`}),` with `,(0,d.jsx)(t.code,{children:`aria-selected`}),` and `,(0,d.jsx)(t.code,{children:`aria-controls`})]}),`
`,(0,d.jsxs)(t.li,{children:[`Tab panels use `,(0,d.jsx)(t.code,{children:`role="tabpanel"`}),` with `,(0,d.jsx)(t.code,{children:`aria-labelledby`}),` referencing the tab`]}),`
`,(0,d.jsxs)(t.li,{children:[`Disabled tabs have `,(0,d.jsx)(t.code,{children:`aria-disabled="true"`}),` and are skipped during keyboard navigation`]}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Disabled tabs are skipped during keyboard navigation`}),`
`,(0,d.jsx)(t.li,{children:`Focus follows selection (arrow keys both move focus and activate the tab)`}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Organization`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Keep tab titles concise (1-2 words)`}),`
`,(0,d.jsx)(t.li,{children:`Group related content together`}),`
`,(0,d.jsx)(t.li,{children:`Limit number of tabs (recommend max 5-7)`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Content`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Load heavy content dynamically`}),`
`,(0,d.jsx)(t.li,{children:`Consider lazy-loading hidden tabs`}),`
`,(0,d.jsx)(t.li,{children:`Maintain consistent tab heights when possible`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`States`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Clearly indicate the active tab`}),`
`,(0,d.jsx)(t.li,{children:`Visually distinguish disabled tabs`}),`
`,(0,d.jsx)(t.li,{children:`Provide loading states for async content`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Dynamic Tab Management`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide meaningful default names for new tabs`}),`
`,(0,d.jsx)(t.li,{children:`Consider implementing tab reordering if needed`}),`
`,(0,d.jsx)(t.li,{children:`Validate tab titles to prevent empty or duplicate names`}),`
`,(0,d.jsx)(t.li,{children:`Provide undo functionality for accidental tab deletion`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Orientation Choice`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use horizontal tabs for primary navigation`}),`
`,(0,d.jsx)(t.li,{children:`Use vertical tabs for sidebar navigation or when tab labels are longer`}),`
`,(0,d.jsx)(t.li,{children:`Consider responsive design: vertical may work better on narrow screens`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};