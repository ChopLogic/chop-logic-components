import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as r}from"./index-Cm-1IS7I.js";import{M as s,C as i}from"./blocks-BtqpkElc.js";import{P as l}from"./Portal.stories-BxWu_hSI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                  */import"./Portal-GDtD3Swj.js";function t(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"Portal"}),`
`,e.jsx(n.h1,{id:"portal",children:"Portal"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Portal"})," component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new ",e.jsx(n.code,{children:"div"})," to the ",e.jsx(n.code,{children:"document.body"}),`.
The component cleans up by removing the `,e.jsx(n.code,{children:"div"})," from the DOM when it is unmounted."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Portal from "chop-logic-components";

const MyModalComponent = () => (
  <Portal>
    <div>Hello from portal!</div>
  </Portal>
);

export default MyModalComponent;
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Ensure portal content is properly accessible via keyboard navigation and screen readers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Z-index Management"}),": Coordinate z-index values across portal content to maintain proper layering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Event Bubbling"}),": Remember that events from portal content bubble through the React tree, not the DOM tree."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Container Selection"}),": Use specific container elements when you need precise control over portal placement."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Cleanup"}),": Portal content is automatically cleaned up when the component unmounts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Use Cases"}),": Ideal for modals, tooltips, dropdowns, and any content that needs to escape overflow:hidden or z-index constraints."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{})]})}function f(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{f as default};
