import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as s,af as r}from"./index-BZ-G-mNy.js";import{D as o,a as l}from"./Dialog.stories-CI0TGx0H.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Button--7gU6zvB.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Checkbox-CLF59sww.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-B0wHt5J_.js";import"./MultiSelect-D4Q7nsBa.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import"./Tabs-CmX9zseh.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./index-CeXmpD0I.js";function d(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o,title:"Dialog"}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(n.p,{children:"Dialog component with custom styling and behavior."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:l}),`
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
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Determines if the dialog is open."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"A function that is called when the dialog is closed."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"A string that represents the title of the dialog."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"children"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ReactElement"})}),e.jsxs(n.td,{children:["Contents of the dialog window. Any React component enclosed between tags ",e.jsx(n.code,{children:"<ChopLogicDialog>"})," and ",e.jsx(n.code,{children:"</ChopLogicDialog>"})," will be rendered inside the dialog using ",e.jsx(n.code,{children:"ReactDOM.createPortal"}),"."]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"mode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicAlertMode"})}),e.jsx(n.td,{children:"The visual mode of the alert."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'info'"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicIconName"})}),e.jsx(n.td,{children:"Custom icon that appears in the Alert header."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tabIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"theme"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'light'"})," or ",e.jsx(n.code,{children:"'dark'"})]}),e.jsx(n.td,{children:"The component's color theme."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type ChopLogicDialogProps = CommonComponentProps &
  React.PropsWithChildren & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};
`})})]})}function Y(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{Y as default};
