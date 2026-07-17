import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t}from"./iframe-GVW8GZpo.js";import{i as n}from"./react-lQfWEMXX.js";import{a as r,d as i,u as a}from"./blocks-CX1fBqQB.js";import{t as o}from"./mdx-react-shim-CNQi3-aD.js";import{n as s,t as c}from"./Form.stories-0hOv5j3S.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Form`}),`
`,(0,d.jsx)(t.h1,{id:`form`,children:`Form`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Form`}),` component provides a structured, accessible form container with built-in state management, validation, pending state tracking, and responsive layout. It supports two submission flows leveraging React 19 APIs.`]}),`
`,(0,d.jsx)(t.h2,{id:`controlled-flow-onsubmit`,children:`Controlled Flow (onSubmit)`}),`
`,(0,d.jsxs)(t.p,{children:[`The controlled flow collects typed `,(0,d.jsx)(t.code,{children:`FormValues`}),` from controlled inputs and passes them to `,(0,d.jsx)(t.code,{children:`onSubmit`}),`. Async handlers automatically trigger a pending state.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Form, TextInput } from "chop-logic-components";

const UserForm = () => {
  const handleSubmit = async (values) => {
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <Form initialValues={{ firstName: "", lastName: "" }} onSubmit={handleSubmit} resetOnSuccess>
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
    </Form>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`action-flow-react-19-form-action`,children:`Action Flow (React 19 form action)`}),`
`,(0,d.jsxs)(t.p,{children:[`The action flow uses React 19's native `,(0,d.jsx)(t.code,{children:`<form action>`}),` pattern. The form receives `,(0,d.jsx)(t.code,{children:`FormData`}),` and runs inside a Transition with automatic pending state via `,(0,d.jsx)(t.code,{children:`useActionState`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Form, TextInput } from "chop-logic-components";

const ContactForm = () => {
  const submitAction = async (prevState, formData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    return response.ok ? "success" : "error";
  };

  return (
    <Form action={submitAction} actionInitialState={null} onActionComplete={(state) => console.log("Result:", state)}>
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="Email" type="email" />
    </Form>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`pending-state`,children:`Pending State`}),`
`,(0,d.jsx)(t.p,{children:`Both flows automatically track pending state during async submission:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Submit and reset buttons are disabled`}),`
`,(0,d.jsxs)(t.li,{children:[`The form applies a `,(0,d.jsx)(t.code,{children:`cl-form_pending`}),` CSS class (reduced opacity)`]}),`
`,(0,d.jsxs)(t.li,{children:[`Child components can read `,(0,d.jsx)(t.code,{children:`isPending`}),` via `,(0,d.jsx)(t.code,{children:`FormContext`}),` or the `,(0,d.jsx)(t.code,{children:`useFormPending`}),` hook`]}),`
`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useFormPending } from "chop-logic-components";

const CustomInput = () => {
  const isPending = useFormPending();
  return <input disabled={isPending} />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Submission Flow`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`onSubmit`}),` for rich client forms that need typed data and controlled inputs`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`action`}),` for simpler forms or when progressive enhancement matters`]}),`
`,(0,d.jsxs)(t.li,{children:[`Do not provide both; if both are set, `,(0,d.jsx)(t.code,{children:`action`}),` takes priority`]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Validation`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide clear error messages on each input`}),`
`,(0,d.jsx)(t.li,{children:`The submit button is automatically disabled when validation fails`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Reset`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`resetOnSuccess`}),` for contact forms or data entry forms`]}),`
`,(0,d.jsx)(t.li,{children:`Omit it for search/filter forms where values should persist`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`All form controls are keyboard accessible`}),`
`,(0,d.jsx)(t.li,{children:`Buttons announce their disabled state to screen readers`}),`
`,(0,d.jsx)(t.li,{children:`Use ARIA attributes for dynamic content updates`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};