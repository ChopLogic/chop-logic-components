import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as o,af as d,ag as s}from"./index-U1HBKBoF.js";import{C as c,D as l}from"./Form.stories-ByuU29nD.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Button-DcAQNvjF.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./Checkbox-JFxaaHM8.js";import"./Label-DMJxrDmn.js";import"./index-BmPDt6cU.js";import"./MultiSelect-LXjQdkmx.js";import"./index-C-Id0D3c.js";import"./index-l8NP1wY-.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-Bx1xTCKd.js";import"./InputInnerButton-B1gY2cZq.js";import"./Select-BnzA_1qj.js";import"./TextInput-Bjvl9Law.js";import"./Alert-B1b_-HT6.js";import"./index-__4yWXZr.js";import"./Form-HjYFzcgi.js";import"./index-N0pUs06T.js";import"./Grid-D5PTnHDE.js";import"./Tabs-zwz-kKGJ.js";import"./index-LntHzZw0.js";import"./index-y6HsRCss.js";import"./index-H_q29W0p.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,title:"Form"}),`
`,e.jsx(t.h1,{id:"choplogicform",children:"ChopLogicForm"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ChopLogicForm"})," component is a wrapper for one or more inputs. It collects values of these inputs, validates them, and passes them to the handler function when the Submit button is clicked. The component works with both Chop Logic inputs and default HTML inputs."]}),`
`,e.jsx(d,{children:e.jsx(s,{of:l})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React from 'react';
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
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"children"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ReactNode"})}),e.jsx(t.td,{children:"Inputs, buttons, and other elements that will be rendered inside the form."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"columns"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"Number of columns in the form."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"1"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"initialValues"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicFormData"})}),e.jsx(t.td,{children:"Object with default values for form inputs."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"hasReset"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"Indicator of whether the form has the Reset button"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"true"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"onClickSubmit"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(data: ChopLogicFormData) => void"})}),e.jsx(t.td,{children:"Function that will be called when the Submit button is clicked. It will receive an object with the current input values as a parameter."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"id"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"className"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"style"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabIndex"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"title"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicFormProps = PropsWithChildren &
  CommonComponentProps & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
    onReset?: React.FormEventHandler<HTMLFormElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
  };

type ChopLogicFormData = { [key: string]: unknown };

type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};
`})})]})}function B(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};
