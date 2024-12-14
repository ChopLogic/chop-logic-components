import{j as a}from"./jsx-runtime-OAISXtky.js";import{C}from"./Button-DlAqbfbK.js";import"./Checkbox-BNBt8dsz.js";import"./MultiSelect-DjqRWfJo.js";import"./NumericInput-DNTS1C8q.js";import"./Select-pzjvP-sq.js";import"./TextInput-7Wwh-_Ox.js";import{d as p,a as oe,H as ie,h as se,E as ue,W as ce,i as pe,C as V,u as v,b as me,c as fe,e as ye}from"./index-CreP8U9z.js";import{r as g}from"./index-qVDZzPEr.js";import{u as Q,C as he}from"./index-1hWSJLP3.js";import{R as ge}from"./index-DzcqJxd1.js";import{u as _e}from"./index-Bg4JDWSn.js";import{u as ee}from"./index-BeH7sH-W.js";import{u as be}from"./index-7QOc-elU.js";import{u as te}from"./index-D9uBcq_H.js";import{u as $e}from"./index-CeXmpD0I.js";import{m as Z}from"./Select.styled-BuS3aa_P.js";var h=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(h||{});const x=`
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
`,ve=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"}),T=p.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${e=>e.$theme.gapMedium};
    align-items: center;
    margin: 0;
    color: ${e=>e.$theme.fontColorBase};

    svg {
      color: ${e=>e.$theme.fontColorAccent};
    }
  }
`,S=p.div`
  position: fixed;
  bottom: ${e=>e.$theme.gapBig};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$theme.zIndexPopup};
  ${x}

  ${e=>e.$isClosing&&ae}
