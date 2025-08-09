import{j as n}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as s}from"./index-C9KoPMn0.js";import{M as r,b as t}from"./blocks-QN0Lq6G6.js";import{C as c}from"./Menu.stories-CytogVXK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Icon-BhaWZDu4.js";import"./get-class-name-CHDn80c0.js";import"./Header-CSxk79h1.js";import"./Loader-CbQUfs1L.js";import"./Portal-BvJ0_6BA.js";import"./use-click-outside-CCfvGGcE.js";import"./use-key-press-BipOIjs9.js";import"./use-tooltip-position-Bo0oDeW_.js";import"./use-container-dimensions-CK3iJYmt.js";import"./use-window-dimensions-CXgdx2fM.js";import"./Alert-9Dq2KxLl.js";import"./Button-Beo9UBTU.js";import"./use-is-mounted-DaLmmxHE.js";import"./Checkbox-B3oaHqII.js";import"./use-reset-form-input-KFMp1UJi.js";import"./MultiSelect-BSeV9oRK.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-BK_dM8sf.js";import"./Select-tyqI0LNu.js";import"./TextInput-Ym5_0I8V.js";import"./Dialog-Bp2ifwxi.js";import"./use-modal-focus-trap-DVSwFbEv.js";import"./Tabs-Db3qM02f.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c,title:"ChopLogicMenu"}),`
`,n.jsx(e.h1,{id:"choplogicmenu",children:"ChopLogicMenu"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicMenu"})," component provides an accessible navigation menu with support for both vertical and horizontal orientations, nested items, and flexible interaction modes."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import ChopLogicMenu, { ChopLogicOrientationMode } from 'chop-logic-components';

const AppMenu = () => {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      link: '/home',
      icon: ChopLogicIconName.Home
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
    <ChopLogicMenu
      items={menuItems}
      mode={ChopLogicOrientationMode.Horizontal}
      openedOn="hover"
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to navigate through menu items"}),`
`,n.jsx(e.li,{children:"Enter/Space to activate items"}),`
`,n.jsx(e.li,{children:"Arrow keys to navigate nested menus"}),`
`,n.jsx(e.li,{children:"Escape to close submenus"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces menu structure"}),`
`,n.jsx(e.li,{children:"Indicates expanded/collapsed state"}),`
`,n.jsx(e.li,{children:"Describes nested relationships"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Maintains focus within open submenus"}),`
`,n.jsx(e.li,{children:"Returns focus to parent item when closed"}),`
`,n.jsx(e.li,{children:"Visible focus indicators"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Organization"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Limit nesting depth (recommend max 2-3 levels)"}),`
`,n.jsx(e.li,{children:"Group related items together"}),`
`,n.jsx(e.li,{children:"Sort items logically"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Interaction"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use hover activation for quick access"}),`
`,n.jsx(e.li,{children:"Use click activation for complex menus"}),`
`,n.jsx(e.li,{children:"Provide visual feedback for active items"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Memoize menu items when possible"}),`
`,n.jsx(e.li,{children:"Consider dynamic loading for large menus"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{})]})}function U(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{U as default};
