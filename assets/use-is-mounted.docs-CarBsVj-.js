import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as r}from"./index-DRR5r8Q4.js";import{M as s}from"./blocks-B97lg12T.js";import{S as i}from"./use-is-mounted.stories-BgDtReGo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";import"./Container.module-DIM0iUPi.js";import"./use-is-mounted-B3mWglcN.js";function o(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,title:"Hooks/useIsMounted"}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isMounted"})," ",e.jsx(n.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function _(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{_ as default};
