import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as r,af as o}from"./index-U1HBKBoF.js";import{C as d,L as c}from"./Checkbox.stories-B_1a43Kt.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Checkbox-JFxaaHM8.js";import"./Label-DMJxrDmn.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./index-BmPDt6cU.js";function i(t){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"Checkbox"}),`
`,e.jsx(n.h1,{id:"choplogiccheckbox",children:"ChopLogicCheckbox"}),`
`,e.jsx(n.p,{children:"Styled checkbox component with an optional label and floating checkbox icon. Can be used as input for ChopLogicForm."}),`
`,e.jsx(n.h3,{id:"default-view",children:"Default View"}),`
`,e.jsx(o,{of:c}),`
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
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Common props"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"className"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"style"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"tabIndex"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
};
`})})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
