import{j as n}from"./iframe-Doc73XE3.js";import{useMDXComponents as o}from"./index-BeVWJvHh.js";import{M as r,C as t}from"./blocks-B9t17XrR.js";import{M as l}from"./Menu.stories-4AoUxHA1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./icon-name-DofyCo9k.js";import"./orientation-mode-DcODxNNT.js";import"./get-class-name-BY88G7uf.js";import"./Icon-DTjVTp_9.js";import"./use-click-outside-B0EspTvx.js";function s(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l,title:"Menu"}),`
`,n.jsx(e.h1,{id:"menu",children:"Menu"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Menu"})," component provides an accessible navigation menu with support for both vertical and horizontal orientations, nested items, and flexible interaction modes."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Menu, { OrientationMode } from "chop-logic-components";

const AppMenu = () => {
  const menuItems = [
    {
      id: "home",
      label: "Home",
      link: "/home",
      icon: IconName.Home,
    },
    {
      id: "products",
      label: "Products",
      nestedItems: [{ id: "product-1", label: "Product 1", link: "/products/1" }],
    },
  ];

  return <Menu items={menuItems} mode={OrientationMode.Horizontal} openedOn="hover" />;
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Organization"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Limit nesting depth (recommend max 2-3 levels)"}),`
`,n.jsx(e.li,{children:"Group related items together"}),`
`,n.jsx(e.li,{children:"Sort items logically"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Interaction"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use hover activation for quick access"}),`
`,n.jsx(e.li,{children:"Use click activation for complex menus"}),`
`,n.jsx(e.li,{children:"Provide visual feedback for active items"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Memoize menu items when possible"}),`
`,n.jsx(e.li,{children:"Consider dynamic loading for large menus"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to navigate through menu items"}),`
`,n.jsx(e.li,{children:"Enter/Space to activate items"}),`
`,n.jsx(e.li,{children:"Arrow keys to navigate nested menus"}),`
`,n.jsx(e.li,{children:"Escape to close submenus"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{})]})}function v(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{v as default};
