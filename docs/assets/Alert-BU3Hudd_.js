import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as i,af as o,ag as l}from"./index-U1HBKBoF.js";import{A as d,D as c}from"./Alert.stories-D-5uHfM5.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Button-DcAQNvjF.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./Alert-B1b_-HT6.js";import"./index-__4yWXZr.js";function t(s){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d,title:"Alert"}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicAlert"})," component displays an alert message with various modes such as success, error, warning, and info."]}),`
`,e.jsx(o,{children:e.jsx(l,{of:c})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import ChopLogicAlert from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <>
      <ChopLogicButton onClick={handleOpen}>
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title='Alert Title' message='This is an alert message.' mode='info' />;
    </>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isOpened"})," ",e.jsx(n.code,{children:"boolean"})," - Determines if the alert is open."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onClose"})," ",e.jsx(n.code,{children:"() => void"})," - Function that suppose to close the alert and handle additional logic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"title"})," ",e.jsx(n.code,{children:"string"})," - The title of the alert."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"message"})," ",e.jsx(n.code,{children:"string"})," - The message content of the alert."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"mode"})," ",e.jsx(n.code,{children:"ChopLogicAlertMode"})," - The mode of the alert. Can be success, error, warning, or info."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"icon"})," ",e.jsx(n.code,{children:"ChopLogicIconName"})," - Custom icon that appears in the Alert header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some global HTML attributes (",e.jsx(n.strong,{children:"id"}),", ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Common props"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"className"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"style"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"tabIndex"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
};
`})})]})}function v(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
