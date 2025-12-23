var l=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,i=(o,e)=>{for(var t in e||(e={}))h.call(e,t)&&s(o,t,e[t]);if(r)for(var t of r(e))x.call(e,t)&&s(o,t,e[t]);return o},a=(o,e)=>m(o,p(e));import{j as n}from"./iframe-DJejKD7f.js";import{useMDXComponents as c}from"./index-C1C3GIxM.js";import{M as u,b as j}from"./blocks-BfAV1-Im.js";import{L as f}from"./Loader.stories-Cskxmue5.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./get-class-name-BY88G7uf.js";function d(o){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:f,title:"Loader"}),`
`,n.jsx(e.h1,{id:"loader",children:"Loader"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Loader"})," component provides a collection of animated loading indicators to show progress or pending states in your application. It offers multiple visual styles to match different contexts and use cases."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Loader, { LoaderView } from 'chop-logic-components';

const PageLoader = () => (
  <div>
    <h2>Content is loading...</h2>
    <Loader view={LoaderView.Circle} />
  </div>
);

export default PageLoader;
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"ARIA Attributes"}),': The component automatically includes role="status" and aria-live="polite" to announce loading states to screen readers.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Color Contrast"}),": Ensure your loader has sufficient contrast against its background."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Alternative Text"}),": For critical loading states, consider adding additional text explanation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Motion Reduction"}),": Respect prefers-reduced-motion media query in your CSS animations."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function P(o={}){const{wrapper:e}=i(i({},c()),o.components);return e?n.jsx(e,a(i({},o),{children:n.jsx(d,i({},o))})):d(o)}export{P as default};
