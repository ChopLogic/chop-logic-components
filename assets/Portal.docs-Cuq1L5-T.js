var h=Object.defineProperty,a=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(n,e,o)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,r=(n,e)=>{for(var o in e||(e={}))m.call(e,o)&&i(n,o,e[o]);if(d)for(var o of d(e))x.call(e,o)&&i(n,o,e[o]);return n},l=(n,e)=>a(n,p(e));import{j as t}from"./iframe-7UvCaPuN.js";import{useMDXComponents as c}from"./index-DPb6rMrK.js";import{M as j}from"./blocks-BWlQjjkw.js";import{P as u}from"./Portal.stories-Cd2lbhs7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPLllSZx.js";import"./index-v4pKKiLL.js";import"./Container.module-DIM0iUPi.js";import"./Portal-DHBqON0u.js";function s(n){const e=r(r({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},c()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:u,title:"Portal"}),`
`,t.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"Portal"})," component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new ",t.jsx(e.code,{children:"div"})," to the ",t.jsx(e.code,{children:"document.body"}),`.
The component cleans up by removing the `,t.jsx(e.code,{children:"div"})," from the DOM when it is unmounted."]}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import Portal from 'chop-logic-components';

const MyModalComponent = () => (
  <Portal>
    <div>Hello from portal!</div>
  </Portal>
);

export default MyModalComponent;
`})}),`
`,t.jsx(e.h3,{id:"props",children:"Props"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Prop"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"}),t.jsx(e.th,{children:"Default"}),t.jsx(e.th,{children:"Required"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.code,{children:"children"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.ReactElement"})}),t.jsx(e.td,{children:"React element to be rendered in the portal."}),t.jsx(e.td,{children:t.jsx(e.code,{children:"null"})}),t.jsx(e.td,{children:"No"})]})})]})]})}function T(n={}){const{wrapper:e}=r(r({},c()),n.components);return e?t.jsx(e,l(r({},n),{children:t.jsx(s,r({},n))})):s(n)}export{T as default};
