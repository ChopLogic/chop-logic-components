import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-kE0B7DI6.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Form.stories-D6THproi.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Form`}),`
`,(0,d.jsx)(t.h1,{id:`form`,children:`Form`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Form`}),` component provides a structured, accessible form container with built-in state management, validation, and responsive layout capabilities.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Form, TextInput } from "chop-logic-components";

const UserForm = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted with:", values);
  };

  return (
    <Form initialValues={{ firstName: "", lastName: "" }} onSubmit={handleSubmit}>
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
    </Form>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Layout`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use appropriate column counts for form complexity`}),`
`,(0,d.jsx)(t.li,{children:`Group related fields together`}),`
`,(0,d.jsx)(t.li,{children:`Maintain consistent spacing`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Validation`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide clear error messages`}),`
`,(0,d.jsx)(t.li,{children:`Validate on blur and submit`}),`
`,(0,d.jsx)(t.li,{children:`Consider real-time validation for complex forms`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Memoize form components when possible`}),`
`,(0,d.jsx)(t.li,{children:`Consider dynamic loading for large forms`}),`
`,(0,d.jsx)(t.li,{children:`Optimize re-renders with controlled components`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Ensure all form controls are keyboard accessible`}),`
`,(0,d.jsx)(t.li,{children:`Use ARIA attributes for dynamic content updates`}),`
`,(0,d.jsx)(t.li,{children:`Test with screen readers`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};