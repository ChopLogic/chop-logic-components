import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as i,af as r}from"./index-U1HBKBoF.js";import{M as d,D as c}from"./MultiSelect.stories-peuDxxyT.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./MultiSelect-LXjQdkmx.js";import"./index-C-Id0D3c.js";import"./Label-DMJxrDmn.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./index-l8NP1wY-.js";import"./ArrowUp-DL-hDc0c.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./index-BmPDt6cU.js";function s(t){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d,title:"MultiSelect"}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(n.p,{children:"A styled and accessible multiselect component that can be used both inside a form and as standalone controller."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicMultiSelect } from 'chop-logic-components';
import { LANGUAGES } from 'constants/languages';

const Example = () => {
  return (
    <ChopLogicMultiSelect
      id='example-multiselect'
      name='languages'
      label='Select Languages'
      options={LANGUAGES}
      placeholder='Select languages'
      required={true}
      disabled={false}
    />
  );
};

export default Example;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," ",e.jsx(n.code,{children:"string"})," - A required string representing the name attribute of the MultiSelect component, used for form submissions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the label for the MultiSelect component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"options"})," ",e.jsx(n.code,{children:"SelectValue[]"})," - An array of objects representing the options available in the MultiSelect dropdown. Each object should have ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"label"}),", and ",e.jsx(n.code,{children:"selected"})," properties."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the placeholder text when no option is selected. Default is 'Not selected'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the MultiSelect component is required in a form. When required, a selection must be made before form submission."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the MultiSelect component should be disabled. When disabled, the component cannot be interacted with."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," ",e.jsx(n.code,{children:"(values?: SelectValue[]) => void"})," - A function that is called when an option is selected. It can be used to handle the selection event."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some supported global HTML attributes (",e.jsx(n.strong,{children:"id"}),", ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Common props"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"className"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"style"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"tabIndex"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type MultiSelectValue = SelectValue & { selected: boolean };
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  placeholder?: string;
};
`})})]})}function D(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{D as default};
