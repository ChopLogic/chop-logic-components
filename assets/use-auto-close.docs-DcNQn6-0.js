import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-SKv-7AQs.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Hooks/useAutoClose`}),`
`,(0,c.jsx)(t.h1,{id:`useautoclose`,children:`useAutoClose`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`useAutoClose`}),` hook provides automatic closure functionality for popups, modals, tooltips, and other temporary UI elements after a specified delay.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useAutoClose } from "chop-logic-components";

const MyPopup = ({ isOpen, onClose }) => {
  useAutoClose({
    isOpened: isOpen,
    onClose,
    autoClose: true,
    autoCloseDelay: 5000, // 5 seconds
  });

  return isOpen ? <div className="popup">Content</div> : null;
};
`})}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Parameter`}),(0,c.jsx)(t.th,{children:`Type`}),(0,c.jsx)(t.th,{children:`Description`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`isOpened`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:`Controls whether the timer should be active (true) or cleared (false)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`onClose`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`() => void`})}),(0,c.jsx)(t.td,{children:`Callback function to execute when the timer completes`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`autoClose`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`boolean`})}),(0,c.jsx)(t.td,{children:`Whether auto-closing functionality should be enabled`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`autoCloseDelay`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`number`})}),(0,c.jsxs)(t.td,{children:[`Delay in milliseconds before triggering `,(0,c.jsx)(t.code,{children:`onClose`})]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,c.jsx)(t.p,{children:`This hook does not return any value.`}),`
`,(0,c.jsx)(t.h2,{id:`note`,children:`Note`}),`
`,(0,c.jsxs)(t.p,{children:[`For auto-closing functionality with a countdown timer that can be paused and resumed (e.g., when hovering), consider using the `,(0,c.jsx)(t.a,{href:`/docs/hooks-useremainingtimer--docs`,children:(0,c.jsx)(t.code,{children:`useRemainingTimer`})}),` hook instead.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};