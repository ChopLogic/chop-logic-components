import{j as e}from"./iframe-C3nnaSfA.js";import{useMDXComponents as o}from"./index-CLU9rmCe.js";import{M as r}from"./blocks-ByoFTpja.js";import{C as d}from"./Menu.stories-E9Qu18t4.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Icon-BBWlz8VR.js";import"./Tabs-DjIFluT_.js";import"./Button-DNPweYWQ.js";import"./Input-BHIenv_q.js";import"./use-click-outside-D7yaXWQH.js";import"./use-key-press-C9iHSrXH.js";import"./use-tooltip-position-BG-dpZMc.js";import"./use-container-dimensions-D1IAgZBx.js";import"./use-window-dimensions-BO7pOUZS.js";import"./get-class-name-CHDn80c0.js";import"./Loader-C-BUGyvV.js";import"./Portal-DRzz8wUD.js";import"./Alert-DSv9-R1P.js";import"./Checkbox-DROs7y0z.js";import"./use-reset-form-input-BoFkPjiQ.js";import"./MultiSelect-C4Z7PTl3.js";import"./Select.module-4lHQ571_.js";import"./NumericInput-B7i0SsAs.js";import"./Select-QXfLJeq0.js";import"./TextInput-C-GqJlLx.js";import"./Dialog-wjfri9lk.js";import"./use-modal-focus-trap-CeMb6sc0.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"ChopLogicMenu"}),`
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
`})})]})}function _(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_ as default};
