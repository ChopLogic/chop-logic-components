import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CMulKWTX.js";import{i as n,r}from"./react-DbA5CMOi.js";import{a as i,d as a,u as o}from"./blocks-BPZv-D9b.js";import{n as s,t as c}from"./Select.stories-06-m3hdH.js";function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Select`}),`
`,(0,d.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Select`}),` component provides an accessible, customizable dropdown select input with full keyboard navigation and flexible options management.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Select, SelectValue } from "chop-logic-components";

const CountrySelector = () => {
  const [country, setCountry] = React.useState<SelectValue | undefined>();
  const countries = [
    { id: "us", label: "United States" },
    { id: "ca", label: "Canada" },
    { id: "mx", label: "Mexico" },
  ];

  return <Select name="country" label="Select country" options={countries} onChange={(value) => setCountry(value)} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsx)(t.p,{children:`The Select component implements comprehensive accessibility features following WAI-ARIA guidelines.`}),`
`,(0,d.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Key`}),(0,d.jsx)(t.th,{children:`Action`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`Enter`}),` / `,(0,d.jsx)(t.code,{children:`Space`})]}),(0,d.jsx)(t.td,{children:`Open dropdown (when closed) or select focused option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Escape`})}),(0,d.jsx)(t.td,{children:`Close dropdown without selecting`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowDown`})}),(0,d.jsx)(t.td,{children:`Move focus to next option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowUp`})}),(0,d.jsx)(t.td,{children:`Move focus to previous option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Home`})}),(0,d.jsx)(t.td,{children:`Move focus to first option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`End`})}),(0,d.jsx)(t.td,{children:`Move focus to last option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Tab`})}),(0,d.jsx)(t.td,{children:`Move focus out of the dropdown`})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`aria-attributes`,children:`ARIA Attributes`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Uses `,(0,d.jsx)(t.code,{children:`role="listbox"`}),` for the dropdown list`]}),`
`,(0,d.jsxs)(t.li,{children:[`Each option has `,(0,d.jsx)(t.code,{children:`role="option"`}),` with appropriate `,(0,d.jsx)(t.code,{children:`aria-selected`}),` state`]}),`
`,(0,d.jsxs)(t.li,{children:[`The trigger button has `,(0,d.jsx)(t.code,{children:`aria-haspopup="listbox"`}),` and `,(0,d.jsx)(t.code,{children:`aria-expanded`})]}),`
`,(0,d.jsxs)(t.li,{children:[`Required fields have `,(0,d.jsx)(t.code,{children:`aria-required="true"`})]}),`
`,(0,d.jsx)(t.li,{children:`Label is properly associated with the select control`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Focus is trapped within the dropdown when open`}),`
`,(0,d.jsx)(t.li,{children:`Focus returns to the trigger button when the dropdown is closed`}),`
`,(0,d.jsx)(t.li,{children:`Disabled options are skipped during keyboard navigation`}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Clear Labeling`}),`: Always provide a descriptive label that explains what the user should select.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Option Organization`}),`: Sort options logically (alphabetically, by frequency of use) and keep the list manageable.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Placeholder Text`}),`: Use helpful placeholder text that guides users (e.g., "Select a country" rather than "Choose").`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Required Fields`}),`: Clearly indicate required fields using the `,(0,d.jsx)(t.code,{children:`required`}),` prop.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Loading States`}),`: Use `,(0,d.jsx)(t.code,{children:`isLoading`}),` when fetching options asynchronously to provide feedback.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Disabled States`}),`: Provide visual feedback when selection is not available.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};