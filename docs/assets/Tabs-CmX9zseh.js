import{j as t}from"./jsx-runtime-OAISXtky.js";import{d as p,a as se,H as ue,i as ce,E as pe,W as me,j as fe,C as q,o as b,g as v,b as ye,c as he,e as ge}from"./get-chop-logic-theme-C9Q9v90u.js";import{C}from"./Button--7gU6zvB.js";import"./Checkbox-CLF59sww.js";import"./MultiSelect-D4Q7nsBa.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import{r as g}from"./index-qVDZzPEr.js";import{R as _e}from"./index-DzcqJxd1.js";import{u as Y,C as be}from"./chop-logic-form-context-lL0zfSzs.js";import{u as ve}from"./index-Bg4JDWSn.js";import{u as ae}from"./index-BeH7sH-W.js";import{u as Ve}from"./index-7QOc-elU.js";import{u as te}from"./index-D9uBcq_H.js";import{u as qe}from"./index-CeXmpD0I.js";import{m as ee}from"./Select.styled-C_20FPH2.js";var re=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(re||{});const S=`
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
`,le=`
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
`,Ce=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"}),T=p.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${e=>e.theme.mediumGap};
    align-items: center;
    margin: 0;
    color: ${e=>e.theme.secondaryColor};
  }

  button {
    color: ${e=>e.theme.primaryColor};
    background: transparent;

    &:hover {
      filter: drop-shadow(${e=>e.theme.textShadow});
      background-color: ${e=>e.theme.secondaryColor};
      color: ${e=>e.theme.backgroundColor};
    }
  }
`,k=p.div`
  position: fixed;
  bottom: ${e=>e.theme.bigGap};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.theme.modalIndex};
  ${S}

  ${e=>e.$isClosing&&le}
`,N=p.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.mediumGap};
  font-family: ${e=>e.theme.coreFontFamily};
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.primaryColor};
  width: 90vw;
  padding: ${e=>e.theme.mediumGap};
  box-shadow: ${e=>e.theme.boxShadow};
  border: ${e=>e.theme.regularBorder};
  border-radius: ${e=>e.theme.blockBorderRadius};
`;try{T.displayName="StyledAlertHeader",T.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="StyledAlertWrapper",k.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledAlertContent",N.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function we(e,a){if(a)return a;switch(e){case"info":return"Info";case"warning":return"Warning";case"error":return"Error";case"success":return"Success";default:return""}}function xe(e,a){if(a)return t.jsx(se,{name:a});switch(e){case"info":return t.jsx(fe,{});case"warning":return t.jsx(me,{});case"error":return t.jsx(pe,{});case"success":return t.jsx(ce,{});case"help":return t.jsx(ue,{});default:return null}}const Ie=({title:e,onClose:a,mode:r,icon:d})=>{const l=we(r,e),n=xe(r,d);return t.jsxs(T,{children:[t.jsxs("h3",{children:[n,l]}),t.jsx(C,{icon:q.Cancel,view:"icon",label:"Close alert popup",onClick:a})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const sa=({isOpened:e,onClose:a,title:r,message:d,mode:l=re.Info,icon:n,theme:i,...o})=>{const s=te(e),u=s&&!e,c=v(i);return s?t.jsx(Z,{children:t.jsx(b,{theme:c,children:t.jsx(k,{$isClosing:u,children:t.jsxs(N,{...o,children:[t.jsx(Ie,{title:r,onClose:a,mode:l,icon:n}),t.jsx("p",{children:d})]})})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const A=p.div`
  z-index: ${e=>e.theme.modalIndex};
  background-color: ${e=>e.theme.backgroundColor};
  box-shadow: ${e=>e.theme.boxShadow};
  font-family: ${e=>e.theme.coreFontFamily};
  color: ${e=>e.theme.primaryColor};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${e=>e.theme.blockBorderRadius};
  border-top-right-radius: ${e=>e.theme.blockBorderRadius};
  ${S}

  @media ${Ce.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${e=>e.theme.blockBorderRadius};
    border-bottom-right-radius: ${e=>e.theme.blockBorderRadius};

    header {
      font-size: ${e=>e.theme.headerFontSize};
    }
  }
`,D=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.transparentBackgroundColor};
  ${S}

  ${e=>e.$isClosing&&le}
`,j=p.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.theme.bigGap};
  padding: ${e=>e.theme.bigGap};
  border-bottom: ${e=>e.theme.regularBorder};
  color: ${e=>e.theme.secondaryColor};
