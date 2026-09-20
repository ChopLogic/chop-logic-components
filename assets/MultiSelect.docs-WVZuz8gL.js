import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CMulKWTX.js";import{i as n,r}from"./react-DbA5CMOi.js";import{a as i,d as a,u as o}from"./blocks-BPZv-D9b.js";import{n as s,t as c}from"./MultiSelect.stories-BUkwBJp3.js";function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`MultiSelect`}),`
`,(0,d.jsx)(t.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,d.jsx)(t.p,{children:`A multi-selection input component that allows users to select multiple options from a dropdown list. Supports full keyboard navigation and proper accessibility features.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { MultiSelect } from "chop-logic-components";
import type { SelectValue } from "chop-logic-components";

const PreferencesForm = () => {
  const [selected, setSelected] = React.useState<SelectValue[]>([]);
  const options = [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue" },
    { id: "angular", label: "Angular" },
  ];

  return <MultiSelect name="frameworks" label="Select preferred frameworks" options={options} onChange={(values) => setSelected(values ?? [])} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsx)(t.p,{children:`The MultiSelect component implements comprehensive accessibility features following WAI-ARIA guidelines.`}),`
`,(0,d.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Key`}),(0,d.jsx)(t.th,{children:`Action`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`Enter`}),` / `,(0,d.jsx)(t.code,{children:`Space`})]}),(0,d.jsx)(t.td,{children:`Open dropdown (when closed) or toggle selection on focused option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Escape`})}),(0,d.jsx)(t.td,{children:`Close dropdown`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowDown`})}),(0,d.jsx)(t.td,{children:`Move focus to next option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowUp`})}),(0,d.jsx)(t.td,{children:`Move focus to previous option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Home`})}),(0,d.jsx)(t.td,{children:`Move focus to first option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`End`})}),(0,d.jsx)(t.td,{children:`Move focus to last option`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Tab`})}),(0,d.jsx)(t.td,{children:`Move focus out of the dropdown`})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`aria-attributes`,children:`ARIA Attributes`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Uses `,(0,d.jsx)(t.code,{children:`role="listbox"`}),` with `,(0,d.jsx)(t.code,{children:`aria-multiselectable="true"`}),` for the dropdown list`]}),`
`,(0,d.jsxs)(t.li,{children:[`Each option has `,(0,d.jsx)(t.code,{children:`role="option"`}),` with appropriate `,(0,d.jsx)(t.code,{children:`aria-selected`}),` state`]}),`
`,(0,d.jsxs)(t.li,{children:[`The trigger button has `,(0,d.jsx)(t.code,{children:`aria-haspopup="listbox"`}),` and `,(0,d.jsx)(t.code,{children:`aria-expanded`})]}),`
`,(0,d.jsxs)(t.li,{children:[`Required fields have `,(0,d.jsx)(t.code,{children:`aria-required="true"`})]}),`
`,(0,d.jsx)(t.li,{children:`Label is properly associated with the multi-select control`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`focus-management`,children:`Focus Management`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Focus is trapped within the dropdown when open`}),`
`,(0,d.jsx)(t.li,{children:`Focus returns to the trigger button when the dropdown is closed`}),`
`,(0,d.jsx)(t.li,{children:`Disabled options are skipped during keyboard navigation`}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Clear Labeling`}),`: Always provide a descriptive label that explains what options are available.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Option Organization`}),`: Group related options logically and consider alphabetical sorting for long lists.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Selection Feedback`}),`: The component clearly indicates selected items with checkmarks and a count in the trigger.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Placeholder Text`}),`: Use helpful placeholder text that guides users on what to select.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Required Fields`}),`: Mark required fields clearly using the `,(0,d.jsx)(t.code,{children:`required`}),` prop.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Loading States`}),`: Use `,(0,d.jsx)(t.code,{children:`isLoading`}),` when fetching options asynchronously.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Disabled States`}),`: Use disabled state when selection is not currently available.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Reasonable List Size`}),`: For very long lists (50+ items), consider using a searchable select or categorized options.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};