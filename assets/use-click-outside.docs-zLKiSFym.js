import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-kE0B7DI6.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-click-outside.stories-hlIkLBFS.js";function c(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useClickOutside`}),`
`,(0,u.jsx)(t.h1,{id:`useclickoutside`,children:`useClickOutside`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useClickOutside`}),` hook listens for click events outside a specified element and calls a handler function when such an event occurs.`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useRef, useState } from "react";
import { useClickOutside } from "chop-logic-components";

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside({
    ref,
    onClickOutsideHandler: () => setIsOpen(false),
  });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div ref={ref}>Click outside me to close</div>}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,(0,u.jsx)(t.h3,{id:`parameters`,children:`Parameters`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`ref`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the element that will be used to check if the click event is within the element's bounds.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`onClickOutsideHandler`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`() => void`})}),(0,u.jsx)(t.td,{children:`The callback function to call when a click outside the referenced element is detected.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`dependentRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`An optional additional ref to another element that should not trigger the outside click handler.`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.code,{children:`void`})})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};