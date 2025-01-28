import{j as a}from"./jsx-runtime-OAISXtky.js";import{a as q,f as w,d as ue,C,b as $e}from"./Label-DP2hSXEE.js";import"./Checkbox-DxuJFuSh.js";import"./MultiSelect-DXgogZp7.js";import"./NumericInput-CHaYPu-H.js";import"./Select-LlN4QuG9.js";import"./TextInput-dILkR5In.js";import{d as c,u as x,c as de,C as ve}from"./index-BT98D5zi.js";import{r as h}from"./index-qVDZzPEr.js";import Ve from"./CheckboxCheckedIcon-CF8eYAUg.js";import qe from"./CheckboxUncheckedIcon-CyCeDUlo.js";import{u as ce}from"./index-Bg4JDWSn.js";import{R as xe}from"./index-DzcqJxd1.js";import{m as se}from"./Select.styled-BJZBRQF3.js";import{u as pe}from"./index-D9uBcq_H.js";import Ce from"./CheckMarkIcon-CfV3vdyY.js";import we from"./ErrorIcon-D-M6vwQ1.js";import Se from"./HelpIcon-DQHZekkZ.js";import Ie from"./InfoIcon-BNiUgg5x.js";import Te from"./WarningIcon-DncDqrJn.js";import{u as me}from"./index-BeH7sH-W.js";import{u as ke}from"./index-7QOc-elU.js";const Ne=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"});var _=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(_||{}),V=(e=>(e.Primary="primary",e.Flat="flat",e.Icon="icon",e))(V||{}),g=(e=>(e.Vertical="vertical",e.Horizontal="horizontal",e))(g||{}),fe=(e=>(e.Span="span",e.Div="div",e.P="p",e.Strong="strong",e.Em="em",e))(fe||{});function B(e){return({tooltip:t,visibleOn:r,...l})=>t!=null&&t.length?a.jsx(Re,{tooltipContent:t,visibleOn:r,children:a.jsx(e,{...l})}):a.jsx(e,{...l})}try{B.displayName="withTooltip",B.__docgenInfo={description:"",displayName:"withTooltip",props:{}}}catch{}const Be=({modalRef:e,isOpened:t})=>{h.useEffect(()=>{const r=e.current;if(!t||!r)return;const l=r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=l[0],o=l[l.length-1],i=s=>{s.key==="Tab"&&(s.shiftKey&&document.activeElement===n?(s.preventDefault(),o.focus()):!s.shiftKey&&document.activeElement===o&&(s.preventDefault(),n.focus()))};return r.addEventListener("keydown",i),()=>{r.removeEventListener("keydown",i)}},[e,t])},A=c.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: filter 250ms;
  width: ${e=>e.$extended?"100%":"inherit"};

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  .chop-logic-button_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${e=>e.$theme.blockBorderRadius};
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .chop-logic-button_edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${e=>e.$theme.blockBorderRadius};
    background: ${e=>e.$theme.gradientShadow};
  }

  .chop-logic-button_front {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>e.$theme.gapSmall};
    position: relative;
    padding: ${e=>`${e.$theme.gapMedium} ${e.$theme.gapBig}`};
    border-radius: ${e=>e.$theme.blockBorderRadius};
    font-size: ${e=>e.$theme.fontSizeBase};
    color: #ffffff;
    background: ${e=>e.$theme.fontColorAccent};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .chop-logic-button_front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .chop-logic-button_shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus-visible {
    outline: revert;
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: 4px;
  }
`,j=c.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$theme.gapSmall};
  padding: ${e=>`${e.$theme.gapMedium} ${e.$theme.gapBig}`};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  font-size: ${e=>e.$theme.fontSizeBase};
  color: ${e=>e.$theme.fontColorBase};
  background: transparent;
  width: ${e=>e.$extended?"100%":"inherit"};

  &:hover,
  &:active {
    background: ${e=>e.$theme.backgroundColorLight};
    transition: all 0.3s ease 0s;
    color: ${e=>e.$theme.fontColorAccent};
  }

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`,L=c.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$theme.gapMedium};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  font-size: ${e=>e.$theme.fontSizeBase};
  color: ${e=>e.$theme.fontColorBase};
  background: transparent;

  &:hover {
    background-color: ${e=>e.$theme.backgroundColorLight};
    color: ${e=>e.$theme.fontColorAccent};
    transition: all 0.3s ease 0s;
  }

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    height: ${e=>e.$theme.iconSize};
    width: ${e=>e.$theme.iconSize};
  }
