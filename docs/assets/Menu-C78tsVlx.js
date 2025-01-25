import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as r}from"./index-DOvxcyG1.js";import{ae as o}from"./index-Bo0SZYHd.js";import{C as d}from"./Menu.stories-Rs1OT7Hp.js";import"./index-qVDZzPEr.js";import"./iframe-BNR7cRmn.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Label-tVES63B-.js";import"./index-BT98D5zi.js";import"./themes-BnN1RKU4.js";import"./Alert-Bp8SV23s.js";import"./Checkbox-BysIperM.js";import"./CheckboxCheckedIcon-CF8eYAUg.js";import"./CheckboxUncheckedIcon-CyCeDUlo.js";import"./index-bc0GsKql.js";import"./MultiSelect-CbmjZgew.js";import"./Select.styled-BJZBRQF3.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./ArrowDownIcon-DjWvX1tD.js";import"./ArrowUpIcon-DtkrGYxQ.js";import"./NumericInput-CpZ6Zs2o.js";import"./Select-B73Oa-A8.js";import"./CheckMarkIcon-CfV3vdyY.js";import"./TextInput-BcbEk0b2.js";import"./index-D9uBcq_H.js";import"./ErrorIcon-D-M6vwQ1.js";import"./HelpIcon-DQHZekkZ.js";import"./InfoIcon-BNiUgg5x.js";import"./WarningIcon-DncDqrJn.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,title:"Form"}),`
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
`})})]})}function J(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{J as default};
