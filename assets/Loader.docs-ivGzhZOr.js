var c=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(o,n,i)=>n in o?c(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,s=(o,n)=>{for(var i in n||(n={}))p.call(n,i)&&r(o,i,n[i]);if(t)for(var i of t(n))x.call(n,i)&&r(o,i,n[i]);return o},a=(o,n)=>h(o,u(n));import{j as e}from"./iframe-DGLPjSHb.js";import{useMDXComponents as d}from"./index-_AjrTGOE.js";import{M as g,b as j}from"./blocks-C-t3sszW.js";import{L as m}from"./Loader.stories-DjayTYTH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./get-class-name-CHDn80c0.js";function l(o){const n=s(s({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},d()),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:m,title:"Loader"}),`
`,e.jsx(n.h1,{id:"loader",children:"Loader"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Loader"})," component provides a collection of animated loading indicators to show progress or pending states in your application. It offers multiple visual styles to match different contexts and use cases."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Loader, { LoaderView } from 'chop-logic-components';

const PageLoader = () => (
  <div>
    <h2>Content is loading...</h2>
    <Loader view={LoaderView.Circle} />
  </div>
);

export default PageLoader;
`})}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When fetching data asynchronously"}),`
`,e.jsx(n.li,{children:"During file uploads or processing"}),`
`,e.jsx(n.li,{children:"To indicate background tasks are running"}),`
`,e.jsx(n.li,{children:"When you need to show a waiting state without blocking UI"}),`
`,e.jsx(n.li,{children:"When you want consistent loading indicators across your application"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA Attributes"}),': The component automatically includes role="status" and aria-live="polite" to announce loading states to screen readers.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color Contrast"}),": Ensure your loader has sufficient contrast against its background."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alternative Text"}),": For critical loading states, consider adding additional text explanation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Motion Reduction"}),": Respect prefers-reduced-motion media query in your CSS animations."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function k(o={}){const{wrapper:n}=s(s({},d()),o.components);return n?e.jsx(n,a(s({},o),{children:e.jsx(l,s({},o))})):l(o)}export{k as default};
