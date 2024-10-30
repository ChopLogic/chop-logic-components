import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{u as D,C as E}from"./Label-C3WErDxN.js";import{I as R,C as G}from"./InputInnerButton-IecO_TkS.js";import{C as W}from"./Icon-Bscejonv.js";import{r as h}from"./index-DJO9vBfz.js";import{C as F,u as O}from"./index-C6NryZZH.js";import{d as x,U as n,F as L,C as V,S as P,B as b}from"./styled-components.browser.esm-BAmCwVtG.js";function H({value:e,required:r,validator:a}){return r&&!a&&!e.length?!1:a&&typeof a=="function"?a(e):a&&typeof a=="object"?new RegExp(a.regexp,a==null?void 0:a.flags).test(e):!0}function M({name:e,initialValues:r,defaultValue:a}){return r&&(r!=null&&r[e])?r[e].toString():a&&typeof a=="string"?a:""}function U({name:e,defaultValue:r,onChange:a,onClear:s,required:T,validator:w}){const{onChangeFormInput:l,initialValues:I}=h.useContext(F),d=M({initialValues:I,defaultValue:r,name:e}),[o,u]=h.useState(d),[_,c]=h.useState(!0),[p,t]=h.useState(!1),S=m=>{const y=m.target.value,g=H({value:y,required:T,validator:w});u(y),c(g),l==null||l({name:e,value:y,valid:g}),a==null||a(m)},f=()=>{u(""),c(!0),l==null||l({name:e,value:"",valid:!0}),s==null||s()},$=h.useCallback(()=>{u(d),c(!0),l==null||l({name:e,value:d,valid:!0})},[e]),v=()=>{t(!p)};return O($),{value:o,valid:_,passwordShown:p,handleChange:S,handleClear:f,togglePassword:v}}const q=x.div`
  display: flex;
  flex-direction: column;
  gap: ${n.mediumGap};
`,C=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${n.smallGap};
  padding: ${n.mediumGap} ${n.mediumGap} ${n.smallGap} ${n.mediumGap};
  font-family: ${L.core};
  color: ${V.primary};
  box-shadow: ${P.box};
  border-top-left-radius: ${n.blockBorderRadius};
  border-top-right-radius: ${n.blockBorderRadius};
  border: ${b.light};
  background-color: ${V.background};

  &:has(input:focus) {
    outline: ${b.light};
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
        border: ${b.accent};
        &:has(input:focus) {
            outline: ${b.accent};
            outline-offset: -3px;
        }
    `}
`,N=x.input`
  outline: 0;
  border: none;
  font-size: 1rem;
  padding: 0;
  background: transparent;
  font-family: ${L.core};
  color: ${V.primary};
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;

  &:placeholder-shown + span {
    visibility: hidden;
  }
`,j=x.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${n.smallGap};
  height: ${n.fieldWrapperHeight};
`,A=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;try{q.displayName="StyledTextInputContainer",q.__docgenInfo={description:"",displayName:"StyledTextInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledTextInputWrapper",C.__docgenInfo={description:"",displayName:"StyledTextInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledTextInput",N.__docgenInfo={description:"",displayName:"StyledTextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFieldWrapper",j.__docgenInfo={description:"",displayName:"StyledFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledButtonsWrapper",A.__docgenInfo={description:"",displayName:"StyledButtonsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ee=({name:e,label:r,errorMessage:a,defaultValue:s,onChange:T,onClear:w,validator:l,placeholder:I="Type here...",disabled:d=!1,required:o=!1,clearable:u=!0,readOnly:_=!1,autoComplete:c="off",type:p="text",...t})=>{const{value:S,valid:f,handleChange:$,handleClear:v,passwordShown:m,togglePassword:y}=U({defaultValue:s,name:e,onChange:T,onClear:w,required:o,validator:l}),{elementId:g,errorId:B}=D(t==null?void 0:t.id),k=p==="password";return i.jsxs(q,{className:t==null?void 0:t.className,style:t==null?void 0:t.style,children:[i.jsxs(C,{$disabled:d,$invalid:!f,children:[i.jsx(E,{label:r,required:o,inputId:g}),i.jsxs(j,{children:[i.jsx(N,{id:g,name:e,type:m?"text":p,disabled:d,placeholder:I,required:o,readOnly:_,autoComplete:c,"aria-invalid":!f,"aria-errormessage":B,"aria-readonly":_,value:S,onChange:$,maxLength:t==null?void 0:t.maxLength,onBlur:t==null?void 0:t.onBlur,onFocus:t==null?void 0:t.onFocus,tabIndex:t==null?void 0:t.tabIndex}),i.jsxs(A,{children:[u&&i.jsx(R,{onClick:v,label:`Clear input for ${r}`,icon:W.Remove}),k&&i.jsx(R,{onClick:y,label:"Toggle password visibility",icon:m?W.Hide:W.Show})]})]})]}),i.jsx(G,{errorId:B,message:a,visible:!f})]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"RegExpWithFlags | TextValidationFunction"}}}}}catch{}export{ee as C};
