import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BxXWrdMh.js";import{i as n,r}from"./react-CD1Hm7R8.js";import{a as i,d as a,u as o}from"./blocks-CKHDPeoR.js";import{n as s,t as c}from"./Button.stories-CBtezQQK.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Button`}),`
`,(0,d.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Button`}),` component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Button, { ButtonView, IconName } from "chop-logic-components";

const ExampleForm = () => (
  <form>
    <Button view={ButtonView.Primary} text="Submit" icon={IconName.Check} onClick={() => console.log("Clicked!")} />
    <Button view={ButtonView.Icon} icon={IconName.Settings} label="Settings" />
  </form>
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Always provide a label prop for icon-only buttons to ensure screen reader compatibility.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Visual Hierarchy`}),`: Use primary buttons for main actions and secondary buttons for less important actions.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`State Management`}),`: Use the disabled state appropriately to prevent user confusion.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Tooltips`}),`: Add tooltips for buttons that need additional context, especially icon-only buttons.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Icons`}),`: Choose icons that are universally recognizable and match the button's purpose.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};