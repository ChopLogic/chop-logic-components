var h=Object.defineProperty,m=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,i=(r,e)=>{for(var o in e||(e={}))p.call(e,o)&&c(r,o,e[o]);if(t)for(var o of t(e))u.call(e,o)&&c(r,o,e[o]);return r},s=(r,e)=>m(r,d(e));import{j as n}from"./iframe-BD2qMxgm.js";import{useMDXComponents as a}from"./index-Brdy1V2t.js";import{M as x,b as j}from"./blocks-D4SsA9Kg.js";import{S as g}from"./Search.stories-D2YumPVN.js";import"./preload-helper-BDBacUwf.js";import"./index-BdVZIdTJ.js";import"./index-93A79Foz.js";import"./Header-DF820EaT.js";import"./Icon-MLh-kOYM.js";import"./get-class-name-BY88G7uf.js";import"./Container.module-3iQ-V5w_.js";import"./ResponsiveWrapper.module-CBt-uAwD.js";import"./Button-BnHaWgV4.js";import"./Portal-BHN2Eox0.js";import"./use-click-outside-6cmNVI-U.js";import"./use-element-ids-BbUXXNQn.js";import"./use-key-press-C6A1hwFT.js";import"./use-tooltip-position-D_PdVjAa.js";import"./use-container-dimensions-DStfneKy.js";import"./Input-DVvI8r1V.js";import"./Label-BpwB659L.js";import"./use-debounce-V8VtzRdH.js";function l(r){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:g,title:"Molecules/Search"}),`
`,n.jsx(e.h1,{id:"search",children:"Search"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Search"})," component provides a versatile search input with debounce functionality, multiple search modes, and comprehensive accessibility features."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Search from 'chop-logic-components';

const ProductSearch = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    // Perform API call or filter logic here
  };

  const handleClear = () => {
    console.log('Search cleared');
    // Reset search results here
  };

  return (
    <Search
      label="Search products"
      onSearch={handleSearch}
      onClear={handleClear}
      placeholder="Search by name or category..."
      debounceDelay={300}
    />
  );
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Debounced Search"}),": Automatic mode delays search until user stops typing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Multiple Triggers"}),": Search via typing, Enter key, or search button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Clear Functionality"}),": One-click input clearing with focus management"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Full keyboard navigation and ARIA support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Validation"}),": Support for min/max length and required fields"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Browser Integration"}),": Autocomplete and spell check options"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function O(r={}){const{wrapper:e}=i(i({},a()),r.components);return e?n.jsx(e,s(i({},r),{children:n.jsx(l,i({},r))})):l(r)}export{O as default};
