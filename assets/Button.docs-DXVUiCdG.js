var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(o,n,e)=>n in o?m(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,i=(o,n)=>{for(var e in n||(n={}))h.call(n,e)&&r(o,e,n[e]);if(s)for(var e of s(n))u.call(n,e)&&r(o,e,n[e]);return o},c=(o,n)=>p(o,d(n));import{j as t}from"./iframe-ByKzMmaK.js";import{useMDXComponents as a}from"./index-DeYdrbWI.js";import{M as x,b as j}from"./blocks-Cunk30eN.js";import{B as b}from"./Button.stories-DuwUjTeY.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./Button-Bdkp_iJJ.js";import"./Icon-BZD9s1Z_.js";import"./get-class-name-BY88G7uf.js";import"./Portal-DBIu6jmP.js";import"./use-click-outside-DREiv8zp.js";import"./use-element-ids-CshNHWkw.js";import"./use-key-press-B_vXJT53.js";import"./use-tooltip-position-DVwfAD7L.js";import"./use-container-dimensions-BqWRrAUW.js";function l(o){const n=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:b,title:"Button"}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"Button"})," component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states."]}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import Button, { ButtonView, IconName } from 'chop-logic-components';

const ExampleForm = () => (
  <form>
    <Button
      view={ButtonView.Primary}
      text="Submit"
      icon={IconName.Check}
      onClick={() => console.log('Clicked!')}
    />
    <Button view={ButtonView.Icon} icon={IconName.Settings} label="Settings" />
  </form>
);
`})}),`
`,t.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,t.jsxs(n.ol,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Accessibility"}),": Always provide a label prop for icon-only buttons to ensure screen reader compatibility."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Visual Hierarchy"}),": Use primary buttons for main actions and secondary buttons for less important actions."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"State Management"}),": Use the disabled state appropriately to prevent user confusion."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Tooltips"}),": Add tooltips for buttons that need additional context, especially icon-only buttons."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.em,{children:"Icons"}),": Choose icons that are universally recognizable and match the button's purpose."]}),`
`]}),`
`,t.jsx(n.h2,{id:"props",children:"Props"}),`
`,t.jsx(j,{})]})}function X(o={}){const{wrapper:n}=i(i({},a()),o.components);return n?t.jsx(n,c(i({},o),{children:t.jsx(l,i({},o))})):l(o)}export{X as default};
