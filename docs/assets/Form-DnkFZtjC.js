import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as r,af as s,ag as a}from"./index-BvbQ7fbP.js";import{C as l,D as c}from"./Form.stories-Bqw4WJ5T.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Button-D-fuWFS8.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./Checkbox-D-9x5qN4.js";import"./Label-C3WErDxN.js";import"./index-C6NryZZH.js";import"./MultiSelect-DtrJ6l6D.js";import"./index-BWBqZFZK.js";import"./index-DYr8M9Az.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-DgAxqivs.js";import"./InputInnerButton-IecO_TkS.js";import"./Select-fz0dFz33.js";import"./TextInput-CqaYWJKQ.js";import"./Alert-CjdFzxds.js";import"./index-C6_MqhCY.js";import"./Form-pEum1aJA.js";import"./index-Bl1A3jYt.js";import"./Grid-CMfk9Gvl.js";import"./Tabs-xdIbAcDa.js";import"./index-D0HHuAcc.js";import"./index-LBdVPU7m.js";import"./index-ZHRslnvw.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Form"}),`
`,e.jsx(o.h1,{id:"choplogicform",children:"ChopLogicForm"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"ChopLogicForm"})," component is a wrapper for one or more inputs. It collects values of these inputs, validates them, and passes them to the handler function when the Submit button is clicked. The component works with both Chop Logic inputs and default HTML inputs."]}),`
`,e.jsx(s,{children:e.jsx(a,{of:c})}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicForm, ChopLogicTextInput, ChopLogicNumericInput from 'chop-logic-components';

const INITIAL_VALUES = {
  firstName: 'John',
  lastName: 'Doe',
  age: 42
}

const ExampleComponent = () => (
  <ChopLogicForm initialValues={INITIAL_VALUES} columns={2}>
    <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
    <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
    <ChopLogicNumericInput name='age' id='age' label='Age' />
  </ChopLogicForm>
);

export default ExampleComponent;
`})}),`
`,e.jsx(o.h3,{id:"props",children:"Props"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"children"})," ",e.jsx(o.code,{children:"React.ReactNode"})," - Inputs, buttons, and other elements that will be rendered inside the form."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"columns"})," ",e.jsx(o.code,{children:"number"})," - Number of columns in the form (default is one column)."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"initialValues"})," ",e.jsx(o.code,{children:"ChopLogicFormData"})," - Object with default values for form inputs."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"hasReset"})," ",e.jsx(o.code,{children:"boolean"})," - Boolean value indicating whether the form has the Reset button (true by default)."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"onClickSubmit"})," - ",e.jsx(o.code,{children:"(data: ChopLogicFormData) => void"})," - Function that will be called when the Submit button is clicked. It will receive an object with the current input values ​​as a parameter."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"HTMLAttributes"})," - some global HTML attributes (",e.jsx(o.strong,{children:"id"}),", ",e.jsx(o.strong,{children:"className"}),", ",e.jsx(o.strong,{children:"title"}),", ",e.jsx(o.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(o.h3,{id:"types",children:"Types"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
  };
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`type ChopLogicFormData = { [key: string]: unknown };
`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};
`})})]})}function q(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{q as default};
