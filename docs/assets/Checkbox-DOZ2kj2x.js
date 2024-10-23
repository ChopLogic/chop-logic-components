import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as t}from"./index-BrnU7xv7.js";import{ae as s,af as r}from"./index---6MgSDT.js";import{C as c,L as l}from"./Checkbox.stories-BIEBqEH-.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Checkbox-D-9x5qN4.js";import"./Label-C3WErDxN.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./index-C6NryZZH.js";function i(o){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,title:"Checkbox"}),`
`,e.jsx(n.h1,{id:"choplogiccheckbox",children:"ChopLogicCheckbox"}),`
`,e.jsx(n.p,{children:"Styled checkbox component with an optional label and floating checkbox icon. Can be used as input for ChopLogicForm."}),`
`,e.jsx(n.h3,{id:"default-view",children:"Default View"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicCheckbox } from 'chop-logic-components';

const Example = () => {
  return (
    <ChopLogicCheckbox
      id='terms-and-conditions-checkbox'
      name='isTermsAccepted'
      label='Accept Terms and Conditions'
      iconPosition='left'
      required
      onChange={(e) => console.log('Checkbox state:', e.target.checked)}
      disabled={false}
    />
  );
};

export default Example;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," ",e.jsx(n.code,{children:"string"})," - A required string representing the name attribute of the Checkbox component, used for form submissions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the label for the Checkbox component."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the checkbox should be disabled. When disabled, the checkbox cannot be interacted with."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the checkbox is required in a form. When required, the checkbox must be checked before form submission."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"defaultChecked"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the checkbox is checked by default or not."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.code,{children:"React.ChangeEventHandler<HTMLInputElement>"})," - A function that is called when the checkbox state changes. It receives a change event."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"noLabel"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the label should be hidden or not. The label prop is still required in this case, because it's used for aria-label attribure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"iconPosition"})," ",e.jsx(n.code,{children:"'left' | 'right'"})," - The place where the checkbox icon will be rendered (left or right)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some supported global HTML attributes (",e.jsx(n.strong,{children:"id"}),", ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"tabIndex"}),", ",e.jsx(n.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
};
`})})]})}function A(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{A as default};
