var m=Object.defineProperty,a=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var t=(i,n,s)=>n in i?m(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,o=(i,n)=>{for(var s in n||(n={}))x.call(n,s)&&t(i,s,n[s]);if(r)for(var s of r(n))u.call(n,s)&&t(i,s,n[s]);return i},l=(i,n)=>a(i,h(n));import{j as e}from"./iframe-CD-frcvH.js";import{useMDXComponents as d}from"./index-_ZbGk_Ih.js";import{M as p,b as j}from"./blocks-ymH_-mwP.js";import{M as f}from"./Menu.stories-DPyeMoLM.js";import"./preload-helper-BDBacUwf.js";import"./index-C3T1o3xO.js";import"./index-B0E5RUGE.js";import"./Icon-B65JLDHH.js";import"./get-class-name-BY88G7uf.js";import"./orientation-mode-DcODxNNT.js";import"./use-click-outside-Djb0kFGZ.js";function c(i){const n=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:f,title:"Menu"}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Menu"})," component provides an accessible navigation menu with support for both vertical and horizontal orientations, nested items, and flexible interaction modes."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Menu, { OrientationMode } from 'chop-logic-components';

const AppMenu = () => {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      link: '/home',
      icon: IconName.Home,
    },
    {
      id: 'products',
      label: 'Products',
      nestedItems: [{ id: 'product-1', label: 'Product 1', link: '/products/1' }],
    },
  ];

  return <Menu items={menuItems} mode={OrientationMode.Horizontal} openedOn="hover" />;
};
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Organization"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Limit nesting depth (recommend max 2-3 levels)"}),`
`,e.jsx(n.li,{children:"Group related items together"}),`
`,e.jsx(n.li,{children:"Sort items logically"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Interaction"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use hover activation for quick access"}),`
`,e.jsx(n.li,{children:"Use click activation for complex menus"}),`
`,e.jsx(n.li,{children:"Provide visual feedback for active items"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Memoize menu items when possible"}),`
`,e.jsx(n.li,{children:"Consider dynamic loading for large menus"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to navigate through menu items"}),`
`,e.jsx(n.li,{children:"Enter/Space to activate items"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate nested menus"}),`
`,e.jsx(n.li,{children:"Escape to close submenus"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function D(i={}){const{wrapper:n}=o(o({},d()),i.components);return n?e.jsx(n,l(o({},i),{children:e.jsx(c,o({},i))})):c(i)}export{D as default};
