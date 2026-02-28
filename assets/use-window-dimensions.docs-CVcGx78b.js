import{j as n}from"./iframe-DP4TfwvB.js";import{useMDXComponents as s}from"./index-Cm-1IS7I.js";import{M as t}from"./blocks-BtqpkElc.js";import{S as r}from"./use-window-dimensions.stories-DoP82mkO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                  */function i(o){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,title:"Hooks/useWindowDimensions"}),`
`,n.jsx(e.h1,{id:"usewindowdimensions",children:"useWindowDimensions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useWindowDimensions"})," hook tracks and provides the current window dimensions."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useWindowDimensions } from "chop-logic-components";

const ExampleComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Window width: {width}px;</p>
      <p>Window height: {height}px;</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsx(e.p,{children:"None."}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"windowDimensions"})," ",n.jsx(e.code,{children:"{ width: number; height: number }"}),": An object containing the current window width and height."]})]})}function l(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{l as default};
