import{j as n}from"./iframe-CcStb-xO.js";import{useMDXComponents as s}from"./index-DRR5r8Q4.js";import{M as r,b as t}from"./blocks-B97lg12T.js";import{C as c}from"./Menu.stories-PIqL0aul.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Icon-wNEFAMcc.js";import"./get-class-name-CHDn80c0.js";import"./Tabs-CcgrSf0X.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./Header-BiTp834B.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";import"./Alert-tdHplwZJ.js";import"./use-is-mounted-B3mWglcN.js";import"./Dialog-BLVfCpud.js";import"./use-modal-focus-trap-By3LHFgu.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c,title:"ChopLogicMenu"}),`
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
`,n.jsx(t,{})]})}function F(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{F as default};
