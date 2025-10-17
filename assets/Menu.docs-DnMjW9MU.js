var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(i,n,s)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,r=(i,n)=>{for(var s in n||(n={}))x.call(n,s)&&o(i,s,n[s]);if(t)for(var s of t(n))u.call(n,s)&&o(i,s,n[s]);return i},c=(i,n)=>h(i,m(n));import{j as e}from"./iframe-BQgxzBO6.js";import{useMDXComponents as d}from"./index-BzM5vXoH.js";import{M as p,b as j}from"./blocks-DA9LG0YA.js";import{M as f}from"./Menu.stories-DbHzfFsP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1-RhH5Y.js";import"./index-D-7EMssw.js";import"./Icon-dWZyNSFh.js";import"./get-class-name-CHDn80c0.js";import"./orientation-mode-DcODxNNT.js";import"./use-click-outside-FSTjnhKO.js";function l(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:f,title:"Menu"}),`
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
      icon: IconName.Home
    },
    {
      id: 'products',
      label: 'Products',
      nestedItems: [
        { id: 'product-1', label: 'Product 1', link: '/products/1' }
      ]
    }
  ];

  return (
    <Menu
      items={menuItems}
      mode={OrientationMode.Horizontal}
      openedOn="hover"
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to navigate through menu items"}),`
`,e.jsx(n.li,{children:"Enter/Space to activate items"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate nested menus"}),`
`,e.jsx(n.li,{children:"Escape to close submenus"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces menu structure"}),`
`,e.jsx(n.li,{children:"Indicates expanded/collapsed state"}),`
`,e.jsx(n.li,{children:"Describes nested relationships"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintains focus within open submenus"}),`
`,e.jsx(n.li,{children:"Returns focus to parent item when closed"}),`
`,e.jsx(n.li,{children:"Visible focus indicators"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Organization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Limit nesting depth (recommend max 2-3 levels)"}),`
`,e.jsx(n.li,{children:"Group related items together"}),`
`,e.jsx(n.li,{children:"Sort items logically"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Interaction"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use hover activation for quick access"}),`
`,e.jsx(n.li,{children:"Use click activation for complex menus"}),`
`,e.jsx(n.li,{children:"Provide visual feedback for active items"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Performance"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Memoize menu items when possible"}),`
`,e.jsx(n.li,{children:"Consider dynamic loading for large menus"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function D(i={}){const{wrapper:n}=r(r({},d()),i.components);return n?e.jsx(n,c(r({},i),{children:e.jsx(l,r({},i))})):l(i)}export{D as default};
