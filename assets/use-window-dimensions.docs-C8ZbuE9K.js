var c=Object.defineProperty,p=Object.defineProperties;var a=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(o,n,i)=>n in o?c(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,s=(o,n)=>{for(var i in n||(n={}))x.call(n,i)&&r(o,i,n[i]);if(t)for(var i of t(n))u.call(n,i)&&r(o,i,n[i]);return o},d=(o,n)=>p(o,a(n));import{j as e}from"./iframe-BQgxzBO6.js";import{useMDXComponents as m}from"./index-BzM5vXoH.js";import{M as l}from"./blocks-DA9LG0YA.js";import{S as w}from"./use-window-dimensions.stories-DJbUiGxr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1-RhH5Y.js";import"./index-D-7EMssw.js";import"./Container.module-DIM0iUPi.js";import"./use-window-dimensions-BK1woJ1I.js";function h(o){const n=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong"},m()),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:w,title:"Hooks/useWindowDimensions"}),`
`,e.jsx(n.h1,{id:"usewindowdimensions",children:"useWindowDimensions"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useWindowDimensions"})," hook tracks and provides the current window dimensions."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useWindowDimensions } from 'chop-logic-components';

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
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsx(n.p,{children:"None."}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"windowDimensions"})," ",e.jsx(n.code,{children:"{ width: number; height: number }"}),": An object containing the current window width and height."]})]})}function E(o={}){const{wrapper:n}=s(s({},m()),o.components);return n?e.jsx(n,d(s({},o),{children:e.jsx(h,s({},o))})):h(o)}export{E as default};
