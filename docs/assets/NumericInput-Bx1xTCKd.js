import{j as l}from"./jsx-runtime-DEdD30eg.js";import{u as O,C as B}from"./Label-DMJxrDmn.js";import{I as F,C as k}from"./InputInnerButton-B1gY2cZq.js";import{C as R}from"./Icon-45b0j04X.js";import{r as I}from"./index-RYns6xqu.js";import{C as z,u as U}from"./index-BmPDt6cU.js";import{d as g,U as n,F as G,C as W,S as P,B as q}from"./styled-components.browser.esm-2v_QRtKj.js";function X({name:e,initialValues:r,defaultValue:a}){return r&&r[e]?Number(r[e]):a&&typeof a=="number"?a:0}function J({value:e,required:r,validator:a,maxValue:t,minValue:d}){return r&&!a&&e===void 0?!1:a&&typeof a=="function"?a(e):t&&d&&e&&!a?e<=t&&e>=d:!0}function K({name:e,defaultValue:r,onChange:a,onSpinButtonClick:t,min:d,max:h,step:o,required:x,validator:$}){const{onChangeFormInput:i,initialValues:w}=I.useContext(z),c=X({initialValues:w,defaultValue:r,name:e}),f=h?Number(h):Number.MAX_SAFE_INTEGER,p=d?Number(d):Number.MIN_SAFE_INTEGER,[s,_]=I.useState(c),[S,N]=I.useState(!0),y=u=>{_(u);const m=J({value:u,required:x,validator:$,maxValue:f,minValue:p});N(m),i==null||i({name:e,value:u,valid:m})},V=u=>{const m=Number(u.target.value);y(m),a==null||a(u)},v=()=>{y(s+o),t==null||t(s+o)},T=()=>{y(s-o),t==null||t(s-o)},b=I.useCallback(()=>{_(c),i==null||i({name:e,value:c,valid:!0})},[e]);return U(b),{handleChange:V,value:s,valid:S,minValue:p,maxValue:f,increment:v,decrement:T}}const C=g.div`
  display: flex;
  flex-direction: column;
  gap: ${n.mediumGap};
`,E=g.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${n.smallGap};
  padding: ${n.mediumGap} ${n.mediumGap} ${n.smallGap} ${n.mediumGap};
  font-family: ${G.core};
  color: ${W.primary};
  box-shadow: ${P.box};
  border-top-left-radius: ${n.blockBorderRadius};
  border-top-right-radius: ${n.blockBorderRadius};
  border: ${q.thin};
  background-color: ${W.background};

  &:has(input:focus) {
    outline: ${q.thin};
    outline-offset: -3px;
  }

  ${e=>e.$disabled&&`
      filter: grayscale(100%);
      opacity: 0.8;
      pointer-events: none;

      input::placeholder {
        color: transparent;
      }
    `}

  ${e=>e.$invalid&&`
        border: ${q.accent};
        &:has(input:focus) {
            outline: ${q.accent};
            outline-offset: -3px;
        }
    `}
`,A=g.input`
  outline: 0;
  border: none;
  font-size: 1rem;
  padding: 0;
  background: transparent;
  font-family: ${G.core};
  color: ${W.primary};
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;

  &:placeholder-shown + span {
    visibility: hidden;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`,j=g.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${n.smallGap};
  height: ${n.fieldWrapperHeight};
`,L=g.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 0;

  button {
    padding: 0;
  }
`;try{C.displayName="StyledNumericInputContainer",C.__docgenInfo={description:"",displayName:"StyledNumericInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledNumericInputWrapper",E.__docgenInfo={description:"",displayName:"StyledNumericInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledNumericInput",A.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFieldWrapper",j.__docgenInfo={description:"",displayName:"StyledFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledButtonsWrapper",L.__docgenInfo={description:"",displayName:"StyledButtonsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ne=({name:e,label:r,errorMessage:a,onChange:t,onBlur:d,onFocus:h,onSpinButtonClick:o,validator:x,min:$,max:i,id:w,tabIndex:c,disabled:f=!1,required:p=!1,readOnly:s=!1,hasSpinButtons:_=!0,defaultValue:S=0,step:N=1,...y})=>{const{elementId:V,errorId:v}=O(w),{value:T,valid:b,handleChange:u,increment:m,decrement:D,minValue:H,maxValue:M}=K({name:e,defaultValue:S,min:$,max:i,onChange:t,required:p,validator:x,step:N,onSpinButtonClick:o});return l.jsxs(C,{...y,children:[l.jsxs(E,{$disabled:f,$invalid:!b,children:[l.jsx(B,{label:r,required:p,inputId:V}),l.jsxs(j,{children:[l.jsx(A,{id:V,name:e,type:"number",disabled:f,required:p,readOnly:s,placeholder:"0","aria-invalid":!b,"aria-errormessage":v,value:T.toString(),onChange:u,min:H,max:M,step:N,onBlur:d,onFocus:h,tabIndex:c}),_&&l.jsxs(L,{children:[l.jsx(F,{onClick:D,label:`Decrement value for ${r}`,icon:R.ChevronLeft}),l.jsx(F,{onClick:m,label:`Increment value for ${r}`,icon:R.ChevronRight})]})]})]}),l.jsx(k,{errorId:v,message:a,visible:!b})]})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{ne as C};
