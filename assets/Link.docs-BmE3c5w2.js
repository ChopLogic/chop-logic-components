import{j as n}from"./iframe-Doc73XE3.js";import{useMDXComponents as r}from"./index-BeVWJvHh.js";import{M as s,C as o}from"./blocks-B9t17XrR.js";import{L as l}from"./Link.stories-BKrpGfrB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./icon-name-DofyCo9k.js";import"./Link-DI1ggpWC.js";import"./Icon-DTjVTp_9.js";import"./get-class-name-BY88G7uf.js";function t(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Atoms/Link"}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Link"})," component provides an accessible, flexible link implementation with icon support and automatic external link handling."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Link, { IconName } from "chop-logic-components";

const Navigation = () => (
  <nav>
    <Link href="/home">Home</Link>
    <Link href="https://external-site.com" icon={IconName.External} external>
      External Site
    </Link>
  </nav>
);
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Automatic External Link Detection"}),": Automatically detects external URLs and applies security attributes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Icon Support"}),": Optional icons with configurable positioning."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Proper ARIA labels for external links and screen reader support."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Flexible"}),": Supports all standard anchor element attributes."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{})]})}function L(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{L as default};
