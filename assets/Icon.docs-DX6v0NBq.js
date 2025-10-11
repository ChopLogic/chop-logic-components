var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(o,n,t)=>n in o?d(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,s=(o,n)=>{for(var t in n||(n={}))u.call(n,t)&&c(o,t,n[t]);if(i)for(var t of i(n))x.call(n,t)&&c(o,t,n[t]);return o},r=(o,n)=>m(o,p(n));import{j as e}from"./iframe-DGLPjSHb.js";import{useMDXComponents as l}from"./index-_AjrTGOE.js";import{M as j,I,c as y,b as f}from"./blocks-C-t3sszW.js";import{I as g}from"./Icon.stories-DshLR26r.js";import{I as b,a as M}from"./Icon-Coy0pRmj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./get-class-name-CHDn80c0.js";function a(o){const n=s(s({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},l()),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g,title:"Icon"}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Icon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,e.jsx(n.h2,{id:"iconography",children:"Iconography"}),`
`,e.jsx(I,{children:Object.entries(b).map(([t,h])=>e.jsx(y,{name:t,children:e.jsx(M,{name:h})},t))}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon, IconName } from 'chop-logic-components';

const MyButton = () => (
  <button>
    <Icon name={IconName.Delete} />
    <span>Delete</span>
  </button>
);

export default MyButton;
`})}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you need to draw attention to UI elements"}),`
`,e.jsx(n.li,{children:"When you need to replace a long text description with a clear picture"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsx(n.p,{children:"When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(f,{})]})}function B(o={}){const{wrapper:n}=s(s({},l()),o.components);return n?e.jsx(n,r(s({},o),{children:e.jsx(a,s({},o))})):a(o)}export{B as default};
