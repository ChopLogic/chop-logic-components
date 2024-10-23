import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{u as p,C}from"./Label-C3WErDxN.js";import{C as k,a as _}from"./CheckboxUnchecked-BN-0aOOA.js";import{d as b,U as f,C as g,S as v,B as I}from"./styled-components.browser.esm-BAmCwVtG.js";import{r as h}from"./index-DJO9vBfz.js";import{C as S,u as N}from"./index-C6NryZZH.js";const x=b.div`
  display: flex;
  gap: ${f.smallGap};
  padding: ${f.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${g.secondary};
  }

  label {
    cursor: pointer;
    gap: ${f.smallGap};
    font-size: 1rem !important;
    &:hover,
    &:active {
      text-shadow: ${v.text};
    }
  }

  ${t=>t.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,y=b.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${I.outline};
    outline-offset: 2px;
  }
`;try{x.displayName="StyledCheckboxWrapper",x.__docgenInfo={description:"",displayName:"StyledCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledCheckboxInput",y.__docgenInfo={description:"",displayName:"StyledCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function $({defaultChecked:t,initialValues:a,name:o}){return a&&(a==null?void 0:a[o])!==void 0?!!(a!=null&&a[o]):!!t}function q({name:t,defaultChecked:a,onChange:o}){const{onChangeFormInput:l,initialValues:i}=h.useContext(S),d=$({initialValues:i,name:t,defaultChecked:a}),[u,s]=h.useState(d),e=c=>{const r=c.target.checked;s(r),o==null||o(c),l==null||l({name:t,value:r})},m=h.useCallback(()=>{s(d),l==null||l({name:t,value:d})},[t]);return N(m),{handleChange:e,checked:u}}const A=({name:t,label:a,disabled:o,noLabel:l,required:i=!1,iconPosition:d="left",defaultChecked:u,onChange:s,...e})=>{const{handleChange:m,checked:c}=q({name:t,defaultChecked:u,onChange:s}),{elementId:r}=p(e==null?void 0:e.id);return n.jsxs(x,{$disabled:!!o,className:e==null?void 0:e.className,tabIndex:e==null?void 0:e.tabIndex,style:e==null?void 0:e.style,title:e==null?void 0:e.title,children:[n.jsx(y,{id:r,name:t,type:"checkbox",disabled:o,required:i,checked:c,onChange:m,"aria-label":l?a:void 0}),n.jsx(C,{label:a,required:i,inputId:r,isTextHidden:l,icon:c?n.jsx(k,{}):n.jsx(_,{}),iconPosition:d})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{A as C};
