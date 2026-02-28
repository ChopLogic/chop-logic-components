import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as t}from"./index-BeVWJvHh.js";import{M as i}from"./blocks-B9t17XrR.js";import{S as c}from"./use-debounce.stories-B_W8ts0r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./use-debounce-DOrwxXMs.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,title:"Hooks/useDebounce"}),`
`,e.jsx(n.h1,{id:"usedebounce",children:"useDebounce"}),`
`,e.jsx(n.p,{children:"A React hook that delays updating a value until after a specified delay has passed without new changes. This is particularly useful for search inputs, API calls, and other scenarios where you want to reduce unnecessary updates."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generic Type Support"}),": Works with any value type (strings, numbers, objects, arrays)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable Delay"}),": Customizable debounce timing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Cleanup"}),": Proper cleanup of timeouts on unmount"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple API"}),": Easy to use with minimal configuration"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useDebounce } from "chop-logic-components";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // This effect will run only when debouncedSearchTerm changes
  // (300ms after the user stops typing)
  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />;
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"value"})}),e.jsx(n.td,{children:"`T`"}),e.jsx(n.td,{children:"The value to debounce"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"delay"})}),e.jsx(n.td,{children:"`number`"}),e.jsx(n.td,{children:"Delay in milliseconds"})]})]})]}),`
`,e.jsx(n.h2,{id:"return-value",children:"Return Value"}),`
`,e.jsx(n.p,{children:"Returns the debounced value of type `T`."}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search Inputs"}),": Reduce API calls while typing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form Validation"}),": Delay validation until user stops typing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resize Events"}),": Throttle expensive resize calculations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-save"}),": Save form data after user stops editing"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
