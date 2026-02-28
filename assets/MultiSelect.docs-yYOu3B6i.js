import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as l}from"./index-BeVWJvHh.js";import{M as s,C as r}from"./blocks-B9t17XrR.js";import{M as o}from"./MultiSelect.stories-BWV_TNv9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";/* empty css                          */import"./MultiSelect-CEa41758.js";import"./Label-B0vz0m2R.js";import"./Icon-DTjVTp_9.js";import"./get-class-name-BY88G7uf.js";import"./use-click-outside-B0EspTvx.js";import"./use-element-ids--HzG7Pmw.js";import"./use-key-press-XWebfcyU.js";import"./Option-CTSW_nAD.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./icon-name-DofyCo9k.js";import"./use-reset-form-input-Dmd2Mx0b.js";function n(i){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o,title:"MultiSelect"}),`
`,e.jsx(t.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(t.p,{children:"A multi-selection input component that allows users to select multiple options from a dropdown list. Supports search functionality, custom options, and flexible selection management with proper accessibility features."}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import MultiSelect from "chop-logic-components";

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
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Clear Labeling"}),": Always provide a descriptive label that explains what options are available"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Accessibility"}),": Ensure proper ARIA labels and keyboard navigation for the dropdown and selection items"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Option Organization"}),": Group related options logically and consider alphabetical sorting for long lists"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Selection Feedback"}),": Clearly indicate selected items and provide visual feedback when options are toggled"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Search Functionality"}),": Implement search/filter for lists with more than 10 options to improve usability"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Placeholder Text"}),": Use helpful placeholder text that guides users on what to select"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Required Fields"}),": Mark required fields clearly and provide validation feedback"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Disabled States"}),": Use disabled state appropriately when selection is not currently available"]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function A(i={}){const{wrapper:t}={...l(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{A as default};
