import{j as n}from"./iframe-CpS3OA71.js";import{useMDXComponents as c}from"./index-CFFJi-da.js";import{M as s,I as a,c as p,b as h}from"./blocks-DsNOP7-Z.js";import{C as m}from"./Icon.stories-C36vx8SQ.js";import"./Header-19ibYWlv.js";import{C as l,a as d}from"./Icon-CL3_h14b.js";import"./Loader-DspC04OJ.js";import"./Portal-B0CI4Q9X.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DI3QCFR2.js";import"./index-BvP6XlTP.js";import"./get-class-name-CHDn80c0.js";import"./use-click-outside-B4IFcKdH.js";import"./use-key-press-DN_NzfdA.js";import"./use-tooltip-position-bGxlgnwH.js";import"./use-container-dimensions-Caekhqnj.js";import"./use-window-dimensions-BvAb_mA6.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:m,title:"Icon"}),`
`,n.jsx(o.h1,{id:"choplogicicon",children:"ChopLogicIcon"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"ChopLogicIcon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,n.jsx(o.h2,{id:"iconography",children:"Iconography"}),`
`,n.jsx(a,{children:Object.entries(l).map(([t,r])=>n.jsx(p,{name:t,children:n.jsx(d,{name:r})},t))}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import { ChopLogicIcon, ChopLogicIconName } from 'chop-logic-components';

const MyButton = () => (
  <button>
    <ChopLogicIcon name={ChopLogicIconName.Delete} />
    <span>Delete</span>
  </button>
);

export default MyButton;
`})}),`
`,n.jsx(o.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"When you need to draw attention to UI elements"}),`
`,n.jsx(o.li,{children:"When you need to replace a long text description with a clear picture"}),`
`]}),`
`,n.jsx(o.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsx(o.p,{children:"When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(h,{})]})}function A(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{A as default};
