import{j as a}from"./jsx-runtime-OAISXtky.js";import{C as v}from"./Button-BaR6FR-0.js";import"./Checkbox-Czr_VCiy.js";import"./MultiSelect-ByFgA7bZ.js";import"./NumericInput-NGS4m8B5.js";import"./Select-i1EVr_el.js";import"./TextInput-Cn-RaTLB.js";import{d as p,a as oe,H as ie,h as se,E as ue,W as ce,i as pe,C,u as $,b as me,c as fe,e as ye}from"./index-yZyA0tCI.js";import{r as h}from"./index-qVDZzPEr.js";import{u as U,C as he}from"./index-1hWSJLP3.js";import{R as ge}from"./index-DzcqJxd1.js";import{u as _e}from"./index-Bg4JDWSn.js";import{u as Z}from"./index-BeH7sH-W.js";import{u as be}from"./index-7QOc-elU.js";import{u as ee}from"./index-D9uBcq_H.js";import{u as $e}from"./index-CeXmpD0I.js";import{m as Y}from"./Select.styled-DOvGcH51.js";var te=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(te||{});const x=`
    animation: fadeIn ease 400ms;
    -webkit-animation: fadeIn ease 400ms;
    -moz-animation: fadeIn ease 400ms;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`,ae=`
    animation: fadeOut ease 400ms;
    -webkit-animation: fadeOut ease 400ms;
    -moz-animation: fadeOut ease 400ms;

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @-moz-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @-webkit-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`,ve=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"}),I=p.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${e=>e.$theme.mediumGap};
    align-items: center;
    margin: 0;
    color: ${e=>e.$theme.secondaryColor};
  }

  button {
    color: ${e=>e.$theme.primaryColor};
    background: transparent;

    &:hover {
      filter: drop-shadow(${e=>e.$theme.textShadow});
      background-color: ${e=>e.$theme.secondaryColor};
      color: ${e=>e.$theme.backgroundColor};
    }
  }
`,T=p.div`
  position: fixed;
  bottom: ${e=>e.$theme.bigGap};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$theme.modalIndex};
  ${x}

  ${e=>e.$isClosing&&ae}
