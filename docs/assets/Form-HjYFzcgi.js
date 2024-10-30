import{j as n}from"./jsx-runtime-DEdD30eg.js";import{u as E}from"./index-__4yWXZr.js";import{f as N,a as B,b as I}from"./Alert-B1b_-HT6.js";import{r as y}from"./index-RYns6xqu.js";import{u as F}from"./index-l8NP1wY-.js";import{u as W}from"./index-N0pUs06T.js";import{d as g,Z as L,C as _,S as R,F as j,U as i,a as H,B as O}from"./styled-components.browser.esm-2v_QRtKj.js";import{C}from"./Button-DcAQNvjF.js";import"./Checkbox-JFxaaHM8.js";import"./MultiSelect-LXjQdkmx.js";import"./NumericInput-Bx1xTCKd.js";import"./Select-BnzA_1qj.js";import"./TextInput-Bjvl9Law.js";import{C as V}from"./Icon-45b0j04X.js";import{C as M}from"./index-BmPDt6cU.js";import"./Grid-D5PTnHDE.js";import"./Tabs-zwz-kKGJ.js";import{u as P}from"./index-C-Id0D3c.js";import{u as z}from"./Label-DMJxrDmn.js";import{u as G}from"./index-LntHzZw0.js";const q=g.div`
  z-index: ${L.modal};
  background-color: ${_.background};
  box-shadow: ${R.box};
  font-family: ${j.core};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${i.blockBorderRadius};
  border-top-right-radius: ${i.blockBorderRadius};
  ${N}

  @media ${H.landscapeTablets} {
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

  ${e=>e.$isClosing&&B}
`,x=g.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${i.bigGap};
  padding: ${i.bigGap};
  border-bottom: ${O.thin};
  color: ${_.secondary};
`,T=g.div`
  padding: ${i.bigGap};
  font-size: 1rem;
`;try{q.displayName="StyledDialogLayout",q.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledDialogBackground",S.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledDialogHeader",x.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledDialogContent",T.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const K=({title:e,onClose:t})=>n.jsxs(x,{children:[e,n.jsx(C,{icon:V.Cancel,view:"icon",label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const U=({title:e,onClose:t,isOpened:o,children:a,...l})=>{const r=y.useRef(null);return W({modalRef:r,isOpened:o}),F({keyCode:"Escape",ref:r,onKeyPress:t}),n.jsxs(q,{ref:r,role:"dialog","aria-modal":"true",...l,children:[n.jsx(K,{title:e,onClose:t}),n.jsx(T,{children:a})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}}}}}catch{}const ve=({isOpened:e,onClose:t,title:o,children:a,...l})=>{const r=E(e),d=r&&!e;return r?n.jsx(I,{children:n.jsx(S,{$isClosing:d,children:n.jsx(U,{title:o,onClose:t,isOpened:e,...l,children:a})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const X=({id:e})=>{const[t,o]=y.useState(!1),a=y.useRef(null),l=y.useRef(null),{top:r,left:d}=G({wrapperRef:a,tooltipRef:l,isOpened:t}),{elementId:p}=z(e),s=()=>o(!1),c=()=>o(!0),m=()=>o(!t),f=h=>{h.preventDefault(),m()};return F({keyCode:"Escape",ref:l,onKeyPress:s}),P({ref:l,onClickOutsideHandler:s,dependentRef:a}),{elementId:p,openTooltip:c,closeTooltip:s,toggleTooltip:m,handleContextMenu:f,top:r,left:d,isOpened:t,wrapperRef:a,tooltipRef:l}},D=g.div`
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
`;try{D.displayName="StyledTooltip",D.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ce=({children:e,tooltipContent:t,containerTag:o="span",visibleOn:a="hover",id:l,...r})=>{const d=o,{openTooltip:p,closeTooltip:s,toggleTooltip:c,handleContextMenu:m,elementId:f,top:h,left:u,isOpened:b,wrapperRef:v,tooltipRef:k}=X({id:l});return n.jsxs(d,{style:{position:"relative",cursor:"pointer"},onClick:a==="click"?c:void 0,onMouseOver:a==="hover"?p:void 0,onMouseLeave:a==="hover"?s:void 0,onFocus:a==="focus"?p:void 0,onBlur:a==="focus"?s:void 0,onContextMenu:a==="contextmenu"?A=>m(A):void 0,tabIndex:0,ref:v,"aria-describedby":f,children:[e,b&&n.jsx(I,{children:n.jsx(D,{style:{top:h,left:u},ref:k,role:"tooltip",id:f,...r,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function Z(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function J(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(o=>o[0]!==t.name?o:[o[0],!!(t!=null&&t.valid)])}function Q(e){return e.every(t=>t[1]===!0)}function Y({initialValues:e,onReset:t,onSubmit:o,onClickSubmit:a}){const[l,r]=y.useState(e),[d,p]=y.useState(Z(e)),[s,c]=y.useState(0);return{handleInputChange:u=>{const b={...l,[u.name]:u.value};r(b),p(J(d,u))},handleSubmit:u=>{u.preventDefault();const v={...Object.fromEntries(new FormData(u.target)),...l};o==null||o(u),a==null||a(v)},handleReset:u=>{t==null||t(u),r(e),c(s+1)},resetSignal:s,valid:Q(d)}}const $=g.form`
  font-size: 1rem;
  font-family: ${j.core};
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
`;try{$.displayName="StyledForm",$.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledFormButtonContainer",w.__docgenInfo={description:"",displayName:"StyledFormButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ve=({children:e,initialValues:t,onReset:o,onSubmit:a,onClickSubmit:l,columns:r=1,hasReset:d=!0,...p})=>{const{handleInputChange:s,handleSubmit:c,handleReset:m,resetSignal:f,valid:h}=Y({initialValues:t,onReset:o,onSubmit:a,onClickSubmit:l});return n.jsx($,{onSubmit:c,onReset:m,$columns:r,...p,children:n.jsxs(M.Provider,{value:{onChangeFormInput:s,initialValues:t,resetSignal:f},children:[e,n.jsxs(w,{$columns:r,children:[d&&n.jsx(C,{type:"reset",text:"Reset",icon:V.Clear,view:"danger"}),n.jsx(C,{type:"submit",text:"Submit",icon:V.Forward,extended:!d,disabled:!h})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}export{Ve as C,ve as a,Ce as b};
