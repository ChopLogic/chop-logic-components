import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as c,I as a,a as l,C as m}from"./blocks-BtqpkElc.js";import{I as d}from"./Icon.stories-C0ckEk03.js";import{I as h,E as p}from"./Icon-DgdWz_xl.js";import{I as x}from"./icon-name-DofyCo9k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./get-class-name-BY88G7uf.js";function s(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d,title:"Icon"}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Icon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,e.jsx(n.h2,{id:"iconography",children:"Iconography"}),`
`,e.jsx(a,{children:Object.entries(x).map(([t,r])=>e.jsx(l,{name:t,children:e.jsx(h,{name:r,size:p.Small})},t))}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon, IconName } from "chop-logic-components";

const MyButton = () => (
  <button>
    <Icon name={IconName.Delete} />
    <span>Delete</span>
  </button>
);

export default MyButton;
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Basic usage"}),": Use when you need to draw attention to UI elements or when you need to replace a long text description with a clear picture."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(m,{})]})}function D(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{D as default};
