import{j as n}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as o}from"./index-C9KoPMn0.js";import{M as s,b as t}from"./blocks-QN0Lq6G6.js";import{C as l}from"./Form.stories-D_N09enI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Button-Beo9UBTU.js";import"./Header-CSxk79h1.js";import"./Icon-BhaWZDu4.js";import"./get-class-name-CHDn80c0.js";import"./Loader-CbQUfs1L.js";import"./Portal-BvJ0_6BA.js";import"./use-click-outside-CCfvGGcE.js";import"./use-key-press-BipOIjs9.js";import"./use-tooltip-position-Bo0oDeW_.js";import"./use-container-dimensions-CK3iJYmt.js";import"./use-window-dimensions-CXgdx2fM.js";import"./Checkbox-B3oaHqII.js";import"./use-reset-form-input-KFMp1UJi.js";import"./MultiSelect-BSeV9oRK.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-BK_dM8sf.js";import"./Select-tyqI0LNu.js";import"./TextInput-Ym5_0I8V.js";import"./Alert-9Dq2KxLl.js";import"./use-is-mounted-DaLmmxHE.js";import"./Dialog-Bp2ifwxi.js";import"./use-modal-focus-trap-DVSwFbEv.js";import"./Tabs-Db3qM02f.js";import"./Container.module-B8PmPZGi.js";function r(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"ChopLogicForm"}),`
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
