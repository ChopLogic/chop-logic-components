var a=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var t=(i,n,r)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r,o=(i,n)=>{for(var r in n||(n={}))h.call(n,r)&&t(i,r,n[r]);if(s)for(var r of s(n))x.call(n,r)&&t(i,r,n[r]);return i},l=(i,n)=>d(i,p(n));import{j as e}from"./iframe-CD-frcvH.js";import{useMDXComponents as c}from"./index-_ZbGk_Ih.js";import{M as j,b as u}from"./blocks-ymH_-mwP.js";import{F as f}from"./Form.stories-_QRQ_4At.js";import"./preload-helper-BDBacUwf.js";import"./index-C3T1o3xO.js";import"./index-B0E5RUGE.js";import"./Checkbox-Cuozax86.js";import"./Label-ByMmsEMn.js";import"./Icon-B65JLDHH.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-wl8PXiJz.js";import"./use-reset-form-input-BnHQOTg2.js";import"./MultiSelect-D5thdjeD.js";import"./use-click-outside-Djb0kFGZ.js";import"./use-key-press-Bh2qczgO.js";import"./Option.module-CTReddGl.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-yMjHru7G.js";import"./Button-DDUA5BZI.js";import"./Portal-BIM2YJ8v.js";import"./use-tooltip-position-CrP_wmZe.js";import"./use-container-dimensions-V4xUCHit.js";import"./ErrorMessage-BdcIUYTL.js";import"./Input-CLTTdF8j.js";import"./Select-Cp9vwUUT.js";import"./Switch-BUacY7jk.js";import"./TextInput-xi_x311D.js";import"./Container.module-3iQ-V5w_.js";function m(i){const n=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:f,title:"Form"}),`
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
