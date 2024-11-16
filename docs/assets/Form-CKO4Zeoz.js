import{j as n}from"./jsx-runtime-OAISXtky.js";import{u as B}from"./index-D9uBcq_H.js";import{f as N,a as W,b as I}from"./Alert-CZjhL8nL.js";import{r as y}from"./index-qVDZzPEr.js";import{u as F}from"./index-BeH7sH-W.js";import{u as H}from"./index-CeXmpD0I.js";import{d as g,Z as L,C as _,S as R,F as k,U as i,a as O,B as M}from"./styled-components.browser.esm-BD-stqwa.js";import{C}from"./Button-BCnh0a_A.js";import"./Checkbox-Bk0Weu8K.js";import"./MultiSelect-DujgWx8B.js";import"./NumericInput-BEVC7n2h.js";import"./Select-7utpe4mn.js";import"./TextInput-Ca5Y2C6v.js";import{C as V}from"./Icon-BeaB2qBy.js";import{C as P}from"./index-D121fWfN.js";import"./Grid-27xncSyK.js";import"./Tabs-D8NZPdX-.js";import{u as z}from"./index-Bg4JDWSn.js";import{u as G}from"./Label-DNlmmmBQ.js";import{u as K}from"./index-7QOc-elU.js";const q=g.div`
  z-index: ${L.modal};
  background-color: ${_.background};
  box-shadow: ${R.box};
  font-family: ${k.core};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${i.blockBorderRadius};
  border-top-right-radius: ${i.blockBorderRadius};
  ${N}

  @media ${O.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${i.blockBorderRadius};
    border-bottom-right-radius: ${i.blockBorderRadius};

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
`,x=g.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${i.bigGap};
  padding: ${i.bigGap};
  border-bottom: ${M.thin};
  color: ${_.secondary};
`,T=g.div`
  padding: ${i.bigGap};
  font-size: 1rem;
`;try{q.displayName="StyledDialogLayout",q.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledDialogBackground",S.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledDialogHeader",x.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledDialogContent",T.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({title:e,onClose:t})=>n.jsxs(x,{children:[e,n.jsx(C,{icon:V.Cancel,view:"icon",label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const X=({title:e,onClose:t,isOpened:o,children:a,...l})=>{const r=y.useRef(null);return H({modalRef:r,isOpened:o}),F({keyCode:"Escape",ref:r,onKeyPress:t}),n.jsxs(q,{ref:r,role:"dialog","aria-modal":"true",...l,children:[n.jsx(U,{title:e,onClose:t}),n.jsx(T,{children:a})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}}}}}catch{}const Ce=({isOpened:e,onClose:t,title:o,children:a,...l})=>{const r=B(e),d=r&&!e;return r?n.jsx(I,{children:n.jsx(S,{$isClosing:d,children:n.jsx(X,{title:o,onClose:t,isOpened:e,...l,children:a})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Z=({id:e})=>{const[t,o]=y.useState(!1),a=y.useRef(null),l=y.useRef(null),{top:r,left:d}=K({wrapperRef:a,tooltipRef:l,isOpened:t}),{elementId:c}=G(e),s=()=>o(!1),p=()=>o(!0),m=()=>o(!t),h=f=>{f.preventDefault(),m()};return F({keyCode:"Escape",ref:l,onKeyPress:s}),z({ref:l,onClickOutsideHandler:s,dependentRef:a}),{elementId:c,openTooltip:p,closeTooltip:s,toggleTooltip:m,handleContextMenu:h,top:r,left:d,isOpened:t,wrapperRef:a,tooltipRef:l}},D=g.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${L.tooltip};
  background-color: ${_.secondary};
  color: ${_.background};
  padding: ${i.smallGap} ${i.mediumGap};
  font-size: 0.8rem;
  border-radius: ${i.blockBorderRadius};
  box-shadow: ${R.box};
  pointer-events: none;
  white-space: nowrap;
  ${N}
`;try{D.displayName="StyledTooltip",D.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ve=({children:e,tooltipContent:t,containerTag:o="span",visibleOn:a="hover",id:l,style:r,...d})=>{const c=o,{openTooltip:s,closeTooltip:p,toggleTooltip:m,handleContextMenu:h,elementId:f,top:u,left:v,isOpened:b,wrapperRef:j,tooltipRef:A}=Z({id:l});return n.jsxs(c,{style:{position:"relative",cursor:"pointer"},onClick:a==="click"?m:void 0,onMouseOver:a==="hover"?s:void 0,onMouseLeave:a==="hover"?p:void 0,onFocus:a==="focus"?s:void 0,onBlur:a==="focus"?p:void 0,onContextMenu:a==="contextmenu"?E=>h(E):void 0,tabIndex:0,ref:j,"aria-describedby":f,children:[e,b&&n.jsx(I,{children:n.jsx(D,{style:{...r,top:u,left:v},ref:A,role:"tooltip",id:f,...d,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function J(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function Q(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(o=>o[0]!==t.name?o:[o[0],!!(t!=null&&t.valid)])}function Y(e){return e.every(t=>t[1])}function ee({initialValues:e,onReset:t,onSubmit:o,onClickSubmit:a}){const[l,r]=y.useState(e),[d,c]=y.useState(J(e)),[s,p]=y.useState(0);return{handleInputChange:u=>{const v={...l,[u.name]:u.value};r(v),c(Q(d,u))},handleSubmit:u=>{u.preventDefault();const b={...Object.fromEntries(new FormData(u.target)),...l};o==null||o(u),a==null||a(b)},handleReset:u=>{t==null||t(u),r(e),p(s+1)},resetSignal:s,valid:Y(d)}}const $=g.form`
  font-size: 1rem;
  font-family: ${k.core};
  display: grid;
  gap: ${i.bigGap};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,w=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${i.bigGap};

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{$.displayName="StyledForm",$.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledFormButtonContainer",w.__docgenInfo={description:"",displayName:"StyledFormButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const qe=({children:e,initialValues:t,onReset:o,onSubmit:a,onClickSubmit:l,columns:r=1,hasReset:d=!0,...c})=>{const{handleInputChange:s,handleSubmit:p,handleReset:m,resetSignal:h,valid:f}=ee({initialValues:t,onReset:o,onSubmit:a,onClickSubmit:l});return n.jsx($,{onSubmit:p,onReset:m,$columns:r,...c,children:n.jsxs(P.Provider,{value:{onChangeFormInput:s,initialValues:t,resetSignal:h},children:[e,n.jsxs(w,{$columns:r,children:[d&&n.jsx(C,{type:"reset",text:"Reset",icon:V.Clear,view:"danger"}),n.jsx(C,{type:"submit",text:"Submit",icon:V.Forward,extended:!d,disabled:!f})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}export{qe as C,Ce as a,Ve as b};
