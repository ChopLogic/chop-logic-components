import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as r,af as l}from"./index-U1HBKBoF.js";import{T as d,D as o}from"./TextInput.stories-B1gHFGs-.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./TextInput-Bjvl9Law.js";import"./Label-DMJxrDmn.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./InputInnerButton-B1gY2cZq.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./index-BmPDt6cU.js";function i(t){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"TextInput"}),`
`,e.jsx(n.h1,{id:"choplogictextinput",children:"ChopLogicTextInput"}),`
`,e.jsx(n.p,{children:"Styled component for entering text, email or password. Supports validation with custom error message and all standard HTML input attributes."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextInput } from 'chop-logic-components';

const Example = () => {
  return (
    <ChopLogicTextInput
      label='Enter the formula:'
      name='formula'
      errorMessage='Only latin letters are allowed'
      validator={{ regexp: '^[A-Za-z ]+$' }}
      required
    />;
  );
};

export default Example;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," ",e.jsx(n.code,{children:"string"})," - A string that describes the input for internal use inside a form or another container. Use ",e.jsx(n.code,{children:"camelCase"})," for the input name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," ",e.jsx(n.code,{children:"string"})," - A visible label that describes the input purpose. Any string is acceptable."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"})," ",e.jsx(n.code,{children:"'text' | 'email' | 'password'"}),' - Input type. Default is "text".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"id"})," ",e.jsx(n.code,{children:"string"})," - Unique identifier of the input on the page. If not specified, the id will be generated automatically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," ",e.jsx(n.code,{children:"string"})," - A placeholder text inside the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.code,{children:"boolean"})," - When disabled, the input cannot be interacted with. Defaults to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"readOnly"})," ",e.jsx(n.code,{children:"boolean"})," - When readonly, the input cannot be changed. Defaults to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the input is required or not. Required input is marked with a red asterisk. Defaults to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"clearable"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether to display the input clear button. Defaults to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"validator"})," ",e.jsx(n.code,{children:"(input: string) => boolean | { regexp: string; flags?: string; }"})," - A function or object with a validation regular expression that checks whether the input value matches the given conditions. When invalid, the input becomes highlighted and displays an error message."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"errorMessage"})," - An optional string that displays when the input value is incorrect."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.code,{children:"(event: React.ChangeEvent<HTMLInputElement>) => void"})," - A function that is called when a user type something in the input. It receives a ChangeEventHandler for handling the event on the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFocus"})," ",e.jsx(n.code,{children:"(event: React.FocusEvent<HTMLInputElement>) => void"})," - A function that is called when focus is set on the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onBlur"})," ",e.jsx(n.code,{children:"(event: React.FocusEvent<HTMLInputElement>) => void"})," - A function that is called when focus leaves the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onClear"})," ",e.jsx(n.code,{children:"() => void"})," - A function that is called when the input value is cleared using the Clear button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"maxLength"})," ",e.jsx(n.code,{children:"number"})," - Maximum number of characters in the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"autoComplete"})," ",e.jsx(n.code,{children:"string"})," - The ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"HTML autocomplete attribute"}),". Defaults to ",e.jsx(n.code,{children:'"off"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - global HTML attributes: ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", ",e.jsx(n.strong,{children:"tabIndex"}),", etc."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Common props"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"className"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"style"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"tabIndex"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  errorMessage?: string;
  clearable?: boolean;
  onClear?: () => void;
  type?: 'text' | 'email' | 'password';
  validator?: RegExpWithFlags | TextValidationFunction;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type RegExpWithFlags = {
  regexp: string;
  flags?: string;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type TextValidationFunction = (input: string) => boolean;
`})})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
