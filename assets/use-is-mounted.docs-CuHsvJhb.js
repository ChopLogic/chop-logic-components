import{j as e}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as s}from"./index-C9KoPMn0.js";import{M as r}from"./blocks-QN0Lq6G6.js";import{S as i}from"./use-is-mounted.stories-I25t7hwG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Button-Beo9UBTU.js";import"./Header-CSxk79h1.js";import"./Icon-BhaWZDu4.js";import"./get-class-name-CHDn80c0.js";import"./Loader-CbQUfs1L.js";import"./Portal-BvJ0_6BA.js";import"./use-click-outside-CCfvGGcE.js";import"./use-key-press-BipOIjs9.js";import"./use-tooltip-position-Bo0oDeW_.js";import"./use-container-dimensions-CK3iJYmt.js";import"./use-window-dimensions-CXgdx2fM.js";import"./Checkbox-B3oaHqII.js";import"./use-reset-form-input-KFMp1UJi.js";import"./MultiSelect-BSeV9oRK.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-BK_dM8sf.js";import"./Select-tyqI0LNu.js";import"./TextInput-Ym5_0I8V.js";import"./Container.module-B8PmPZGi.js";import"./use-is-mounted-DaLmmxHE.js";function o(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,title:"Hooks/useIsMounted"}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isMounted"})," ",e.jsx(n.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function A(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{A as default};
