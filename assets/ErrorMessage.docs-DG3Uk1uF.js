var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var t=(s,e,i)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,n=(s,e)=>{for(var i in e||(e={}))p.call(e,i)&&t(s,i,e[i]);if(o)for(var i of o(e))g.call(e,i)&&t(s,i,e[i]);return s},a=(s,e)=>h(s,m(e));import{j as r}from"./iframe-DJejKD7f.js";import{useMDXComponents as c}from"./index-C1C3GIxM.js";import{M as x,b as j}from"./blocks-BfAV1-Im.js";import{E as u}from"./ErrorMessage.stories-P8U8h_vV.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./ErrorMessage-CQXPHDFV.js";import"./get-class-name-BY88G7uf.js";function l(s){const e=n(n({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),s.components);return r.jsxs(r.Fragment,{children:[r.jsx(x,{of:u,title:"ErrorMessage"}),`
`,r.jsx(e.h1,{id:"errormessage",children:"ErrorMessage"}),`
`,r.jsx(e.p,{children:"A validation error message component designed to display form validation errors with proper accessibility attributes and visibility control."}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import ErrorMessage from 'chop-logic-components';

const AgeInput = () => {
  const [age, setAge] = React.useState(0);
  const errorId = 'age-input-error';
  const errorMessage = 'Enter a number between 1 and 99';
  const isErrorMessageVisible = age < 1 || age > 99;

  return (
    <div>
      <input value={name} onChange={setName} aria-errormessage={errorId} />
      <ErrorMessage errorId={errorId} message={errorMessage} visible={isErrorMessageVisible} />
    </div>
  );
};
`})}),`
`,r.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Accessibility"}),": Always provide a meaningful errorId that matches the aria-describedby attribute of the associated form field."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Visibility Management"}),": Use the visible prop to conditionally show/hide errors based on validation state."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Clear Messaging"}),": Provide specific, actionable error messages that help users understand how to fix the issue."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Form Association"}),": Ensure the errorId is properly linked to the form field using aria-describedby for screen reader compatibility."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Testing"}),": Use the testId prop for reliable end-to-end testing of error states."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.em,{children:"Styling"}),": Apply consistent error styling through CSS classes while maintaining high color contrast for readability."]}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(j,{})]})}function S(s={}){const{wrapper:e}=n(n({},c()),s.components);return e?r.jsx(e,a(n({},s),{children:r.jsx(l,n({},s))})):l(s)}export{S as default};
