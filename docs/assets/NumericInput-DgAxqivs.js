import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{u as D,C as B}from"./Label-C3WErDxN.js";import{I as F,C as M}from"./InputInnerButton-IecO_TkS.js";import{C as G}from"./Icon-Bscejonv.js";import{r as I}from"./index-DJO9vBfz.js";import{C as O,u as k}from"./index-C6NryZZH.js";import{d as y,U as l,F as L,C as T,S as z,B as v}from"./styled-components.browser.esm-BAmCwVtG.js";function H({name:e,initialValues:r,defaultValue:t}){return r&&r[e]?Number(r[e]):t&&typeof t=="number"?t:0}function U({value:e,required:r,validator:t,maxValue:n,minValue:o}){return r&&!t&&e===void 0?!1:t&&typeof t=="function"?t(e):n&&o&&e&&!t?e<=n&&e>=o:!0}function X({name:e,defaultValue:r,onChange:t,onSpinButtonClick:n,min:o,max:g,step:c,required:x,validator:h}){const{onChangeFormInput:i,initialValues:$}=I.useContext(O),m=H({initialValues:$,defaultValue:r,name:e}),_=g?Number(g):Number.MAX_SAFE_INTEGER,p=o?Number(o):Number.MIN_SAFE_INTEGER,[a,f]=I.useState(m),[b,V]=I.useState(!0),s=u=>{f(u);const N=U({value:u,required:x,validator:h,maxValue:_,minValue:p});V(N),i==null||i({name:e,value:u,valid:N})},w=u=>{const N=Number(u.target.value);s(N),t==null||t(u)},S=()=>{s(a+c),n==null||n(a+c)},W=()=>{s(a-c),n==null||n(a-c)},q=I.useCallback(()=>{f(m),i==null||i({name:e,value:m,valid:!0})},[e]);return k(q),{handleChange:w,value:a,valid:b,minValue:p,maxValue:_,increment:S,decrement:W}}const C=y.div`
  display: flex;
  flex-direction: column;
  gap: ${l.mediumGap};
`,A=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${l.smallGap};
  padding: ${l.mediumGap} ${l.mediumGap} ${l.smallGap} ${l.mediumGap};
  font-family: ${L.core};
  color: ${T.primary};
  box-shadow: ${z.box};
  border-top-left-radius: ${l.blockBorderRadius};
  border-top-right-radius: ${l.blockBorderRadius};
  border: ${v.light};
  background-color: ${T.background};

  &:has(input:focus) {
    outline: ${v.light};
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
        border: ${v.accent};
        &:has(input:focus) {
            outline: ${v.accent};
            outline-offset: -3px;
        }
    `}
`,j=y.input`
  outline: 0;
  border: none;
  font-size: 1rem;
  padding: 0;
  background: transparent;
  font-family: ${L.core};
  color: ${T.primary};
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
`,E=y.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${l.smallGap};
  height: ${l.fieldWrapperHeight};
`,R=y.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 0;

  button {
    padding: 0;
  }
`;try{C.displayName="StyledNumericInputContainer",C.__docgenInfo={description:"",displayName:"StyledNumericInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledNumericInputWrapper",A.__docgenInfo={description:"",displayName:"StyledNumericInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledNumericInput",j.__docgenInfo={description:"",displayName:"StyledNumericInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledFieldWrapper",E.__docgenInfo={description:"",displayName:"StyledFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{R.displayName="StyledButtonsWrapper",R.__docgenInfo={description:"",displayName:"StyledButtonsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ae=({name:e,label:r,errorMessage:t,onChange:n,onSpinButtonClick:o,validator:g,min:c,max:x,disabled:h=!1,required:i=!1,readOnly:$=!1,hasSpinButtons:m=!0,defaultValue:_=0,step:p=1,...a})=>{const{elementId:f,errorId:b}=D(a==null?void 0:a.id),{value:V,valid:s,handleChange:w,increment:S,decrement:W,minValue:q,maxValue:u}=X({name:e,defaultValue:_,min:c,max:x,onChange:n,required:i,validator:g,step:+p,onSpinButtonClick:o});return d.jsxs(C,{className:a==null?void 0:a.className,style:a==null?void 0:a.style,children:[d.jsxs(A,{$disabled:h,$invalid:!s,children:[d.jsx(B,{label:r,required:i,inputId:f}),d.jsxs(E,{children:[d.jsx(j,{id:f,name:e,type:"number",disabled:h,required:i,readOnly:$,placeholder:"0","aria-invalid":!s,"aria-errormessage":b,value:V.toString(),onChange:w,min:q,max:u,step:p,onBlur:a==null?void 0:a.onBlur,onFocus:a==null?void 0:a.onFocus,tabIndex:a==null?void 0:a.tabIndex}),m&&d.jsxs(R,{children:[d.jsx(F,{onClick:W,label:`Decrement value for ${r}`,icon:G.ChevronLeft}),d.jsx(F,{onClick:S,label:`Increment value for ${r}`,icon:G.ChevronRight})]})]})]}),d.jsx(M,{errorId:b,message:t,visible:!s})]})};try{NumericInput.displayName="NumericInput",NumericInput.__docgenInfo={description:"",displayName:"NumericInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},hasSpinButtons:{defaultValue:{value:"true"},description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}}}}}catch{}export{ae as C};
