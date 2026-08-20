import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BxXWrdMh.js";import{i as n,r}from"./react-CD1Hm7R8.js";import{d as i,u as a}from"./blocks-CKHDPeoR.js";import{n as o,t as s}from"./use-is-mounted.stories-BwawCIKr.js";function c(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{of:o,title:`Hooks/useIsMounted`}),`
`,(0,u.jsx)(t.h1,{id:`useismounted`,children:`useIsMounted`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useIsMounted`}),` hook manages the mounting state of a component with a delay.`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useState } from "react";
import { useIsMounted } from "chop-logic-components";

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useIsMounted(isOpened, 1000);

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>Toggle Component</button>
      {isMounted && <div>Component is mounted!</div>}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,(0,u.jsx)(t.h3,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isOpened`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`A boolean indicating whether the component is opened or not.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`delay`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`number`})}),(0,u.jsx)(t.td,{children:`The delay in milliseconds before the component is unmounted. Default is 300.`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`isMounted`}),` `,(0,u.jsx)(t.code,{children:`boolean`}),`: A boolean indicating whether the component is mounted or not.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};