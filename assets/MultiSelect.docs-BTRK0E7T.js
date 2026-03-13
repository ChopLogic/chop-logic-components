import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-kE0B7DI6.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./MultiSelect.stories-DtJ3bLZf.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`MultiSelect`}),`
`,(0,d.jsx)(t.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,d.jsx)(t.p,{children:`A multi-selection input component that allows users to select multiple options from a dropdown list. Supports search functionality, custom options, and flexible selection management with proper accessibility features.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import MultiSelect from "chop-logic-components";

const PreferencesForm = () => {
  const [selected, setSelected] = React.useState([]);
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ];

  return <MultiSelect name="frameworks" label="Select preferred frameworks" options={options} onChange={(values) => setSelected(values)} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Clear Labeling`}),`: Always provide a descriptive label that explains what options are available`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Ensure proper ARIA labels and keyboard navigation for the dropdown and selection items`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Option Organization`}),`: Group related options logically and consider alphabetical sorting for long lists`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Selection Feedback`}),`: Clearly indicate selected items and provide visual feedback when options are toggled`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Search Functionality`}),`: Implement search/filter for lists with more than 10 options to improve usability`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Placeholder Text`}),`: Use helpful placeholder text that guides users on what to select`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Required Fields`}),`: Mark required fields clearly and provide validation feedback`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Disabled States`}),`: Use disabled state appropriately when selection is not currently available`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};