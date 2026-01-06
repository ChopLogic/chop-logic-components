var h=Object.defineProperty,a=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var o=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s=(r,e)=>{for(var t in e||(e={}))x.call(e,t)&&o(r,t,e[t]);if(i)for(var t of i(e))j.call(e,t)&&o(r,t,e[t]);return r},l=(r,e)=>a(r,m(e));import{j as n}from"./iframe-C2ng--48.js";import{useMDXComponents as c}from"./index-BFeXBWok.js";import{M as p}from"./blocks-_53u4lk0.js";import{S as u}from"./use-is-hovered.stories-Dm_-XqW_.js";import"./preload-helper-BDBacUwf.js";import"./index-CfInEO2Z.js";import"./index-BcQsO8Kp.js";import"./Checkbox-CTqciuYt.js";import"./Label-CDF7_cDo.js";import"./Icon-Fv1_a00z.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-DvdSYpiS.js";import"./use-reset-form-input-DKGo7m18.js";import"./Container.module-3iQ-V5w_.js";import"./use-is-hovered-BMDaaLvx.js";function d(r){const e=s(s({code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},c()),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:u,title:"Hooks/useIsHovered"}),`
`,n.jsx(e.h1,{id:"useishovered",children:"useIsHovered"}),`
`,n.jsx(e.p,{children:"A React hook that tracks whether an element is being hovered over. This hook simplifies hover state management by attaching mouse enter and leave event listeners to a referenced element."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simple Hover Tracking"}),": Easily determine if an element is hovered"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ref-based"}),": Works with React refs for maximum flexibility"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Conditional Activation"}),": Optional ",n.jsx(e.code,{children:"isMounted"})," parameter to control tracking"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Cleanup"}),": Proper cleanup of event listeners on unmount"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useIsHovered } from 'chop-logic-components';
import { useRef } from 'react';

const HoverableComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useIsHovered(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        padding: '1rem',
        background: isHovered ? '#e8f5e9' : '#fff',
        transition: 'background 0.2s',
      }}
    >
      {isHovered ? 'You are hovering over me!' : 'Hover over me'}
    </div>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"ref"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"RefObject<HTMLElement>"})}),n.jsx(e.td,{children:"React ref pointing to the element to track"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isMounted"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"boolean"})," (optional)"]}),n.jsxs(e.td,{children:["Enable/disable hover tracking (default: ",n.jsx(e.code,{children:"true"}),") for elements like popups or modal windows"]})]})]})]}),`
`,n.jsx(e.h2,{id:"return-value",children:"Return Value"}),`
`,n.jsx(e.p,{children:"Returns a boolean indicating whether the element is currently hovered."}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive Buttons"}),": Change appearance on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dropdown Triggers"}),": Show/hide content on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"UI Feedback"}),": Display additional information on hover"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Conditional Styling"}),": Apply styles based on hover state"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tooltip Triggers"}),": Show tooltips when hovering"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always attach the ref to the element you want to track"}),`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.code,{children:"isMounted"})," parameter to conditionally disable tracking if needed"]}),`
`,n.jsx(e.li,{children:"Combine with CSS transitions for smooth hover effects"}),`
`,n.jsxs(e.li,{children:["Consider using CSS ",n.jsx(e.code,{children:":hover"})," pseudo-class for simple styling; use this hook for complex interactions"]}),`
`]})]})}function E(r={}){const{wrapper:e}=s(s({},c()),r.components);return e?n.jsx(e,l(s({},r),{children:n.jsx(d,s({},r))})):d(r)}export{E as default};
