import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-WDqgAjPb.js";import{i as n,r}from"./react-Dxrh8G77.js";import{d as i,u as a}from"./blocks-D7cjmNaL.js";import{n as o,t as s}from"./use-anchor-position.stories-CXCulYGj.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{of:o,title:`Hooks/useAnchorPosition`}),`
`,(0,u.jsx)(t.h1,{id:`useanchorposition`,children:`useAnchorPosition`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useAnchorPosition`}),` hook calculates and manages the position of a floating element (tooltip, popup, dropdown, etc.) relative to an anchor element.`]}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useRef, useState } from "react";
import { useAnchorPosition } from "chop-logic-components";

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const anchorRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<HTMLElement>(null);
  const { top, left } = useAnchorPosition({ anchorRef, floatingRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={anchorRef}>
        Click me
      </button>
      {isOpened && (
        <div
          ref={floatingRef}
          style={{
            position: "absolute",
            top: \`\${top}px\`,
            left: \`\${left}px\`,
            border: "1px solid black",
            padding: "10px",
          }}
        >
          Floating Content
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,(0,u.jsx)(t.h2,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`anchorRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the anchor element that the floating element is positioned relative to.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`floatingRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the floating element (tooltip, popup, dropdown, etc.).`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isOpened`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`A boolean indicating whether the floating element is visible.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`spacing`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`number`})}),(0,u.jsx)(t.td,{children:`The spacing between the floating and anchor elements. Default is 4px.`})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`returns`,children:`Returns`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`position`}),` `,(0,u.jsx)(t.code,{children:`{ top: number, left: number }`}),`: Coordinates for positioning the floating element in the viewport.`]}),`
`,(0,u.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`Centers the floating element horizontally under the anchor`}),`
`,(0,u.jsx)(t.li,{children:`Flips above the anchor when there's not enough space below`}),`
`,(0,u.jsx)(t.li,{children:`Clamps to viewport edges to prevent overflow`}),`
`,(0,u.jsx)(t.li,{children:`Updates position on window resize`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};