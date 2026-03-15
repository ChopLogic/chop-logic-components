import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-SKv-7AQs.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-debounce.stories-BeW0VIVW.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useDebounce`}),`
`,(0,u.jsx)(t.h1,{id:`usedebounce`,children:`useDebounce`}),`
`,(0,u.jsx)(t.p,{children:`A React hook that delays updating a value until after a specified delay has passed without new changes. This is particularly useful for search inputs, API calls, and other scenarios where you want to reduce unnecessary updates.`}),`
`,(0,u.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Generic Type Support`}),`: Works with any value type (strings, numbers, objects, arrays)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Configurable Delay`}),`: Customizable debounce timing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Automatic Cleanup`}),`: Proper cleanup of timeouts on unmount`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Simple API`}),`: Easy to use with minimal configuration`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { useDebounce } from "chop-logic-components";

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
`,(0,u.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Parameter`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`value`})}),(0,u.jsx)(t.td,{children:"`T`"}),(0,u.jsx)(t.td,{children:`The value to debounce`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`delay`})}),(0,u.jsx)(t.td,{children:"`number`"}),(0,u.jsx)(t.td,{children:`Delay in milliseconds`})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,u.jsx)(t.p,{children:"Returns the debounced value of type `T`."}),`
`,(0,u.jsx)(t.h2,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Search Inputs`}),`: Reduce API calls while typing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Form Validation`}),`: Delay validation until user stops typing`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Resize Events`}),`: Throttle expensive resize calculations`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Auto-save`}),`: Save form data after user stops editing`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};