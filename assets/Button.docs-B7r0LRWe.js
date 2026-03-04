import{j as t}from"./iframe-Cr_R5OpT.js";import{useMDXComponents as i}from"./index-B10WuxfI.js";import{M as s,C as r}from"./blocks-B84JAAVv.js";import{B as c}from"./Button.stories-DSn_Qd4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BW0uQFtm.js";import"./index-DXm0ye48.js";import"./Button-B0hPTDhO.js";import"./get-class-name-BY88G7uf.js";import"./Portal-BDvWiF_x.js";import"./use-click-outside-DxG3nd1T.js";import"./use-element-ids-DYPTHbYk.js";import"./use-key-press-dEA5TTHN.js";import"./use-tooltip-position-CtlRpbvE.js";import"./use-container-dimensions-B9Mk7e-n.js";import"./Icon-Cptwj7ai.js";import"./icon-name-DofyCo9k.js";function e(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,title:"Button"}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"Button"})," component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states."]}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import Button, { ButtonView, IconName } from "chop-logic-components";

const ExampleForm = () => (
  <form>
    <Button view={ButtonView.Primary} text="Submit" icon={IconName.Check} onClick={() => console.log("Clicked!")} />
    <Button view={ButtonView.Icon} icon={IconName.Settings} label="Settings" />
  </form>
);
`})}),`
`,t.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,t.jsxs(n.ol,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Accessibility"}),": Always provide a label prop for icon-only buttons to ensure screen reader compatibility."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Visual Hierarchy"}),": Use primary buttons for main actions and secondary buttons for less important actions."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"State Management"}),": Use the disabled state appropriately to prevent user confusion."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Tooltips"}),": Add tooltips for buttons that need additional context, especially icon-only buttons."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Icons"}),": Choose icons that are universally recognizable and match the button's purpose."]}),`
`]}),`
`,t.jsx(n.h2,{id:"props",children:"Props"}),`
`,t.jsx(r,{})]})}function M(o={}){const{wrapper:n}={...i(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{M as default};
