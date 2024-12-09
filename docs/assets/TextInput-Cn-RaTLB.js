import{j as l}from"./jsx-runtime-OAISXtky.js";import{d as M,u as N,b as R,I as S,C as $,f as k}from"./index-yZyA0tCI.js";import{r as f}from"./index-qVDZzPEr.js";import{C as F,u as P}from"./index-1hWSJLP3.js";import{u as A}from"./index-BHitKVNr.js";function G({value:e,required:a,validator:t}){return a&&!t&&!e.length?!1:t&&typeof t=="function"?t(e):t&&typeof t=="object"?new RegExp(t.regexp,t==null?void 0:t.flags).test(e):!0}function W({name:e,initialValues:a,defaultValue:t}){return a&&(a!=null&&a[e])?a[e].toString():t&&typeof t=="string"?t:""}function z({name:e,defaultValue:a,onChange:t,onClear:s,required:x,validator:b}){const{onChangeFormInput:n,initialValues:v}=f.useContext(F),i=W({initialValues:v,defaultValue:a,name:e}),[V,u]=f.useState(i),[q,o]=f.useState(!0),[r,d]=f.useState(!1),w=g=>{const p=g.target.value,m=G({value:p,required:x,validator:b});u(p),o(m),n==null||n({name:e,value:p,valid:m}),t==null||t(g)},y=()=>{u(""),o(!0),n==null||n({name:e,value:"",valid:!0}),s==null||s()},I=f.useCallback(()=>{u(i),o(!0),n==null||n({name:e,value:i,valid:!0})},[e]),h=()=>{d(!r)};return A(I),{value:V,valid:q,passwordShown:r,handleChange:w,handleClear:y,togglePassword:h}}const T=M.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$theme.mediumGap};

  & > div:nth-child(2) {
    display: flex;
    gap: ${e=>e.$theme.smallGap};
    align-items: center;
    border: ${e=>e.$theme.regularBorder};
    border-radius: ${e=>e.$theme.blockBorderRadius};
    padding: ${e=>e.$theme.mediumGap};

    &:has(input:focus) {
      border: ${e=>e.$theme.outlineBorder};
    }

    &:has(input[aria-invalid='true']) {
      border: ${e=>e.$theme.accentBorder};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: ${e=>e.$theme.smallGap};
      align-items: center;
      min-width: 0;
    }
  }

  & input {
    font-size: ${e=>e.$theme.baseFontSize};
    padding: 0;
    border: none;
    font-family: ${e=>e.$theme.coreFontFamily};
    color: ${e=>e.$theme.primaryColor};
    display: inline-block;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
    min-width: 0;

    &:focus-visible {
      outline: none;
    }

    &:placeholder-shown + span {
      display: none !important;
    }
  }
`;try{T.displayName="StyledTextInput",T.__docgenInfo={description:"",displayName:"StyledTextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({name:e,label:a,errorMessage:t,defaultValue:s,onChange:x,onBlur:b,onFocus:n,onClear:v,validator:i,maxLength:V,id:u,tabIndex:q,placeholder:o="Type here...",disabled:r=!1,required:d=!1,clearable:w=!0,readOnly:y=!1,autoComplete:I="off",type:h="text",...g})=>{const{value:p,valid:m,handleChange:E,handleClear:j,passwordShown:C,togglePassword:B}=z({defaultValue:s,name:e,onChange:x,onClear:v,required:d,validator:i}),{elementId:_,errorId:L}=P(u),H=h==="password",c=N();return l.jsxs(T,{$theme:c,...g,children:[l.jsx(R,{label:a,required:d,inputId:_,theme:c}),l.jsxs("div",{children:[l.jsx("input",{id:_,name:e,type:C?"text":h,disabled:r,placeholder:o,required:d,readOnly:y,autoComplete:I,"aria-invalid":!m,"aria-errormessage":L,"aria-readonly":y,value:p,onChange:E,maxLength:V,onBlur:b,onFocus:n,tabIndex:q}),l.jsxs("span",{children:[w&&l.jsx(S,{onClick:j,label:`Clear input for ${a}`,icon:$.Remove,disabled:r,theme:c}),H&&l.jsx(S,{onClick:B,label:"Toggle password visibility",icon:C?$.Hide:$.Show,disabled:r,theme:c})]})]}),l.jsx(k,{errorId:L,message:t,visible:!m,theme:c})]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"RegExpWithFlags | TextValidationFunction"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"Type here..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{U as C};
