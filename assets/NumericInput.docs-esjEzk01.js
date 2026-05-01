import{n as e}from"./chunk-DnJy8xQt.js";import{n as t}from"./iframe-y9k1Z_t0.js";import{r as n}from"./react-fJPLJOvc.js";import{a as r,d as i,u as a}from"./blocks-E9PD1hbZ.js";import{t as o}from"./mdx-react-shim-BZHZOuC3.js";import{n as s,t as c}from"./NumericInput.stories-C6pCrnIk.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`NumericInput`}),`
`,(0,d.jsx)(t.h1,{id:`numericinput`,children:`NumericInput`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`NumericInput`}),` component is a flexible numeric input field that supports both stateful and stateless modes. It includes spin buttons, validation, and accessibility features.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`stateful-default`,children:`Stateful (Default)`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import NumericInput from "chop-logic-components";

<NumericInput name="quantity" label="Quantity" defaultValue={1} min={1} max={10} onChange={(event) => console.log(event)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`stateless`,children:`Stateless`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is true, the component is fully controlled via the `,(0,d.jsx)(t.code,{children:`value`}),` prop. You manage state externally and provide all handlers.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import NumericInput from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Validation`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Always provide errorMessage when using validation`}),`
`,(0,d.jsx)(t.li,{children:`Combine built-in min/max with custom validation when needed`}),`
`,(0,d.jsx)(t.li,{children:`Display validation errors clearly`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Value Ranges`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Set sensible defaults for min/max`}),`
`,(0,d.jsx)(t.li,{children:`Consider the expected range of values`}),`
`,(0,d.jsx)(t.li,{children:`Adjust step size appropriately for the context`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility Notes`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use label prop for clear identification`}),`
`,(0,d.jsx)(t.li,{children:`Ensure spin buttons are keyboard accessible`}),`
`,(0,d.jsx)(t.li,{children:`Provide meaningful error messages for screen readers`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};