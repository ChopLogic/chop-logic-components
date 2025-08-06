import{j as n}from"./iframe-CTqKjYd5.js";import{useMDXComponents as s}from"./index-DCTrsLlp.js";import{M as t,b as r}from"./blocks-D4DjP9pV.js";import{L as a}from"./Loader.stories-Due_hvz-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CX8MO8DH.js";import"./index-DS5dF-Wi.js";import"./Loader-BEd5goWg.js";import"./get-class-name-CHDn80c0.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a,title:"ChopLogicLoader"}),`
`,n.jsx(o.h1,{id:"choplogicloader",children:"ChopLogicLoader"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"ChopLogicLoader"})," component provides a collection of animated loading indicators to show progress or pending states in your application. It offers multiple visual styles to match different contexts and use cases."]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import ChopLogicLoader, { ChopLogicLoaderView } from 'chop-logic-components';

const PageLoader = () => (
  <div>
    <h2>Content is loading...</h2>
    <ChopLogicLoader view={ChopLogicLoaderView.Circle} />
  </div>
);

export default PageLoader;
`})}),`
`,n.jsx(o.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"When fetching data asynchronously"}),`
`,n.jsx(o.li,{children:"During file uploads or processing"}),`
`,n.jsx(o.li,{children:"To indicate background tasks are running"}),`
`,n.jsx(o.li,{children:"When you need to show a waiting state without blocking UI"}),`
`,n.jsx(o.li,{children:"When you want consistent loading indicators across your application"}),`
`]}),`
`,n.jsx(o.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"ARIA Attributes"}),': The component automatically includes role="status" and aria-live="polite" to announce loading states to screen readers.']}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Color Contrast"}),": Ensure your loader has sufficient contrast against its background."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Alternative Text"}),": For critical loading states, consider adding additional text explanation."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Motion Reduction"}),": Respect prefers-reduced-motion media query in your CSS animations."]}),`
`]}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(r,{})]})}function j(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
