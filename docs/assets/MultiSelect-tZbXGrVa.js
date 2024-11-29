import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{ae as r,af as i}from"./index-BZ-G-mNy.js";import{M as l,D as c}from"./MultiSelect.stories-B2MWSGk6.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./MultiSelect-D4Q7nsBa.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-BeH7sH-W.js";import"./index-B0wHt5J_.js";function d(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"MultiSelect"}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(n.p,{children:"A styled and accessible multiselect component that can be used both inside a form and as standalone controller."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:c}),`
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"name"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"A string representing the name attribute of the component, used for form submissions."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"A string that represents the label for the component."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"options"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"SelectValue[]"})}),e.jsxs(n.td,{children:["An array of objects (each object should contain two required fields - ",e.jsx(n.code,{children:"id: string"})," and ",e.jsx(n.code,{children:"label: string"}),") representing the options available in the Select dropdown."]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[]"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onChange"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(values?: SelectValue[]) => void"})}),e.jsx(n.td,{children:"A function that is called when an option is selected. It can be used to handle the selection event."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"placeholder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The placeholder property of the input interface represents a hint to the user of what can be entered in the control."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Not selected'"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"defaultValue"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"string"})," or ",e.jsx(n.code,{children:"number"})," or ",e.jsx(n.code,{children:"readonly string[]"})]}),e.jsx(n.td,{children:"The select option object or an id that will be supplied as the default value of the input."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"When disabled, the input cannot be interacted with."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"required"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"When required, the input must be filled before form submission."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tabIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"theme"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'light'"})," or ",e.jsx(n.code,{children:"'dark'"})]}),e.jsx(n.td,{children:"The component's color theme."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type ChopLogicMultiSelectProps = CommonInputProps & {
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
};

export type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };

export type CommonInputProps = CommonComponentProps & {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};
`})})]})}function v(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{v as default};
