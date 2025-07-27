import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as s}from"./index-B2uT0Rcg.js";import{M as r}from"./blocks-CLsIill3.js";import{S as i}from"./use-is-mounted.stories-DNRTYbfW.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Button-BqxMyPGy.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Checkbox-Do2bbQD4.js";import"./use-reset-form-input-D1XtAl5p.js";import"./MultiSelect-nFOyaBs1.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DZkiHKI_.js";import"./Select-CFTdNQer.js";import"./TextInput-CfNjb3Po.js";import"./Container.module-B8PmPZGi.js";import"./use-is-mounted-2drd75fE.js";function o(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,title:"Hooks/useIsMounted"}),`
`,e.jsx(n.h1,{id:"useismounted",children:"useIsMounted"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useIsMounted"})," hook manages the mounting state of a component with a delay."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { useIsMounted } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useIsMounted(isOpened, 1000);

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>Toggle Component</button>
      {isMounted && <div>Component is mounted!</div>}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Param"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"A boolean indicating whether the component is opened or not."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"delay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The delay in milliseconds before the component is unmounted. Default is 300."})]})]})]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isMounted"})," ",e.jsx(n.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function X(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{X as default};
