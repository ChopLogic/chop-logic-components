import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as r,af as l}from"./index-BvbQ7fbP.js";import{N as o,D as c}from"./NumericInput.stories-BlortaRf.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./NumericInput-DgAxqivs.js";import"./Label-C3WErDxN.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./InputInnerButton-IecO_TkS.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./index-C6NryZZH.js";function t(i){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,title:"NumericInput"}),`
`,e.jsx(n.h1,{id:"choplogicnumericinput",children:"ChopLogicNumericInput"}),`
`,e.jsx(n.p,{children:"Numeric input component with standard HTML attributes."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { NumericInput } from 'chop-logic-components';

const Example = () => {
  return (
    <ChopLogicNumericInput
      label='Enter your age'
      name='age'
      errorMessage='Enter a number between 1 and 99'
      validator={(age) => !!age && age >= 1 && age < 100}
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
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"id"})," ",e.jsx(n.code,{children:"string"})," - Unique identifier of the input on the page. If not specified, the id will be generated automatically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.code,{children:"boolean"})," - When disabled, the input cannot be interacted with. ",e.jsx(n.code,{children:"false"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"readOnly"})," ",e.jsx(n.code,{children:"boolean"})," - When readonly, the input cannot be changed. ",e.jsx(n.code,{children:"false"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the input is required or not. Required input is marked with a red asterisk. ",e.jsx(n.code,{children:"false"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"hasSpinButtons"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether to display the spin buttons. Defaults to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"validator"})," ",e.jsx(n.code,{children:"(input: string) => boolean"})," - A function that checks whether the input value matches the given conditions. When invalid, the input becomes highlighted and displays an error message."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"errorMessage"})," ",e.jsx(n.code,{children:"string"})," - An optional string that displays when the input value is incorrect."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.code,{children:"(event: React.ChangeEvent<HTMLInputElement>) => void"})," - A function that is called when a user type something in the input. It receives a ChangeEventHandler for handling the event on the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onFocus"})," ",e.jsx(n.code,{children:"(event: React.FocusEvent<HTMLInputElement>) => void"})," - A function that is called when focus is set on the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onBlur"})," ",e.jsx(n.code,{children:"(event: React.FocusEvent<HTMLInputElement>) => void"})," - A function that is called when focus leaves the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onSpinButtonClick"})," ",e.jsx(n.code,{children:"(value?: number) => void"})," - A function that is called when one of the spin buttons is clicked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"step"})," ",e.jsx(n.code,{children:"number"})," - The number by which the input value is incremented/decremented when pressing keyboard keys. ",e.jsx(n.code,{children:"1"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"max"})," ",e.jsx(n.code,{children:"number"})," - Maximum number in the input. ",e.jsx(n.code,{children:"false"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"min"})," ",e.jsx(n.code,{children:"number"})," - Minimum number in the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"defaultValue"})," ",e.jsx(n.code,{children:"number"})," - Initial number in the input. ",e.jsx(n.code,{children:"0"})," by default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - global HTML attributes: ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", ",e.jsx(n.strong,{children:"tabIndex"}),", etc."]}),`
`]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  errorMessage?: string;
  validator?: NumericValidationFunction;
  onClear?: () => void;
  hasSpinButtons?: boolean;
  onSpinButtonClick?: (value?: number) => void;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type NumericValidationFunction = (input?: number) => boolean;
`})})]})}function A(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{A as default};
