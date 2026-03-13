import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-kE0B7DI6.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Portal.stories-24I4_WVg.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Portal`}),`
`,(0,d.jsx)(t.h1,{id:`portal`,children:`Portal`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Portal`}),` component is a helper container for rendering modals, tooltips, popups and other elements on top of the main page. The portal is created dynamically by appending a new `,(0,d.jsx)(t.code,{children:`div`}),` to the `,(0,d.jsx)(t.code,{children:`document.body`}),`.
The component cleans up by removing the `,(0,d.jsx)(t.code,{children:`div`}),` from the DOM when it is unmounted.`]}),`
`,(0,d.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Portal from "chop-logic-components";

const MyModalComponent = () => (
  <Portal>
    <div>Hello from portal!</div>
  </Portal>
);

export default MyModalComponent;
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Ensure portal content is properly accessible via keyboard navigation and screen readers.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Z-index Management`}),`: Coordinate z-index values across portal content to maintain proper layering.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Event Bubbling`}),`: Remember that events from portal content bubble through the React tree, not the DOM tree.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Container Selection`}),`: Use specific container elements when you need precise control over portal placement.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Cleanup`}),`: Portal content is automatically cleaned up when the component unmounts.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Use Cases`}),`: Ideal for modals, tooltips, dropdowns, and any content that needs to escape overflow:hidden or z-index constraints.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};