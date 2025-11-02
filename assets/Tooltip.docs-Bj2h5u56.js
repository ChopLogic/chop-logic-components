var d=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(i,n,o)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[n]=o,t=(i,n)=>{for(var o in n||(n={}))m.call(n,o)&&r(i,o,n[o]);if(s)for(var o of s(n))x.call(n,o)&&r(i,o,n[o]);return i},l=(i,n)=>p(i,h(n));import{j as e}from"./iframe-DdejNlzI.js";import{useMDXComponents as a}from"./index-HCsHNVjn.js";import{M as j,b as u}from"./WithTooltip-SK46ZJ2J--g0BJBIh.js";import{T as g}from"./Tooltip.stories-CeEyY52B.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjZJjSOR.js";import"./index-C8EA_QYp.js";import"./Button-v63RtYzu.js";import"./Icon-7G4m4hr-.js";import"./get-class-name-BY88G7uf.js";import"./Portal-BzV7bKn2.js";import"./use-click-outside-8qd0NvO6.js";import"./use-element-ids-DqGlRtQ5.js";import"./use-key-press-DVhGtSe5.js";import"./use-tooltip-position-BkAd6m82.js";import"./use-container-dimensions-CDW20nSK.js";function c(i){const n=t(t({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g,title:"Tooltip"}),`
`,e.jsx(n.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tooltip"})," component provides contextual information when users interact with elements. It supports multiple trigger methods and positioning options, with accessible markup and flexible content."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tooltip } from 'chop-logic-components';

const TooltipUsageExample = () => {
  return (
    <Tooltip tooltipContent="This is a tooltip" containerTag="span" visibleOn="hover" id="tooltip">
      <span>Hover over me</span>
    </Tooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"To explain unfamiliar UI elements"}),`
`,e.jsx(n.li,{children:"When you need to provide additional context"}),`
`,e.jsx(n.li,{children:"For showing truncated content on hover"}),`
`,e.jsx(n.li,{children:"To display helpful information without cluttering the interface"}),`
`,e.jsx(n.li,{children:"When you need accessible tooltips that work with keyboard navigation"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA Attributes"}),': Automatically manages aria-describedby and role="tooltip"']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard Navigation"}),": Works with focus trigger for keyboard users"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Management"}),": Tooltip content remains accessible to screen readers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dismissal"}),": Click-triggered tooltips should be dismissible via ESC key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast"}),": Ensure sufficient color contrast for tooltip text/background"]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep tooltip text concise (1-2 sentences max)"}),`
`,e.jsx(n.li,{children:"Use for supplemental information only"}),`
`,e.jsx(n.li,{children:"Ensure tooltips don't obscure important content"}),`
`,e.jsx(n.li,{children:"Test positioning at different screen sizes"}),`
`,e.jsx(n.li,{children:"Prefer hover for most cases, click for complex content"}),`
`,e.jsx(n.li,{children:"Avoid nesting interactive elements in hover-triggered tooltips"}),`
`,e.jsx(n.li,{children:"Consider mobile touch interactions (hover may not work)"}),`
`,e.jsx(n.li,{children:"Match tooltip appearance to your design system"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function P(i={}){const{wrapper:n}=t(t({},a()),i.components);return n?e.jsx(n,l(t({},i),{children:e.jsx(c,t({},i))})):c(i)}export{P as default};