`,N=p.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$theme.gapMedium};
  font-family: ${e=>e.$theme.fontFamilyCore};
  background: ${e=>e.$theme.backgroundColorBase};
  color: ${e=>e.$theme.fontColorBase};
  width: 90vw;
  padding: ${e=>e.$theme.gapMedium};
  box-shadow: ${e=>e.$theme.boxShadow};
  border: ${e=>e.$theme.borderLight};
  border-radius: ${e=>e.$theme.blockBorderRadius};
`;try{T.displayName="StyledAlertHeader",T.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledAlertWrapper",S.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledAlertContent",N.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ce(e,t){if(t)return t;switch(e){case h.Info:return"For your information";case h.Warning:return"Please pay attention";case h.Error:return"Something went wrong";case h.Success:return"Everything is okay";case h.Help:return"Useful tip";default:return"Alert"}}function Ve(e,t){if(t)return a.jsx(oe,{name:t});switch(e){case h.Info:return a.jsx(pe,{});case h.Warning:return a.jsx(ce,{});case h.Error:return a.jsx(ue,{});case h.Success:return a.jsx(se,{});case h.Help:return a.jsx(ie,{});default:return null}}const qe=({title:e,onClose:t,mode:r,icon:l,theme:n})=>{const d=Ce(r,e),i=Ve(r,l);return a.jsxs(T,{$theme:n,children:[a.jsxs("h3",{children:[i,d]}),a.jsx(C,{icon:V.Cancel,view:"icon",label:"Close alert popup",onClick:t})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const ot=({isOpened:e,onClose:t,title:r,message:l,mode:n=h.Info,icon:d,...i})=>{const s=te(e),o=s&&!e,u=v();return s?a.jsx(Y,{children:a.jsx(S,{$isClosing:o,$theme:u,children:a.jsxs(N,{...i,$theme:u,children:[a.jsx(qe,{title:r,onClose:t,mode:n,icon:d,theme:u}),a.jsx("p",{children:l})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const A=p.div`
  z-index: ${e=>e.$theme.zIndexModal};
  background-color: ${e=>e.$theme.backgroundColorBase};
  box-shadow: ${e=>e.$theme.boxShadow};
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
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
      font-size: ${e=>e.$theme.fontSizeHeader};
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
  background-color: ${e=>e.$theme.backgroundColorTransparent};
  ${x}

  ${e=>e.$isClosing&&ae}
`,L=p.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapBig};
  padding: ${e=>e.$theme.gapBig};
  border-bottom: ${e=>e.$theme.borderBase};
  color: ${e=>e.$theme.fontColorBase};
`,B=p.div`
  padding: ${e=>e.$theme.gapBig};
  font-size: ${e=>e.$theme.fontSizeBase};
`;try{A.displayName="StyledDialogLayout",A.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="StyledDialogBackground",k.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledDialogHeader",L.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{B.displayName="StyledDialogContent",B.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const we=({title:e,onClose:t,theme:r})=>a.jsxs(L,{$theme:r,children:[e,a.jsx(C,{icon:V.Cancel,view:"icon",label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ie=({title:e,onClose:t,isOpened:r,children:l,theme:n,...d})=>{const i=g.useRef(null);return $e({modalRef:i,isOpened:r}),ee({keyCode:"Escape",ref:i,onKeyPress:t}),a.jsxs(A,{ref:i,role:"dialog","aria-modal":"true",$theme:n,...d,children:[a.jsx(we,{title:e,onClose:t,theme:n}),a.jsx(B,{$theme:n,children:l})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const it=({isOpened:e,onClose:t,title:r,children:l,...n})=>{const d=te(e),i=d&&!e,s=v();return d?a.jsx(Y,{children:a.jsx(k,{$isClosing:i,$theme:s,children:a.jsx(Ie,{title:r,onClose:t,isOpened:e,...n,theme:s,children:l})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const xe=({id:e})=>{const[t,r]=g.useState(!1),l=g.useRef(null),n=g.useRef(null),{top:d,left:i}=be({wrapperRef:l,tooltipRef:n,isOpened:t}),{elementId:s}=Q(e),o=()=>r(!1),u=()=>r(!0),m=()=>r(!t),c=_=>{_.preventDefault(),m()};return ee({keyCode:"Escape",ref:n,onKeyPress:o}),_e({ref:n,onClickOutsideHandler:o,dependentRef:l}),{elementId:s,openTooltip:u,closeTooltip:o,toggleTooltip:m,handleContextMenu:c,top:d,left:i,isOpened:t,wrapperRef:l,tooltipRef:n}},D=p.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${e=>e.$theme.zIndexPopup};
  background-color: ${e=>e.$theme.backgroundColorBase};
  border: ${e=>e.$theme.borderLight};
  color: ${e=>e.$theme.fontColorBase};
  padding: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeSmall};
  font-family: ${e=>e.$theme.fontFamilyCore};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  box-shadow: ${e=>e.$theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;
  ${x}
`;try{D.displayName="StyledTooltip",D.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const st=({children:e,tooltipContent:t,containerTag:r="span",visibleOn:l="hover",id:n,style:d,...i})=>{const s=r,o=v(),{openTooltip:u,closeTooltip:m,toggleTooltip:c,handleContextMenu:_,elementId:y,top:f,left:b,isOpened:$,wrapperRef:le,tooltipRef:ne}=xe({id:n});return a.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:l==="click"?c:void 0,onMouseOver:l==="hover"?u:void 0,onMouseLeave:l==="hover"?m:void 0,onFocus:l==="focus"?u:void 0,onBlur:l==="focus"?m:void 0,onContextMenu:l==="contextmenu"?de=>_(de):void 0,tabIndex:0,ref:le,"aria-describedby":y,children:[e,$&&a.jsx(Y,{children:a.jsx(D,{style:{...d,top:f,left:b},ref:ne,role:"tooltip",id:y,$theme:o,...i,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function Te(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function Se(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(r=>r[0]!==t.name?r:[r[0],!!(t!=null&&t.valid)])}function Ne(e){return e.every(t=>t[1])}function Ae({initialValues:e,onReset:t,onSubmit:r,onClickSubmit:l}){const[n,d]=g.useState(e),[i,s]=g.useState(Te(e)),[o,u]=g.useState(0);return{handleInputChange:y=>{const f={...n,[y.name]:y.value};d(f),s(Se(i,y))},handleSubmit:y=>{y.preventDefault();const b={...Object.fromEntries(new FormData(y.target)),...n};r==null||r(y),l==null||l(b)},handleReset:y=>{t==null||t(y),d(e),u(o+1)},resetSignal:o,valid:Ne(i)}}const R=p.form`
  display: grid;
  align-items: end;
  gap: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,j=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{R.displayName="StyledForm",R.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFormButtonsContainer",j.__docgenInfo={description:"",displayName:"StyledFormButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ut=({children:e,initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n,columns:d=1,hasReset:i=!0,...s})=>{const{handleInputChange:o,handleSubmit:u,handleReset:m,resetSignal:c,valid:_}=Ae({initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n}),y=v();return a.jsx(R,{onSubmit:u,onReset:m,$columns:d,$theme:y,...s,children:a.jsxs(he.Provider,{value:{onChangeFormInput:o,initialValues:t,resetSignal:c},children:[e,a.jsxs(j,{$columns:d,children:[i&&a.jsx(C,{type:"reset",text:"Reset",icon:V.Clear,view:"flat"}),a.jsx(C,{type:"submit",text:"Submit",icon:V.Forward,extended:!i,disabled:!_})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}const W=p.table`
  border-collapse: collapse;
`,G=p.thead`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
`,H=p.tbody`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
`,q=p.th`
  padding: ${e=>e.$theme.gapMedium};
  text-align: left;
`,F=p.tr`
  font-weight: bold;
  border-top: ${e=>e.$theme.borderLight};
  border-bottom: ${e=>e.$theme.borderLight};
  background-color: ${e=>e.$theme.backgroundColorBase};
`,w=p.td`
  padding: ${e=>e.$theme.gapMedium};
`,z=p.caption`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  padding: ${e=>e.$theme.gapMedium};
  font-weight: bold;
`,E=p.tr`
  border-bottom: ${e=>e.$theme.borderLight};

  ${e=>e.$selected&&`
      background-color: ${e.$theme.backgroundColorLight};
    `}
`,I=p.col`
  border-right: ${e=>e.$theme.borderLight};

  ${e=>e.$isFirst&&`border-left: ${e.$theme.borderLight};`}
  ${e=>e.$highlighted&&`background-color: ${e.$theme.backgroundColorLight};`}
`,P=p.div`
  display: flex;
  gap: ${e=>e.$theme.gapSmall};
  padding: ${e=>e.$theme.gapSmall} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${e=>e.$checked?e.$theme.fontColorBase:e.$theme.fontColorLight};
  }

  label {
    cursor: pointer;
    gap: ${e=>e.$theme.gapSmall};
    font-size: ${e=>e.$theme.fontSizeBase} !important;
    &:hover,
    &:active {
      text-shadow: ${e=>e.$theme.textShadow};
    }
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      opacity: 0.5;
    `}
`,M=p.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: 2px;
  }
`;try{W.displayName="StyledGrid",W.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledGridHeader",G.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="StyledGridBody",H.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{q.displayName="StyledGridHeaderCell",q.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{F.displayName="StyledGridHeaderRow",F.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledGridCell",w.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{z.displayName="StyledGridCaption",z.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledGridRow",E.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledGridColumn",I.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledGridCheckboxWrapper",P.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="StyledGridCheckboxInput",M.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function ke({item:e,columns:t,renderDataItem:r}){const l=[];for(const n of t){let d;r&&e[n.field]?d=r(e,n.field):e[n.field]?d=e[n.field].toString():d="",l.push(d)}return l}const Le=({value:e,theme:t})=>a.jsx(w,{$theme:t,children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const re=({name:e,label:t,disabled:r,required:l=!1,onChange:n,checked:d=!1,theme:i,...s})=>{const{elementId:o}=Q(s==null?void 0:s.id);return a.jsxs(P,{$disabled:!!r,$checked:d,$theme:i,children:[a.jsx(M,{id:o,name:e,type:"checkbox",disabled:r,required:l,checked:d,onChange:n,$theme:i}),a.jsx(me,{label:t,required:l,inputId:o,isTextHidden:!0,iconPosition:"left",theme:i,icon:d?a.jsx(fe,{}):a.jsx(ye,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Be=({rowId:e,isRowSelected:t,selectRowById:r,deselectRowById:l,disabled:n,theme:d})=>{const i=s=>{const{checked:o}=s.target;o?r(e):l(e)};return a.jsx(w,{$theme:d,children:a.jsx(re,{theme:d,label:"Select row",onChange:i,id:`select_row_${e}`,checked:t,disabled:n})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const De=({rowId:e,selectRowById:t,deselectRowById:r,selectable:l,values:n,selectedIds:d,disabled:i,theme:s})=>{const o=d.includes(e);return a.jsxs(E,{$selected:o,$theme:s,children:[l&&a.jsx(Be,{rowId:e,selectRowById:t,deselectRowById:r,isRowSelected:o,disabled:i,theme:s}),n.map((u,m)=>a.jsx(Le,{value:u,theme:s},`row_${m}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Re=({selectRowById:e,deselectRowById:t,renderDataItem:r,selectedIds:l,selectable:n,data:d,columns:i,theme:s})=>a.jsx(H,{$theme:s,children:d.map(o=>{const u=ke({item:o,columns:i,renderDataItem:r});return a.jsx(De,{rowId:o.id,disabled:o==null?void 0:o.disabled,selectRowById:e,deselectRowById:t,selectable:n,values:u,selectedIds:l,theme:s},o.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const je=({columns:e,selectable:t,theme:r})=>a.jsxs("colgroup",{children:[t&&a.jsx(I,{$isFirst:!0,$highlighted:!1,$theme:r}),e.map((l,n)=>a.jsx(I,{$isFirst:n===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className,$theme:r},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const We=({title:e,component:t,theme:r})=>a.jsx(q,{$theme:r,children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const O=({gridId:e,isAllSelected:t,selectAll:r,deselectAll:l,disabled:n,theme:d})=>{const i=s=>{const{checked:o}=s.target;o?r():l()};return a.jsx(q,{$theme:d,children:a.jsx(re,{label:"Select all rows",onChange:i,id:`select_all_${e}`,checked:t,disabled:n,theme:d})})};try{O.displayName="SelectAllRowsCell",O.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ge=({columns:e,gridId:t,selectAll:r,deselectAll:l,selectable:n,isAllSelected:d,isAllCheckboxDisabled:i=!1,theme:s})=>a.jsx(G,{$theme:s,children:a.jsxs(F,{$theme:s,children:[n&&a.jsx(O,{isAllSelected:d,disabled:i,gridId:t,selectAll:r,deselectAll:l,theme:s}),e.map(o=>a.jsx(We,{title:o.title,component:o.component,theme:s},`${o.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const He=({data:e,id:t,onSelect:r})=>{const{elementId:l}=Q(t),[n,d]=g.useState([]),i=e.map(f=>f.id),s=i.length===n.length,o=e.some(f=>f==null?void 0:f.disabled),u=f=>{d(f),r==null||r(f)};return{elementId:l,isAllSelected:s,isAllCheckboxDisabled:o,selectedIds:n,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:f=>{const b=[...n,f];u(b)},handleDeselectRowById:f=>{const b=n.filter($=>$!==f);u(b)}}},ct=({columns:e,data:t,id:r,onSelect:l,renderDataItem:n,caption:d,selectable:i=!1,...s})=>{const{elementId:o,handleSelectAll:u,handleDeselectAll:m,isAllCheckboxDisabled:c,isAllSelected:_,handleDeselectRowById:y,handleSelectRowById:f,selectedIds:b}=He({id:r,data:t,onSelect:l}),$=v();return a.jsxs(W,{...s,children:[d&&a.jsx(z,{$theme:$,children:d}),a.jsx(je,{columns:e,selectable:i,theme:$}),a.jsx(Ge,{gridId:o,columns:e,selectable:i,selectAll:u,deselectAll:m,isAllSelected:_,isAllCheckboxDisabled:c,theme:$}),a.jsx(Re,{columns:e,data:t,selectable:i,selectRowById:f,deselectRowById:y,selectedIds:b,renderDataItem:n,theme:$})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}}}}}catch{}const Y=({children:e})=>{const[t]=g.useState(()=>document.createElement("div"));return g.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),ge.createPortal(e,t)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const K=p.button`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${e=>e.$theme.gapMedium};
  cursor: pointer;
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  overflow: hidden;
  border-top-left-radius: ${e=>e.$theme.blockBorderRadius};
  border-top-right-radius: ${e=>e.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${e=>e.$theme.textShadow};
    color: ${e=>e.$theme.fontColorAccent};
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${e=>e.$selected&&`   
      border-top: ${e.$theme.borderLight};
      border-right: ${e.$theme.borderLight};
      border-left: ${e.$theme.borderLight};
      background-color: ${e.$theme.backgroundColorBase};
      top: 1px;
    `}

    ${e=>e.$mode==="vertical"&&`
      border-bottom-left-radius: ${e.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode==="vertical"&&e.$selected&&`
      border-top: ${e.$theme.borderLight};
      border-right: none;
      border-left: ${e.$theme.borderLight};
      border-bottom: ${e.$theme.borderLight};
      top: 0px;
      left: 1px;
    `}
`,X=p.div`
  background-color: ${e=>e.$theme.backgroundColorBase};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};
  padding: ${e=>e.$theme.gapBig};
  flex-grow: 1;
`,J=p.div`
  border-bottom: ${e=>e.$theme.borderLight};
  padding: 0 ${e=>e.$theme.gapMedium};
  display: flex;
  gap: ${e=>e.$theme.gapMedium};

  ${e=>e.$mode==="vertical"&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${e.$theme.borderLight};
      padding: ${e.$theme.gapMedium} 0;
    `}
`,U=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{K.displayName="StyledTabButton",K.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{X.displayName="StyledTabContent",X.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{J.displayName="StyledTabList",J.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{U.displayName="StyledTabs",U.__docgenInfo={description:"",displayName:"StyledTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Fe=({tabs:e,selectedTabId:t,theme:r})=>{var d;const l=(d=e.find(i=>i.id===t))==null?void 0:d.content,n=`tabpanel_${t}`;return a.jsx(X,{role:"tabpanel","aria-labelledby":t,id:n,$theme:r,children:l})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ze=({title:e,onTabSelect:t,tabId:r,isSelected:l,isDisabled:n=!1,tabPanelId:d,mode:i,theme:s})=>a.jsx(K,{role:"tab",id:r,onClick:()=>t(r),"aria-selected":l,"aria-controls":d,$selected:l,$disabled:n,$mode:i,$theme:s,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ee=({tabs:e,onTabSelect:t,selectedTabId:r,tabPanelIds:l,mode:n,tabIds:d,theme:i})=>{const s=o=>{const u=d.findIndex(m=>m===r);switch(o.key){case"ArrowLeft":case"ArrowUp":{if(o.preventDefault(),o.key==="ArrowUp"&&n==="horizontal"||o.key==="ArrowLeft"&&n==="vertical")break;const m=u-1>=0?u-1:d.length-1,c=d[m];c&&(Z(c),t(c));break}case"ArrowRight":case"ArrowDown":{if(o.preventDefault(),o.key==="ArrowDown"&&n==="horizontal"||o.key==="ArrowRight"&&n==="vertical")break;const m=u===d.length-1?0:u+1,c=d[m];c&&(Z(c),t(c));break}}};return a.jsx(J,{role:"tablist",$mode:n,onKeyDown:s,$theme:i,children:e.map(({id:o,title:u,disabled:m},c)=>a.jsx(ze,{title:u,onTabSelect:t,tabId:o,isSelected:o===r,isDisabled:m,tabPanelId:l[c],mode:n,theme:i},o))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const pt=({tabs:e,defaultTabId:t,mode:r="horizontal",...l})=>{const n=e.map(c=>c.id),d=n.map(c=>`tabpanel_${c}`),i=t&&n.includes(t)?t:n[0],[s,o]=g.useState(i),u=v(),m=c=>{o(c)};return a.jsxs(U,{$mode:r,...l,children:[a.jsx(Ee,{tabs:e,selectedTabId:s,tabPanelIds:d,onTabSelect:m,mode:r,tabIds:n,theme:u}),a.jsx(Fe,{tabs:e,selectedTabId:s,theme:u})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}export{pt as C,h as a,ot as b,ut as c,ct as d,it as e,st as f};
