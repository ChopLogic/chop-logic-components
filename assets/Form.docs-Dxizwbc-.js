var a=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var t=(i,n,r)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,s=(i,n)=>{for(var r in n||(n={}))h.call(n,r)&&t(i,r,n[r]);if(o)for(var r of o(n))x.call(n,r)&&t(i,r,n[r]);return i},l=(i,n)=>d(i,p(n));import{j as e}from"./iframe-7UvCaPuN.js";import{useMDXComponents as c}from"./index-DPb6rMrK.js";import{M as j,b as u}from"./blocks-BWlQjjkw.js";import{F as f}from"./Form.stories-CJJBRTLY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPLllSZx.js";import"./index-v4pKKiLL.js";import"./Checkbox-DH2h9KKV.js";import"./CheckboxUncheckedIcon-Bf1ZHiwb.js";import"./Label-DdwZtC2e.js";import"./use-element-ids-D_Vfufc9.js";import"./get-class-name-CHDn80c0.js";import"./use-reset-form-input-Btg9z9zx.js";import"./MultiSelect-Clt6cVWw.js";import"./use-click-outside-DzJRbCA0.js";import"./use-key-press-qUeVx0Z9.js";import"./Option.module-CzGdr06F.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./ArrowUpIcon-OF-xRODv.js";import"./NumericInput-BJ9PfKcN.js";import"./Button-Cq0KCBd2.js";import"./Icon-N1nzqMG0.js";import"./CheckMarkIcon-CSLR1mm-.js";import"./Portal-DHBqON0u.js";import"./use-tooltip-position-DuPrSIO9.js";import"./use-container-dimensions-AWdhRgIR.js";import"./use-window-dimensions-DaS2WVlI.js";import"./ErrorMessage-D2OdP2Zz.js";import"./Input-Shj2bUrA.js";import"./Select-BMopPNlY.js";import"./TextInput-BNSXU7ez.js";import"./Container.module-DIM0iUPi.js";function m(i){const n=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},c()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:f,title:"Form"}),`
`,e.jsx(n.h1,{id:"form",children:"Form"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Form, TextInput } from 'chop-logic-components';

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted with:', values);
  };

  return (
    <Form
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={handleSubmit}
      columns={2}
    >
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
    </Form>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Form Structure"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper form element semantics"}),`
`,e.jsx(n.li,{children:"Field labels associated with inputs"}),`
`,e.jsx(n.li,{children:"Logical tab order"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Validation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clear error messages"}),`
`,e.jsx(n.li,{children:"ARIA attributes for invalid fields"}),`
`,e.jsx(n.li,{children:"Focus management for errors"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab through form fields"}),`
`,e.jsx(n.li,{children:"Enter to submit"}),`
`,e.jsx(n.li,{children:"Escape to reset (when enabled)"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Layout"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use appropriate column counts for form complexity"}),`
`,e.jsx(n.li,{children:"Group related fields together"}),`
`,e.jsx(n.li,{children:"Maintain consistent spacing"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Validation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear error messages"}),`
`,e.jsx(n.li,{children:"Validate on blur and submit"}),`
`,e.jsx(n.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Performance"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Memoize form components when possible"}),`
`,e.jsx(n.li,{children:"Consider dynamic loading for large forms"}),`
`,e.jsx(n.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function Y(i={}){const{wrapper:n}=s(s({},c()),i.components);return n?e.jsx(n,l(s({},i),{children:e.jsx(m,s({},i))})):m(i)}export{Y as default};
