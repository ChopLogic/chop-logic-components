import{j as r}from"./jsx-runtime-OAISXtky.js";import{d as y,u as x,b as C,c as k,e as g}from"./index-yZyA0tCI.js";import{r as m}from"./index-qVDZzPEr.js";import{C as v,u as $}from"./index-1hWSJLP3.js";import{u as q}from"./index-BHitKVNr.js";const f=y.div`
  display: flex;
  gap: ${e=>e.$theme.smallGap};
  padding: ${e=>e.$theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  & svg {
    color: ${e=>e.$theme.secondaryColor};
  }

  & label {
    cursor: pointer;
    gap: ${e=>e.$theme.smallGap};
    font-size: ${e=>e.$theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${e=>e.$theme.textShadow};
    }
  }
  ${e=>e.$disabled&&`
      pointer-events: none;
      opacity: 0.5;
    `}

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 4px;
    left: 0;
    margin: 0;

    &:focus-visible + label {
      outline: ${e=>e.$theme.outlineBorder};
      outline-offset: 2px;
    }
  }
`;try{f.displayName="StyledCheckbox",f.__docgenInfo={description:"",displayName:"StyledCheckbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function _({defaultChecked:e,initialValues:t,name:a}){return t&&(t==null?void 0:t[a])!==void 0?!!(t!=null&&t[a]):!!e}function I({name:e,defaultChecked:t,onChange:a}){const{onChangeFormInput:l,initialValues:d}=m.useContext(v),o=_({initialValues:d,name:e,defaultChecked:t}),[c,s]=m.useState(o),u=i=>{const n=i.target.checked;s(n),a==null||a(i),l==null||l({name:e,value:n})},p=m.useCallback(()=>{s(o),l==null||l({name:e,value:o})},[e]);return q(p),{handleChange:u,checked:c}}const T=({name:e,label:t,disabled:a,noLabel:l,required:d=!1,iconPosition:o="left",defaultChecked:c,onChange:s,id:u,...p})=>{const{handleChange:i,checked:n}=I({name:e,defaultChecked:c,onChange:s}),{elementId:h}=$(u),b=x();return r.jsxs(f,{$disabled:!!a,$theme:b,...p,children:[r.jsx("input",{id:h,name:e,type:"checkbox",disabled:a,required:d,checked:n,onChange:i,"aria-label":l?t:void 0}),r.jsx(C,{label:t,required:d,inputId:h,isTextHidden:l,icon:n?r.jsx(k,{}):r.jsx(g,{}),iconPosition:o,theme:b})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}export{T as C};
