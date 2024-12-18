import{j as i}from"./jsx-runtime-OAISXtky.js";import{u as F,d as R,a as A,b as H,I as C,C as L,f as S}from"./index-Dk2A2uom.js";import{r as I}from"./index-qVDZzPEr.js";import{a as k,u as z}from"./index-tKWUWaCX.js";function O({name:e,initialValues:t,defaultValue:a}){return t&&t[e]?Number(t[e]):a&&typeof a=="number"?a:0}function B({value:e,required:t,validator:a,maxValue:r,minValue:u}){return t&&!a&&e===void 0?!1:a&&typeof a=="function"?a(e):r&&u&&e&&!a?e<=r&&e>=u:!0}function D({name:e,defaultValue:t,onChange:a,onSpinButtonClick:r,min:u,max:h,step:o,required:N,validator:x}){const{onChangeFormInput:l,initialValues:$}=I.useContext(k),f=O({initialValues:$,defaultValue:t,name:e}),m=h?Number(h):Number.MAX_SAFE_INTEGER,p=u?Number(u):Number.MIN_SAFE_INTEGER,[s,g]=I.useState(f),[q,y]=I.useState(!0),b=n=>{g(n);const c=B({value:n,required:N,validator:x,maxValue:m,minValue:p});y(c),l==null||l({name:e,value:n,valid:c})},v=n=>{const c=Number(n.target.value);b(c),a==null||a(n)},V=()=>{b(s+o),r==null||r(s+o)},d=()=>{b(s-o),r==null||r(s-o)},_=I.useCallback(()=>{g(f),y(!0),l==null||l({name:e,value:f,valid:!0})},[e]);return F(_),{handleChange:v,value:s,valid:q,minValue:p,maxValue:m,increment:V,decrement:d}}const E=R.div`
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
`;try{E.displayName="StyledNumericInput",E.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const J=({name:e,label:t,errorMessage:a,onChange:r,onBlur:u,onFocus:h,onSpinButtonClick:o,validator:N,min:x,max:l,id:$,tabIndex:f,disabled:m=!1,required:p=!1,readOnly:s=!1,hasSpinButtons:g=!0,defaultValue:q=0,step:y=1,...b})=>{const{elementId:v,errorId:V}=z($),d=A(),{value:_,valid:n,handleChange:c,increment:w,decrement:M,minValue:j,maxValue:T}=D({name:e,defaultValue:q,min:x,max:l,onChange:r,required:p,validator:N,step:y,onSpinButtonClick:o});return i.jsxs(E,{$theme:d,...b,children:[i.jsx(H,{label:t,required:p,inputId:v,theme:d}),i.jsxs("div",{children:[i.jsx("input",{id:v,name:e,type:"number",disabled:m,required:p,readOnly:s,placeholder:"0","aria-invalid":!n,"aria-errormessage":V,value:_.toString(),onChange:c,min:j,max:T,step:y,onBlur:u,onFocus:h,tabIndex:f}),g&&i.jsxs("span",{children:[i.jsx(C,{onClick:M,label:`Decrement value for ${t}`,icon:L.ChevronLeft,disabled:m,theme:d}),i.jsx(C,{onClick:w,label:`Increment value for ${t}`,icon:L.ChevronRight,disabled:m,theme:d})]})]}),i.jsx(S,{errorId:V,message:a,visible:!n,theme:d})]})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{J as C};