`,S=p.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$theme.mediumGap};
  font-family: ${e=>e.$theme.coreFontFamily};
  background: ${e=>e.$theme.backgroundColor};
  color: ${e=>e.$theme.primaryColor};
  width: 90vw;
  padding: ${e=>e.$theme.mediumGap};
  box-shadow: ${e=>e.$theme.boxShadow};
  border: ${e=>e.$theme.regularBorder};
  border-radius: ${e=>e.$theme.blockBorderRadius};
`;try{I.displayName="StyledAlertHeader",I.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledAlertWrapper",T.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledAlertContent",S.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ce(e,t){if(t)return t;switch(e){case"info":return"Info";case"warning":return"Warning";case"error":return"Error";case"success":return"Success";default:return""}}function Ve(e,t){if(t)return a.jsx(oe,{name:t});switch(e){case"info":return a.jsx(pe,{});case"warning":return a.jsx(ce,{});case"error":return a.jsx(ue,{});case"success":return a.jsx(se,{});case"help":return a.jsx(ie,{});default:return null}}const qe=({title:e,onClose:t,mode:r,icon:l,theme:n})=>{const d=Ce(r,e),i=Ve(r,l);return a.jsxs(I,{$theme:n,children:[a.jsxs("h3",{children:[i,d]}),a.jsx(v,{icon:C.Cancel,view:"icon",label:"Close alert popup",onClick:t})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const ot=({isOpened:e,onClose:t,title:r,message:l,mode:n=te.Info,icon:d,...i})=>{const s=ee(e),o=s&&!e,u=$();return s?a.jsx(Q,{children:a.jsx(T,{$isClosing:o,$theme:u,children:a.jsxs(S,{...i,$theme:u,children:[a.jsx(qe,{title:r,onClose:t,mode:n,icon:d,theme:u}),a.jsx("p",{children:l})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const N=p.div`
  z-index: ${e=>e.$theme.modalIndex};
  background-color: ${e=>e.$theme.backgroundColor};
  box-shadow: ${e=>e.$theme.boxShadow};
  font-family: ${e=>e.$theme.coreFontFamily};
  color: ${e=>e.$theme.primaryColor};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${e=>e.$theme.blockBorderRadius};
  border-top-right-radius: ${e=>e.$theme.blockBorderRadius};
  ${x}

  @media ${ve.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${e=>e.$theme.blockBorderRadius};
    border-bottom-right-radius: ${e=>e.$theme.blockBorderRadius};

    header {
      font-size: ${e=>e.$theme.headerFontSize};
    }
  }
`,k=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.$theme.transparentBackgroundColor};
  ${x}

  ${e=>e.$isClosing&&ae}
`,A=p.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.bigGap};
  padding: ${e=>e.$theme.bigGap};
  border-bottom: ${e=>e.$theme.regularBorder};
  color: ${e=>e.$theme.secondaryColor};
`,D=p.div`
  padding: ${e=>e.$theme.bigGap};
  font-size: ${e=>e.$theme.baseFontSize};
`;try{N.displayName="StyledDialogLayout",N.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="StyledDialogBackground",k.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledDialogHeader",A.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledDialogContent",D.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const we=({title:e,onClose:t,theme:r})=>a.jsxs(A,{$theme:r,children:[e,a.jsx(v,{icon:C.Cancel,view:"icon",label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const xe=({title:e,onClose:t,isOpened:r,children:l,theme:n,...d})=>{const i=h.useRef(null);return $e({modalRef:i,isOpened:r}),Z({keyCode:"Escape",ref:i,onKeyPress:t}),a.jsxs(N,{ref:i,role:"dialog","aria-modal":"true",$theme:n,...d,children:[a.jsx(we,{title:e,onClose:t,theme:n}),a.jsx(D,{$theme:n,children:l})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const it=({isOpened:e,onClose:t,title:r,children:l,...n})=>{const d=ee(e),i=d&&!e,s=$();return d?a.jsx(Q,{children:a.jsx(k,{$isClosing:i,$theme:s,children:a.jsx(xe,{title:r,onClose:t,isOpened:e,...n,theme:s,children:l})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Ie=({id:e})=>{const[t,r]=h.useState(!1),l=h.useRef(null),n=h.useRef(null),{top:d,left:i}=be({wrapperRef:l,tooltipRef:n,isOpened:t}),{elementId:s}=U(e),o=()=>r(!1),u=()=>r(!0),m=()=>r(!t),c=g=>{g.preventDefault(),m()};return Z({keyCode:"Escape",ref:n,onKeyPress:o}),_e({ref:n,onClickOutsideHandler:o,dependentRef:l}),{elementId:s,openTooltip:u,closeTooltip:o,toggleTooltip:m,handleContextMenu:c,top:d,left:i,isOpened:t,wrapperRef:l,tooltipRef:n}},G=p.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${e=>e.$theme.tooltipIndex};
  background-color: ${e=>e.$theme.backgroundColor};
  border: ${e=>e.$theme.regularBorder};
  color: ${e=>e.$theme.primaryColor};
  padding: ${e=>e.$theme.mediumGap};
  font-size: ${e=>e.$theme.smallFontSize};
  font-family: ${e=>e.$theme.coreFontFamily};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  box-shadow: ${e=>e.$theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;
  ${x}
`;try{G.displayName="StyledTooltip",G.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const st=({children:e,tooltipContent:t,containerTag:r="span",visibleOn:l="hover",id:n,style:d,...i})=>{const s=r,o=$(),{openTooltip:u,closeTooltip:m,toggleTooltip:c,handleContextMenu:g,elementId:y,top:f,left:_,isOpened:b,wrapperRef:le,tooltipRef:ne}=Ie({id:n});return a.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:l==="click"?c:void 0,onMouseOver:l==="hover"?u:void 0,onMouseLeave:l==="hover"?m:void 0,onFocus:l==="focus"?u:void 0,onBlur:l==="focus"?m:void 0,onContextMenu:l==="contextmenu"?de=>g(de):void 0,tabIndex:0,ref:le,"aria-describedby":y,children:[e,b&&a.jsx(Q,{children:a.jsx(G,{style:{...d,top:f,left:_},ref:ne,role:"tooltip",id:y,$theme:o,...i,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function Te(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function Se(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(r=>r[0]!==t.name?r:[r[0],!!(t!=null&&t.valid)])}function Ne(e){return e.every(t=>t[1])}function ke({initialValues:e,onReset:t,onSubmit:r,onClickSubmit:l}){const[n,d]=h.useState(e),[i,s]=h.useState(Te(e)),[o,u]=h.useState(0);return{handleInputChange:y=>{const f={...n,[y.name]:y.value};d(f),s(Se(i,y))},handleSubmit:y=>{y.preventDefault();const _={...Object.fromEntries(new FormData(y.target)),...n};r==null||r(y),l==null||l(_)},handleReset:y=>{t==null||t(y),d(e),u(o+1)},resetSignal:o,valid:Ne(i)}}const R=p.form`
  font-size: ${e=>e.$theme.baseFontSize};
  font-family: ${e=>e.$theme.coreFontFamily};
  display: grid;
  gap: ${e=>e.$theme.mediumGap};
  align-items: end;

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,j=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${e=>e.$theme.bigGap};

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{R.displayName="StyledForm",R.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFormButtonContainer",j.__docgenInfo={description:"",displayName:"StyledFormButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ut=({children:e,initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n,columns:d=1,hasReset:i=!0,...s})=>{const{handleInputChange:o,handleSubmit:u,handleReset:m,resetSignal:c,valid:g}=ke({initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n}),y=$();return a.jsx(R,{onSubmit:u,onReset:m,$columns:d,$theme:y,...s,children:a.jsxs(he.Provider,{value:{onChangeFormInput:o,initialValues:t,resetSignal:c},children:[e,a.jsxs(j,{$columns:d,$theme:y,children:[i&&a.jsx(v,{type:"reset",text:"Reset",icon:C.Clear,view:"flat"}),a.jsx(v,{type:"submit",text:"Submit",icon:C.Forward,extended:!i,disabled:!g})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}const B=p.table`
  border-collapse: collapse;
`,L=p.thead`
  font-family: ${e=>e.$theme.coreFontFamily};
  color: ${e=>e.$theme.primaryColor};
  font-size: ${e=>e.$theme.baseFontSize};
`,W=p.tbody`
  font-family: ${e=>e.$theme.coreFontFamily};
  color: ${e=>e.$theme.primaryColor};
`,V=p.th`
  padding: ${e=>e.$theme.mediumGap};
  text-align: left;
`,F=p.tr`
  background-color: ${e=>e.$theme.secondaryColor};
  color: ${e=>e.$theme.backgroundColor};

  svg {
    color: ${e=>e.$theme.backgroundColor} !important;
  }
`,q=p.td`
  padding: ${e=>e.$theme.mediumGap};
`,H=p.caption`
  font-family: ${e=>e.$theme.coreFontFamily};
  color: ${e=>e.$theme.primaryColor};
  padding: ${e=>e.$theme.mediumGap};
  font-weight: bold;
`,z=p.tr`
  border-bottom: ${e=>e.$theme.regularBorder};

  ${e=>e.$selected&&`
      background-color: ${e.$theme.tertiaryColor};
    `}
`,w=p.col`
  border-right: ${e=>e.$theme.regularBorder};

  ${e=>e.$isFirst&&`border-left: ${e.$theme.regularBorder};`}
  ${e=>e.$highlighted&&`background-color: ${e.$theme.tertiaryColor};`}
`,E=p.div`
  display: flex;
  gap: ${e=>e.$theme.smallGap};
  padding: ${e=>e.$theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${e=>e.$theme.secondaryColor};
  }

  label {
    cursor: pointer;
    gap: ${e=>e.$theme.smallGap};
    font-size: ${e=>e.$theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${e=>e.$theme.textShadow};
    }
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      opacity: 0.5;
    `}
`,P=p.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${e=>e.$theme.outlineBorder};
    outline-offset: 2px;
  }
`;try{B.displayName="StyledGrid",B.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledGridHeader",L.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="StyledGridBody",W.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="StyledGridHeaderCell",V.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{F.displayName="StyledGridHeaderRow",F.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{q.displayName="StyledGridCell",q.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="StyledGridCaption",H.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{z.displayName="StyledGridRow",z.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledGridColumn",w.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledGridCheckboxWrapper",E.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledGridCheckboxInput",P.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ae({item:e,columns:t,renderDataItem:r}){const l=[];for(const n of t){let d;r&&e[n.field]?d=r(e,n.field):e[n.field]?d=e[n.field].toString():d="",l.push(d)}return l}const De=({value:e,theme:t})=>a.jsx(q,{$theme:t,children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const re=({name:e,label:t,disabled:r,required:l=!1,onChange:n,checked:d=!1,theme:i,...s})=>{const{elementId:o}=U(s==null?void 0:s.id);return a.jsxs(E,{$disabled:!!r,$theme:i,children:[a.jsx(P,{id:o,name:e,type:"checkbox",disabled:r,required:l,checked:d,onChange:n,$theme:i}),a.jsx(me,{label:t,required:l,inputId:o,isTextHidden:!0,iconPosition:"left",theme:i,icon:d?a.jsx(fe,{}):a.jsx(ye,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ge=({rowId:e,isRowSelected:t,selectRowById:r,deselectRowById:l,disabled:n,theme:d})=>{const i=s=>{const{checked:o}=s.target;o?r(e):l(e)};return a.jsx(q,{$theme:d,children:a.jsx(re,{theme:d,label:"Select row",onChange:i,id:`select_row_${e}`,checked:t,disabled:n})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Re=({rowId:e,selectRowById:t,deselectRowById:r,selectable:l,values:n,selectedIds:d,disabled:i,theme:s})=>{const o=d.includes(e);return a.jsxs(z,{$selected:o,$theme:s,children:[l&&a.jsx(Ge,{rowId:e,selectRowById:t,deselectRowById:r,isRowSelected:o,disabled:i,theme:s}),n.map((u,m)=>a.jsx(De,{value:u,theme:s},`row_${m}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const je=({selectRowById:e,deselectRowById:t,renderDataItem:r,selectedIds:l,selectable:n,data:d,columns:i,theme:s})=>a.jsx(W,{$theme:s,children:d.map(o=>{const u=Ae({item:o,columns:i,renderDataItem:r});return a.jsx(Re,{rowId:o.id,disabled:o==null?void 0:o.disabled,selectRowById:e,deselectRowById:t,selectable:n,values:u,selectedIds:l,theme:s},o.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Be=({columns:e,selectable:t,theme:r})=>a.jsxs("colgroup",{children:[t&&a.jsx(w,{$isFirst:!0,$highlighted:!1,$theme:r}),e.map((l,n)=>a.jsx(w,{$isFirst:n===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className,$theme:r},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Le=({title:e,component:t,theme:r})=>a.jsx(V,{$theme:r,children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const O=({gridId:e,isAllSelected:t,selectAll:r,deselectAll:l,disabled:n,theme:d})=>{const i=s=>{const{checked:o}=s.target;o?r():l()};return a.jsx(V,{$theme:d,children:a.jsx(re,{label:"Select all rows",onChange:i,id:`select_all_${e}`,checked:t,disabled:n,theme:d})})};try{O.displayName="SelectAllRowsCell",O.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const We=({columns:e,gridId:t,selectAll:r,deselectAll:l,selectable:n,isAllSelected:d,isAllCheckboxDisabled:i=!1,theme:s})=>a.jsx(L,{$theme:s,children:a.jsxs(F,{$theme:s,children:[n&&a.jsx(O,{isAllSelected:d,disabled:i,gridId:t,selectAll:r,deselectAll:l,theme:s}),e.map(o=>a.jsx(Le,{title:o.title,component:o.component,theme:s},`${o.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Fe=({data:e,id:t,onSelect:r})=>{const{elementId:l}=U(t),[n,d]=h.useState([]),i=e.map(f=>f.id),s=i.length===n.length,o=e.some(f=>f==null?void 0:f.disabled),u=f=>{d(f),r==null||r(f)};return{elementId:l,isAllSelected:s,isAllCheckboxDisabled:o,selectedIds:n,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:f=>{const _=[...n,f];u(_)},handleDeselectRowById:f=>{const _=n.filter(b=>b!==f);u(_)}}},ct=({columns:e,data:t,id:r,onSelect:l,renderDataItem:n,caption:d,selectable:i=!1,...s})=>{const{elementId:o,handleSelectAll:u,handleDeselectAll:m,isAllCheckboxDisabled:c,isAllSelected:g,handleDeselectRowById:y,handleSelectRowById:f,selectedIds:_}=Fe({id:r,data:t,onSelect:l}),b=$();return a.jsxs(B,{...s,children:[d&&a.jsx(H,{$theme:b,children:d}),a.jsx(Be,{columns:e,selectable:i,theme:b}),a.jsx(We,{gridId:o,columns:e,selectable:i,selectAll:u,deselectAll:m,isAllSelected:g,isAllCheckboxDisabled:c,theme:b}),a.jsx(je,{columns:e,data:t,selectable:i,selectRowById:f,deselectRowById:y,selectedIds:_,renderDataItem:n,theme:b})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}}}}}catch{}const Q=({children:e})=>{const[t]=h.useState(()=>document.createElement("div"));return h.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),ge.createPortal(e,t)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const M=p.button`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${e=>e.$theme.mediumGap};
  cursor: pointer;
  font-size: ${e=>e.$theme.baseFontSize};
  font-family: ${e=>e.$theme.coreFontFamily};
  color: ${e=>e.$theme.primaryColor};
  overflow: hidden;
  border-top-left-radius: ${e=>e.$theme.blockBorderRadius};
  border-top-right-radius: ${e=>e.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${e=>e.$theme.outlineBorder};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${e=>e.$theme.textShadow};
    text-decoration: underline;
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${e=>e.$selected&&`   
      border-top: ${e.$theme.regularBorder};
      border-right: ${e.$theme.regularBorder};
      border-left: ${e.$theme.regularBorder};
      background-color: ${e.$theme.backgroundColor};
      top: 1px;
    `}

    ${e=>e.$mode==="vertical"&&`
      border-bottom-left-radius: ${e.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode==="vertical"&&e.$selected&&`
      border-top: ${e.$theme.regularBorder};
      border-right: none;
      border-left: ${e.$theme.regularBorder};
      border-bottom: ${e.$theme.regularBorder};
      top: 0px;
      left: 1px;
    `}
`,K=p.div`
  background-color: ${e=>e.$theme.backgroundColor};
  color: ${e=>e.$theme.primaryColor};
  font-size: ${e=>e.$theme.baseFontSize};
  font-family: ${e=>e.$theme.coreFontFamily};
  padding: ${e=>e.$theme.bigGap};
  flex-grow: 1;
`,X=p.div`
  border-bottom: ${e=>e.$theme.regularBorder};
  padding: 0 ${e=>e.$theme.mediumGap};
  display: flex;
  gap: ${e=>e.$theme.mediumGap};

  ${e=>e.$mode==="vertical"&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${e.$theme.regularBorder};
      padding: ${e.$theme.mediumGap} 0;
    `}
`,J=p.div`
  display: flex;
  flex-direction: column;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{M.displayName="StyledTabButton",M.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{K.displayName="StyledTabContent",K.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{X.displayName="StyledTabList",X.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{J.displayName="StyledTabsContainer",J.__docgenInfo={description:"",displayName:"StyledTabsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const He=({tabs:e,selectedTabId:t,theme:r})=>{var d;const l=(d=e.find(i=>i.id===t))==null?void 0:d.content,n=`tabpanel_${t}`;return a.jsx(K,{role:"tabpanel","aria-labelledby":t,id:n,$theme:r,children:l})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ze=({title:e,onTabSelect:t,tabId:r,isSelected:l,isDisabled:n=!1,tabPanelId:d,mode:i,theme:s})=>a.jsx(M,{role:"tab",id:r,onClick:()=>t(r),"aria-selected":l,"aria-controls":d,$selected:l,$disabled:n,$mode:i,$theme:s,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ee=({tabs:e,onTabSelect:t,selectedTabId:r,tabPanelIds:l,mode:n,tabIds:d,theme:i})=>{const s=o=>{const u=d.findIndex(m=>m===r);switch(o.key){case"ArrowLeft":case"ArrowUp":{if(o.preventDefault(),o.key==="ArrowUp"&&n==="horizontal"||o.key==="ArrowLeft"&&n==="vertical")break;const m=u-1>=0?u-1:d.length-1,c=d[m];c&&(Y(c),t(c));break}case"ArrowRight":case"ArrowDown":{if(o.preventDefault(),o.key==="ArrowDown"&&n==="horizontal"||o.key==="ArrowRight"&&n==="vertical")break;const m=u===d.length-1?0:u+1,c=d[m];c&&(Y(c),t(c));break}}};return a.jsx(X,{role:"tablist",$mode:n,onKeyDown:s,$theme:i,children:e.map(({id:o,title:u,disabled:m},c)=>a.jsx(ze,{title:u,onTabSelect:t,tabId:o,isSelected:o===r,isDisabled:m,tabPanelId:l[c],mode:n,theme:i},o))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const pt=({tabs:e,defaultTabId:t,mode:r="horizontal",...l})=>{const n=e.map(c=>c.id),d=n.map(c=>`tabpanel_${c}`),i=t&&n.includes(t)?t:n[0],[s,o]=h.useState(i),u=$(),m=c=>{o(c)};return a.jsxs(J,{$mode:r,...l,children:[a.jsx(Ee,{tabs:e,selectedTabId:s,tabPanelIds:d,onTabSelect:m,mode:r,tabIds:n,theme:u}),a.jsx(He,{tabs:e,selectedTabId:s,theme:u})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}export{pt as C,te as a,ot as b,ut as c,ct as d,it as e,st as f};
