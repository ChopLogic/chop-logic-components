var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var l=(t,e,i)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,s=(t,e)=>{for(var i in e||(e={}))u.call(e,i)&&l(t,i,e[i]);if(r)for(var i of r(e))h.call(e,i)&&l(t,i,e[i]);return t},o=(t,e)=>m(t,p(e));import{j as n}from"./iframe-ByKzMmaK.js";import{useMDXComponents as c}from"./index-DeYdrbWI.js";import{M as x,b as j}from"./blocks-Cunk30eN.js";import{S as f}from"./NumericInput.stories-BYdfN8pL.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./ResponsiveWrapper.module-CBt-uAwD.js";import"./NumericInput-Nl3pZZVM.js";import"./Button-Bdkp_iJJ.js";import"./Icon-BZD9s1Z_.js";import"./get-class-name-BY88G7uf.js";import"./Portal-DBIu6jmP.js";import"./use-click-outside-DREiv8zp.js";import"./use-element-ids-CshNHWkw.js";import"./use-key-press-B_vXJT53.js";import"./use-tooltip-position-DVwfAD7L.js";import"./use-container-dimensions-BqWRrAUW.js";import"./ErrorMessage-DztSsQ3-.js";import"./Input-BLKqcVQ-.js";import"./Label-DQdSVFEl.js";import"./use-reset-form-input-DpBZcUfi.js";function a(t){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:f,title:"NumericInput"}),`
`,n.jsx(e.h1,{id:"numericinput",children:"NumericInput"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"NumericInput"})," component is a flexible numeric input field that supports both stateful and stateless modes. It includes spin buttons, validation, and accessibility features."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import NumericInput from 'chop-logic-components';

<NumericInput
  name="quantity"
  label="Quantity"
  defaultValue={1}
  min={1}
  max={10}
  onChange={(event) => console.log(event)}
/>;
`})}),`
`,n.jsx(e.h3,{id:"stateless",children:"Stateless"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is true, the component is fully controlled via the ",n.jsx(e.code,{children:"value"})," prop. You manage state externally and provide all handlers."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import NumericInput from 'chop-logic-components';

const [quantity, setQuantity] = useState(5);

<NumericInput
  name="product-qty"
  label="Quantity"
  stateless
  value={quantity}
  min={1}
  max={50}
  onChange={(event) => setQuantity(Number(event.target.value))}
  onIncrement={() => setQuantity((prev) => prev + 1)}
  onDecrement={() => setQuantity((prev) => prev - 1)}
/>;
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Validation"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide errorMessage when using validation"}),`
`,n.jsx(e.li,{children:"Combine built-in min/max with custom validation when needed"}),`
`,n.jsx(e.li,{children:"Display validation errors clearly"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Value Ranges"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Set sensible defaults for min/max"}),`
`,n.jsx(e.li,{children:"Consider the expected range of values"}),`
`,n.jsx(e.li,{children:"Adjust step size appropriately for the context"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility Notes"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use label prop for clear identification"}),`
`,n.jsx(e.li,{children:"Ensure spin buttons are keyboard accessible"}),`
`,n.jsx(e.li,{children:"Provide meaningful error messages for screen readers"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function z(t={}){const{wrapper:e}=s(s({},c()),t.components);return e?n.jsx(e,o(s({},t),{children:n.jsx(a,s({},t))})):a(t)}export{z as default};
