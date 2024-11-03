import{j as n}from"./jsx-runtime-DEdD30eg.js";import{u as M,C as O}from"./Label-DMJxrDmn.js";import{I as R,C as P}from"./InputInnerButton-B1gY2cZq.js";import{C as S}from"./Icon-45b0j04X.js";import{r as f}from"./index-RYns6xqu.js";import{C as U,u as z}from"./index-BmPDt6cU.js";import{d as y,U as l,F as H,C as $,S as J,B as _}from"./styled-components.browser.esm-2v_QRtKj.js";function K({value:e,required:t,validator:a}){return t&&!a&&!e.length?!1:a&&typeof a=="function"?a(e):a&&typeof a=="object"?new RegExp(a.regexp,a==null?void 0:a.flags).test(e):!0}function Q({name:e,initialValues:t,defaultValue:a}){return t&&(t!=null&&t[e])?t[e].toString():a&&typeof a=="string"?a:""}function X({name:e,defaultValue:t,onChange:a,onClear:i,required:b,validator:T}){const{onChangeFormInput:r,initialValues:v}=f.useContext(U),d=Q({initialValues:v,defaultValue:t,name:e}),[V,o]=f.useState(d),[q,u]=f.useState(!0),[p,c]=f.useState(!1),I=x=>{const m=x.target.value,s=K({value:m,required:b,validator:T});o(m),u(s),r==null||r({name:e,value:m,valid:s}),a==null||a(x)},g=()=>{o(""),u(!0),r==null||r({name:e,value:"",valid:!0}),i==null||i()},w=f.useCallback(()=>{o(d),u(!0),r==null||r({name:e,value:d,valid:!0})},[e]),h=()=>{c(!p)};return z(w),{value:V,valid:q,passwordShown:p,handleChange:I,handleClear:g,togglePassword:h}}const C=y.div`
  display: flex;
  flex-direction: column;
  gap: ${l.mediumGap};
`,W=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${l.smallGap};
  padding: ${l.mediumGap} ${l.mediumGap} ${l.smallGap} ${l.mediumGap};
  font-family: ${H.core};
  color: ${$.primary};
  box-shadow: ${J.box};
  border-top-left-radius: ${l.blockBorderRadius};
  border-top-right-radius: ${l.blockBorderRadius};
  border: ${_.thin};
  background-color: ${$.background};

  &:has(input:focus) {
    outline: ${_.thin};
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
        border: ${_.accent};
        &:has(input:focus) {
            outline: ${_.accent};
            outline-offset: -3px;
        }
    `}
`,N=y.input`
  outline: 0;
  border: none;
  font-size: 1rem;
  padding: 0;
  background: transparent;
  font-family: ${H.core};
  color: ${$.primary};
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;

  &:placeholder-shown + span {
    visibility: hidden;
  }
`,j=y.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${l.smallGap};
  height: ${l.fieldWrapperHeight};
`,L=y.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
`;try{C.displayName="StyledTextInputContainer",C.__docgenInfo={description:"",displayName:"StyledTextInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="StyledTextInputWrapper",W.__docgenInfo={description:"",displayName:"StyledTextInputWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledTextInput",N.__docgenInfo={description:"",displayName:"StyledTextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFieldWrapper",j.__docgenInfo={description:"",displayName:"StyledFieldWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledButtonsWrapper",L.__docgenInfo={description:"",displayName:"StyledButtonsWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ne=({name:e,label:t,errorMessage:a,defaultValue:i,onChange:b,onBlur:T,onFocus:r,onClear:v,validator:d,maxLength:V,id:o,tabIndex:q,placeholder:u="Type here...",disabled:p=!1,required:c=!1,clearable:I=!0,readOnly:g=!1,autoComplete:w="off",type:h="text",...x})=>{const{value:m,valid:s,handleChange:k,handleClear:F,passwordShown:A,togglePassword:D}=X({defaultValue:i,name:e,onChange:b,onClear:v,required:c,validator:d}),{elementId:E,errorId:B}=M(o),G=h==="password";return n.jsxs(C,{...x,children:[n.jsxs(W,{$disabled:p,$invalid:!s,children:[n.jsx(O,{label:t,required:c,inputId:E}),n.jsxs(j,{children:[n.jsx(N,{id:E,name:e,type:A?"text":h,disabled:p,placeholder:u,required:c,readOnly:g,autoComplete:w,"aria-invalid":!s,"aria-errormessage":B,"aria-readonly":g,value:m,onChange:k,maxLength:V,onBlur:T,onFocus:r,tabIndex:q}),n.jsxs(L,{children:[I&&n.jsx(R,{onClick:F,label:`Clear input for ${t}`,icon:S.Remove}),G&&n.jsx(R,{onClick:D,label:"Toggle password visibility",icon:A?S.Hide:S.Show})]})]})]}),n.jsx(P,{errorId:B,message:a,visible:!s})]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"RegExpWithFlags | TextValidationFunction"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"Type here..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}export{ne as C};
