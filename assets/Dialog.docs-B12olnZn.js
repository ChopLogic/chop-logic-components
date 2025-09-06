import{j as n}from"./iframe-CcStb-xO.js";import{useMDXComponents as r}from"./index-DRR5r8Q4.js";import{M as l,b as s}from"./blocks-B97lg12T.js";import{D as t}from"./Dialog.stories-Cls7st-y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Icon-wNEFAMcc.js";import"./get-class-name-CHDn80c0.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./Header-BiTp834B.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";import"./Dialog-BLVfCpud.js";import"./use-is-mounted-B3mWglcN.js";import"./use-modal-focus-trap-By3LHFgu.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:t,title:"ChopLogicDialog"}),`
`,n.jsx(e.h1,{id:"choplogicdialog",children:"ChopLogicDialog"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicDialog"})," allows you to render a pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props ",n.jsx(e.code,{children:"isOpened"})," and ",n.jsx(e.code,{children:"onClose"})," are mandatory."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import ChopLogicDialog from 'chop-logic-components';

const ConfirmationDialog = ({ isOpen, onClose }) => {
  return (
    <ChopLogicDialog
      isOpened={isOpen}
      onClose={onClose}
      title="Confirm Action"
    >
      <p>Are you sure you want to perform this action?</p>
      <div className="dialog-actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </ChopLogicDialog>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus is trapped within the dialog when open"}),`
`,n.jsx(e.li,{children:"Focus returns to the triggering element when closed"}),`
`,n.jsx(e.li,{children:"Close button is keyboard accessible"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces dialog title when opened"}),`
`,n.jsx(e.li,{children:'Announces role="dialog" and aria-modal="true"'}),`
`,n.jsx(e.li,{children:"Provides clear close action"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Escape key closes dialog"}),`
`,n.jsx(e.li,{children:"Tab cycles through focusable elements"}),`
`,n.jsx(e.li,{children:"Shift+Tab reverses focus order"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Content Structure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep titles concise"}),`
`,n.jsx(e.li,{children:"Organize content logically"}),`
`,n.jsx(e.li,{children:"Place primary actions on the right"}),`
`,n.jsx(e.li,{children:"Include a visible close button"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Behavior"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Close on overlay click (optional)"}),`
`,n.jsx(e.li,{children:"Prevent body scroll when open"}),`
`,n.jsx(e.li,{children:"Consider stacking order for multiple dialogs"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Load heavy content dynamically"}),`
`,n.jsx(e.li,{children:"Consider virtualization for long content"}),`
`,n.jsx(e.li,{children:"Memoize dialog contents when appropriate"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(s,{})]})}function E(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{E as default};
