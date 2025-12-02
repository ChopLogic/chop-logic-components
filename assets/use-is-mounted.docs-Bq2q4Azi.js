var l=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(t,e,o)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))a.call(e,o)&&i(t,o,e[o]);if(r)for(var o of r(e))x.call(e,o)&&i(t,o,e[o]);return t},d=(t,e)=>m(t,p(e));import{j as n}from"./iframe-BtTQsrQT.js";import{useMDXComponents as h}from"./index-Ob56quG4.js";import{M as u}from"./blocks-BNpYbts6.js";import{S as j}from"./use-is-mounted.stories-B5Z7EwWI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./Button-Dw_yUSTK.js";import"./Icon-Z7qWIs8D.js";import"./get-class-name-BY88G7uf.js";import"./Portal-D7yw5jBn.js";import"./use-click-outside-ajOA-CeE.js";import"./use-element-ids-B0aiT4og.js";import"./use-key-press-Cy56pnAc.js";import"./use-tooltip-position-uT-wVpg_.js";import"./use-container-dimensions-DgRoZpRR.js";import"./Container.module-rjw_d_sC.js";import"./use-is-mounted-CsYAKHSw.js";function c(t){const e=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},h()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:j,title:"Hooks/useIsMounted"}),`
`,n.jsx(e.h1,{id:"useismounted",children:"useIsMounted"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useIsMounted"})," hook manages the mounting state of a component with a delay."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { useIsMounted } from 'chop-logic-components';

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
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Param"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isOpened"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"A boolean indicating whether the component is opened or not."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"delay"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"The delay in milliseconds before the component is unmounted. Default is 300."})]})]})]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"isMounted"})," ",n.jsx(e.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function _(t={}){const{wrapper:e}=s(s({},h()),t.components);return e?n.jsx(e,d(s({},t),{children:n.jsx(c,s({},t))})):c(t)}export{_ as default};
