var h=Object.defineProperty,m=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(r,e,o)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,i=(r,e)=>{for(var o in e||(e={}))p.call(e,o)&&s(r,o,e[o]);if(t)for(var o of t(e))u.call(e,o)&&s(r,o,e[o]);return r},c=(r,e)=>m(r,d(e));import{j as n}from"./iframe-DGLPjSHb.js";import{useMDXComponents as a}from"./index-_AjrTGOE.js";import{M as x,b as j}from"./blocks-C-t3sszW.js";import{S as g}from"./Search.stories-Cg1_Ch7B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./Header-Dadw88w1.js";import"./Icon-Coy0pRmj.js";import"./get-class-name-CHDn80c0.js";import"./Container.module-DIM0iUPi.js";import"./Button-Bkbj21Uc.js";import"./Portal-Dx8aOCbZ.js";import"./use-click-outside-CQdVQ-mQ.js";import"./use-element-ids-CCLjb5t5.js";import"./use-key-press-q-IucPbH.js";import"./use-tooltip-position-DJQ3uCKC.js";import"./use-container-dimensions-DHetTRBL.js";import"./use-window-dimensions-DrC5iAeS.js";import"./Input-DX9Xd3Tc.js";import"./Label-rlm6Xgpz.js";import"./use-debounce-Bw1EfyDW.js";function l(r){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:g,title:"Molecules/Search"}),`
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
      label='Search products'
      onSearch={handleSearch}
      onClear={handleClear}
      placeholder='Search by name or category...'
      debounceDelay={300}
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Debounced Search"}),": Automatic mode delays search until user stops typing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Multiple Triggers"}),": Search via typing, Enter key, or search button"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Clear Functionality"}),": One-click input clearing with focus management"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Full keyboard navigation and ARIA support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Validation"}),": Support for min/max length and required fields"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Browser Integration"}),": Autocomplete and spell check options"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function O(r={}){const{wrapper:e}=i(i({},a()),r.components);return e?n.jsx(e,c(i({},r),{children:n.jsx(l,i({},r))})):l(r)}export{O as default};
