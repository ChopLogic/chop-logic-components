import{j as r}from"./jsx-runtime-OAISXtky.js";import{d as x,u as y,b as C}from"./index-DOtmxc0W.js";import{r as m}from"./index-qVDZzPEr.js";import{C as g,u as k}from"./index-1hWSJLP3.js";import $ from"./CheckboxCheckedIcon-B0tMICzp.js";import v from"./CheckboxUncheckedIcon-Di1hGFhe.js";import{u as q}from"./index-BHitKVNr.js";const f=x.div`
  display: flex;
  gap: ${e=>e.$theme.gapMedium};
  padding: ${e=>e.$theme.gapMedium} 0;
  position: relative;
  overflow: hidden;

  & svg {
    color: ${e=>e.$checked?e.$theme.fontColorAccent:e.$theme.fontColorLight};
  }

  & label {
    cursor: pointer;
    gap: ${e=>e.$theme.gapMedium};
    font-size: ${e=>e.$theme.fontSizeBase} !important;
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
      outline: ${e=>e.$theme.borderOutline};
      outline-offset: 2px;
    }
  }
`;try{f.displayName="StyledCheckbox",f.__docgenInfo={description:"",displayName:"StyledCheckbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function _({defaultChecked:e,initialValues:t,name:a}){return t&&(t==null?void 0:t[a])!==void 0?!!(t!=null&&t[a]):!!e}function I({name:e,defaultChecked:t,onChange:a}){const{onChangeFormInput:o,initialValues:d}=m.useContext(g),n=_({initialValues:d,name:e,defaultChecked:t}),[c,i]=m.useState(n),u=s=>{const l=s.target.checked;i(l),a==null||a(s),o==null||o({name:e,value:l})},p=m.useCallback(()=>{i(n),o==null||o({name:e,value:n})},[e]);return q(p),{handleChange:u,checked:c}}const E=({name:e,label:t,disabled:a,noLabel:o,required:d=!1,iconPosition:n="left",defaultChecked:c,onChange:i,id:u,...p})=>{const{handleChange:s,checked:l}=I({name:e,defaultChecked:c,onChange:i}),{elementId:h}=k(u),b=y();return r.jsxs(f,{$disabled:!!a,$theme:b,$checked:l,...p,children:[r.jsx("input",{id:h,name:e,type:"checkbox",disabled:a,required:d,checked:l,onChange:s,"aria-label":o?t:void 0}),r.jsx(C,{label:t,required:d,inputId:h,isTextHidden:o,icon:l?r.jsx($,{}):r.jsx(v,{}),iconPosition:n,theme:b})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}export{E as C};
