var a=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var t=(i,n,r)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,o=(i,n)=>{for(var r in n||(n={}))h.call(n,r)&&t(i,r,n[r]);if(s)for(var r of s(n))x.call(n,r)&&t(i,r,n[r]);return i},l=(i,n)=>d(i,p(n));import{j as e}from"./iframe-DJejKD7f.js";import{useMDXComponents as c}from"./index-C1C3GIxM.js";import{M as j,b as u}from"./blocks-BfAV1-Im.js";import{F as f}from"./Form.stories-YJ3ZIIc_.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./Checkbox-BVKt9f7Z.js";import"./Label-DeqzO3mM.js";import"./Icon-CmAPyYs8.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-oKt-zW1Z.js";import"./use-reset-form-input-R2_GGGA6.js";import"./MultiSelect-BVIguuKI.js";import"./use-click-outside-B4LtYmf8.js";import"./use-key-press-BuGfWEGP.js";import"./Option.module-CTReddGl.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-CMMnfld9.js";import"./Button-AHhdSE-N.js";import"./Portal-Da9uriEx.js";import"./use-tooltip-position-s-QEDd_q.js";import"./use-container-dimensions-BqHroBwe.js";import"./ErrorMessage-CQXPHDFV.js";import"./Input-DKgbvssd.js";import"./Select-XyRvik3e.js";import"./Switch-DPdyBCz8.js";import"./TextInput-CpdrICHc.js";import"./Container.module-3iQ-V5w_.js";function m(i){const n=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:f,title:"Form"}),`
`,e.jsx(n.h1,{id:"form",children:"Form"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Form, TextInput } from 'chop-logic-components';

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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Layout"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use appropriate column counts for form complexity"}),`
`,e.jsx(n.li,{children:"Group related fields together"}),`
`,e.jsx(n.li,{children:"Maintain consistent spacing"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Validation"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear error messages"}),`
`,e.jsx(n.li,{children:"Validate on blur and submit"}),`
`,e.jsx(n.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Memoize form components when possible"}),`
`,e.jsx(n.li,{children:"Consider dynamic loading for large forms"}),`
`,e.jsx(n.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure all form controls are keyboard accessible"}),`
`,e.jsx(n.li,{children:"Use ARIA attributes for dynamic content updates"}),`
`,e.jsx(n.li,{children:"Test with screen readers"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function K(i={}){const{wrapper:n}=o(o({},c()),i.components);return n?e.jsx(n,l(o({},i),{children:e.jsx(m,o({},i))})):m(i)}export{K as default};
