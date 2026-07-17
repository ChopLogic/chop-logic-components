import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t}from"./iframe-GVW8GZpo.js";import{i as n}from"./react-lQfWEMXX.js";import{a as r,d as i,u as a}from"./blocks-CX1fBqQB.js";import{t as o}from"./mdx-react-shim-CNQi3-aD.js";import{n as s,t as c}from"./Avatar.stories-ANWdDkEl.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Atoms/Avatar`}),`
`,(0,d.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,d.jsx)(t.p,{children:`A small circular image component representing an author or user. Supports linking, fallback behavior when the image fails to load, and accessible labeling.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Avatar } from 'chop-logic-components';
import { LinkTarget } from 'chop-logic-components';

// Basic avatar
<Avatar
  name="Jane Doe"
  imageUrl="https://example.com/avatar.jpg"
/>

// Avatar with link
<Avatar
  name="Jane Doe"
  tooltip="jane.doe@example.com"
  imageUrl="https://example.com/avatar.jpg"
  link="https://example.com/profile/jane"
  linkTarget={LinkTarget.Blank}
/>
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: The component automatically uses the `,(0,d.jsx)(t.code,{children:`name`}),` prop as `,(0,d.jsx)(t.code,{children:`alt`}),` text on the image, ensuring screen readers can identify the person represented.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Fallback Behavior`}),`: When the image URL is broken or unavailable, the component displays the uppercase first letter of the name in a styled circle. The fallback includes an `,(0,d.jsx)(t.code,{children:`aria-label`}),` for screen reader support.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`External Links`}),`: When `,(0,d.jsx)(t.code,{children:`linkTarget`}),` is set to `,(0,d.jsx)(t.code,{children:`_blank`}),`, the component adds `,(0,d.jsx)(t.code,{children:`rel="noopener noreferrer"`}),` for security and appends "(opens in new window)" to the `,(0,d.jsx)(t.code,{children:`aria-label`}),` for screen reader users.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Keyboard Navigation`}),`: Linked avatars use a semantic `,(0,d.jsx)(t.code,{children:`<a>`}),` element, making them naturally focusable and navigable via keyboard.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};