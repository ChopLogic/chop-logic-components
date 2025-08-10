import{j as n}from"./iframe-CpS3OA71.js";import{useMDXComponents as o}from"./index-CFFJi-da.js";import{M as s,b as t}from"./blocks-DsNOP7-Z.js";import{C as l}from"./Form.stories-BRQrhDB5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DI3QCFR2.js";import"./index-BvP6XlTP.js";import"./Button-WGiVFoYy.js";import"./Header-19ibYWlv.js";import"./Icon-CL3_h14b.js";import"./get-class-name-CHDn80c0.js";import"./Loader-DspC04OJ.js";import"./Portal-B0CI4Q9X.js";import"./use-click-outside-B4IFcKdH.js";import"./use-key-press-DN_NzfdA.js";import"./use-tooltip-position-bGxlgnwH.js";import"./use-container-dimensions-Caekhqnj.js";import"./use-window-dimensions-BvAb_mA6.js";import"./Checkbox-D9aEDDoB.js";import"./use-reset-form-input-DTTskSWE.js";import"./MultiSelect-D5DRSXqv.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-s1UZKiJ4.js";import"./Select-D_fyW-Hv.js";import"./TextInput-lP0tmycg.js";import"./Alert-BfYeklhf.js";import"./use-is-mounted-BDVYKU_G.js";import"./Dialog-BQWKidlb.js";import"./use-modal-focus-trap-lzjNUN3o.js";import"./Tabs-BxVwngKf.js";import"./Container.module-B8PmPZGi.js";function r(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"ChopLogicForm"}),`
`,n.jsx(i.h1,{id:"choplogicform",children:"ChopLogicForm"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"ChopLogicForm"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,n.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { ChopLogicForm, ChopLogicTextInput } from 'chop-logic-components';

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted with:', values);
  };

  return (
    <ChopLogicForm
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={handleSubmit}
      columns={2}
    >
      <ChopLogicTextInput name="firstName" label="First Name" />
      <ChopLogicTextInput name="lastName" label="Last Name" />
    </ChopLogicForm>
  );
};
`})}),`
`,n.jsx(i.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Form Structure"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Proper form element semantics"}),`
`,n.jsx(i.li,{children:"Field labels associated with inputs"}),`
`,n.jsx(i.li,{children:"Logical tab order"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Validation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Clear error messages"}),`
`,n.jsx(i.li,{children:"ARIA attributes for invalid fields"}),`
`,n.jsx(i.li,{children:"Focus management for errors"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tab through form fields"}),`
`,n.jsx(i.li,{children:"Enter to submit"}),`
`,n.jsx(i.li,{children:"Escape to reset (when enabled)"}),`
`]}),`
`,n.jsx(i.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Layout"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Use appropriate column counts for form complexity"}),`
`,n.jsx(i.li,{children:"Group related fields together"}),`
`,n.jsx(i.li,{children:"Maintain consistent spacing"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Validation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Provide clear error messages"}),`
`,n.jsx(i.li,{children:"Validate on blur and submit"}),`
`,n.jsx(i.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.em,{children:"Performance"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Memoize form components when possible"}),`
`,n.jsx(i.li,{children:"Consider dynamic loading for large forms"}),`
`,n.jsx(i.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{})]})}function R(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{R as default};
