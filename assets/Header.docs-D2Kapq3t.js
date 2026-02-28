import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as t,C as o}from"./blocks-BtqpkElc.js";import{H as a}from"./Header.stories-CdpcQuiy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./icon-name-DofyCo9k.js";import"./Header-Dw2DVqZ3.js";import"./get-class-name-BY88G7uf.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a,title:"Header"}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Header"})," component provides a flexible heading element that can render as any HTML heading level (h1-h6) and optionally include an icon. It's designed to maintain consistent styling across all heading levels while providing semantic HTML structure."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header, IconName } from "chop-logic-components";

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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Semantic Hierarchy"}),": Use the appropriate heading level (",e.jsx(n.code,{children:"as"})," prop) to maintain proper document structure (h1 for main title, h2 for sections, h3 for subsections, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Icon Selection"}),": Choose icons that are relevant to the header content and enhance understanding."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Ensure heading levels follow a logical hierarchy for screen reader users."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Content Clarity"}),": Keep header text concise and descriptive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Consistent Styling"}),": Use the className prop for consistent styling across similar header levels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"ID Usage"}),": Provide id attributes when headers need to be linked or referenced."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function f(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{f as default};
