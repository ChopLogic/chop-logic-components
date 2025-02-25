import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CIPZa9B8.js";import{M as o}from"./index-Cjue1fAi.js";import{C as d}from"./Menu.stories-CSD8WmBC.js";import"./index-Ban83id2.js";import"./iframe-C0iaFHHi.js";import"./index-CIoWShqO.js";import"./index-7LVPDKFp.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Label-qg4WOoxX.js";import"./index-Dd9y7SHD.js";import"./themes-BnN1RKU4.js";import"./Alert-BWta-ebk.js";import"./Checkbox-DOWsdcnt.js";import"./index-C-eu1kWF.js";import"./MultiSelect-Clynf4zd.js";import"./Select.styled-BnJQ06Da.js";import"./index-arilMgzD.js";import"./index-gLN7dSb1.js";import"./NumericInput-C-A-C4Ny.js";import"./Select-Dq_uRQuo.js";import"./TextInput-Cg5sDPVd.js";import"./index-D1_pEFh9.js";import"./index-ClfbYLUi.js";import"./index-BA8sCPVX.js";import"./index-dTE3SSI8.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,title:"Form"}),`
`,e.jsx(n.h1,{id:"choplogicmenu",children:"ChopLogicMenu"}),`
`,e.jsx(n.p,{children:"The component allows you to render a fully styled and accessible navigation menu in two modes - horizontal or vertical. Menu items can be described as a JavaScript array, and each item can contain nested items that will be rendered recursively. Nesting levels are not limited."}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ChopLogicMenu, ChopLogicIconName, ChopLogicOrientationMode } from 'chop-logic-components';

const MENU_ITEMS = [
  {
    id: 'item-1',
    label: 'Home',
    icon: ChopLogicIconName.Home,
  },
  {
    id: 'item-2',
    label: 'About',
    icon: ChopLogicIconName.Info,
    nestedItems: [
      {
        id: 'item-3',
        label: 'Overview',
      },
      {
        id: 'item-4',
        label: 'Administrations',
      },
      {
        id: 'item-5',
        label: 'Campus Tours',
      },
    ],
  }
];

const ExampleComponent = () => (
  <ChopLogicMenu items={MENU_ITEMS} mode={ChopLogicOrientationMode.Horizontal} />
);

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Required"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"items"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicMenuItem[]"})}),e.jsx(n.td,{children:"An array of objects describing the menu items. Each item may contain nested items."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"Yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"mode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ChopLogicOrientationMode"})}),e.jsx(n.td,{children:"Determines whether the menu will be displayed vertically or horizontally. When the bar menu is displayed horizontally, nested items are opened as popups."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'vertical'"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSSProperties"})}),e.jsx(n.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tabIndex"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(n.td,{children:e.jsx(n.code,{children:"undefined"})}),e.jsx(n.td,{children:"No"})]})]})]}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export interface ChopLogicMenuItem {
  label: string;
  id: string;
  nestedItems?: ChopLogicMenuItem[];
  icon?: ChopLogicIconName;
  link?: string;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
}
`})})]})}function O(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{O as default};
