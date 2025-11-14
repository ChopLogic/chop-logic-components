var l=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(n,e,s)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,o=(n,e)=>{for(var s in e||(e={}))p.call(e,s)&&i(n,s,e[s]);if(t)for(var s of t(e))g.call(e,s)&&i(n,s,e[s]);return n},a=(n,e)=>h(n,m(e));import{j as r}from"./iframe-31bCIIM-.js";import{useMDXComponents as d}from"./index-vnX_0a_R.js";import{M as u,b as x}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{E as j}from"./ErrorMessage.stories-D4k7pcRq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./ErrorMessage-BRRNjNnd.js";import"./get-class-name-BY88G7uf.js";function c(n){const e=o(o({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),n.components);return r.jsxs(r.Fragment,{children:[r.jsx(u,{of:j,title:"ErrorMessage"}),`
`,r.jsx(e.h1,{id:"errormessage",children:"ErrorMessage"}),`
`,r.jsxs(e.p,{children:["The ",r.jsx(e.code,{children:"ErrorMessage"})," component allows users to add a clear error description to an editable input field."]}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import ErrorMessage from 'chop-logic-components';

const AgeInput = () => {
  const [age, setAge] = React.useState(0);
  const errorId = 'age-input-error';
  const errorMessage = 'Enter a number between 1 and 99';
  const isErrorMessageVisible = age < 1 || age > 99;

  return (
    <div>
      <input value={name} onChange={setName} aria-errormessage={errorId} />
      <ErrorMessage errorId={errorId} message={errorMessage} visible={isErrorMessageVisible} />
    </div>
  );
};
`})}),`
`,r.jsx(e.h3,{id:"when-to-use",children:"When to Use"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"When you need a styled error message for a validated user input."}),`
`]}),`
`,r.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Don't forget to connect the error message with an input via errorId."}),`
`,r.jsx(e.li,{children:"The text of the message should be short and clear."}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(x,{})]})}function A(n={}){const{wrapper:e}=o(o({},d()),n.components);return e?r.jsx(e,a(o({},n),{children:r.jsx(c,o({},n))})):c(n)}export{A as default};
