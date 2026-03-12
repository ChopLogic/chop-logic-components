import{j as n}from"./iframe-DHlMv9Tc.js";import{useMDXComponents as o}from"./index-BqecgOTU.js";import{M as s,C as t}from"./blocks-D3a6jSQd.js";import{F as l}from"./Form.stories-0tAQ7FA2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpcMOijH.js";import"./index-BP-SDP9M.js";/* empty css                  */import"./Checkbox-DuQ_f77P.js";import"./Label-BU6pE_Lm.js";import"./Icon-DHzzuffB.js";import"./get-class-name-BY88G7uf.js";import"./icon-name-DofyCo9k.js";import"./use-element-ids-DuOcQN8u.js";import"./use-reset-form-input-CTeeaRXz.js";import"./MultiSelect-CrBLW1Kj.js";import"./use-click-outside-BrKrEeqm.js";import"./use-key-press-C0cMd3kg.js";import"./Option-CTSW_nAD.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-BUzp7db7.js";import"./Button-DwDct2oW.js";import"./Portal-C_jS3wZ5.js";import"./use-tooltip-position-DvTv2x4r.js";import"./use-container-dimensions-537msbIN.js";import"./ErrorMessage-DRSAqEPB.js";import"./Input-BK8JqYvn.js";import"./Select-DrULHCuM.js";import"./Switch-C7zrAo2e.js";import"./TextInput-BtilTTK2.js";function r(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Form"}),`
`,n.jsx(e.h1,{id:"form",children:"Form"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Form"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Form, TextInput } from "chop-logic-components";

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted with:", values);
  };

  return (
    <Form initialValues={{ firstName: "", lastName: "" }} onSubmit={handleSubmit}>
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
    </Form>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Layout"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use appropriate column counts for form complexity"}),`
`,n.jsx(e.li,{children:"Group related fields together"}),`
`,n.jsx(e.li,{children:"Maintain consistent spacing"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Validation"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear error messages"}),`
`,n.jsx(e.li,{children:"Validate on blur and submit"}),`
`,n.jsx(e.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Memoize form components when possible"}),`
`,n.jsx(e.li,{children:"Consider dynamic loading for large forms"}),`
`,n.jsx(e.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure all form controls are keyboard accessible"}),`
`,n.jsx(e.li,{children:"Use ARIA attributes for dynamic content updates"}),`
`,n.jsx(e.li,{children:"Test with screen readers"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{})]})}function E(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{E as default};
