import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{u as B}from"./index-C6_MqhCY.js";import{f as N,a as W,b as I}from"./Alert-CjdFzxds.js";import{r as y}from"./index-DJO9vBfz.js";import{u as F}from"./index-DYr8M9Az.js";import{u as E}from"./index-Bl1A3jYt.js";import{d as g,Z as L,C as _,S as R,F as j,U as l,a as O,B as H}from"./styled-components.browser.esm-BAmCwVtG.js";import{C}from"./Button-D-fuWFS8.js";import"./Checkbox-D-9x5qN4.js";import"./MultiSelect-DtrJ6l6D.js";import"./NumericInput-DgAxqivs.js";import"./Select-fz0dFz33.js";import"./TextInput-CqaYWJKQ.js";import{C as x}from"./Icon-Bscejonv.js";import{C as M}from"./index-C6NryZZH.js";import"./Grid-CMfk9Gvl.js";import"./Tabs-xdIbAcDa.js";import{u as z}from"./index-BWBqZFZK.js";import{u as G}from"./Label-C3WErDxN.js";import{u as P}from"./index-D0HHuAcc.js";const T=g.div`
  z-index: ${L.modal};
  background-color: ${_.background};
  box-shadow: ${R.box};
  font-family: ${j.core};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${l.blockBorderRadius};
  border-top-right-radius: ${l.blockBorderRadius};
  ${N}

  @media ${O.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${l.blockBorderRadius};
    border-bottom-right-radius: ${l.blockBorderRadius};

    header {
      font-size: 2rem;
    }
  }
`,S=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${_.transparentBackground};
  ${N}

  ${e=>e.$isClosing&&W}
`,D=g.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${l.bigGap};
  padding: ${l.bigGap};
  border-bottom: ${H.light};
  color: ${_.secondary};
`,V=g.div`
  padding: ${l.bigGap};
  font-size: 1rem;
`;try{T.displayName="StyledDialogLayout",T.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledDialogBackground",S.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledDialogHeader",D.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="StyledDialogContent",V.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K=({title:e,onClose:t})=>n.jsxs(D,{children:[e,n.jsx(C,{icon:x.Cancel,view:"icon",label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const U=({title:e,onClose:t,isOpened:a,children:o,...i})=>{const r=y.useRef(null);return E({modalRef:r,isOpened:a}),F({keyCode:"Escape",ref:r,onKeyPress:t}),n.jsxs(T,{ref:r,role:"dialog","aria-modal":"true",...i,children:[n.jsx(K,{title:e,onClose:t}),n.jsx(V,{children:o})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}}}}}catch{}const be=({isOpened:e,onClose:t,title:a,children:o,...i})=>{const r=B(e),d=r&&!e;return r?n.jsx(I,{children:n.jsx(S,{$isClosing:d,children:n.jsx(U,{title:a,onClose:t,isOpened:e,...i,children:o})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const X=({id:e})=>{const[t,a]=y.useState(!1),o=y.useRef(null),i=y.useRef(null),{top:r,left:d}=P({wrapperRef:o,tooltipRef:i,isOpened:t}),{elementId:s}=G(e),u=()=>a(!1),c=()=>a(!0),m=()=>a(!t),f=h=>{h.preventDefault(),m()};return F({keyCode:"Escape",ref:i,onKeyPress:u}),z({ref:i,onClickOutsideHandler:u,dependentRef:o}),{elementId:s,openTooltip:c,closeTooltip:u,toggleTooltip:m,handleContextMenu:f,top:r,left:d,isOpened:t,wrapperRef:o,tooltipRef:i}},$=g.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${L.tooltip};
  background-color: ${_.secondary};
  color: ${_.background};
  padding: ${l.smallGap} ${l.mediumGap};
  font-size: 0.8rem;
  border-radius: ${l.blockBorderRadius};
  box-shadow: ${R.box};
  pointer-events: none;
  white-space: nowrap;
  ${N}
`;try{$.displayName="StyledTooltip",$.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ce=({children:e,tooltipContent:t,containerTag:a="span",visibleOn:o="hover",id:i,...r})=>{const d=a,{openTooltip:s,closeTooltip:u,toggleTooltip:c,handleContextMenu:m,elementId:f,top:h,left:p,isOpened:v,wrapperRef:b,tooltipRef:k}=X({id:i});return n.jsxs(d,{style:{position:"relative",cursor:"pointer"},onClick:o==="click"?c:void 0,onMouseOver:o==="hover"?s:void 0,onMouseLeave:o==="hover"?u:void 0,onFocus:o==="focus"?s:void 0,onBlur:o==="focus"?u:void 0,onContextMenu:o==="contextmenu"?A=>m(A):void 0,tabIndex:0,...r,ref:b,"aria-describedby":f,children:[e,v&&n.jsx(I,{children:n.jsx($,{style:{top:h,left:p},ref:k,role:"tooltip",id:f,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function Z(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function J(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(a=>a[0]!==t.name?a:[a[0],!!(t!=null&&t.valid)])}function Q(e){return e.every(t=>t[1]===!0)}function Y({initialValues:e,onReset:t,onSubmit:a,onClickSubmit:o}){const[i,r]=y.useState(e),[d,s]=y.useState(Z(e)),[u,c]=y.useState(0);return{handleInputChange:p=>{const v={...i,[p.name]:p.value};r(v),s(J(d,p))},handleSubmit:p=>{p.preventDefault();const b={...Object.fromEntries(new FormData(p.target)),...i};a==null||a(p),o==null||o(b)},handleReset:p=>{t==null||t(p),r(e),c(u+1)},resetSignal:u,valid:Q(d)}}const w=g.form`
  font-size: 1rem;
  font-family: ${j.core};
  display: grid;
  gap: ${l.bigGap};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,q=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${l.bigGap};

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{w.displayName="StyledForm",w.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{q.displayName="StyledFormButtonContainer",q.__docgenInfo={description:"",displayName:"StyledFormButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const xe=({children:e,initialValues:t,onReset:a,onSubmit:o,onClickSubmit:i,columns:r=1,hasReset:d=!0,...s})=>{const{handleInputChange:u,handleSubmit:c,handleReset:m,resetSignal:f,valid:h}=Y({initialValues:t,onReset:a,onSubmit:o,onClickSubmit:i});return n.jsx(w,{onSubmit:c,onReset:m,$columns:r,style:s.style,className:s.className,id:s.id,tabIndex:s.tabIndex,children:n.jsxs(M.Provider,{value:{onChangeFormInput:u,initialValues:t,resetSignal:f},children:[e,n.jsxs(q,{$columns:r,children:[d&&n.jsx(C,{type:"reset",text:"Reset",icon:x.Clear,view:"danger"}),n.jsx(C,{type:"submit",text:"Submit",icon:x.Forward,extended:!d,disabled:!h})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}}}}}catch{}export{xe as C,be as a,Ce as b};
