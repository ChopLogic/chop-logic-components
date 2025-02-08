import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-DXRrZdNQ.js";import{M as o}from"./index-Hm0oqfFC.js";import{C as d}from"./Menu.stories-5h2sy_6n.js";import"./index-B_nTefMF.js";import"./iframe-D7y9cp_r.js";import"./index-rrMuti2j.js";import"./index-DUhdrOyO.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./Label-iILYjsvu.js";import"./index-zvdF3J3f.js";import"./themes-BnN1RKU4.js";import"./Alert-DMyXkc2m.js";import"./Checkbox-CjX9AVlT.js";import"./CheckboxCheckedIcon-BAzr5VRs.js";import"./CheckboxUncheckedIcon-CMpqfROB.js";import"./index-CKFmP5XW.js";import"./MultiSelect-BO55OBsP.js";import"./Select.styled-1lhBA4mq.js";import"./index-BP0Kj9GW.js";import"./index-X6NplXQr.js";import"./ArrowDownIcon-9UPYAteJ.js";import"./ArrowUpIcon-D-lXvPOI.js";import"./NumericInput-psG3T8RU.js";import"./Select-pOqn0OqM.js";import"./CheckMarkIcon-w6yvoLUx.js";import"./TextInput-CJ7BedVC.js";import"./index-Da_tQ3Xi.js";import"./ErrorIcon-C44N34Yw.js";import"./HelpIcon-DgpPKFlH.js";import"./InfoIcon-B4hFJLBr.js";import"./WarningIcon-DiWNQ3Lw.js";import"./index-DplEX_gw.js";import"./index-DfsBjX5Y.js";import"./index-7IJ2GIBa.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,title:"Form"}),`
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
`})})]})}function q(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{q as default};
