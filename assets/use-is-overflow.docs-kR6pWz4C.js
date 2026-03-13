import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-D4KZ0eBP.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Hooks/useIsOverflow`}),`
`,(0,c.jsx)(t.h1,{id:`useisoverflow`,children:`useIsOverflow`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useIsOverflow`}),` hook detects when content overflows its container in either width or height dimension. Helps manage overflow scenarios by:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Detecting content overflow dynamically`}),`
`,(0,c.jsx)(t.li,{children:`Supporting both width and height dimensions`}),`
`,(0,c.jsx)(t.li,{children:`Providing reactive state for overflow conditions`}),`
`,(0,c.jsx)(t.li,{children:`Simplifying overflow-related UI logic`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from "react";
import { useIsOverflow } from "chop-logic-components";

const OverflowComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow({ ref: containerRef, dimension: "width" });

  return (
    <div ref={containerRef} className={isWidthOverflow ? "has-overflow" : ""}>
      {/* Long content that might overflow */}
    </div>
  );
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Parameter`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`ref`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`RefObject<HTMLElement>`})}),(0,c.jsx)(t.td,{children:`React ref object pointing to the element to monitor`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`dimension`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`'width' | 'height'`})}),(0,c.jsx)(t.td,{children:`Which dimension to check for overflow`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`isMounted`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:`Optional flag to trigger the hook on mount the parent component`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(t.p,{children:[`Returns a boolean state indicating whether overflow exists (`,(0,c.jsx)(t.code,{children:`true`}),`) or not (`,(0,c.jsx)(t.code,{children:`false`}),`).`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};