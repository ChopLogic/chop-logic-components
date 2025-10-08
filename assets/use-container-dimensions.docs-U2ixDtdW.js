var l=Object.defineProperty,a=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var o=(t,e,s)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&o(t,s,e[s]);if(r)for(var s of r(e))j.call(e,s)&&o(t,s,e[s]);return t},d=(t,e)=>a(t,m(e));import{j as n}from"./iframe-CvRPWbsI.js";import{useMDXComponents as c}from"./index-DkgwtVae.js";import{M as p}from"./blocks-CP88HKpN.js";import{S as u}from"./use-container-dimensions.stories-XfdGFknR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5plyyUuw.js";import"./index-Bd_iq0lU.js";import"./Container.module-DIM0iUPi.js";import"./use-container-dimensions-BMX8qGqg.js";function h(t){const e=i(i({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},c()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:u,title:"Hooks/useContainerDimensions"}),`
`,n.jsx(e.h1,{id:"usecontainerdimensions",children:"useContainerDimensions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useContainerDimensions"})," hook measures the dimensions (width and height) of a container element and returns these values as an object."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useContainerDimensions } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref}>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Param"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"ref"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),n.jsx(e.td,{children:"A ref to the element whose dimensions will be measured."})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isVisible"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"A flag to indicate whether the element is visible. If true, the dimensions will be measured."})]})]})]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Dimensions"})," ",n.jsx(e.code,{children:"{ width: number; height: number }"}),": An object containing the current width and height of the element."]})]})}function E(t={}){const{wrapper:e}=i(i({},c()),t.components);return e?n.jsx(e,d(i({},t),{children:n.jsx(h,i({},t))})):h(t)}export{E as default};
