import{j as i}from"./iframe-CcStb-xO.js";import{useMDXComponents as o}from"./index-DRR5r8Q4.js";import{M as s,b as t}from"./blocks-B97lg12T.js";import{C as l}from"./Form.stories-CYVkMKqf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";import"./Alert-tdHplwZJ.js";import"./use-is-mounted-B3mWglcN.js";import"./Dialog-BLVfCpud.js";import"./use-modal-focus-trap-By3LHFgu.js";import"./Tabs-CcgrSf0X.js";import"./Container.module-DIM0iUPi.js";function r(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:l,title:"ChopLogicForm"}),`
`,i.jsx(n.h1,{id:"choplogicform",children:"ChopLogicForm"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"ChopLogicForm"})," component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities."]}),`
`,i.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicForm, ChopLogicTextInput } from 'chop-logic-components';

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
`,i.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Form Structure"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Proper form element semantics"}),`
`,i.jsx(n.li,{children:"Field labels associated with inputs"}),`
`,i.jsx(n.li,{children:"Logical tab order"}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Validation"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Clear error messages"}),`
`,i.jsx(n.li,{children:"ARIA attributes for invalid fields"}),`
`,i.jsx(n.li,{children:"Focus management for errors"}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Tab through form fields"}),`
`,i.jsx(n.li,{children:"Enter to submit"}),`
`,i.jsx(n.li,{children:"Escape to reset (when enabled)"}),`
`]}),`
`,i.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Layout"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Use appropriate column counts for form complexity"}),`
`,i.jsx(n.li,{children:"Group related fields together"}),`
`,i.jsx(n.li,{children:"Maintain consistent spacing"}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Validation"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Provide clear error messages"}),`
`,i.jsx(n.li,{children:"Validate on blur and submit"}),`
`,i.jsx(n.li,{children:"Consider real-time validation for complex forms"}),`
`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.em,{children:"Performance"}),":"]}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Memoize form components when possible"}),`
`,i.jsx(n.li,{children:"Consider dynamic loading for large forms"}),`
`,i.jsx(n.li,{children:"Optimize re-renders with controlled components"}),`
`]}),`
`,i.jsx(n.h2,{id:"props",children:"Props"}),`
`,i.jsx(t,{})]})}function B(e={}){const{wrapper:n}={...o(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(r,{...e})}):r(e)}export{B as default};
