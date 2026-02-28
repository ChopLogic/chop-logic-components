import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as n}from"./index-Cm-1IS7I.js";import{M as o,C as t}from"./blocks-BtqpkElc.js";import{E as a}from"./ErrorMessage.stories-CB1m9H3i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./ErrorMessage-Bcx3cAYD.js";import"./get-class-name-BY88G7uf.js";function i(s){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a,title:"ErrorMessage"}),`
`,e.jsx(r.h1,{id:"errormessage",children:"ErrorMessage"}),`
`,e.jsx(r.p,{children:"A validation error message component designed to display form validation errors with proper accessibility attributes and visibility control."}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import ErrorMessage from "chop-logic-components";

const AgeInput = () => {
  const [age, setAge] = React.useState(0);
  const errorId = "age-input-error";
  const errorMessage = "Enter a number between 1 and 99";
  const isErrorMessageVisible = age < 1 || age > 99;

  return (
    <div>
      <input value={name} onChange={setName} aria-errormessage={errorId} />
      <ErrorMessage errorId={errorId} message={errorMessage} visible={isErrorMessageVisible} />
    </div>
  );
};
`})}),`
`,e.jsx(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Accessibility"}),": Always provide a meaningful errorId that matches the aria-describedby attribute of the associated form field."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Visibility Management"}),": Use the visible prop to conditionally show/hide errors based on validation state."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Clear Messaging"}),": Provide specific, actionable error messages that help users understand how to fix the issue."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Form Association"}),": Ensure the errorId is properly linked to the form field using aria-describedby for screen reader compatibility."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Testing"}),": Use the testId prop for reliable end-to-end testing of error states."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.em,{children:"Styling"}),": Apply consistent error styling through CSS classes while maintaining high color contrast for readability."]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{})]})}function u(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
