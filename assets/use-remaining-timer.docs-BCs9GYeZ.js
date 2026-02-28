import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as r}from"./index-Cm-1IS7I.js";import{M as i}from"./blocks-BtqpkElc.js";import{S as o}from"./use-remaining-timer.stories-B4uaYOe7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                  */import"./Button-BkZxBmQE.js";import"./get-class-name-BY88G7uf.js";import"./Portal-GDtD3Swj.js";import"./use-click-outside-yBZhbwYK.js";import"./use-element-ids-BwRwfIW9.js";import"./use-key-press-Qz_3YznQ.js";import"./use-tooltip-position-BNnrnIuP.js";import"./use-container-dimensions-BdWbXCjt.js";import"./Icon-DgdWz_xl.js";import"./NumericInput-DEJXQvg1.js";import"./ErrorMessage-Bcx3cAYD.js";import"./Input-OJw9X-Ut.js";import"./Label-GsN7KfjG.js";import"./icon-name-DofyCo9k.js";import"./use-reset-form-input-CGOMNfpm.js";import"./use-remaining-timer-CqCoWFpt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,title:"Hooks/useRemainingTimer"}),`
`,e.jsx(n.h1,{id:"useremainingtimer",children:"useRemainingTimer"}),`
`,e.jsx(n.p,{children:"A React hook that manages a countdown timer with auto-close functionality. It tracks the remaining time as a percentage and automatically triggers a callback when the timer expires. The timer pauses when the element is hovered over, providing a better user experience for time-sensitive content like alerts or notifications."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-Close Functionality"}),": Automatically closes elements after a specified delay"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pause on Hover"}),": Timer pauses when hovering, allowing users time to interact"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Percentage-based Tracking"}),": Returns remaining time as a percentage (0-100)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smooth Countdown"}),": Uses ",e.jsx(n.code,{children:"requestAnimationFrame"})," for smooth animations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart State Management"}),": Handles opened/closed state and hover interactions"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRemainingTimer } from "chop-logic-components";
import { useRef, useState } from "react";

const AutoCloseAlert = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);

  const remainingPercentage = useRemainingTimer({
    isOpened,
    isHovered,
    onClose: () => setIsOpened(false),
    autoCloseDelay: 5000,
  });

  if (!isOpened) return null;

  return (
    <div
      ref={alertRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "1rem",
        border: "1px solid #2196f3",
        borderRadius: "4px",
        background: "#e3f2fd",
      }}
    >
      <div>Alert message here</div>
      <div
        style={{
          height: "3px",
          background: "#2196f3",
          marginTop: "0.5rem",
          width: \`\${remainingPercentage}%\`,
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Parameter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Whether the element is currently open"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isHovered"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Whether the element is being hovered"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"Callback function when timer expires"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"autoCloseDelay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Delay in milliseconds before closing (default: 3000)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"autoClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Whether to auto-close the element (default: true)"})]})]})]}),`
`,e.jsx(n.h2,{id:"return-value",children:"Return Value"}),`
`,e.jsx(n.p,{children:"Returns a number between 0 and 100 representing the percentage of time remaining."}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toast Notifications"}),": Auto-dismiss notifications with progress indicator"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alert Messages"}),": Show alerts that automatically disappear"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Temporary Overlays"}),": Close overlays after a period of time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Time-sensitive Messages"}),": Display messages that auto-close with visual feedback"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Undo Actions"}),": Show undo prompts with countdown timers"]}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always manage ",e.jsx(n.code,{children:"isOpened"})," and ",e.jsx(n.code,{children:"isHovered"})," state in the parent component"]}),`
`,e.jsx(n.li,{children:"Use the returned percentage to create a visual countdown bar"}),`
`,e.jsx(n.li,{children:"Combine with CSS transitions for smooth animations"}),`
`,e.jsx(n.li,{children:"Pause on hover to give users time to read important messages"}),`
`,e.jsx(n.li,{children:"Use reasonable delays (typically 3-5 seconds for notifications)"}),`
`]})]})}function D(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{D as default};
