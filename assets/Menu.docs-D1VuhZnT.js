import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./Menu.stories-HzzGWi78.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Menu`}),`
`,(0,d.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Menu`}),` component provides an accessible navigation menu with support for both vertical and horizontal orientations, nested items, and flexible interaction modes.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Menu, { OrientationMode } from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Organization`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Limit nesting depth (recommend max 2-3 levels)`}),`
`,(0,d.jsx)(t.li,{children:`Group related items together`}),`
`,(0,d.jsx)(t.li,{children:`Sort items logically`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Interaction`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use hover activation for quick access`}),`
`,(0,d.jsx)(t.li,{children:`Use click activation for complex menus`}),`
`,(0,d.jsx)(t.li,{children:`Provide visual feedback for active items`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Memoize menu items when possible`}),`
`,(0,d.jsx)(t.li,{children:`Consider dynamic loading for large menus`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Keyboard Navigation`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Tab to navigate through menu items`}),`
`,(0,d.jsx)(t.li,{children:`Enter/Space to activate items`}),`
`,(0,d.jsx)(t.li,{children:`Arrow keys to navigate nested menus`}),`
`,(0,d.jsx)(t.li,{children:`Escape to close submenus`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};