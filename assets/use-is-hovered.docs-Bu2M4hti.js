import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{d as r,u as i}from"./blocks-B4li4WkW.js";import{t as a}from"./mdx-react-shim-DUEj6aPQ.js";import{n as o,t as s}from"./use-is-hovered.stories-BY9hsmGw.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useIsHovered`}),`
`,(0,u.jsx)(t.h1,{id:`useishovered`,children:`useIsHovered`}),`
`,(0,u.jsx)(t.p,{children:`A React hook that tracks whether an element is being hovered over. This hook simplifies hover state management by attaching mouse enter and leave event listeners to a referenced element.`}),`
`,(0,u.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Simple Hover Tracking`}),`: Easily determine if an element is hovered`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Ref-based`}),`: Works with React refs for maximum flexibility`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Conditional Activation`}),`: Optional `,(0,u.jsx)(t.code,{children:`isMounted`}),` parameter to control tracking`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Automatic Cleanup`}),`: Proper cleanup of event listeners on unmount`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { useIsHovered } from "chop-logic-components";
import { useRef } from "react";

const HoverableComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useIsHovered(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        padding: "1rem",
        background: isHovered ? "#e8f5e9" : "#fff",
        transition: "background 0.2s",
      }}
    >
      {isHovered ? "You are hovering over me!" : "Hover over me"}
    </div>
  );
};
`})}),`
`,(0,u.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Parameter`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`ref`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`React ref pointing to the element to track`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isMounted`})}),(0,u.jsxs)(t.td,{children:[(0,u.jsx)(t.code,{children:`boolean`}),` (optional)`]}),(0,u.jsxs)(t.td,{children:[`Enable/disable hover tracking (default: `,(0,u.jsx)(t.code,{children:`true`}),`) for elements like popups or modal windows`]})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,u.jsx)(t.p,{children:`Returns a boolean indicating whether the element is currently hovered.`}),`
`,(0,u.jsx)(t.h2,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Interactive Buttons`}),`: Change appearance on hover`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Dropdown Triggers`}),`: Show/hide content on hover`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`UI Feedback`}),`: Display additional information on hover`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Conditional Styling`}),`: Apply styles based on hover state`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Tooltip Triggers`}),`: Show tooltips when hovering`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`Always attach the ref to the element you want to track`}),`
`,(0,u.jsxs)(t.li,{children:[`Use the `,(0,u.jsx)(t.code,{children:`isMounted`}),` parameter to conditionally disable tracking if needed`]}),`
`,(0,u.jsx)(t.li,{children:`Combine with CSS transitions for smooth hover effects`}),`
`,(0,u.jsxs)(t.li,{children:[`Consider using CSS `,(0,u.jsx)(t.code,{children:`:hover`}),` pseudo-class for simple styling; use this hook for complex interactions`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};