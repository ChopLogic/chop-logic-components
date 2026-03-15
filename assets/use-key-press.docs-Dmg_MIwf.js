import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-SKv-7AQs.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-key-press.stories-Dg7iBVMj.js";function c(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useKeyPress`}),`
`,(0,u.jsx)(t.h1,{id:`usekeypress`,children:`useKeyPress`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useKeyPress`}),` hook listens for a specific key press event and calls a callback function when the key is pressed.`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useRef } from "react";
import { useKeyPress } from "chop-logic-components";

const ExampleComponent = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    console.log("Key pressed!");
  };

  useKeyPress({ ref, keyCode: "Enter", onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0}>
      Press "Enter" key
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,(0,u.jsx)(t.h3,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`ref`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the element that will be used to check if the key press event is within the element's bounds.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`keyCode`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`string`})}),(0,u.jsx)(t.td,{children:`The key code of the key to listen for.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`onKeyPress`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`() => void`})}),(0,u.jsx)(t.td,{children:`The callback function to call when the key is pressed.`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.code,{children:`void`})})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};