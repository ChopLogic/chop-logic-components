import{j as n}from"./iframe-CcStb-xO.js";import{useMDXComponents as c}from"./index-DRR5r8Q4.js";import{M as s,I as p,c as a,b as h}from"./blocks-B97lg12T.js";import{C as l}from"./Icon.stories-DfxxSld2.js";import"./EditableText-q3k3r0Uc.js";import"./Header-BiTp834B.js";import{C as m,a as d}from"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./get-class-name-CHDn80c0.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Icon"}),`
`,n.jsx(o.h1,{id:"choplogicicon",children:"ChopLogicIcon"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"ChopLogicIcon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,n.jsx(o.h2,{id:"iconography",children:"Iconography"}),`
`,n.jsx(p,{children:Object.entries(m).map(([t,r])=>n.jsx(a,{name:t,children:n.jsx(d,{name:r})},t))}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { ChopLogicIcon, ChopLogicIconName } from 'chop-logic-components';

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
`,n.jsx(h,{})]})}function U(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{U as default};
