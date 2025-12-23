var m=Object.defineProperty,a=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(t,o,n)=>o in t?m(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,i=(t,o)=>{for(var n in o||(o={}))h.call(o,n)&&r(t,n,o[n]);if(s)for(var n of s(o))x.call(o,n)&&r(t,n,o[n]);return t},p=(t,o)=>a(t,d(o));import{j as e}from"./iframe-BD2qMxgm.js";import{useMDXComponents as c}from"./index-Brdy1V2t.js";import{M as j,b as u}from"./blocks-D4SsA9Kg.js";import{T as f}from"./Tooltip.stories-Bzu_WqgF.js";import"./preload-helper-BDBacUwf.js";import"./index-BdVZIdTJ.js";import"./index-93A79Foz.js";import"./Button-BnHaWgV4.js";import"./Icon-MLh-kOYM.js";import"./get-class-name-BY88G7uf.js";import"./Portal-BHN2Eox0.js";import"./use-click-outside-6cmNVI-U.js";import"./use-element-ids-BbUXXNQn.js";import"./use-key-press-C6A1hwFT.js";import"./use-tooltip-position-D_PdVjAa.js";import"./use-container-dimensions-DStfneKy.js";function l(t){const o=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:f,title:"Tooltip"}),`
`,e.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Tooltip"})," component provides contextual information when users interact with elements. It supports multiple trigger methods and positioning options, with accessible markup and flexible content."]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Tooltip } from 'chop-logic-components';

const TooltipUsageExample = () => {
  return (
    <Tooltip tooltipContent="This is a tooltip" containerTag="span" visibleOn="hover" id="tooltip">
      <span>Hover over me</span>
    </Tooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,e.jsx(o.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.em,{children:"Basic usage"}),": Keep tooltip text concise (1-2 sentences max). Use for supplemental information only."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.em,{children:"Visibility"}),": Ensure tooltips don't obscure important content. Test positioning at different screen sizes."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.em,{children:"Accessibility"}),": Prefer hover for most cases, click for complex content. Consider mobile touch interactions (hover may not work)."]}),`
`]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function A(t={}){const{wrapper:o}=i(i({},c()),t.components);return o?e.jsx(o,p(i({},t),{children:e.jsx(l,i({},t))})):l(t)}export{A as default};
