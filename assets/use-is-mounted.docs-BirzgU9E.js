var m=Object.defineProperty,l=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(t,e,o)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))a.call(e,o)&&i(t,o,e[o]);if(r)for(var o of r(e))x.call(e,o)&&i(t,o,e[o]);return t},d=(t,e)=>l(t,p(e));import{j as n}from"./iframe-7UvCaPuN.js";import{useMDXComponents as h}from"./index-DPb6rMrK.js";import{M as u}from"./blocks-BWlQjjkw.js";import{S as j}from"./use-is-mounted.stories-BN7DCJyl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPLllSZx.js";import"./index-v4pKKiLL.js";import"./Button-Cq0KCBd2.js";import"./Icon-N1nzqMG0.js";import"./ArrowUpIcon-OF-xRODv.js";import"./CheckboxUncheckedIcon-Bf1ZHiwb.js";import"./CheckMarkIcon-CSLR1mm-.js";import"./get-class-name-CHDn80c0.js";import"./Portal-DHBqON0u.js";import"./use-click-outside-DzJRbCA0.js";import"./use-element-ids-D_Vfufc9.js";import"./use-key-press-qUeVx0Z9.js";import"./use-tooltip-position-DuPrSIO9.js";import"./use-container-dimensions-AWdhRgIR.js";import"./use-window-dimensions-DaS2WVlI.js";import"./Container.module-DIM0iUPi.js";import"./use-is-mounted-DtyhbG0g.js";function c(t){const e=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},h()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:j,title:"Hooks/useIsMounted"}),`
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
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"isMounted"})," ",n.jsx(e.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function N(t={}){const{wrapper:e}=s(s({},h()),t.components);return e?n.jsx(e,d(s({},t),{children:n.jsx(c,s({},t))})):c(t)}export{N as default};
