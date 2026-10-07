import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BHwgatZG.js";import{i as n,r}from"./react-BrKu-fdB.js";import{d as i,u as a}from"./blocks-Ba7VtmKu.js";import{n as o,t as s}from"./use-prefers-reduced-motion.stories-RyRSElvr.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{of:o,title:`Hooks/usePrefersReducedMotion`}),`
`,(0,u.jsx)(t.h1,{id:`useprefersreducedmotion`,children:`usePrefersReducedMotion`}),`
`,(0,u.jsx)(t.p,{children:`A React hook that detects whether the user has enabled the "reduce motion" accessibility setting in their operating system. This allows you to provide a more comfortable experience for users who are sensitive to motion.`}),`
`,(0,u.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Real-time Detection`}),`: Automatically updates when the user toggles their system preference`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`SSR-Compatible Pattern`}),`: Uses lazy initialization for the initial state`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Automatic Cleanup`}),`: Properly removes event listeners on unmount`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Zero Dependencies`}),`: Uses only native browser APIs`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { usePrefersReducedMotion } from "chop-logic-components";

const AnimatedComponent = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      style={{
        transition: prefersReducedMotion ? "none" : "transform 0.3s ease",
      }}
    >
      Content adapts to motion preferences
    </div>
  );
};
`})}),`
`,(0,u.jsx)(t.h2,{id:`return-value`,children:`Return Value`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsx)(t.tbody,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsxs)(t.td,{children:[(0,u.jsx)(t.code,{children:`true`}),` if reduced motion is preferred, `,(0,u.jsx)(t.code,{children:`false`}),` otherwise`]})]})})]}),`
`,(0,u.jsx)(t.h2,{id:`who-benefits-from-this`,children:`Who Benefits From This?`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`People with vestibular disorders`}),` — Animations can trigger vertigo, dizziness, and nausea`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`People with seizure disorders`}),` — Flashing content can be a trigger for photosensitive epilepsy`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`People with ADHD or cognitive sensitivities`}),` — Animations can be distracting`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Anyone who prefers less motion`}),` — Some users simply find animations unnecessary`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsx)(t.h3,{id:`skip-decorative-animations`,children:`Skip Decorative Animations`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`const prefersReducedMotion = usePrefersReducedMotion();

// CSS approach
const style = {
  animation: prefersReducedMotion ? "none" : "bounce 1s infinite",
};

// Or skip entirely
if (!prefersReducedMotion) {
  triggerCelebrationAnimation();
}
`})}),`
`,(0,u.jsx)(t.h3,{id:`provide-instant-feedback-instead-of-delays`,children:`Provide Instant Feedback Instead of Delays`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`const handleClick = () => {
  if (prefersReducedMotion) {
    // Execute immediately
    performAction();
    return;
  }

  // Show animation, then execute
  showFlashAnimation();
  setTimeout(performAction, 150);
};
`})}),`
`,(0,u.jsx)(t.h3,{id:`keep-essential-motion-remove-decorative-motion`,children:`Keep Essential Motion, Remove Decorative Motion`}),`
`,(0,u.jsx)(t.p,{children:`Not all motion should be removed. Keep motion that conveys meaning:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`✅ Keep: Progress indicators, loading states`}),`
`,(0,u.jsx)(t.li,{children:`✅ Keep: Scroll position indicators`}),`
`,(0,u.jsx)(t.li,{children:`❌ Remove: Parallax effects, bouncing elements`}),`
`,(0,u.jsx)(t.li,{children:`❌ Remove: Auto-playing carousels, decorative animations`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`testing`,children:`Testing`}),`
`,(0,u.jsx)(t.p,{children:`To test this hook, toggle the reduced motion setting on your system:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`macOS`}),`: System Settings → Accessibility → Display → Reduce motion`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Windows`}),`: Settings → Accessibility → Visual effects → Animation effects (off)`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`iOS`}),`: Settings → Accessibility → Motion → Reduce Motion`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Android`}),`: Settings → Accessibility → Remove animations`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`related`,children:`Related`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion`,rel:`nofollow`,children:`MDN: prefers-reduced-motion`})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html`,rel:`nofollow`,children:`WCAG 2.1 Success Criterion 2.3.3: Animation from Interactions`})}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};