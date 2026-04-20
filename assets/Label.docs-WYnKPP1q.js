import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./Label.stories-bmqbFwUK.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Atoms/Label`}),`
`,(0,d.jsx)(t.h1,{id:`label`,children:`Label`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Label`}),` component provides an accessible label for form inputs with optional icons and required field indicators.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Label, IconName } from "chop-logic-components";

const FormField = () => (
  <div>
    <Label label="Email" required={true} inputId="email-input" icon={IconName.Mail} iconPosition="left" />
    <input id="email-input" type="email" />
  </div>
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Association`}),`: Always associate labels with form controls using htmlFor/inputId. Ensure inputId matches the ID of the associated control.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Required Fields`}),`: Use required prop to indicate mandatory fields. The asterisk (*) is wrapped in `,(0,d.jsx)(t.code,{children:`<abbr>`}),` with `,(0,d.jsx)(t.code,{children:`title="required"`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Screen Readers`}),`: Hidden text (when isTextHidden=true) remains accessible. Icons should have appropriate alt text or be decorative.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Consistency`}),`: Maintain consistent icon positioning throughout your application. Standardize required field indicators.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Placement`}),`: Position labels close to their associated controls. Consider vertical alignment for complex forms.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};