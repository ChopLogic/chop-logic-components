var d=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(o,n,t)=>n in o?d(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,s=(o,n)=>{for(var t in n||(n={}))x.call(n,t)&&i(o,t,n[t]);if(c)for(var t of c(n))u.call(n,t)&&i(o,t,n[t]);return o},r=(o,n)=>h(o,p(n));import{j as e}from"./iframe-BtTQsrQT.js";import{useMDXComponents as l}from"./index-Ob56quG4.js";import{M as j,I,c as f,b as y}from"./blocks-BNpYbts6.js";import{I as g}from"./Icon.stories-BKQlTg08.js";import{I as b,a as M}from"./Icon-Z7qWIs8D.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./get-class-name-BY88G7uf.js";function a(o){const n=s(s({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},l()),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g,title:"Icon"}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Icon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,e.jsx(n.h2,{id:"iconography",children:"Iconography"}),`
`,e.jsx(I,{children:Object.entries(b).map(([t,m])=>e.jsx(f,{name:t,children:e.jsx(M,{name:m})},t))}),`
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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Basic usage"}),": Use when you need to draw attention to UI elements or when you need to replace a long text description with a clear picture."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(y,{})]})}function G(o={}){const{wrapper:n}=s(s({},l()),o.components);return n?e.jsx(n,r(s({},o),{children:e.jsx(a,s({},o))})):a(o)}export{G as default};
