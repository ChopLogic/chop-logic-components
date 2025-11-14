var a=Object.defineProperty,d=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var t=(i,e,r)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,s=(i,e)=>{for(var r in e||(e={}))p.call(e,r)&&t(i,r,e[r]);if(o)for(var r of o(e))x.call(e,r)&&t(i,r,e[r]);return i},l=(i,e)=>d(i,h(e));import{j as n}from"./iframe-31bCIIM-.js";import{useMDXComponents as c}from"./index-vnX_0a_R.js";import{M as j,b as u}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{F as f}from"./Form.stories-DnkSo7Rt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./Checkbox-DkS9k-aN.js";import"./Label-CUYPr4eH.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-1s10h2JT.js";import"./use-reset-form-input-BCncBi71.js";import"./MultiSelect-D1ckKOZY.js";import"./use-click-outside-CQLMYb8q.js";import"./use-key-press-CntNC4so.js";import"./Option.module-BDqhWEs6.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-pv7xly4W.js";import"./Button-CXfa96Wd.js";import"./Portal-CMw-vLpD.js";import"./use-tooltip-position-CVK-av31.js";import"./use-container-dimensions-DQi1v_pT.js";import"./ErrorMessage-BRRNjNnd.js";import"./Input-C0t7afCd.js";import"./Select-CXHKa2UQ.js";import"./Switch-d0YGm-Ch.js";import"./TextInput-CoVji25y.js";import"./Container.module-rjw_d_sC.js";function m(i){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f,title:"Form"}),`
`,n.jsx(e.h1,{id:"form",children:"Form"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Form"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Form, TextInput } from 'chop-logic-components';

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted with:', values);
  };

  return (
    <Form initialValues={{ firstName: '', lastName: '' }} onSubmit={handleSubmit}>
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
    </Form>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Form Structure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper form element semantics"}),`
`,n.jsx(e.li,{children:"Field labels associated with inputs"}),`
`,n.jsx(e.li,{children:"Logical tab order"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Validation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear error messages"}),`
`,n.jsx(e.li,{children:"ARIA attributes for invalid fields"}),`
`,n.jsx(e.li,{children:"Focus management for errors"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab through form fields"}),`
`,n.jsx(e.li,{children:"Enter to submit"}),`
`,n.jsx(e.li,{children:"Escape to reset (when enabled)"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Layout"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use appropriate column counts for form complexity"}),`
`,n.jsx(e.li,{children:"Group related fields together"}),`
`,n.jsx(e.li,{children:"Maintain consistent spacing"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Validation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear error messages"}),`
`,n.jsx(e.li,{children:"Validate on blur and submit"}),`
`,n.jsx(e.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Memoize form components when possible"}),`
`,n.jsx(e.li,{children:"Consider dynamic loading for large forms"}),`
`,n.jsx(e.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function J(i={}){const{wrapper:e}=s(s({},c()),i.components);return e?n.jsx(e,l(s({},i),{children:n.jsx(m,s({},i))})):m(i)}export{J as default};
