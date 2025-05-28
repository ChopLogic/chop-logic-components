import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CB3_FCD4.js";import"./index-CMUUq2AI.js";import{M as c}from"./index-BhWr-Xgo.js";import"./index-MPVjHJeJ.js";import"./preview-CQo01585.js";import"./iframe-C402m6Up.js";import"./DocsRenderer-CFRXHY34-DrmF4Qyv.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-BRyrJLGJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Theming/Provider"}),`
`,o.jsx(e.h2,{id:"theme-provider",children:"Theme Provider"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"ChopLogicThemeProvider"})," component wraps your app or Storybook preview to enable light and dark theme switching using React Context."]}),`
`,o.jsxs(e.p,{children:["It supports both dynamic switching via a hook and injected mode through the ",o.jsx(e.code,{children:"injectedMode"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicThemeProvider } from 'chop-logic-components';

<ChopLogicThemeProvider>
  <App />
</ChopLogicThemeProvider>
`})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicThemeProvider, ChopLogicThemeMode } from 'chop-logic-components';
import { Decorator } from '@storybook/react-vite';

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const backgroundColor = backgrounds?.value ?? '#FFFFFFFF';
  const storybookMode = backgroundColor === '#2B2B2BFF' ? ChopLogicThemeMode.Dark : ChopLogicThemeMode.Light;

  return (
    <ChopLogicThemeProvider injectedMode={storybookMode}>
      <div style={{ backgroundColor }}>
        <StoryFn />
      </div>
    </ChopLogicThemeProvider>
  );
};

export const decorators = [withTheme];
`})}),`
`,o.jsx(e.h2,{id:"theme-hook",children:"Theme Hook"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"useChopLogicTheme()"})," hook provides access to the theme context and allows to change the theme."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { useChopLogicTheme, ChopLogicThemeMode } from 'chop-logic-components';

export const ThemeToggleButton = () => {
  const { mode, setMode } = useChopLogicTheme();

  const toggleTheme = () => {
    setMode(mode === ChopLogicThemeMode.Dark ? ChopLogicThemeMode.Light : ChopLogicThemeMode.Dark);
  }

  return (
    <button onClick={toggleTheme}>
      Toggle to {mode === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};
`})})]})}function j(n={}){const{wrapper:e}={...r(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{j as default};
