import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as s,af as r}from"./index-BvbQ7fbP.js";import{B as c,P as l}from"./Button.stories-CI-O6DMV.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./Button-D-fuWFS8.js";import"./styled-components.browser.esm-BAmCwVtG.js";function o(t){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c,title:"Button"}),`
`,n.jsx(e.h1,{id:"choplogicbutton",children:"ChopLogicButton"}),`
`,n.jsx(e.p,{children:"Styled button component with different view modes and a customizable icon."}),`
`,n.jsx(e.h3,{id:"default-view",children:"Default View"}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicButton, ChopLogicIconName } from 'chop-logic-components';
import { createCopy } from 'utils/copy';

const Example = () => {
  return <ChopLogicButton text='Copy' onCick={createCopy} icon={ChopLogicIconName.Copy} />;
};

export default Example;
`})}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"view"})," - An appearance of the button:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"primary"}),": a default button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secondary"}),": a button in the form of clickable text"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"danger"}),": a button to highlight an important action"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"icon"}),": a button without text, only icon"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"text"})," ",n.jsx(e.code,{children:"string"})," - A string that represents the text content of the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"onClick"})," ",n.jsx(e.code,{children:"MouseEventHandler<HTMLButtonElement> | (() => void)"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element. It could also be a callback without arguments."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"disabled"})," ",n.jsx(e.code,{children:"boolean"})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"type"})," - A button type that can be ",n.jsx(e.code,{children:'"button"'}),", ",n.jsx(e.code,{children:'"submit"'})," or ",n.jsx(e.code,{children:'"reset"'})," (",n.jsx(e.code,{children:'"button"'})," by default)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"icon"})," ",n.jsx(e.code,{children:"ChopLogicIconName"})," - An svg icon from ChopLogicIcon set, which could be inserted before the button text."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"HTMLAttributes"})," - some supported global HTML attributes (",n.jsx(e.strong,{children:"id"}),", ",n.jsx(e.strong,{children:"className"}),", ",n.jsx(e.strong,{children:"title"}),", ",n.jsx(e.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"types",children:"Types"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: ChopLogicIconName;
  text?: string;
  extended?: boolean;
};
`})})]})}function M(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{M as default};
