import{j as l}from"./jsx-runtime-OAISXtky.js";import{b as H,I as S,C as w,c as B}from"./Label-CPqhHv64.js";import{C as N,d as R,c as A,u as P}from"./index-BgqNcK8U.js";import{r as f}from"./index-qVDZzPEr.js";import{u as F}from"./index-DvDEnfou.js";function W({value:e,required:a,validator:t}){return a&&!t&&!e.length?!1:t&&typeof t=="function"?t(e):t&&typeof t=="object"?new RegExp(t.regexp,t==null?void 0:t.flags).test(e):!0}function z({name:e,initialValues:a,defaultValue:t}){return a&&(a!=null&&a[e])?a[e].toString():t&&typeof t=="string"?t:""}function O({name:e,defaultValue:a,onChange:t,onClear:s,required:x,validator:b}){const{onChangeFormInput:n,initialValues:v}=f.useContext(N),i=z({initialValues:v,defaultValue:a,name:e}),[V,o]=f.useState(i),[$,u]=f.useState(!0),[r,d]=f.useState(!1),q=y=>{const p=y.target.value,c=W({value:p,required:x,validator:b});o(p),u(c),n==null||n({name:e,value:p,valid:c}),t==null||t(y)},g=()=>{o(""),u(!0),n==null||n({name:e,value:"",valid:!0}),s==null||s()},I=f.useCallback(()=>{o(i),u(!0),n==null||n({name:e,value:i,valid:!0})},[e]),h=()=>{d(!r)};return F(I),{value:V,valid:$,passwordShown:r,handleChange:q,handleClear:g,togglePassword:h}}const C=R.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$theme.gapMedium};
  position: relative;

  & > div:nth-child(2) {
    display: flex;
    gap: ${e=>e.$theme.gapMedium};
    align-items: center;
    border: ${e=>e.$theme.borderLight};
    border-radius: ${e=>e.$theme.blockBorderRadius};
    padding: ${e=>e.$theme.gapMedium};
    background-color: ${e=>e.$theme.backgroundColorLight};

    &:has(input:focus) {
      border: ${e=>e.$theme.borderOutline};
    }

    &:has(input[aria-invalid='true']) {
      border: ${e=>e.$theme.borderAccent};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: ${e=>e.$theme.gapSmall};
      align-items: center;
    }
  }

  & input {
    font-size: ${e=>e.$theme.fontSizeBase};
    padding: 0;
    border: none;
    font-family: ${e=>e.$theme.fontFamilyCore};
    color: ${e=>e.$theme.fontColorBase};
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
`;try{C.displayName="StyledTextInput",C.__docgenInfo={description:"",displayName:"StyledTextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({name:e,label:a,errorMessage:t,defaultValue:s,onChange:x,onBlur:b,onFocus:n,onClear:v,validator:i,maxLength:V,id:o,tabIndex:$,placeholder:u="Type here...",disabled:r=!1,required:d=!1,clearable:q=!0,readOnly:g=!1,autoComplete:I="off",type:h="text",...y})=>{const{value:p,valid:c,handleChange:E,handleClear:j,passwordShown:T,togglePassword:M}=O({defaultValue:s,name:e,onChange:x,onClear:v,required:d,validator:i}),{elementId:L,errorId:_}=A(o),k=h==="password",m=P();return l.jsxs(C,{$theme:m,...y,children:[l.jsx(H,{label:a,required:d,inputId:L,theme:m}),l.jsxs("div",{children:[l.jsx("input",{id:L,name:e,type:T?"text":h,disabled:r,placeholder:u,required:d,readOnly:g,autoComplete:I,"aria-invalid":!c,"aria-errormessage":_,"aria-readonly":g,value:p,onChange:E,maxLength:V,onBlur:b,onFocus:n,tabIndex:$}),l.jsxs("span",{children:[q&&l.jsx(S,{onClick:j,label:`Clear input for ${a}`,icon:w.Remove,disabled:r,theme:m}),k&&l.jsx(S,{onClick:M,label:"Toggle password visibility",icon:T?w.Hide:w.Show,disabled:r,theme:m})]})]}),l.jsx(B,{errorId:_,message:t,visible:!c,theme:m})]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | ChopLogicTextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"Type here..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{U as C};
