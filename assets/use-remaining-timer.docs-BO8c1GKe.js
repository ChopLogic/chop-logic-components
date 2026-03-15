import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-SKv-7AQs.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-remaining-timer.stories-a_LDgpu9.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useRemainingTimer`}),`
`,(0,u.jsx)(t.h1,{id:`useremainingtimer`,children:`useRemainingTimer`}),`
`,(0,u.jsx)(t.p,{children:`A React hook that manages a countdown timer with auto-close functionality. It tracks the remaining time as a percentage and automatically triggers a callback when the timer expires. The timer pauses when the element is hovered over, providing a better user experience for time-sensitive content like alerts or notifications.`}),`
`,(0,u.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Auto-Close Functionality`}),`: Automatically closes elements after a specified delay`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Pause on Hover`}),`: Timer pauses when hovering, allowing users time to interact`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Percentage-based Tracking`}),`: Returns remaining time as a percentage (0-100)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Smooth Countdown`}),`: Uses `,(0,u.jsx)(t.code,{children:`requestAnimationFrame`}),` for smooth animations`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Smart State Management`}),`: Handles opened/closed state and hover interactions`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { useRemainingTimer } from "chop-logic-components";
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
`,(0,u.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Parameter`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isOpened`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`Whether the element is currently open`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isHovered`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`Whether the element is being hovered`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`onClose`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`() => void`})}),(0,u.jsx)(t.td,{children:`Callback function when timer expires`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`autoCloseDelay`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`number`})}),(0,u.jsx)(t.td,{children:`Delay in milliseconds before closing (default: 3000)`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`autoClose`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`Whether to auto-close the element (default: true)`})]})]})]}),`
`,(0,u.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,u.jsx)(t.p,{children:`Returns a number between 0 and 100 representing the percentage of time remaining.`}),`
`,(0,u.jsx)(t.h2,{id:`common-use-cases`,children:`Common Use Cases`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Toast Notifications`}),`: Auto-dismiss notifications with progress indicator`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Alert Messages`}),`: Show alerts that automatically disappear`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Temporary Overlays`}),`: Close overlays after a period of time`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Time-sensitive Messages`}),`: Display messages that auto-close with visual feedback`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Undo Actions`}),`: Show undo prompts with countdown timers`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Always manage `,(0,u.jsx)(t.code,{children:`isOpened`}),` and `,(0,u.jsx)(t.code,{children:`isHovered`}),` state in the parent component`]}),`
`,(0,u.jsx)(t.li,{children:`Use the returned percentage to create a visual countdown bar`}),`
`,(0,u.jsx)(t.li,{children:`Combine with CSS transitions for smooth animations`}),`
`,(0,u.jsx)(t.li,{children:`Pause on hover to give users time to read important messages`}),`
`,(0,u.jsx)(t.li,{children:`Use reasonable delays (typically 3-5 seconds for notifications)`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};