import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as i,af as r,ag as a}from"./index---6MgSDT.js";import{U as d,D as m}from"./useMount.stories-Bt7xvAS3.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./index-C6_MqhCY.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d,title:"Hooks/useMount"}),`
`,n.jsx(e.h1,{id:"usemount",children:"useMount"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useMount"})," hook manages the mounting state of a component with a delay."]}),`
`,n.jsx(r,{children:n.jsx(a,{of:m})}),`
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
`]})]})}function D(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{D as default};
