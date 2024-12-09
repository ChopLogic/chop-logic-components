import{j as i}from"./jsx-runtime-OAISXtky.js";import{d as M,u as R,b as H,I as C,C as L,f as S}from"./index-yZyA0tCI.js";import{r as I}from"./index-qVDZzPEr.js";import{C as A,u as G}from"./index-1hWSJLP3.js";import{u as z}from"./index-BHitKVNr.js";function k({name:e,initialValues:r,defaultValue:a}){return r&&r[e]?Number(r[e]):a&&typeof a=="number"?a:0}function B({value:e,required:r,validator:a,maxValue:t,minValue:u}){return r&&!a&&e===void 0?!1:a&&typeof a=="function"?a(e):t&&u&&e&&!a?e<=t&&e>=u:!0}function D({name:e,defaultValue:r,onChange:a,onSpinButtonClick:t,min:u,max:b,step:o,required:N,validator:x}){const{onChangeFormInput:l,initialValues:q}=I.useContext(A),f=k({initialValues:q,defaultValue:r,name:e}),m=b?Number(b):Number.MAX_SAFE_INTEGER,p=u?Number(u):Number.MIN_SAFE_INTEGER,[s,h]=I.useState(f),[$,g]=I.useState(!0),y=n=>{h(n);const c=B({value:n,required:N,validator:x,maxValue:m,minValue:p});g(c),l==null||l({name:e,value:n,valid:c})},v=n=>{const c=Number(n.target.value);y(c),a==null||a(n)},V=()=>{y(s+o),t==null||t(s+o)},d=()=>{y(s-o),t==null||t(s-o)},_=I.useCallback(()=>{h(f),l==null||l({name:e,value:f,valid:!0})},[e]);return z(_),{handleChange:v,value:s,valid:$,minValue:p,maxValue:m,increment:V,decrement:d}}const E=M.div`
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
      gap: 0;
      align-items: center;
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

    &:focus-visible {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;try{E.displayName="StyledNumericInput",E.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K=({name:e,label:r,errorMessage:a,onChange:t,onBlur:u,onFocus:b,onSpinButtonClick:o,validator:N,min:x,max:l,id:q,tabIndex:f,disabled:m=!1,required:p=!1,readOnly:s=!1,hasSpinButtons:h=!0,defaultValue:$=0,step:g=1,...y})=>{const{elementId:v,errorId:V}=G(q),d=R(),{value:_,valid:n,handleChange:c,increment:j,decrement:w,minValue:F,maxValue:T}=D({name:e,defaultValue:$,min:x,max:l,onChange:t,required:p,validator:N,step:g,onSpinButtonClick:o});return i.jsxs(E,{$theme:d,...y,children:[i.jsx(H,{label:r,required:p,inputId:v,theme:d}),i.jsxs("div",{children:[i.jsx("input",{id:v,name:e,type:"number",disabled:m,required:p,readOnly:s,placeholder:"0","aria-invalid":!n,"aria-errormessage":V,value:_.toString(),onChange:c,min:F,max:T,step:g,onBlur:u,onFocus:b,tabIndex:f}),h&&i.jsxs("span",{children:[i.jsx(C,{onClick:w,label:`Decrement value for ${r}`,icon:L.ChevronLeft,disabled:m,theme:d}),i.jsx(C,{onClick:j,label:`Increment value for ${r}`,icon:L.ChevronRight,disabled:m,theme:d})]})]}),i.jsx(S,{errorId:V,message:a,visible:!n,theme:d})]})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{K as C};
