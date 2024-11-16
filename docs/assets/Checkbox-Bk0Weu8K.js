import{j as o}from"./jsx-runtime-OAISXtky.js";import{u as C,C as g}from"./Label-DNlmmmBQ.js";import{C as k,a as v}from"./CheckboxUnchecked-DfrujIAw.js";import{d as x,U as m,C as _,S as q,B as I}from"./styled-components.browser.esm-BD-stqwa.js";import{r as f}from"./index-qVDZzPEr.js";import{C as S,u as V}from"./index-D121fWfN.js";const h=x.div`
  display: flex;
  gap: ${m.smallGap};
  padding: ${m.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${_.secondary};
  }

  label {
    cursor: pointer;
    gap: ${m.smallGap};
    font-size: 1rem !important;
    &:hover,
    &:active {
      text-shadow: ${q.text};
    }
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,y=x.input`
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
`;try{h.displayName="StyledCheckboxWrapper",h.__docgenInfo={description:"",displayName:"StyledCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledCheckboxInput",y.__docgenInfo={description:"",displayName:"StyledCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function N({defaultChecked:e,initialValues:a,name:t}){return a&&(a==null?void 0:a[t])!==void 0?!!(a!=null&&a[t]):!!e}function T({name:e,defaultChecked:a,onChange:t}){const{onChangeFormInput:l,initialValues:d}=f.useContext(S),r=N({initialValues:d,name:e,defaultChecked:a}),[u,s]=f.useState(r),c=i=>{const n=i.target.checked;s(n),t==null||t(i),l==null||l({name:e,value:n})},p=f.useCallback(()=>{s(r),l==null||l({name:e,value:r})},[e]);return V(p),{handleChange:c,checked:u}}const R=({name:e,label:a,disabled:t,noLabel:l,required:d=!1,iconPosition:r="left",defaultChecked:u,onChange:s,id:c,...p})=>{const{handleChange:i,checked:n}=T({name:e,defaultChecked:u,onChange:s}),{elementId:b}=C(c);return o.jsxs(h,{$disabled:!!t,...p,children:[o.jsx(y,{id:b,name:e,type:"checkbox",disabled:t,required:d,checked:n,onChange:i,"aria-label":l?a:void 0}),o.jsx(g,{label:a,required:d,inputId:b,isTextHidden:l,icon:n?o.jsx(k,{}):o.jsx(v,{}),iconPosition:r})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}export{R as C};
