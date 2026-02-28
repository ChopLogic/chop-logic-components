import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as r,C as s}from"./blocks-BtqpkElc.js";import{S as l}from"./Select.stories-CCY9VvG9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                          */import"./Select-D83C5eMW.js";import"./Label-GsN7KfjG.js";import"./Icon-DgdWz_xl.js";import"./get-class-name-BY88G7uf.js";import"./use-click-outside-yBZhbwYK.js";import"./use-element-ids-BwRwfIW9.js";import"./use-key-press-Qz_3YznQ.js";import"./Option-CTSW_nAD.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./icon-name-DofyCo9k.js";import"./use-reset-form-input-CGOMNfpm.js";function o(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Select"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component provides an accessible, customizable dropdown select input with keyboard navigation and flexible options management."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Select from "chop-logic-components";

const CountrySelector = () => {
  const [country, setCountry] = React.useState("");
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
  ];

  return <Select name="country" label="Select country" options={countries} onChange={(value) => setCountry(value)} />;
};
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Option Organization"}),": Sort options logically (alphabetically, numerically, etc.) and group related options when appropriate."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Selection Clarity"}),": Use clear, descriptive labels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),": Virtualize long option lists and memoize options when possible."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(s,{})]})}function D(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};
