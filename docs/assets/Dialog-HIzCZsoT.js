import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as r,af as s}from"./index-BvbQ7fbP.js";import{D as l,a as d}from"./Dialog.stories-DAJxmwKb.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Button-D-fuWFS8.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./Checkbox-D-9x5qN4.js";import"./Label-C3WErDxN.js";import"./index-C6NryZZH.js";import"./MultiSelect-DtrJ6l6D.js";import"./index-BWBqZFZK.js";import"./index-DYr8M9Az.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-DgAxqivs.js";import"./InputInnerButton-IecO_TkS.js";import"./Select-fz0dFz33.js";import"./TextInput-CqaYWJKQ.js";import"./Alert-CjdFzxds.js";import"./index-C6_MqhCY.js";import"./Form-pEum1aJA.js";import"./index-Bl1A3jYt.js";import"./Grid-CMfk9Gvl.js";import"./Tabs-xdIbAcDa.js";import"./index-D0HHuAcc.js";import"./index-LBdVPU7m.js";import"./index-ZHRslnvw.js";function t(o){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Dialog"}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(n.p,{children:"Dialog component with custom styling and behavior."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicDialog } from 'chop-logic-components';
import { useState } from 'react';
import { MyModalContent } from 'components';

const Example = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <>
      <button onClick={handleOpen}>Open Dialog</button>
      <ChopLogicDialog isOpened={isOpened} onClose={handleClose} title='Example Dialog'>
        <MyModalContent />
      </ChopLogicDialog>
    </>
  );
};

export default Example;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Required props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isOpened"})," ",e.jsx(n.code,{children:"boolean"})," - A boolean indicating whether the dialog is open."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onClose"})," ",e.jsx(n.code,{children:"() => void"})," - A function that is called when the dialog is closed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"title"})," ",e.jsx(n.code,{children:"string"})," - A string that represents the title of the dialog."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Optional props"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children"})," ",e.jsx(n.code,{children:"ReactElement"})," - Contents of the dialog window. Any React component enclosed between tags ",e.jsx(n.code,{children:"<ChopLogicDialog>"})," and ",e.jsx(n.code,{children:"</ChopLogicDialog>"})," will be rendered inside the dialog using ",e.jsx(n.code,{children:"ReactDOM.createPortal"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTMLAttributes"})," - some global HTML attributes (",e.jsx(n.strong,{children:"id"}),", ",e.jsx(n.strong,{children:"className"}),", ",e.jsx(n.strong,{children:"title"}),", ",e.jsx(n.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicDialogProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };
`})})]})}function B(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{B as default};