`;try{A.displayName="StyledPrimaryButton",A.__docgenInfo={description:"",displayName:"StyledPrimaryButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledFlatButton",j.__docgenInfo={description:"",displayName:"StyledFlatButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledIconButton",L.__docgenInfo={description:"",displayName:"StyledIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ae=({onClick:e,text:t,icon:r,label:l,disabled:n=!1,extended:o=!1,type:i="button",view:s=V.Primary,...d})=>{const u=x();switch(s){case V.Primary:return a.jsxs(A,{$extended:o,"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:[a.jsx("span",{className:"chop-logic-button_shadow"}),a.jsx("span",{className:"chop-logic-button_edge"}),a.jsxs("span",{className:"chop-logic-button_front",children:[a.jsx(q,{name:r}),t]})]});case V.Flat:return a.jsxs(j,{$extended:o,"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:[a.jsx(q,{name:r}),t]});case V.Icon:return a.jsx(L,{"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:a.jsx(q,{name:r})});default:return null}},S=B(Ae);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:{value:"ChopLogicButtonView.Primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"flat"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:{value:"false"},description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const D=c.div`
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
  ${w}

  @media ${Ne.landscapeTablets} {
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
`,R=c.div`
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
  ${w}

  ${e=>e.$isClosing&&ue}
`,M=c.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapBig};
  padding: ${e=>e.$theme.gapBig};
  border-bottom: ${e=>e.$theme.borderBase};
  color: ${e=>e.$theme.fontColorBase};
`,W=c.div`
  padding: ${e=>e.$theme.gapBig};
  font-size: ${e=>e.$theme.fontSizeBase};
`;try{D.displayName="StyledDialogLayout",D.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{R.displayName="StyledDialogBackground",R.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="StyledDialogHeader",M.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="StyledDialogContent",W.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const je=({title:e,onClose:t,theme:r})=>a.jsxs(M,{$theme:r,children:[e,a.jsx(S,{icon:C.Cancel,view:V.Icon,label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Le=({title:e,onClose:t,isOpened:r,children:l,theme:n,...o})=>{const i=h.useRef(null);return Be({modalRef:i,isOpened:r}),me({keyCode:"Escape",ref:i,onKeyPress:t}),a.jsxs(D,{ref:i,role:"dialog","aria-modal":"true",$theme:n,...o,children:[a.jsx(je,{title:e,onClose:t,theme:n}),a.jsx(W,{$theme:n,children:l})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Tt=({isOpened:e,onClose:t,title:r,children:l,...n})=>{const o=pe(e),i=o&&!e,s=x();return o?a.jsx(ie,{children:a.jsx(R,{$isClosing:i,$theme:s,children:a.jsx(Le,{title:r,onClose:t,isOpened:e,...n,theme:s,children:l})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const De=({id:e})=>{const[t,r]=h.useState(!1),l=h.useRef(null),n=h.useRef(null),{top:o,left:i}=ke({wrapperRef:l,tooltipRef:n,isOpened:t}),{elementId:s}=de(e),d=()=>r(!1),u=()=>r(!0),p=()=>r(!t),m=$=>{$.preventDefault(),p()};return me({keyCode:"Escape",ref:n,onKeyPress:d}),ce({ref:n,onClickOutsideHandler:d,dependentRef:l}),{elementId:s,openTooltip:u,closeTooltip:d,toggleTooltip:p,handleContextMenu:m,top:o,left:i,isOpened:t,wrapperRef:l,tooltipRef:n}},H=c.div`
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

  ${w}
`;try{H.displayName="StyledTooltip",H.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Re=({children:e,tooltipContent:t,containerTag:r=fe.Span,visibleOn:l="hover",id:n,style:o,...i})=>{const s=r,d=x(),{openTooltip:u,closeTooltip:p,toggleTooltip:m,handleContextMenu:$,elementId:y,top:f,left:b,isOpened:v,wrapperRef:ge,tooltipRef:be}=De({id:n});return a.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:l==="click"?m:void 0,onMouseOver:l==="hover"?u:void 0,onMouseLeave:l==="hover"?p:void 0,onFocus:l==="focus"?u:void 0,onBlur:l==="focus"?p:void 0,onContextMenu:l==="contextmenu"?_e=>$(_e):void 0,tabIndex:0,ref:ge,"aria-describedby":y,children:[e,v&&a.jsx(ie,{children:a.jsx(H,{style:{...o,top:f,left:b},ref:be,role:"tooltip",id:y,$theme:d,...i,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"ChopLogicTooltipContainer.Span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}function Me(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function We(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(r=>r[0]!==t.name?r:[r[0],!!(t!=null&&t.valid)])}function He(e){return e.every(t=>t[1])}function ze({initialValues:e,onReset:t,onSubmit:r,onClickSubmit:l}){const[n,o]=h.useState(e),[i,s]=h.useState(Me(e)),[d,u]=h.useState(0);return{handleInputChange:y=>{const f={...n,[y.name]:y.value};o(f),s(We(i,y))},handleSubmit:y=>{y.preventDefault();const b={...Object.fromEntries(new FormData(y.target)),...n};r==null||r(y),l==null||l(b)},handleReset:y=>{t==null||t(y),o(e),u(d+1)},resetSignal:d,valid:He(i)}}const z=c.form`
  display: grid;
  align-items: end;
  gap: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,G=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{z.displayName="StyledForm",z.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledFormButtonsContainer",G.__docgenInfo={description:"",displayName:"StyledFormButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const kt=({children:e,initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n,columns:o=1,hasReset:i=!0,...s})=>{const{handleInputChange:d,handleSubmit:u,handleReset:p,resetSignal:m,valid:$}=ze({initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n}),y=x();return a.jsx(z,{onSubmit:u,onReset:p,$columns:o,$theme:y,...s,children:a.jsxs(ve.Provider,{value:{onChangeFormInput:d,initialValues:t,resetSignal:m},children:[e,a.jsxs(G,{$columns:o,children:[i&&a.jsx(S,{type:"reset",text:"Reset",icon:C.Clear,view:V.Flat}),a.jsx(S,{type:"submit",text:"Submit",icon:C.Forward,extended:!i,disabled:!$})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const F=c.table`
  border-collapse: collapse;
`,E=c.thead`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
`,P=c.tbody`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
`,I=c.th`
  padding: ${e=>e.$theme.gapMedium};
  text-align: left;
`,O=c.tr`
  font-weight: bold;
  border-top: ${e=>e.$theme.borderLight};
  border-bottom: ${e=>e.$theme.borderLight};
  background-color: ${e=>e.$theme.backgroundColorBase};
`,T=c.td`
  padding: ${e=>e.$theme.gapMedium};
`,K=c.caption`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  padding: ${e=>e.$theme.gapMedium};
  font-weight: bold;
`,Y=c.tr`
  border-bottom: ${e=>e.$theme.borderLight};

  ${e=>e.$selected&&`
      background-color: ${e.$theme.backgroundColorLight};
    `}
`,k=c.col`
  border-right: ${e=>e.$theme.borderLight};

  ${e=>e.$isFirst&&`border-left: ${e.$theme.borderLight};`}
  ${e=>e.$highlighted&&`background-color: ${e.$theme.backgroundColorLight};`}
`,U=c.div`
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
`,X=c.input`
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
`;try{F.displayName="StyledGrid",F.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledGridHeader",E.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledGridBody",P.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledGridHeaderCell",I.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="StyledGridHeaderRow",O.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledGridCell",T.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{K.displayName="StyledGridCaption",K.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Y.displayName="StyledGridRow",Y.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="StyledGridColumn",k.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{U.displayName="StyledGridCheckboxWrapper",U.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{X.displayName="StyledGridCheckboxInput",X.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ge({item:e,columns:t,renderDataItem:r}){const l=[];for(const n of t){let o;r&&e[n.field]?o=r(e,n.field):e[n.field]?o=e[n.field].toString():o="",l.push(o)}return l}const Fe=({value:e,theme:t})=>a.jsx(T,{$theme:t,children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ye=({name:e,label:t,disabled:r,required:l=!1,onChange:n,checked:o=!1,theme:i,...s})=>{const{elementId:d}=de(s==null?void 0:s.id);return a.jsxs(U,{$disabled:!!r,$checked:o,$theme:i,children:[a.jsx(X,{id:d,name:e,type:"checkbox",disabled:r,required:l,checked:o,onChange:n,$theme:i}),a.jsx($e,{label:t,required:l,inputId:d,isTextHidden:!0,iconPosition:"left",theme:i,icon:o?a.jsx(Ve,{}):a.jsx(qe,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ee=({rowId:e,isRowSelected:t,selectRowById:r,deselectRowById:l,disabled:n,theme:o})=>{const i=s=>{const{checked:d}=s.target;d?r(e):l(e)};return a.jsx(T,{$theme:o,children:a.jsx(ye,{theme:o,label:"Select row",onChange:i,id:`select_row_${e}`,checked:t,disabled:n})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Pe=({rowId:e,selectRowById:t,deselectRowById:r,selectable:l,values:n,selectedIds:o,disabled:i,theme:s})=>{const d=o.includes(e);return a.jsxs(Y,{$selected:d,$theme:s,children:[l&&a.jsx(Ee,{rowId:e,selectRowById:t,deselectRowById:r,isRowSelected:d,disabled:i,theme:s}),n.map((u,p)=>a.jsx(Fe,{value:u,theme:s},`row_${p}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Oe=({selectRowById:e,deselectRowById:t,renderDataItem:r,selectedIds:l,selectable:n,data:o,columns:i,theme:s})=>a.jsx(P,{$theme:s,children:o.map(d=>{const u=Ge({item:d,columns:i,renderDataItem:r});return a.jsx(Pe,{rowId:d.id,disabled:d==null?void 0:d.disabled,selectRowById:e,deselectRowById:t,selectable:n,values:u,selectedIds:l,theme:s},d.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ke=({columns:e,selectable:t,theme:r})=>a.jsxs("colgroup",{children:[t&&a.jsx(k,{$isFirst:!0,$highlighted:!1,$theme:r}),e.map((l,n)=>a.jsx(k,{$isFirst:n===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className,$theme:r},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ye=({title:e,component:t,theme:r})=>a.jsx(I,{$theme:r,children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const J=({gridId:e,isAllSelected:t,selectAll:r,deselectAll:l,disabled:n,theme:o})=>{const i=s=>{const{checked:d}=s.target;d?r():l()};return a.jsx(I,{$theme:o,children:a.jsx(ye,{label:"Select all rows",onChange:i,id:`select_all_${e}`,checked:t,disabled:n,theme:o})})};try{J.displayName="SelectAllRowsCell",J.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ue=({columns:e,gridId:t,selectAll:r,deselectAll:l,selectable:n,isAllSelected:o,isAllCheckboxDisabled:i=!1,theme:s})=>a.jsx(E,{$theme:s,children:a.jsxs(O,{$theme:s,children:[n&&a.jsx(J,{isAllSelected:o,disabled:i,gridId:t,selectAll:r,deselectAll:l,theme:s}),e.map(d=>a.jsx(Ye,{title:d.title,component:d.component,theme:s},`${d.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Xe=({data:e,id:t,onSelect:r})=>{const{elementId:l}=de(t),[n,o]=h.useState([]),i=e.map(f=>f.id),s=i.length===n.length,d=e.some(f=>f==null?void 0:f.disabled),u=f=>{o(f),r==null||r(f)};return{elementId:l,isAllSelected:s,isAllCheckboxDisabled:d,selectedIds:n,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:f=>{const b=[...n,f];u(b)},handleDeselectRowById:f=>{const b=n.filter(v=>v!==f);u(b)}}},Nt=({columns:e,data:t,id:r,onSelect:l,renderDataItem:n,caption:o,selectable:i=!1,...s})=>{const{elementId:d,handleSelectAll:u,handleDeselectAll:p,isAllCheckboxDisabled:m,isAllSelected:$,handleDeselectRowById:y,handleSelectRowById:f,selectedIds:b}=Xe({id:r,data:t,onSelect:l}),v=x();return a.jsxs(F,{...s,children:[o&&a.jsx(K,{$theme:v,children:o}),a.jsx(Ke,{columns:e,selectable:i,theme:v}),a.jsx(Ue,{gridId:d,columns:e,selectable:i,selectAll:u,deselectAll:p,isAllSelected:$,isAllCheckboxDisabled:m,theme:v}),a.jsx(Oe,{columns:e,data:t,selectable:i,selectRowById:f,deselectRowById:y,selectedIds:b,renderDataItem:n,theme:v})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const he=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
  display: flex;
  gap: ${e=>e.$theme.gapSmall};
  flex-direction: ${e=>e.$mode===g.Vertical?"column":"row"};
  justify-content: flex-start;
  width: 100%;
`,Je=c(he)`
  flex-direction: column;
  padding-left: ${e=>e.$theme.gapBig};
  margin-left: ${e=>e.$theme.gapBig};
  margin-top: ${e=>e.$theme.gapSmall};
  box-sizing: border-box;
  border-left: ${e=>e.$theme.borderLight};
  ${w}

  ${({$theme:e,$mode:t})=>t===g.Horizontal&&`
      position: absolute;
      top: 100%;
      left: 40%;
      width: max-content;
      border-radius: ${e.blockBorderRadius};
      border: ${e.borderLight};
      box-shadow: ${e.boxShadow};
      background-color: ${e.backgroundColorBase};
      padding: ${e.gapMedium};
      margin: 0;
      z-index: ${e.zIndexPopup};
  `}
`,Qe=c.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${e=>e.$theme.gapMedium};
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
  background-color: ${e=>e.$theme.backgroundColorBase};
  padding: ${e=>e.$theme.gapMedium};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  cursor: pointer;

  &:hover {
    color: ${e=>e.$theme.fontColorAccent};
  }

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
  }
`,Ze=c.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0;
  position: relative;
  border-radius: ${e=>e.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
  }
`,et=c.span`
  position: relative;
  display: flex;
  box-sizing: border-box;
  gap: ${e=>e.$theme.gapMedium};
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
  background-color: ${e=>e.$theme.backgroundColorBase};
  padding: ${e=>e.$theme.gapMedium};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  cursor: pointer;

  span {
    display: flex;
    gap: ${e=>e.$theme.gapMedium};
    align-items: center;
  }

  &:hover {
    color: ${e=>e.$theme.fontColorAccent};
  }
`,Q=({theme:e,item:t})=>{const{icon:r,link:l,label:n,onFocus:o,onClick:i,onHover:s}=t,d=l?a.jsx("a",{href:l,target:"_blank",rel:"noreferrer",children:n}):a.jsx("span",{children:n});return a.jsxs(Qe,{tabIndex:0,role:"menuitem",$theme:e,onFocus:o,onClick:i,onMouseOver:s,children:[a.jsx(q,{name:r}),d]})};try{Q.displayName="MenuLeaf",Q.__docgenInfo={description:"",displayName:"MenuLeaf",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ChopLogicMenuItem"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Z=({item:e,theme:t,isSubMenuOpened:r,toggleSubMenu:l,closeSubMenu:n,mode:o,children:i})=>{const{icon:s,link:d,label:u}=e,p=h.useRef(null),m=h.useRef(null),$=d?a.jsxs("a",{href:d,target:"_blank",rel:"noreferrer",children:[a.jsx(q,{name:s}),u]}):a.jsxs("span",{children:[a.jsx(q,{name:s}),u]}),y=b=>{b.stopPropagation(),b.key===" "&&l()};return ce({ref:p,dependentRef:m,onClickOutsideHandler:()=>{o!==g.Vertical&&n()}}),a.jsxs(Ze,{tabIndex:0,role:"menuitem","aria-haspopup":"true","aria-expanded":r,$theme:t,onKeyDown:y,ref:p,children:[a.jsxs(et,{ref:m,$theme:t,onClick:l,$mode:o,children:[$,a.jsx(q,{name:r?C.ArrowUp:C.ArrowDown})]}),r&&i]})};try{Z.displayName="SubMenu",Z.__docgenInfo={description:"",displayName:"SubMenu",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ChopLogicMenuItem"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},isSubMenuOpened:{defaultValue:null,description:"",name:"isSubMenuOpened",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},toggleSubMenu:{defaultValue:null,description:"",name:"toggleSubMenu",required:!0,type:{name:"() => void"}},closeSubMenu:{defaultValue:null,description:"",name:"closeSubMenu",required:!0,type:{name:"() => void"}}}}}catch{}const N=({item:e,theme:t,mode:r})=>{var d,u;const l=!((d=e==null?void 0:e.nestedItems)!=null&&d.length),[n,o]=h.useState(!1);if(l)return a.jsx(Q,{item:e,theme:t});const i=()=>{o(!n)},s=()=>{o(!1)};return a.jsx(Z,{item:e,theme:t,isSubMenuOpened:n,toggleSubMenu:i,closeSubMenu:s,mode:r,children:a.jsx(Je,{role:"menu","aria-label":e.label,$theme:t,$mode:r,children:(u=e==null?void 0:e.nestedItems)==null?void 0:u.map(p=>a.jsx(N,{item:p,theme:t,mode:r},p.id))})})};try{N.displayName="MenuItem",N.__docgenInfo={description:"",displayName:"MenuItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ChopLogicMenuItem"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const Bt=({items:e,mode:t=g.Vertical,...r})=>{const l=x();return a.jsx(he,{role:"menubar",$theme:l,$mode:t,...r,children:e.map(n=>a.jsx(N,{item:n,theme:l,mode:t},n.id))})};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ChopLogicMenuItem[]"}},mode:{defaultValue:{value:"ChopLogicOrientationMode.Vertical"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const ie=({children:e})=>{const[t]=h.useState(()=>document.createElement("div"));return h.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),xe.createPortal(e,t)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const ee=c.button`
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

    ${e=>e.$mode===g.Vertical&&`
      border-bottom-left-radius: ${e.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode===g.Vertical&&e.$selected&&`
      border-top: ${e.$theme.borderLight};
      border-right: none;
      border-left: ${e.$theme.borderLight};
      border-bottom: ${e.$theme.borderLight};
      top: 0px;
      left: 1px;
    `}
`,te=c.div`
  background-color: ${e=>e.$theme.backgroundColorBase};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};
  padding: ${e=>e.$theme.gapBig};
  flex-grow: 1;
`,ae=c.div`
  border-bottom: ${e=>e.$theme.borderLight};
  padding: 0 ${e=>e.$theme.gapMedium};
  display: flex;
  gap: ${e=>e.$theme.gapMedium};

  ${e=>e.$mode===g.Vertical&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${e.$theme.borderLight};
      padding: ${e.$theme.gapMedium} 0;
    `}
`,re=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$mode:e})=>e===g.Vertical&&`
      flex-direction: row;
    `}
`;try{ee.displayName="StyledTabButton",ee.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{te.displayName="StyledTabContent",te.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ae.displayName="StyledTabList",ae.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{re.displayName="StyledTabs",re.__docgenInfo={description:"",displayName:"StyledTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const tt=({tabs:e,selectedTabId:t,theme:r})=>{var o;const l=(o=e.find(i=>i.id===t))==null?void 0:o.content,n=`tabpanel_${t}`;return a.jsx(te,{role:"tabpanel","aria-labelledby":t,id:n,$theme:r,children:l})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const at=({title:e,onTabSelect:t,tabId:r,isSelected:l,isDisabled:n=!1,tabPanelId:o,mode:i,theme:s})=>a.jsx(ee,{role:"tab",id:r,onClick:()=>t(r),"aria-selected":l,"aria-controls":o,$selected:l,$disabled:n,$mode:i,$theme:s,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const rt=({tabs:e,onTabSelect:t,selectedTabId:r,tabPanelIds:l,mode:n,tabIds:o,theme:i})=>{const s=d=>{const u=o.findIndex(p=>p===r);switch(d.key){case"ArrowLeft":case"ArrowUp":{if(d.preventDefault(),d.key==="ArrowUp"&&n===g.Horizontal||d.key==="ArrowLeft"&&n===g.Vertical)break;const p=u-1>=0?u-1:o.length-1,m=o[p];m&&(se(m),t(m));break}case"ArrowRight":case"ArrowDown":{if(d.preventDefault(),d.key==="ArrowDown"&&n===g.Horizontal||d.key==="ArrowRight"&&n===g.Vertical)break;const p=u===o.length-1?0:u+1,m=o[p];m&&(se(m),t(m));break}}};return a.jsx(ae,{role:"tablist",$mode:n,onKeyDown:s,$theme:i,children:e.map(({id:d,title:u,disabled:p},m)=>a.jsx(at,{title:u,onTabSelect:t,tabId:d,isSelected:d===r,isDisabled:p,tabPanelId:l[m],mode:n,theme:i},d))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const At=({tabs:e,defaultTabId:t,mode:r=g.Horizontal,...l})=>{const n=e.map(m=>m.id),o=n.map(m=>`tabpanel_${m}`),i=t&&n.includes(t)?t:n[0],[s,d]=h.useState(i),u=x(),p=m=>{d(m)};return a.jsxs(re,{$mode:r,...l,children:[a.jsx(rt,{tabs:e,selectedTabId:s,tabPanelIds:o,onTabSelect:p,mode:r,tabIds:n,theme:u}),a.jsx(tt,{tabs:e,selectedTabId:s,theme:u})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicOrientationMode.Horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const le=c.header`
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
`,ne=c.div`
  position: fixed;
  bottom: ${e=>e.$theme.gapBig};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$theme.zIndexPopup};
  ${w}

  ${e=>e.$isClosing&&ue}
`,oe=c.div`
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
`;try{le.displayName="StyledAlertHeader",le.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ne.displayName="StyledAlertWrapper",ne.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{oe.displayName="StyledAlertContent",oe.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function lt(e,t){if(t)return t;switch(e){case _.Info:return"For your information";case _.Warning:return"Please pay attention";case _.Error:return"Something went wrong";case _.Success:return"Everything is okay";case _.Help:return"Useful tip";default:return"Alert"}}function nt(e,t){if(t)return a.jsx(q,{name:t});switch(e){case _.Info:return a.jsx(Ie,{});case _.Warning:return a.jsx(Te,{});case _.Error:return a.jsx(we,{});case _.Success:return a.jsx(Ce,{});case _.Help:return a.jsx(Se,{});default:return null}}const ot=({title:e,onClose:t,mode:r,icon:l,theme:n})=>{const o=lt(r,e),i=nt(r,l);return a.jsxs(le,{$theme:n,children:[a.jsxs("h3",{children:[i,o]}),a.jsx(S,{icon:C.Cancel,view:V.Icon,label:"Close alert popup",onClick:t})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const jt=({isOpened:e,onClose:t,title:r,message:l,mode:n=_.Info,icon:o,...i})=>{const s=pe(e),d=s&&!e,u=x();return s?a.jsx(ie,{children:a.jsx(ne,{$isClosing:d,$theme:u,children:a.jsxs(oe,{...i,$theme:u,children:[a.jsx(ot,{title:r,onClose:t,mode:n,icon:o,theme:u}),a.jsx("p",{children:l})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{g as C,At as a,_ as b,S as c,jt as d,kt as e,Nt as f,Bt as g,ie as h,V as i,Tt as j,Re as k,fe as l,Be as u};
