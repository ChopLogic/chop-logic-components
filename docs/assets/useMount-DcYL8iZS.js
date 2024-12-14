import{j as n}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import{ae as i,aj as r,ak as a}from"./index-CeWRiITB.js";import{U as m,D as p}from"./useMount.stories-DsgzmHWa.js";import"./index-qVDZzPEr.js";import"./iframe-CLHZ7hV-.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./index-D9uBcq_H.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m,title:"Hooks/useMount"}),`
`,n.jsx(e.h1,{id:"usemount",children:"useMount"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useMount"})," hook manages the mounting state of a component with a delay."]}),`
`,n.jsx(r,{children:n.jsx(a,{of:p})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
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
`,n.jsx(e.h2,{id:"params",children:"Params"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"isOpened"}),`
Type: boolean
Description: A boolean indicating whether the component is opened or not.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"delay"}),`
Type: number
Description: The delay in milliseconds before the component is unmounted. Default is 300.`]}),`
`]})]})}function y(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{y as default};
