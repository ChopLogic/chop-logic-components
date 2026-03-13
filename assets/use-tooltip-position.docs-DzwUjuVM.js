import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-kE0B7DI6.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-tooltip-position.stories-C-fW8CxU.js";function c(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useTooltipPosition`}),`
`,(0,u.jsx)(t.h1,{id:`usetooltipposition`,children:`useTooltipPosition`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useTooltipPosition`}),` hook calculates and manages the position of a tooltip relative to a reference element.`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useRef, useState } from "react";
import { useTooltipPosition } from "chop-logic-components";

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: \`\${top}px\`,
            left: \`\${left}px\`,
            border: "1px solid black",
            padding: "10px",
          }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,(0,u.jsx)(t.h3,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`wrapperRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the element that the tooltip is relative to.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`tooltipRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the tooltip element.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isOpened`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`A boolean indicating whether the tooltip is opened or not.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`spacing`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`number`})}),(0,u.jsx)(t.td,{children:`The spacing between the tooltip and the reference element. Default is 4px.`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`position`}),` `,(0,u.jsx)(t.code,{children:`{ top: number, left: number }`}),`: Container coordinates in the viewport.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};