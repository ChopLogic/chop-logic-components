import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as l}from"./index-DOvxcyG1.js";import"./chunk-NUUEMKO5-LyG_sgBW.js";import{ae as c,af as s,ag as i}from"./index-zkfsCg0O.js";import{L as r,D as o}from"./themes-BnN1RKU4.js";import"./index-qVDZzPEr.js";import"./iframe-DhY3_iQn.js";import"../sb-preview/runtime.js";import"./react-18-DXFvLTkp.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";function d(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Themes"}),`
`,e.jsx(n.h1,{id:"chop-logic-themes",children:"Chop Logic Themes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Chop Logic Components"}),` library contains two default style themes: dark and light.
They can be easily switched via `,e.jsx(n.code,{children:"ChopLogicThemeContext"}),`. You can also pass a custom theme to the context,
which partially or completely replaces the values in the default theme according to `,e.jsx(n.code,{children:"ChopLogicTheme"})," interface."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ChopLogicThemeContext, ChopLogicThemeMode, ChopLogicTheme } from 'chop-logic-components';
import MainContent from '../main.tsx';

const App = () => {
  const [mode, setMode] = React.useState(ChopLogicThemeMode.Light);
  const customTheme: Partial<ChopLogicTheme> = { fontSizeBase: '1.4rem', gapSmall: '0.4rem' };

  return (
    <ChopLogicThemeContext.Provider value={{ mode, setMode, customTheme }}>
      <MainContent />
    </ChopLogicThemeContext.Provider>
  );
};

export default App;
`})}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsx(n.h3,{id:"light-colors",children:"Light Colors"}),`
`,e.jsxs(s,{children:[e.jsx(i,{title:"Font Colors",subtitle:"Colors for the main font, supporting font, and accent",colors:{fontColorBase:`${r.fontColorBase}`,fontColorLight:`${r.fontColorLight}`,fontColorAccent:`${r.fontColorAccent}`}}),e.jsx(i,{title:"Background Colors",subtitle:"Background and container colors on the page",colors:{backgroundColorBase:`${r.backgroundColorBase}`,backgroundColorLight:`${r.backgroundColorLight}`,backgroundColorTransparent:`${r.backgroundColorTransparent}`}}),e.jsx(i,{title:"Gradients",subtitle:"Gradient for creating shadows",colors:{gradientShadow:`${r.gradientShadow}`}})]}),`
`,e.jsx(n.h3,{id:"dark-colors",children:"Dark Colors"}),`
`,e.jsxs(s,{children:[e.jsx(i,{title:"Font Colors",subtitle:"Colors for the main font, supporting font, and accent",colors:{fontColorBase:`${o.fontColorBase}`,fontColorLight:`${o.fontColorLight}`,fontColorAccent:`${o.fontColorAccent}`}}),e.jsx(i,{title:"Background Colors",subtitle:"Background and container colors on the page",colors:{backgroundColorBase:`${o.backgroundColorBase}`,backgroundColorLight:`${o.backgroundColorLight}`,backgroundColorTransparent:`${o.backgroundColorTransparent}`}}),e.jsx(i,{title:"Gradients",subtitle:"Gradient for creating shadows",colors:{gradientShadow:`${o.gradientShadow}`}})]}),`
`,e.jsx(n.h2,{id:"borders",children:"Borders"}),`
`,e.jsx(n.h3,{id:"light-borders",children:"Light Borders"}),`
`,e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"1rem",margin:"1rem"},children:[e.jsx("div",{style:{border:r.borderBase,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderBase"}),e.jsx("div",{style:{border:r.borderLight,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderLight"}),e.jsx("div",{style:{border:r.borderAccent,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderAccent"}),e.jsx("div",{style:{border:r.borderOutline,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderOutline"})]}),`
`,e.jsx(n.h3,{id:"dark-borders",children:"Dark Borders"}),`
`,e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"1rem",margin:"1rem",backgroundColor:o.backgroundColorBase,width:"fit-content",color:o.fontColorBase},children:[e.jsx("div",{style:{border:o.borderBase,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderBase"}),e.jsx("div",{style:{border:o.borderLight,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderLight"}),e.jsx("div",{style:{border:o.borderAccent,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderAccent"}),e.jsx("div",{style:{border:o.borderOutline,display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem"},children:"borderOutline"})]}),`
`,e.jsx(n.h2,{id:"fonts",children:"Fonts"}),`
`,e.jsx(n.h3,{id:"fontfamilycore",children:"fontFamilyCore:"}),`
`,e.jsx("div",{style:{fontFamily:r.fontFamilyCore},children:"The quick brown fox jumps over the lazy dog"}),`
`,e.jsx(n.h3,{id:"fontfamilymonospace",children:"fontFamilyMonospace:"}),`
`,e.jsx("div",{style:{fontFamily:r.fontFamilyMonospace},children:"The quick brown fox jumps over the lazy dog"}),`
`,e.jsx(n.h2,{id:"units",children:"Units"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property Name"}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"fontSizeBase"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.2rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"fontSizeSmall"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.8rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"fontSizeHeader"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"2rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"gapSmall"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"gapMedium"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.6rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"gapBig"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"iconSize"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.2rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"blockBorderRadius"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25rem"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"zIndexBase"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"zIndexPopup"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"100"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"zIndexModal"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"200"})})]})]})]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface ChopLogicThemeContextProps {
  mode: ChopLogicThemeMode;
  setMode?: (mode: ChopLogicThemeMode) => void;
  customTheme?: Partial<ChopLogicTheme>;
  setCustomTheme?: (customTheme: ChopLogicTheme) => void;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export interface ChopLogicTheme {
  // Colors
  fontColorBase: string;
  fontColorLight: string;
  fontColorAccent: string;
  backgroundColorBase: string;
  backgroundColorLight: string;
  backgroundColorTransparent: string;
  // Gradients
  gradientShadow: string;
  // Fonts
  fontFamilyCore: string;
  fontFamilyMonospace: string;
  fontSizeBase: string;
  fontSizeSmall: string;
  fontSizeHeader: string;
  // Units
  gapSmall: string;
  gapMedium: string;
  gapBig: string;
  iconSize: string;
  blockBorderRadius: string;
  // Shadows
  boxShadow: string;
  textShadow: string;
  // Borders
  borderBase: string;
  borderLight: string;
  borderAccent: string;
  borderOutline: string;
  // Z-indexes
  zIndexBase: string;
  zIndexPopup: string;
  zIndexModal: string;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export enum ChopLogicThemeMode {
  Light = 'light',
  Dark = 'dark',
}
`})})]})}function T(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{T as default};
