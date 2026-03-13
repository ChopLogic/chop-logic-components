import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-kE0B7DI6.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Search.stories-BLsjNZWD.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Molecules/Search`}),`
`,(0,d.jsx)(t.h1,{id:`search`,children:`Search`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Search`}),` component provides a versatile search input with debounce functionality, multiple search modes, and comprehensive accessibility features.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Search from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Debounced Search`}),`: Automatic mode delays search until user stops typing`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Multiple Triggers`}),`: Search via typing, Enter key, or search button`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Clear Functionality`}),`: One-click input clearing with focus management`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Full keyboard navigation and ARIA support`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Validation`}),`: Support for min/max length and required fields`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Browser Integration`}),`: Autocomplete and spell check options`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};