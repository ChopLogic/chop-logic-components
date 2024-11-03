import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as s,af as r}from"./index-U1HBKBoF.js";import{B as d,P as c}from"./Button.stories-8OdkOs4g.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./Button-DcAQNvjF.js";import"./styled-components.browser.esm-2v_QRtKj.js";function i(n){const t={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d,title:"Button"}),`
`,e.jsx(t.h1,{id:"choplogicbutton",children:"ChopLogicButton"}),`
`,e.jsx(t.p,{children:"Styled button component with different view modes and a customizable icon."}),`
`,e.jsx(t.h3,{id:"default-view",children:"Default View"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ChopLogicButton, ChopLogicIconName } from 'chop-logic-components';
import { createCopy } from 'utils/copy';

const Example = () => {
  return <ChopLogicButton text='Copy' onCick={createCopy} icon={ChopLogicIconName.Copy} />;
};

export default Example;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"view"})," - An appearance of the button:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"primary"}),": a default button"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"secondary"}),": a button in the form of clickable text"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"danger"}),": a button to highlight an important action"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"icon"}),": a button without text, only icon"]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"text"})," ",e.jsx(t.code,{children:"string"})," - A string that represents the text content of the button."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"onClick"})," ",e.jsx(t.code,{children:"MouseEventHandler<HTMLButtonElement> | (() => void)"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element. It could also be a callback without arguments."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"disabled"})," ",e.jsx(t.code,{children:"boolean"})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"type"})," - A button type that can be ",e.jsx(t.code,{children:'"button"'}),", ",e.jsx(t.code,{children:'"submit"'})," or ",e.jsx(t.code,{children:'"reset"'})," (",e.jsx(t.code,{children:'"button"'})," by default)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"icon"})," ",e.jsx(t.code,{children:"ChopLogicIconName"})," - An svg icon from ChopLogicIcon set, which could be inserted before the button text."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"HTMLAttributes"})," - some supported global HTML attributes (",e.jsx(t.strong,{children:"id"}),", ",e.jsx(t.strong,{children:"className"}),", ",e.jsx(t.strong,{children:"title"}),", ",e.jsx(t.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Common props"})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"id"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"className"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"style"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"tabIndex"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
};
`})})]})}function B(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};
