import{j as e}from"./iframe-Cr_R5OpT.js";import{useMDXComponents as i}from"./index-B10WuxfI.js";import{M as t,C as c}from"./blocks-B84JAAVv.js";import{S as s}from"./Search.stories-DHk7Ogve.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BW0uQFtm.js";import"./index-DXm0ye48.js";/* empty css                  *//* empty css                          */import"./Header-p8cdyXUu.js";import"./get-class-name-BY88G7uf.js";import"./Button-B0hPTDhO.js";import"./Portal-BDvWiF_x.js";import"./use-click-outside-DxG3nd1T.js";import"./use-element-ids-DYPTHbYk.js";import"./use-key-press-dEA5TTHN.js";import"./use-tooltip-position-CtlRpbvE.js";import"./use-container-dimensions-B9Mk7e-n.js";import"./Icon-Cptwj7ai.js";import"./Input-KRokUO2S.js";import"./Label-h4KhQCnj.js";import"./icon-name-DofyCo9k.js";import"./use-debounce-BowPDPy7.js";function o(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s,title:"Molecules/Search"}),`
`,e.jsx(r.h1,{id:"search",children:"Search"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Search"})," component provides a versatile search input with debounce functionality, multiple search modes, and comprehensive accessibility features."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import Search from "chop-logic-components";

const ProductSearch = () => {
  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    // Perform API call or filter logic here
  };

  const handleClear = () => {
    console.log("Search cleared");
    // Reset search results here
  };

  return <Search label="Search products" onSearch={handleSearch} onClear={handleClear} placeholder="Search by name or category..." debounceDelay={300} />;
};
`})}),`
`,e.jsx(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Debounced Search"}),": Automatic mode delays search until user stops typing"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Multiple Triggers"}),": Search via typing, Enter key, or search button"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Clear Functionality"}),": One-click input clearing with focus management"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Accessibility"}),": Full keyboard navigation and ARIA support"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Validation"}),": Support for min/max length and required fields"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Browser Integration"}),": Autocomplete and spell check options"]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{})]})}function F(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{F as default};
