import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DqTfRATz.js";import{i as n,r}from"./react-BgS42mAf.js";import{a as i,d as a,u as o}from"./blocks-qnwxTEKe.js";import{n as s,t as c}from"./Form.stories-CXRi22k2.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Form`}),`
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
`,(0,d.jsx)(t.h2,{id:`loading-state-propagation`,children:`Loading State Propagation`}),`
`,(0,d.jsxs)(t.p,{children:[`When the Form is in a pending state (e.g., during async submission), it automatically propagates `,(0,d.jsx)(t.code,{children:`isLoading=true`}),` to all nested interactive components via `,(0,d.jsx)(t.code,{children:`FormContext`}),`. This provides visual feedback without requiring you to manually set `,(0,d.jsx)(t.code,{children:`isLoading`}),` on each field.`]}),`
`,(0,d.jsx)(t.h3,{id:`visual-treatment-by-component-type`,children:`Visual Treatment by Component Type`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Component Type`}),(0,d.jsx)(t.th,{children:`Loading Visual`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`TextInput, NumericInput, Search, Select, MultiSelect`}),(0,d.jsx)(t.td,{children:`Shimmer animation over input area`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Checkbox, Switch`}),(0,d.jsx)(t.td,{children:`Disabled-like appearance (reduced opacity)`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Button (with icon)`}),(0,d.jsx)(t.td,{children:`Spinning loader icon replaces the regular icon`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Button (without icon)`}),(0,d.jsx)(t.td,{children:`Disabled-like appearance`})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`explicit-override`,children:`Explicit Override`}),`
`,(0,d.jsxs)(t.p,{children:[`If you need a specific component to NOT show loading state during form submission, you can explicitly set `,(0,d.jsx)(t.code,{children:`isLoading={false}`}),` on that component. The explicit prop always takes precedence over the context value.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`<Form action={submitAction}>
  <TextInput name="name" label="Name" />
  {/* This input will NOT show loading state even during form submission */}
  <TextInput name="email" label="Email" isLoading={false} />
</Form>
`})}),`
`,(0,d.jsx)(t.h2,{id:`loading-state-vs-disabled-state`,children:`Loading State vs Disabled State`}),`
`,(0,d.jsx)(t.p,{children:`Understanding when to use loading state versus disabled state helps provide clear user feedback:`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Use Loading State When`}),(0,d.jsx)(t.th,{children:`Use Disabled State When`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`An async operation is in progress`}),(0,d.jsx)(t.td,{children:`User lacks permission to interact`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Waiting for data to load or submit`}),(0,d.jsx)(t.td,{children:`Form validation has failed`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Processing user input server-side`}),(0,d.jsx)(t.td,{children:`A prerequisite action is required first`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Fetching options for a select`}),(0,d.jsx)(t.td,{children:`Field is not applicable based on other selections`})]})]})]}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`Key differences:`})}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Loading state`}),` indicates a temporary wait; the user `,(0,d.jsx)(t.em,{children:`will`}),` be able to interact once the operation completes`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Disabled state`}),` indicates the user `,(0,d.jsx)(t.em,{children:`cannot`}),` interact, often due to permissions or validation`]}),`
`]}),`
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
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};