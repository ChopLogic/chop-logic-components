import{j as o}from"./iframe-CTqKjYd5.js";import{useMDXComponents as r}from"./index-DCTrsLlp.js";import{M as c}from"./blocks-D4DjP9pV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CX8MO8DH.js";import"./index-DS5dF-Wi.js";function t(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Theming/Provider"}),`
`,o.jsx(e.h2,{id:"theme-provider",children:"Theme Provider"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx("code",{children:"ChopLogicThemeProvider"})," component wraps your app or Storybook preview to enable light and dark theme switching using React Context."]}),`
`,o.jsxs(e.p,{children:["It supports both dynamic switching via a hook and injected mode through the ",o.jsx(e.code,{children:"injectedMode"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicThemeProvider } from 'chop-logic-components';

<ChopLogicThemeProvider>
  <App />
</ChopLogicThemeProvider>
`})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { ChopLogicThemeProvider, ChopLogicThemeMode } from 'chop-logic-components';
import { Decorator } from '@storybook/react';

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
`})})]})}function a(n={}){const{wrapper:e}={...r(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{a as default};
