import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as t,C as c}from"./blocks-BtqpkElc.js";import{S as s}from"./Search.stories-J42CLJGE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                  *//* empty css                          */import"./Header-Dw2DVqZ3.js";import"./get-class-name-BY88G7uf.js";import"./Button-BkZxBmQE.js";import"./Portal-GDtD3Swj.js";import"./use-click-outside-yBZhbwYK.js";import"./use-element-ids-BwRwfIW9.js";import"./use-key-press-Qz_3YznQ.js";import"./use-tooltip-position-BNnrnIuP.js";import"./use-container-dimensions-BdWbXCjt.js";import"./Icon-DgdWz_xl.js";import"./Input-OJw9X-Ut.js";import"./Label-GsN7KfjG.js";import"./icon-name-DofyCo9k.js";import"./use-debounce-hOkwn1UU.js";function o(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s,title:"Molecules/Search"}),`
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
