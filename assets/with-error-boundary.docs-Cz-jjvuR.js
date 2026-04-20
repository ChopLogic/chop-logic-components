import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./with-error-boundary.stories-DEZT6iwG.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:s,title:`withErrorBoundary`}),`
`,(0,d.jsx)(t.h1,{id:`witherrorboundary`,children:`withErrorBoundary`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`withErrorBoundary`}),` higher-order component always wraps your component in a React error boundary. When a rendering error occurs in that subtree, the fallback UI is the design-system `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`ErrorMessage`})}),` atom (visible) instead of breaking the surrounding app. Optional `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`errorMessage`})}),` sets the message string; optional `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`onError`})}),` runs once from `,(0,d.jsx)(t.code,{children:`componentDidCatch`}),` after an error is caught.`]}),`
`,(0,d.jsxs)(t.p,{children:[`React error boundaries do `,(0,d.jsx)(t.strong,{children:`not`}),` catch errors inside event handlers, async code, or server rendering unless those errors are surfaced into render (for example via state).`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { withErrorBoundary } from "chop-logic-components";

type Props = { userId: string };

const Profile: React.FC<Props> = ({ userId }) => {
  // ...
  return <section>{userId}</section>;
};

const SafeProfile = withErrorBoundary(Profile);

const Example = () => (
  <SafeProfile
    userId="123"
    errorMessage="Could not load this profile."
    onError={() => {
      /* e.g. log to monitoring */
    }}
  />
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Scope`}),`: Wrap feature or route-sized chunks so a failure does not hide the entire page unless that is intentional.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Messages`}),`: Use `,(0,d.jsx)(t.code,{children:`errorMessage`}),` for user-facing, short copy; rely on `,(0,d.jsx)(t.code,{children:`onError`}),` (or product logging) for diagnostics, not on raw stack traces in the UI.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Recovery`}),`: The boundary stays in the error state until remount (e.g. navigation or `,(0,d.jsx)(t.code,{children:`key`}),` change). Design a retry or refresh path if users need to recover without a full reload.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsxs)(t.p,{children:[`The controls below drive the `,(0,d.jsx)(t.strong,{children:`demo`}),` wrapper. Your wrapped component receives its own props; the HOC adds optional `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`errorMessage`})}),` and `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`onError`})}),`. Use the `,(0,d.jsx)(t.strong,{children:`simulateThrow`}),` control only in this story to force a render error and inspect the fallback.`]}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),c()}))();export{u as default};