import{j as n}from"./iframe-C3nnaSfA.js";import{useMDXComponents as i}from"./index-CLU9rmCe.js";import{M as s}from"./blocks-ByoFTpja.js";import{S as r}from"./use-is-mounted.stories-5aZTh7JR.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Container.module-B-gpr46f.js";import"./Alert-DSv9-R1P.js";import"./use-key-press-C9iHSrXH.js";import"./Button-DNPweYWQ.js";import"./Input-BHIenv_q.js";import"./use-click-outside-D7yaXWQH.js";import"./use-tooltip-position-BG-dpZMc.js";import"./use-container-dimensions-D1IAgZBx.js";import"./use-window-dimensions-BO7pOUZS.js";import"./get-class-name-CHDn80c0.js";import"./Icon-BBWlz8VR.js";import"./Loader-C-BUGyvV.js";import"./Portal-DRzz8wUD.js";import"./Checkbox-DROs7y0z.js";import"./use-reset-form-input-BoFkPjiQ.js";import"./MultiSelect-C4Z7PTl3.js";import"./Select.module-4lHQ571_.js";import"./NumericInput-B7i0SsAs.js";import"./Select-QXfLJeq0.js";import"./TextInput-C-GqJlLx.js";function t(o){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:r,title:"Hooks/useIsMounted"}),`
`,n.jsx(e.h1,{id:"useismounted",children:"useIsMounted"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useIsMounted"})," hook manages the mounting state of a component with a delay."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useState } from 'react';
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
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"isOpened"})}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"Description: A boolean indicating whether the component is opened or not."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"delay"})," (optional)"]}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"Description: The delay in milliseconds before the component is unmounted. Default is 300."}),`
`]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"isMounted"})}),`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"Description: A boolean indicating whether the component is mounted or not."}),`
`]})]})}function X(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{X as default};
