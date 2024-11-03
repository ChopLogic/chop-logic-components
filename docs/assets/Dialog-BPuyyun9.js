import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as o,af as r}from"./index-U1HBKBoF.js";import{D as l,a as d}from"./Dialog.stories-BrI5KA9Z.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Button-DcAQNvjF.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./Checkbox-JFxaaHM8.js";import"./Label-DMJxrDmn.js";import"./index-BmPDt6cU.js";import"./MultiSelect-LXjQdkmx.js";import"./index-C-Id0D3c.js";import"./index-l8NP1wY-.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-Bx1xTCKd.js";import"./InputInnerButton-B1gY2cZq.js";import"./Select-BnzA_1qj.js";import"./TextInput-Bjvl9Law.js";import"./Alert-B1b_-HT6.js";import"./index-__4yWXZr.js";import"./Form-HjYFzcgi.js";import"./index-N0pUs06T.js";import"./Grid-D5PTnHDE.js";import"./Tabs-zwz-kKGJ.js";import"./index-LntHzZw0.js";import"./index-y6HsRCss.js";import"./index-H_q29W0p.js";function i(t){const n={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l,title:"Dialog"}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(n.p,{children:"Dialog component with custom styling and behavior."}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:d}),`
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
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Common props"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"id"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"className"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"style"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"React.CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"tabIndex"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"title"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ChopLogicDialogProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };
`})})]})}function G(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{G as default};
