import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-D4KZ0eBP.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./EditableText.stories-UW90ia9I.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`EditableText`}),`
`,(0,d.jsx)(t.h1,{id:`editabletext`,children:`EditableText`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`EditableText`}),` component allows users to seamlessly edit inline content by clicking on it. It transitions from a read-only view to an editable input field.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import EditableText from "chop-logic-components";

const UserProfile = () => {
  const [name, setName] = React.useState("John Doe");

  return (
    <div>
      <h2>
        <EditableText value={name} onChange={setName} placeholder="Enter your name" />
      </h2>
    </div>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Always provide a meaningful id and placeholder for better screen reader support.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`User Experience`}),`: Use autoSelectTextOnEditMode for fields where users are likely to replace the entire content.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Multi-line Content`}),`: Enable multiline for longer text content like descriptions or comments.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`State Management`}),`: Handle the onChange callback to update your application state when text changes.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Edit Mode Control`}),`: Use the isEditMode prop to programmatically control the editing state.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Read-Only States`}),`: Use readOnly when you want to show editable-looking text that cannot be modified.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};