var l=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(s,e,r)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,i=(s,e)=>{for(var r in e||(e={}))p.call(e,r)&&o(s,r,e[r]);if(t)for(var r of t(e))x.call(e,r)&&o(s,r,e[r]);return s},a=(s,e)=>h(s,m(e));import{j as n}from"./iframe-DJejKD7f.js";import{useMDXComponents as d}from"./index-C1C3GIxM.js";import{M as j,b as u}from"./blocks-BfAV1-Im.js";import{H as g}from"./Header.stories-C32_TB6T.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./Icon-CmAPyYs8.js";import"./get-class-name-BY88G7uf.js";import"./Header-DU7gb5Ir.js";function c(s){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:g,title:"Header"}),`
`,n.jsx(e.h1,{id:"header",children:"Header"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Header"})," component provides a flexible heading element that can render as any HTML heading level (h1-h6) and optionally include an icon. It's designed to maintain consistent styling across all heading levels while providing semantic HTML structure."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Header, IconName } from 'chop-logic-components';

const PageHeader = () => (
  <div>
    <Header as="h1" icon={IconName.Home}>
      Welcome
    </Header>
    <Header as="h2">Section Title</Header>
    <Header as="h3" className="special-header" id="subsection">
      With Custom Class
    </Header>
  </div>
);

export default PageHeader;
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Semantic Hierarchy"}),": Use the appropriate heading level (",n.jsx(e.code,{children:"as"})," prop) to maintain proper document structure (h1 for main title, h2 for sections, h3 for subsections, etc.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Icon Selection"}),": Choose icons that are relevant to the header content and enhance understanding."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Ensure heading levels follow a logical hierarchy for screen reader users."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Content Clarity"}),": Keep header text concise and descriptive."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Consistent Styling"}),": Use the className prop for consistent styling across similar header levels."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"ID Usage"}),": Provide id attributes when headers need to be linked or referenced."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function w(s={}){const{wrapper:e}=i(i({},d()),s.components);return e?n.jsx(e,a(i({},s),{children:n.jsx(c,i({},s))})):c(s)}export{w as default};
