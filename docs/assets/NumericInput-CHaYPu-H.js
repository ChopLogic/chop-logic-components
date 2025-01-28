import{j as i}from"./jsx-runtime-OAISXtky.js";import{b as R,I as C,C as L,c as A}from"./Label-DP2hSXEE.js";import{C as F,d as H,c as S,u as k}from"./index-BT98D5zi.js";import{r as I}from"./index-qVDZzPEr.js";import{u as z}from"./index-bc0GsKql.js";function O({name:e,initialValues:r,defaultValue:a}){return r&&r[e]?Number(r[e]):a&&typeof a=="number"?a:0}function B({value:e,required:r,validator:a,maxValue:t,minValue:u}){return r&&!a&&e===void 0?!1:a&&typeof a=="function"?a(e):t&&u&&e&&!a?e<=t&&e>=u:!0}function D({name:e,defaultValue:r,onChange:a,onSpinButtonClick:t,min:u,max:h,step:d,required:N,validator:x}){const{onChangeFormInput:l,initialValues:$}=I.useContext(F),f=O({initialValues:$,defaultValue:r,name:e}),m=h?Number(h):Number.MAX_SAFE_INTEGER,p=u?Number(u):Number.MIN_SAFE_INTEGER,[s,g]=I.useState(f),[q,y]=I.useState(!0),b=n=>{g(n);const c=B({value:n,required:N,validator:x,maxValue:m,minValue:p});y(c),l==null||l({name:e,value:n,valid:c})},v=n=>{const c=Number(n.target.value);b(c),a==null||a(n)},V=()=>{b(s+d),t==null||t(s+d)},o=()=>{b(s-d),t==null||t(s-d)},_=I.useCallback(()=>{g(f),y(!0),l==null||l({name:e,value:f,valid:!0})},[e]);return z(_),{handleChange:v,value:s,valid:q,minValue:p,maxValue:m,increment:V,decrement:o}}const E=H.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$theme.gapMedium};
  position: relative;

  & > div:nth-child(2) {
    display: flex;
    gap: ${e=>e.$theme.gapMedium};
    align-items: center;
    border: ${e=>e.$theme.borderBase};
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;try{E.displayName="StyledNumericInput",E.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K=({name:e,label:r,errorMessage:a,onChange:t,onBlur:u,onFocus:h,onSpinButtonClick:d,validator:N,min:x,max:l,id:$,tabIndex:f,disabled:m=!1,required:p=!1,readOnly:s=!1,hasSpinButtons:g=!0,defaultValue:q=0,step:y=1,...b})=>{const{elementId:v,errorId:V}=S($),o=k(),{value:_,valid:n,handleChange:c,increment:w,decrement:M,minValue:j,maxValue:T}=D({name:e,defaultValue:q,min:x,max:l,onChange:t,required:p,validator:N,step:y,onSpinButtonClick:d});return i.jsxs(E,{$theme:o,...b,children:[i.jsx(R,{label:r,required:p,inputId:v,theme:o}),i.jsxs("div",{children:[i.jsx("input",{id:v,name:e,type:"number",disabled:m,required:p,readOnly:s,placeholder:"0","aria-invalid":!n,"aria-errormessage":V,value:_.toString(),onChange:c,min:j,max:T,step:y,onBlur:u,onFocus:h,tabIndex:f}),g&&i.jsxs("span",{children:[i.jsx(C,{onClick:M,label:`Decrement value for ${r}`,icon:L.ChevronLeft,disabled:m,theme:o}),i.jsx(C,{onClick:w,label:`Increment value for ${r}`,icon:L.ChevronRight,disabled:m,theme:o})]})]}),i.jsx(A,{errorId:V,message:a,visible:!n,theme:o})]})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicNumericInputValidator"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{K as C};
