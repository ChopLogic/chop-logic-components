import{j as n}from"./iframe-DdT6Gy5A.js";import{useMDXComponents as o}from"./index-Zwbbbbj6.js";import{M as s,b as t}from"./blocks-DTSYpom4.js";import{C as l}from"./Form.stories-CMi-b2QS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wjq1TnPW.js";import"./index-poB4f_nE.js";import"./Button-CyEX4BRq.js";import"./Header-Ecmg_qcK.js";import"./Icon-BEEWELiN.js";import"./get-class-name-CHDn80c0.js";import"./Loader-DBIFz-Un.js";import"./Portal-DprjtDEU.js";import"./use-click-outside-DwWADBbH.js";import"./use-key-press-DMaNieri.js";import"./use-tooltip-position-i67v7q2H.js";import"./use-container-dimensions-DPN3VXKf.js";import"./use-window-dimensions-nfZvecbJ.js";import"./Checkbox-UVP8yK0P.js";import"./use-reset-form-input-Cs_E2FN7.js";import"./MultiSelect-CHQgDjgE.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DaRsfQsL.js";import"./Select-CqCQGqq9.js";import"./TextInput-D4SV8WA1.js";import"./Alert-CoZiidbo.js";import"./use-is-mounted-De7Oj9Ec.js";import"./Dialog-xS2PZRDy.js";import"./use-modal-focus-trap-Bin2cwO6.js";import"./Tabs-CZ99HbzJ.js";import"./Container.module-B8PmPZGi.js";function r(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"ChopLogicForm"}),`
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
