import{j as n}from"./iframe--IBuYMIm.js";import{useMDXComponents as o}from"./index-B2uT0Rcg.js";import{M as s,b as t}from"./blocks-CLsIill3.js";import{C as l}from"./Form.stories-BqelXvsx.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Button-BqxMyPGy.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Checkbox-Do2bbQD4.js";import"./use-reset-form-input-D1XtAl5p.js";import"./MultiSelect-nFOyaBs1.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DZkiHKI_.js";import"./Select-CFTdNQer.js";import"./TextInput-CfNjb3Po.js";import"./Alert-l2nOAYr_.js";import"./use-is-mounted-2drd75fE.js";import"./Dialog-C4OBx1r6.js";import"./use-modal-focus-trap-DS7aX025.js";import"./Tabs-DKKc0EDZ.js";import"./Container.module-B8PmPZGi.js";function r(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"ChopLogicForm"}),`
`,n.jsx(e.h1,{id:"choplogicform",children:"ChopLogicForm"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicForm"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicForm, ChopLogicTextInput } from 'chop-logic-components';

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
`,n.jsx(t,{})]})}function z(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{z as default};
