import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import{ae as i,af as o}from"./index---6MgSDT.js";import{S as l,D as c}from"./Select.stories-D7c4zZFI.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Select-fz0dFz33.js";import"./index-BWBqZFZK.js";import"./Label-C3WErDxN.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./index-DYr8M9Az.js";import"./ArrowUp-D8N8y9PM.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./CheckMark-DH8gl-7Y.js";import"./index-C6NryZZH.js";function s(t){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,title:"Select"}),`
`,e.jsx(n.h1,{id:"choplogicselect",children:"ChopLogicSelect"}),`
`,e.jsx(n.p,{children:"A styled and accessible multiselect component that can be used both inside a form and as standalone controller."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicSelect } from 'chop-logic-components';
import { LANGUAGES } from 'constants/languages';

const Example = () => {
  return <ChopLogicSelect id='example-select' name='laguage' options={LANGUAGES} label='Select your language' />;
};

export default Example;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," ",e.jsx(n.code,{children:"string"})," - A required string representing the name attribute of the Select component, used for form submissions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the label for the Select component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"options"})," ",e.jsx(n.code,{children:"SelectValue[]"})," - An array of objects (each object should conaint two required fields - ",e.jsx(n.code,{children:"id: string"})," and ",e.jsx(n.code,{children:"label: string"}),") representing the options available in the Select dropdown."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the placeholder text when no option is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.code,{children:"(value?: SelectValue) => void"})," - A function that is called when an option is selected. It can be used to handle the selection event."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the Select component is required in a form. When required, a selection must be made before form submission."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the Select should be disabled or not. When disabled, the Select cannot be clicked or interacted with."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some supported global HTML attributes (",e.jsx(n.strong,{children:"id"}),", ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (value?: SelectValue) => void;
  placeholder?: string;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };
`})})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{E as default};
