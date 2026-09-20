import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CMulKWTX.js";import{i as n,r}from"./react-DbA5CMOi.js";import{a as i,d as a,u as o}from"./blocks-BPZv-D9b.js";import{n as s,t as c}from"./Menu.stories-CKoeWjhM.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Menu`}),`
`,(0,d.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Menu`}),` component provides an accessible navigation menu with support for both vertical and horizontal orientations, nested items, and flexible interaction modes.`]}),`
`,(0,d.jsx)(t.p,{children:`In horizontal mode, nested submenus cascade to the right (similar to macOS application menus), while the first-level dropdown appears below the menu bar.`}),`
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
`,(0,d.jsx)(t.h2,{id:`menuitem-interface`,children:`MenuItem Interface`}),`
`,(0,d.jsx)(t.p,{children:`Each menu item can have the following properties:`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Property`}),(0,d.jsx)(t.th,{children:`Type`}),(0,d.jsx)(t.th,{children:`Description`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`id`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`Unique identifier for the menu item (required)`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`label`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`Display text for the menu item (required)`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`nestedItems`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`MenuItem[]`})}),(0,d.jsx)(t.td,{children:`Array of child menu items for creating submenus`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`icon`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`IconName`})}),(0,d.jsx)(t.td,{children:`Icon to display before the label`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`link`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`URL to navigate to when clicked (opens in new tab)`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`onClick`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`() => void`})}),(0,d.jsx)(t.td,{children:`Callback function when item is clicked`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`onHover`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`() => void`})}),(0,d.jsx)(t.td,{children:`Callback function when item is hovered`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`onFocus`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`() => void`})}),(0,d.jsx)(t.td,{children:`Callback function when item receives focus`})]})]})]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Organization`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`In horizontal mode, nested submenus appear to the right, enabling deep nesting`}),`
`,(0,d.jsx)(t.li,{children:`Group related items together`}),`
`,(0,d.jsx)(t.li,{children:`Sort items logically`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Interaction`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`openedOn="hover"`}),` for quick access in horizontal menus`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`openedOn="click"`}),` for vertical menus or complex navigation`]}),`
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
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};