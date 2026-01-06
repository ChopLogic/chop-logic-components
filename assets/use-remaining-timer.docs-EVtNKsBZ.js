var c=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var o=(s,e,t)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,i=(s,e)=>{for(var t in e||(e={}))x.call(e,t)&&o(s,t,e[t]);if(r)for(var t of r(e))j.call(e,t)&&o(s,t,e[t]);return s},l=(s,e)=>h(s,m(e));import{j as n}from"./iframe-C2ng--48.js";import{useMDXComponents as d}from"./index-BFeXBWok.js";import{M as u}from"./blocks-_53u4lk0.js";import{S as p}from"./use-remaining-timer.stories-DdLwkISD.js";import"./preload-helper-BDBacUwf.js";import"./index-CfInEO2Z.js";import"./index-BcQsO8Kp.js";import"./Button-SMZXn4mz.js";import"./Icon-Fv1_a00z.js";import"./get-class-name-BY88G7uf.js";import"./Portal-ynggV4Mo.js";import"./use-click-outside-DnwnfP2B.js";import"./use-element-ids-DvdSYpiS.js";import"./use-key-press-CdtK2Nxf.js";import"./use-tooltip-position-rLGQPi0O.js";import"./use-container-dimensions-Bof2D1hE.js";import"./Container.module-3iQ-V5w_.js";import"./use-remaining-timer-CxFt_Cuy.js";function a(s){const e=i(i({code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:p,title:"Hooks/useRemainingTimer"}),`
`,n.jsx(e.h1,{id:"useremainingtimer",children:"useRemainingTimer"}),`
`,n.jsx(e.p,{children:"A React hook that manages a countdown timer with auto-close functionality. It tracks the remaining time as a percentage and automatically triggers a callback when the timer expires. The timer pauses when the element is hovered over, providing a better user experience for time-sensitive content like alerts or notifications."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Auto-Close Functionality"}),": Automatically closes elements after a specified delay"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pause on Hover"}),": Timer pauses when hovering, allowing users time to interact"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Percentage-based Tracking"}),": Returns remaining time as a percentage (0-100)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smooth Countdown"}),": Uses ",n.jsx(e.code,{children:"requestAnimationFrame"})," for smooth animations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smart State Management"}),": Handles opened/closed state and hover interactions"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useRemainingTimer } from 'chop-logic-components';
import { useRef, useState } from 'react';

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
        padding: '1rem',
        border: '1px solid #2196f3',
        borderRadius: '4px',
        background: '#e3f2fd',
      }}
    >
      <div>Alert message here</div>
      <div
        style={{
          height: '3px',
          background: '#2196f3',
          marginTop: '0.5rem',
          width: \`\${remainingPercentage}%\`,
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Parameter"}),n.jsx(e.th,{children:"Type"}),n.jsx(e.th,{children:"Description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isOpened"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"Whether the element is currently open"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"isHovered"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"boolean"})}),n.jsx(e.td,{children:"Whether the element is being hovered"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"onClose"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"() => void"})}),n.jsx(e.td,{children:"Callback function when timer expires"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"autoCloseDelay"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"number"})}),n.jsx(e.td,{children:"Delay in milliseconds before closing (default: 3000)"})]})]})]}),`
`,n.jsx(e.h2,{id:"return-value",children:"Return Value"}),`
`,n.jsx(e.p,{children:"Returns a number between 0 and 100 representing the percentage of time remaining."}),`
`,n.jsx(e.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast Notifications"}),": Auto-dismiss notifications with progress indicator"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert Messages"}),": Show alerts that automatically disappear"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Temporary Overlays"}),": Close overlays after a period of time"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Time-sensitive Messages"}),": Display messages that auto-close with visual feedback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Undo Actions"}),": Show undo prompts with countdown timers"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Always manage ",n.jsx(e.code,{children:"isOpened"})," and ",n.jsx(e.code,{children:"isHovered"})," state in the parent component"]}),`
`,n.jsx(e.li,{children:"Use the returned percentage to create a visual countdown bar"}),`
`,n.jsx(e.li,{children:"Combine with CSS transitions for smooth animations"}),`
`,n.jsx(e.li,{children:"Pause on hover to give users time to read important messages"}),`
`,n.jsx(e.li,{children:"Use reasonable delays (typically 3-5 seconds for notifications)"}),`
`]})]})}function F(s={}){const{wrapper:e}=i(i({},d()),s.components);return e?n.jsx(e,l(i({},s),{children:n.jsx(a,i({},s))})):a(s)}export{F as default};
