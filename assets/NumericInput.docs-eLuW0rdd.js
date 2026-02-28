import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as s}from"./index-Cm-1IS7I.js";import{M as r,C as l}from"./blocks-BtqpkElc.js";import{S as o}from"./NumericInput.stories-_dkIiqmL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                          */import"./NumericInput-DEJXQvg1.js";import"./Button-BkZxBmQE.js";import"./get-class-name-BY88G7uf.js";import"./Portal-GDtD3Swj.js";import"./use-click-outside-yBZhbwYK.js";import"./use-element-ids-BwRwfIW9.js";import"./use-key-press-Qz_3YznQ.js";import"./use-tooltip-position-BNnrnIuP.js";import"./use-container-dimensions-BdWbXCjt.js";import"./Icon-DgdWz_xl.js";import"./ErrorMessage-Bcx3cAYD.js";import"./Input-OJw9X-Ut.js";import"./Label-GsN7KfjG.js";import"./icon-name-DofyCo9k.js";import"./use-reset-form-input-CGOMNfpm.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,title:"NumericInput"}),`
`,e.jsx(n.h1,{id:"numericinput",children:"NumericInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NumericInput"})," component is a flexible numeric input field that supports both stateful and stateless modes. It includes spin buttons, validation, and accessibility features."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import NumericInput from "chop-logic-components";

<NumericInput name="quantity" label="Quantity" defaultValue={1} min={1} max={10} onChange={(event) => console.log(event)} />;
`})}),`
`,e.jsx(n.h3,{id:"stateless",children:"Stateless"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is true, the component is fully controlled via the ",e.jsx(n.code,{children:"value"})," prop. You manage state externally and provide all handlers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import NumericInput from "chop-logic-components";

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
`,e.jsx(l,{})]})}function P(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{P as default};
