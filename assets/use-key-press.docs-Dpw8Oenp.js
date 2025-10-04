var l=Object.defineProperty,x=Object.defineProperties;var a=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var d=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))j.call(e,t)&&d(s,t,e[t]);if(o)for(var t of o(e))p.call(e,t)&&d(s,t,e[t]);return s},c=(s,e)=>x(s,a(e));import{j as n}from"./iframe-hahURQ28.js";import{useMDXComponents as h}from"./index-eCueArxk.js";import{M as m}from"./blocks-DP9Zug9A.js";import{S as f}from"./use-key-press.stories-twhW6E5-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj3JMFjo.js";import"./index-B7gScCbj.js";import"./use-key-press-BNGOKtdQ.js";import"./Container.module-DIM0iUPi.js";function i(s){const e=r(r({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},h()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:f,title:"Hooks/useKeyPress"}),`
`,n.jsx(e.h1,{id:"usekeypress",children:"useKeyPress"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useKeyPress"})," hook listens for a specific key press event and calls a callback function when the key is pressed."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useKeyPress } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    console.log('Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0}>
      Press "Enter" key
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Param"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"ref"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),n.jsx(e.td,{children:"A ref to the element that will be used to check if the key press event is within the element's bounds."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"keyCode"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"string"})}),n.jsx(e.td,{children:"The key code of the key to listen for."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"onKeyPress"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => void"})}),n.jsx(e.td,{children:"The callback function to call when the key is pressed."})]})]})]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"void"})})]})}function v(s={}){const{wrapper:e}=r(r({},h()),s.components);return e?n.jsx(e,c(r({},s),{children:n.jsx(i,r({},s))})):i(s)}export{v as default};