`,G=p.div`
  padding: ${e=>e.theme.bigGap};
  font-size: ${e=>e.theme.baseFontSize};
`;try{A.displayName="StyledDialogLayout",A.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledDialogBackground",D.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledDialogHeader",j.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledDialogContent",G.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Se=({title:e,onClose:a})=>t.jsxs(j,{children:[e,t.jsx(C,{icon:q.Cancel,view:"icon",label:"Close modal window",onClick:a})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const $e=({title:e,onClose:a,isOpened:r,children:d,...l})=>{const n=g.useRef(null);return qe({modalRef:n,isOpened:r}),ae({keyCode:"Escape",ref:n,onKeyPress:a}),t.jsxs(A,{ref:n,role:"dialog","aria-modal":"true",...l,children:[t.jsx(Se,{title:e,onClose:a}),t.jsx(G,{children:d})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}}}}}catch{}const ua=({isOpened:e,onClose:a,title:r,children:d,theme:l,...n})=>{const i=te(e),o=i&&!e,s=v(l);return i?t.jsx(Z,{children:t.jsx(b,{theme:s,children:t.jsx(D,{$isClosing:o,children:t.jsx($e,{title:r,onClose:a,isOpened:e,...n,children:d})})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Te=({id:e})=>{const[a,r]=g.useState(!1),d=g.useRef(null),l=g.useRef(null),{top:n,left:i}=Ve({wrapperRef:d,tooltipRef:l,isOpened:a}),{elementId:o}=Y(e),s=()=>r(!1),u=()=>r(!0),c=()=>r(!a),h=y=>{y.preventDefault(),c()};return ae({keyCode:"Escape",ref:l,onKeyPress:s}),ve({ref:l,onClickOutsideHandler:s,dependentRef:d}),{elementId:o,openTooltip:u,closeTooltip:s,toggleTooltip:c,handleContextMenu:h,top:n,left:i,isOpened:a,wrapperRef:d,tooltipRef:l}},R=p.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${e=>e.theme.tooltipIndex};
  background-color: ${e=>e.theme.backgroundColor};
  border: ${e=>e.theme.regularBorder};
  color: ${e=>e.theme.primaryColor};
  padding: ${e=>e.theme.mediumGap};
  font-size: ${e=>e.theme.smallFontSize};
  font-family: ${e=>e.theme.coreFontFamily};
  border-radius: ${e=>e.theme.blockBorderRadius};
  box-shadow: ${e=>e.theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;
  ${S}
`;try{R.displayName="StyledTooltip",R.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ca=({children:e,tooltipContent:a,containerTag:r="span",visibleOn:d="hover",id:l,style:n,theme:i,...o})=>{const s=r,{openTooltip:u,closeTooltip:c,toggleTooltip:h,handleContextMenu:y,elementId:f,top:m,left:_,isOpened:V,wrapperRef:$,tooltipRef:de}=Te({id:l}),oe=v(i);return t.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:d==="click"?h:void 0,onMouseOver:d==="hover"?u:void 0,onMouseLeave:d==="hover"?c:void 0,onFocus:d==="focus"?u:void 0,onBlur:d==="focus"?c:void 0,onContextMenu:d==="contextmenu"?ie=>y(ie):void 0,tabIndex:0,ref:$,"aria-describedby":f,children:[e,V&&t.jsx(Z,{children:t.jsx(b,{theme:oe,children:t.jsx(R,{style:{...n,top:m,left:_},ref:de,role:"tooltip",id:f,...o,children:a})})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function ke(e){return e?Object.keys(e).map(a=>[a,!0]):[]}function Ne(e,a){return(a==null?void 0:a.valid)===void 0?e:e.map(r=>r[0]!==a.name?r:[r[0],!!(a!=null&&a.valid)])}function Ae(e){return e.every(a=>a[1])}function De({initialValues:e,onReset:a,onSubmit:r,onClickSubmit:d}){const[l,n]=g.useState(e),[i,o]=g.useState(ke(e)),[s,u]=g.useState(0);return{handleInputChange:f=>{const m={...l,[f.name]:f.value};n(m),o(Ne(i,f))},handleSubmit:f=>{f.preventDefault();const _={...Object.fromEntries(new FormData(f.target)),...l};r==null||r(f),d==null||d(_)},handleReset:f=>{a==null||a(f),n(e),u(s+1)},resetSignal:s,valid:Ae(i)}}const B=p.form`
  font-size: ${e=>e.theme.baseFontSize};
  font-family: ${e=>e.theme.coreFontFamily};
  display: grid;
  gap: ${e=>e.theme.mediumGap};
  align-items: end;

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,W=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${e=>e.theme.bigGap};

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{B.displayName="StyledForm",B.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="StyledFormButtonContainer",W.__docgenInfo={description:"",displayName:"StyledFormButtonContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const pa=({children:e,initialValues:a,onReset:r,onSubmit:d,onClickSubmit:l,columns:n=1,hasReset:i=!0,theme:o,...s})=>{const{handleInputChange:u,handleSubmit:c,handleReset:h,resetSignal:y,valid:f}=De({initialValues:a,onReset:r,onSubmit:d,onClickSubmit:l}),m=v(o);return t.jsx(b,{theme:m,children:t.jsx(B,{onSubmit:c,onReset:h,$columns:n,...s,children:t.jsxs(be.Provider,{value:{onChangeFormInput:u,initialValues:a,resetSignal:y},children:[e,t.jsxs(W,{$columns:n,children:[i&&t.jsx(C,{type:"reset",text:"Reset",icon:q.Clear,view:"flat"}),t.jsx(C,{type:"submit",text:"Submit",icon:q.Forward,extended:!i,disabled:!f})]})]})})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}const F=p.table`
  border-collapse: collapse;
`,L=p.thead`
  font-family: ${e=>e.theme.coreFontFamily};
  color: ${e=>e.theme.primaryColor};
  font-size: ${e=>e.theme.baseFontSize};
`,H=p.tbody`
  font-family: ${e=>e.theme.coreFontFamily};
  color: ${e=>e.theme.primaryColor};
`,w=p.th`
  padding: ${e=>e.theme.mediumGap};
  text-align: left;
`,z=p.tr`
  background-color: ${e=>e.theme.secondaryColor};
  color: ${e=>e.theme.backgroundColor};

  svg {
    color: ${e=>e.theme.backgroundColor} !important;
  }
`,x=p.td`
  padding: ${e=>e.theme.mediumGap};
`,E=p.caption`
  font-family: ${e=>e.theme.coreFontFamily};
  color: ${e=>e.theme.primaryColor};
  padding: ${e=>e.theme.mediumGap};
  font-weight: bold;
`,P=p.tr`
  border-bottom: ${e=>e.theme.regularBorder};

  ${e=>e.$selected&&`
      background-color: ${e.theme.tertiaryColor};
    `}
`,I=p.col`
  border-right: ${e=>e.theme.regularBorder};

  ${e=>e.$isFirst&&`border-left: ${e.theme.regularBorder};`}
  ${e=>e.$highlighted&&`background-color: ${e.theme.tertiaryColor};`}
`,O=p.div`
  display: flex;
  gap: ${e=>e.theme.smallGap};
  padding: ${e=>e.theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${e=>e.theme.secondaryColor};
  }

  label {
    cursor: pointer;
    gap: ${e=>e.theme.smallGap};
    font-size: ${e=>e.theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${e=>e.theme.textShadow};
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
    outline: ${e=>e.theme.outlineBorder};
    outline-offset: 2px;
  }
`;try{F.displayName="StyledGrid",F.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledGridHeader",L.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="StyledGridBody",H.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledGridHeaderCell",w.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{z.displayName="StyledGridHeaderRow",z.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledGridCell",x.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledGridCaption",E.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledGridRow",P.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledGridColumn",I.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="StyledGridCheckboxWrapper",O.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="StyledGridCheckboxInput",M.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function je({item:e,columns:a,renderDataItem:r}){const d=[];for(const l of a){let n;r&&e[l.field]?n=r(e,l.field):e[l.field]?n=e[l.field].toString():n="",d.push(n)}return d}const Ge=({value:e})=>t.jsx(x,{children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const ne=({name:e,label:a,disabled:r,required:d=!1,onChange:l,checked:n=!1,...i})=>{const{elementId:o}=Y(i==null?void 0:i.id);return t.jsxs(O,{$disabled:!!r,children:[t.jsx(M,{id:o,name:e,type:"checkbox",disabled:r,required:d,checked:n,onChange:l}),t.jsx(ye,{label:a,required:d,inputId:o,isTextHidden:!0,iconPosition:"left",icon:n?t.jsx(he,{}):t.jsx(ge,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const Re=({rowId:e,isRowSelected:a,selectRowById:r,deselectRowById:d,disabled:l})=>{const n=i=>{const{checked:o}=i.target;o?r(e):d(e)};return t.jsx(x,{children:t.jsx(ne,{label:"Select row",onChange:n,id:`select_row_${e}`,checked:a,disabled:l})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Be=({rowId:e,selectRowById:a,deselectRowById:r,selectable:d,values:l,selectedIds:n,disabled:i})=>{const o=n.includes(e);return t.jsxs(P,{$selected:o,children:[d&&t.jsx(Re,{rowId:e,selectRowById:a,deselectRowById:r,isRowSelected:o,disabled:i}),l.map((s,u)=>t.jsx(Ge,{value:s},`row_${u}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const We=({selectRowById:e,deselectRowById:a,renderDataItem:r,selectedIds:d,selectable:l,data:n,columns:i})=>t.jsx(H,{children:n.map(o=>{const s=je({item:o,columns:i,renderDataItem:r});return t.jsx(Be,{rowId:o.id,disabled:o==null?void 0:o.disabled,selectRowById:e,deselectRowById:a,selectable:l,values:s,selectedIds:d},o.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const Fe=({columns:e,selectable:a})=>t.jsxs("colgroup",{children:[a&&t.jsx(I,{$isFirst:!0,$highlighted:!1}),e.map((r,d)=>t.jsx(I,{$isFirst:d===0&&!a,$highlighted:!!(r!=null&&r.highlighted),className:r==null?void 0:r.className},r==null?void 0:r.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const Le=({title:e,component:a})=>t.jsx(w,{children:a??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const K=({gridId:e,isAllSelected:a,selectAll:r,deselectAll:d,disabled:l})=>{const n=i=>{const{checked:o}=i.target;o?r():d()};return t.jsx(w,{children:t.jsx(ne,{label:"Select all rows",onChange:n,id:`select_all_${e}`,checked:a,disabled:l})})};try{K.displayName="SelectAllRowsCell",K.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const He=({columns:e,gridId:a,selectAll:r,deselectAll:d,selectable:l,isAllSelected:n,isAllCheckboxDisabled:i=!1})=>t.jsx(L,{children:t.jsxs(z,{children:[l&&t.jsx(K,{isAllSelected:n,disabled:i,gridId:a,selectAll:r,deselectAll:d}),e.map(o=>t.jsx(Le,{title:o.title,component:o.component},`${o.title}_${a}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}}}}}catch{}const ze=({data:e,id:a,onSelect:r})=>{const{elementId:d}=Y(a),[l,n]=g.useState([]),i=e.map(m=>m.id),o=i.length===l.length,s=e.some(m=>m==null?void 0:m.disabled),u=m=>{n(m),r==null||r(m)};return{elementId:d,isAllSelected:o,isAllCheckboxDisabled:s,selectedIds:l,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:m=>{const _=[...l,m];u(_)},handleDeselectRowById:m=>{const _=l.filter(V=>V!==m);u(_)}}},ma=({columns:e,data:a,id:r,onSelect:d,renderDataItem:l,caption:n,selectable:i=!1,theme:o,...s})=>{const{elementId:u,handleSelectAll:c,handleDeselectAll:h,isAllCheckboxDisabled:y,isAllSelected:f,handleDeselectRowById:m,handleSelectRowById:_,selectedIds:V}=ze({id:r,data:a,onSelect:d}),$=v(o);return t.jsx(b,{theme:$,children:t.jsxs(F,{...s,children:[n&&t.jsx(E,{children:n}),t.jsx(Fe,{columns:e,selectable:i}),t.jsx(He,{gridId:u,columns:e,selectable:i,selectAll:c,deselectAll:h,isAllSelected:f,isAllCheckboxDisabled:y}),t.jsx(We,{columns:e,data:a,selectable:i,selectRowById:_,deselectRowById:m,selectedIds:V,renderDataItem:l})]})})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}}}}}catch{}const Z=({children:e})=>{const[a]=g.useState(()=>document.createElement("div"));return g.useEffect(()=>(document.body.appendChild(a),()=>{document.body.removeChild(a)}),[a]),_e.createPortal(e,a)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const X=p.button`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${e=>e.theme.mediumGap};
  cursor: pointer;
  font-size: ${e=>e.theme.baseFontSize};
  font-family: ${e=>e.theme.coreFontFamily};
  color: ${e=>e.theme.primaryColor};
  overflow: hidden;
  border-top-left-radius: ${e=>e.theme.blockBorderRadius};
  border-top-right-radius: ${e=>e.theme.blockBorderRadius};

  &:focus-visible {
    outline: ${e=>e.theme.outlineBorder};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${e=>e.theme.textShadow};
    text-decoration: underline;
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${e=>e.$selected&&`   
      border-top: ${e.theme.regularBorder};
      border-right: ${e.theme.regularBorder};
      border-left: ${e.theme.regularBorder};
      background-color: ${e.theme.backgroundColor};
      top: 1px;
    `}

    ${e=>e.$mode==="vertical"&&`
      border-bottom-left-radius: ${e.theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode==="vertical"&&e.$selected&&`
      border-top: ${e.theme.regularBorder};
      border-right: none;
      border-left: ${e.theme.regularBorder};
      border-bottom: ${e.theme.regularBorder};
      top: 0px;
      left: 1px;
    `}
`,J=p.div`
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.primaryColor};
  font-size: ${e=>e.theme.baseFontSize};
  font-family: ${e=>e.theme.coreFontFamily};
  padding: ${e=>e.theme.bigGap};
  flex-grow: 1;
`,U=p.div`
  border-bottom: ${e=>e.theme.regularBorder};
  padding: 0 ${e=>e.theme.mediumGap};
  display: flex;
  gap: ${e=>e.theme.mediumGap};

  ${e=>e.$mode==="vertical"&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${e.theme.regularBorder};
      padding: ${e.theme.mediumGap} 0;
    `}
`,Q=p.div`
  display: flex;
  flex-direction: column;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{X.displayName="StyledTabButton",X.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{J.displayName="StyledTabContent",J.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{U.displayName="StyledTabList",U.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Q.displayName="StyledTabsContainer",Q.__docgenInfo={description:"",displayName:"StyledTabsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ee=({tabs:e,selectedTabId:a})=>{var l;const r=(l=e.find(n=>n.id===a))==null?void 0:l.content,d=`tabpanel_${a}`;return t.jsx(J,{role:"tabpanel","aria-labelledby":a,id:d,children:r})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}}}}}catch{}const Pe=({title:e,onTabSelect:a,tabId:r,isSelected:d,isDisabled:l=!1,tabPanelId:n,mode:i})=>t.jsx(X,{role:"tab",id:r,onClick:()=>a(r),"aria-selected":d,"aria-controls":n,$selected:d,$disabled:l,$mode:i,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const Oe=({tabs:e,onTabSelect:a,selectedTabId:r,tabPanelIds:d,mode:l,tabIds:n})=>{const i=o=>{const s=n.findIndex(u=>u===r);switch(o.key){case"ArrowLeft":case"ArrowUp":{if(o.preventDefault(),o.key==="ArrowUp"&&l==="horizontal"||o.key==="ArrowLeft"&&l==="vertical")break;const u=s-1>=0?s-1:n.length-1,c=n[u];c&&(ee(c),a(c));break}case"ArrowRight":case"ArrowDown":{if(o.preventDefault(),o.key==="ArrowDown"&&l==="horizontal"||o.key==="ArrowRight"&&l==="vertical")break;const u=s===n.length-1?0:s+1,c=n[u];c&&(ee(c),a(c));break}}};return t.jsx(U,{role:"tablist",$mode:l,onKeyDown:i,children:e.map(({id:o,title:s,disabled:u},c)=>t.jsx(Pe,{title:s,onTabSelect:a,tabId:o,isSelected:o===r,isDisabled:u,tabPanelId:d[c],mode:l},o))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const fa=({tabs:e,defaultTabId:a,mode:r="horizontal",theme:d,...l})=>{const n=e.map(y=>y.id),i=n.map(y=>`tabpanel_${y}`),o=a&&n.includes(a)?a:n[0],[s,u]=g.useState(o),c=v(d),h=y=>{u(y)};return t.jsx(b,{theme:c,children:t.jsxs(Q,{$mode:r,...l,children:[t.jsx(Oe,{tabs:e,selectedTabId:s,tabPanelIds:i,onTabSelect:h,mode:r,tabIds:n}),t.jsx(Ee,{tabs:e,selectedTabId:s})]})})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}export{fa as C,re as a,sa as b,pa as c,ma as d,ua as e,ca as f};
