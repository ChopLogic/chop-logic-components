var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(i,n,t)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,r=(i,n)=>{for(var t in n||(n={}))u.call(n,t)&&o(i,t,n[t]);if(s)for(var t of s(n))h.call(n,t)&&o(i,t,n[t]);return i},l=(i,n)=>m(i,p(n));import{j as e}from"./iframe-BtTQsrQT.js";import{useMDXComponents as a}from"./index-Ob56quG4.js";import{M as x,b as j}from"./blocks-BNpYbts6.js";import{S as f}from"./NumericInput.stories--s3TA1zI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./ResponsiveWrapper.module-B2uI7vga.js";import"./NumericInput-NcM71BHl.js";import"./Button-Dw_yUSTK.js";import"./Icon-Z7qWIs8D.js";import"./get-class-name-BY88G7uf.js";import"./Portal-D7yw5jBn.js";import"./use-click-outside-ajOA-CeE.js";import"./use-element-ids-B0aiT4og.js";import"./use-key-press-Cy56pnAc.js";import"./use-tooltip-position-uT-wVpg_.js";import"./use-container-dimensions-DgRoZpRR.js";import"./ErrorMessage-Bt6uj2tN.js";import"./Input-sCWAVzue.js";import"./Label-DX3cIGOQ.js";import"./use-reset-form-input-B2zVg9GE.js";function c(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:f,title:"NumericInput"}),`
`,e.jsx(n.h1,{id:"numericinput",children:"NumericInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NumericInput"})," component provides a controlled numeric input field with spin buttons, validation, and accessibility features."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import NumericInput from 'chop-logic-components';

const QuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <NumericInput
      name="quantity"
      label="Quantity"
      min={1}
      max={10}
      step={1}
      defaultValue={1}
      onChange={(value) => setQuantity(value)}
    />
  );
};
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Validation"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide errorMessage when using validation"}),`
`,e.jsx(n.li,{children:"Combine built-in min/max with custom validation when needed"}),`
`,e.jsx(n.li,{children:"Display validation errors clearly"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Value Ranges"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Set sensible defaults for min/max"}),`
`,e.jsx(n.li,{children:"Consider the expected range of values"}),`
`,e.jsx(n.li,{children:"Adjust step size appropriately for the context"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility Notes"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use label prop for clear identification"}),`
`,e.jsx(n.li,{children:"Ensure spin buttons are keyboard accessible"}),`
`,e.jsx(n.li,{children:"Provide meaningful error messages for screen readers"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function B(i={}){const{wrapper:n}=r(r({},a()),i.components);return n?e.jsx(n,l(r({},i),{children:e.jsx(c,r({},i))})):c(i)}export{B as default};
