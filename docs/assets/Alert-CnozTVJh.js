import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{ae as r,af as i,ag as o}from"./index-BZ-G-mNy.js";import{A as l,D as c}from"./Alert.stories-BLc0HVOv.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Button--7gU6zvB.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Checkbox-CLF59sww.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-B0wHt5J_.js";import"./MultiSelect-D4Q7nsBa.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import"./Tabs-CmX9zseh.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./index-CeXmpD0I.js";function d(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Alert"}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicAlert"})," component displays an alert message with various modes such as success, error, warning, and info."]}),`
`,e.jsx(i,{children:e.jsx(o,{of:c})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { ChopLogicAlert, ChopLogicButton } from 'chop-logic-components';

export const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <>
      <ChopLogicButton onClick={handleOpen}>
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title='Alert Title' message='This is an alert message.' mode='info' />;
    </>
  )
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Determines if the alert is open."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"Function that suppose to close the alert and handle additional logic."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"message"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"The message content of the alert."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title of the alert."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"mode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicAlertMode"})}),e.jsx(n.td,{children:"The visual mode of the alert."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'info'"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicIconName"})}),e.jsx(n.td,{children:"Custom icon that appears in the Alert header."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tabIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"theme"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'light'"})," or ",e.jsx(n.code,{children:"'dark'"})]}),e.jsx(n.td,{children:"The component's color theme."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type ChopLogicAlertProps = CommonComponentProps & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
};

export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};
`})})]})}function q(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{q as default};
