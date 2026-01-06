var m=Object.defineProperty,a=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,r=(n,e)=>{for(var t in e||(e={}))p.call(e,t)&&d(n,t,e[t]);if(c)for(var t of c(e))g.call(e,t)&&d(n,t,e[t]);return n},s=(n,e)=>a(n,l(e));import{j as o}from"./iframe-C2ng--48.js";import{useMDXComponents as i}from"./index-BFeXBWok.js";import{M as x}from"./blocks-_53u4lk0.js";import"./preload-helper-BDBacUwf.js";import"./index-CfInEO2Z.js";import"./index-BcQsO8Kp.js";function h(n){const e=r(r({code:"code",h2:"h2",p:"p",pre:"pre"},i()),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(x,{title:"Theming/Provider"}),`
`,o.jsx(e.h2,{id:"theme-provider",children:"Theme Provider"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"ThemeProvider"})," component wraps your app or Storybook preview to enable light and dark theme switching using React Context."]}),`
`,o.jsxs(e.p,{children:["It supports both dynamic switching via a hook and injected mode through the ",o.jsx(e.code,{children:"injectedMode"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider } from 'chop-logic-components';

<ThemeProvider>
  <App />
</ThemeProvider>;
`})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider, ThemeMode } from 'chop-logic-components';
import { Decorator } from '@storybook/react';

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const backgroundColor = backgrounds?.value ?? '#FFFFFFFF';
  const storybookMode = backgroundColor === '#2B2B2BFF' ? ThemeMode.Dark : ThemeMode.Light;

  return (
    <ThemeProvider injectedMode={storybookMode}>
      <div style={{ backgroundColor }}>
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
`})}),`
`,o.jsx(e.h2,{id:"theme-hook",children:"Theme Hook"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"useTheme()"})," hook provides access to the theme context and allows to change the theme."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { useTheme, ThemeMode } from 'chop-logic-components';

export const ThemeToggleButton = () => {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
  };

  return <button onClick={toggleTheme}>Toggle to {mode === 'dark' ? 'Light' : 'Dark'} Mode</button>;
};
`})})]})}function F(n={}){const{wrapper:e}=r(r({},i()),n.components);return e?o.jsx(e,s(r({},n),{children:o.jsx(h,r({},n))})):h(n)}export{F as default};
