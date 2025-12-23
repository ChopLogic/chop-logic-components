var d=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(s,e,r)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,t=(s,e)=>{for(var r in e||(e={}))m.call(e,r)&&c(s,r,e[r]);if(i)for(var r of i(e))x.call(e,r)&&c(s,r,e[r]);return s},o=(s,e)=>h(s,u(e));import{j as n}from"./iframe-BD2qMxgm.js";import{useMDXComponents as a}from"./index-Brdy1V2t.js";import{M as j}from"./blocks-D4SsA9Kg.js";import{S as p}from"./use-debounce.stories-DmipmC4p.js";import"./preload-helper-BDBacUwf.js";import"./index-BdVZIdTJ.js";import"./index-93A79Foz.js";import"./use-debounce-V8VtzRdH.js";function l(s){const e=t(t({code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},a()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:p,title:"Hooks/useDebounce"}),`
`,n.jsx(e.h1,{id:"usedebounce",children:"useDebounce"}),`
`,n.jsx(e.p,{children:"A React hook that delays updating a value until after a specified delay has passed without new changes. This is particularly useful for search inputs, API calls, and other scenarios where you want to reduce unnecessary updates."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Generic Type Support"}),": Works with any value type (strings, numbers, objects, arrays)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Configurable Delay"}),": Customizable debounce timing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Cleanup"}),": Proper cleanup of timeouts on unmount"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simple API"}),": Easy to use with minimal configuration"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useDebounce } from 'chop-logic-components';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // This effect will run only when debouncedSearchTerm changes
  // (300ms after the user stops typing)
  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
`})}),`
`,n.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"value"})}),n.jsx(e.td,{children:"`T`"}),n.jsx(e.td,{children:"The value to debounce"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"delay"})}),n.jsx(e.td,{children:"`number`"}),n.jsx(e.td,{children:"Delay in milliseconds"})]})]})]}),`
`,n.jsx(e.h2,{id:"return-value",children:"Return Value"}),`
`,n.jsx(e.p,{children:"Returns the debounced value of type `T`."}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Search Inputs"}),": Reduce API calls while typing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form Validation"}),": Delay validation until user stops typing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Resize Events"}),": Throttle expensive resize calculations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Auto-save"}),": Save form data after user stops editing"]}),`
`]})]})}function C(s={}){const{wrapper:e}=t(t({},a()),s.components);return e?n.jsx(e,o(t({},s),{children:n.jsx(l,t({},s))})):l(s)}export{C as default};
