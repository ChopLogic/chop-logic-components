import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-D4KZ0eBP.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./ErrorMessage.stories-qxQC_DJJ.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`ErrorMessage`}),`
`,(0,d.jsx)(t.h1,{id:`errormessage`,children:`ErrorMessage`}),`
`,(0,d.jsx)(t.p,{children:`A validation error message component designed to display form validation errors with proper accessibility attributes and visibility control.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import ErrorMessage from "chop-logic-components";

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
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Always provide a meaningful errorId that matches the aria-describedby attribute of the associated form field.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Visibility Management`}),`: Use the visible prop to conditionally show/hide errors based on validation state.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Clear Messaging`}),`: Provide specific, actionable error messages that help users understand how to fix the issue.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Form Association`}),`: Ensure the errorId is properly linked to the form field using aria-describedby for screen reader compatibility.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Testing`}),`: Use the testId prop for reliable end-to-end testing of error states.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Styling`}),`: Apply consistent error styling through CSS classes while maintaining high color contrast for readability.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};