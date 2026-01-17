var d=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,r=(o,e)=>{for(var t in e||(e={}))m.call(e,t)&&i(o,t,e[t]);if(s)for(var t of s(e))x.call(e,t)&&i(o,t,e[t]);return o},l=(o,e)=>p(o,h(e));import{j as n}from"./iframe-ByKzMmaK.js";import{useMDXComponents as c}from"./index-DeYdrbWI.js";import{M as j,b as u}from"./blocks-Cunk30eN.js";import{P as f}from"./Portal.stories-rMkUkje5.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./Container.module-3iQ-V5w_.js";import"./Portal-DBIu6jmP.js";function a(o){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre"},c()),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f,title:"Portal"}),`
`,n.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Portal"})," component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new ",n.jsx(e.code,{children:"div"})," to the ",n.jsx(e.code,{children:"document.body"}),`.
The component cleans up by removing the `,n.jsx(e.code,{children:"div"})," from the DOM when it is unmounted."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Portal from 'chop-logic-components';

const MyModalComponent = () => (
  <Portal>
    <div>Hello from portal!</div>
  </Portal>
);

export default MyModalComponent;
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Ensure portal content is properly accessible via keyboard navigation and screen readers."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Z-index Management"}),": Coordinate z-index values across portal content to maintain proper layering."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Event Bubbling"}),": Remember that events from portal content bubble through the React tree, not the DOM tree."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Container Selection"}),": Use specific container elements when you need precise control over portal placement."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Cleanup"}),": Portal content is automatically cleaned up when the component unmounts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Use Cases"}),": Ideal for modals, tooltips, dropdowns, and any content that needs to escape overflow:hidden or z-index constraints."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function R(o={}){const{wrapper:e}=r(r({},c()),o.components);return e?n.jsx(e,l(r({},o),{children:n.jsx(a,r({},o))})):a(o)}export{R as default};
