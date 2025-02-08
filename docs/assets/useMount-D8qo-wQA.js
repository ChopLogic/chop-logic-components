import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-DXRrZdNQ.js";import{M as i}from"./index-Hm0oqfFC.js";import{U as r}from"./useMount.stories-DgIxygyr.js";import"./index-B_nTefMF.js";import"./iframe-D7y9cp_r.js";import"./index-rrMuti2j.js";import"./index-DUhdrOyO.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./ExampleDivContainer.styled-CBfZBFON.js";import"./index-zvdF3J3f.js";import"./themes-BnN1RKU4.js";import"./index-Da_tQ3Xi.js";function s(o){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:r,title:"Hooks/useMount"}),`
`,n.jsx(e.h1,{id:"usemount",children:"useMount"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useMount"})," hook manages the mounting state of a component with a delay."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { useMount } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useMount(isOpened, 1000);

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
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"isOpened"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"Description: A boolean indicating whether the component is opened or not."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"delay"})," (optional)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"Description: The delay in milliseconds before the component is unmounted. Default is 300."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"isMounted"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Type: ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"Description: A boolean indicating whether the component is mounted or not."}),`
`]}),`
`]}),`
`]})]})}function C(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{C as default};
