import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as t}from"./index-BrnU7xv7.js";import{ae as r,af as i,ag as l}from"./index---6MgSDT.js";import{A as c,D as d}from"./Alert.stories-jhZ8VBpD.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Button-D-fuWFS8.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./Alert-CjdFzxds.js";import"./index-C6_MqhCY.js";function o(s){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Alert"}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicAlert"})," component displays an alert message with various modes such as success, error, warning, and info."]}),`
`,e.jsx(i,{children:e.jsx(l,{of:d})}),`
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
`})})]})}function N(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{N as default};
