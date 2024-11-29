import{j as n}from"./jsx-runtime-OAISXtky.js";import{d as R,o as H,b as S,I as L,C as $,f as A,g as G}from"./get-chop-logic-theme-C9Q9v90u.js";import{r as V}from"./index-qVDZzPEr.js";import{C as k,u as z}from"./chop-logic-form-context-lL0zfSzs.js";import{u as B}from"./index-B0wHt5J_.js";function D({name:e,initialValues:r,defaultValue:a}){return r&&r[e]?Number(r[e]):a&&typeof a=="number"?a:0}function O({value:e,required:r,validator:a,maxValue:t,minValue:i}){return r&&!a&&e===void 0?!1:a&&typeof a=="function"?a(e):t&&i&&e&&!a?e<=t&&e>=i:!0}function W({name:e,defaultValue:r,onChange:a,onSpinButtonClick:t,min:i,max:y,step:o,required:I,validator:N}){const{onChangeFormInput:l,initialValues:x}=V.useContext(k),c=D({initialValues:x,defaultValue:r,name:e}),m=y?Number(y):Number.MAX_SAFE_INTEGER,p=i?Number(i):Number.MIN_SAFE_INTEGER,[s,h]=V.useState(c),[q,b]=V.useState(!0),f=u=>{h(u);const d=O({value:u,required:I,validator:N,maxValue:m,minValue:p});b(d),l==null||l({name:e,value:u,valid:d})},_=u=>{const d=Number(u.target.value);f(d),a==null||a(u)},g=()=>{f(s+o),t==null||t(s+o)},v=()=>{f(s-o),t==null||t(s-o)},E=V.useCallback(()=>{h(c),l==null||l({name:e,value:c,valid:!0})},[e]);return B(E),{handleChange:_,value:s,valid:q,minValue:p,maxValue:m,increment:g,decrement:v}}const C=R.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.mediumGap};

  & > div:nth-child(2) {
    display: flex;
    gap: ${e=>e.theme.smallGap};
    align-items: center;
    border: ${e=>e.theme.regularBorder};
    border-radius: ${e=>e.theme.blockBorderRadius};
    padding: ${e=>e.theme.mediumGap};

    &:has(input:focus) {
      border: ${e=>e.theme.outlineBorder};
    }

    &:has(input[aria-invalid='true']) {
      border: ${e=>e.theme.accentBorder};
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
    font-size: ${e=>e.theme.baseFontSize};
    padding: 0;
    border: none;
    font-family: ${e=>e.theme.coreFontFamily};
    color: ${e=>e.theme.primaryColor};
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
`;try{C.displayName="StyledNumericInput",C.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({name:e,label:r,errorMessage:a,onChange:t,onBlur:i,onFocus:y,onSpinButtonClick:o,validator:I,min:N,max:l,id:x,tabIndex:c,disabled:m=!1,required:p=!1,readOnly:s=!1,hasSpinButtons:h=!0,defaultValue:q=0,step:b=1,theme:f,..._})=>{const{elementId:g,errorId:v}=z(x),E=G(f),{value:u,valid:d,handleChange:j,increment:w,decrement:F,minValue:T,maxValue:M}=W({name:e,defaultValue:q,min:N,max:l,onChange:t,required:p,validator:I,step:b,onSpinButtonClick:o});return n.jsx(H,{theme:E,children:n.jsxs(C,{..._,children:[n.jsx(S,{label:r,required:p,inputId:g}),n.jsxs("div",{children:[n.jsx("input",{id:g,name:e,type:"number",disabled:m,required:p,readOnly:s,placeholder:"0","aria-invalid":!d,"aria-errormessage":v,value:u.toString(),onChange:j,min:T,max:M,step:b,onBlur:i,onFocus:y,tabIndex:c}),h&&n.jsxs("span",{children:[n.jsx(L,{onClick:F,label:`Decrement value for ${r}`,icon:$.ChevronLeft,disabled:m}),n.jsx(L,{onClick:w,label:`Increment value for ${r}`,icon:$.ChevronRight,disabled:m})]})]}),n.jsx(A,{errorId:v,message:a,visible:!d})]})})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{U as C};
