import{j as a}from"./jsx-runtime-OAISXtky.js";import{a as w,f as N,d as de,C,b as ye}from"./Label-CPqhHv64.js";import"./Checkbox-Cy36oHBn.js";import"./MultiSelect-B03UG5j9.js";import"./NumericInput-OcH_M56F.js";import"./Select-CV7tMcBH.js";import"./TextInput--1qgqhEs.js";import{d as c,u as q,c as le,C as he}from"./index-BgqNcK8U.js";import{r as g}from"./index-qVDZzPEr.js";import{R as ge}from"./index-DzcqJxd1.js";import{u as _e}from"./index-Bg4JDWSn.js";import{u as ie}from"./index-BeH7sH-W.js";import{u as be}from"./index-7QOc-elU.js";import{u as se}from"./index-D9uBcq_H.js";import ve from"./CheckMarkIcon-BtcQ9zhB.js";import $e from"./ErrorIcon-D8B-aMuv.js";import Ve from"./HelpIcon-2xCcuWCH.js";import qe from"./InfoIcon-DokxbF3b.js";import we from"./WarningIcon-CeD2ynrn.js";import Ce from"./CheckboxCheckedIcon-B0tMICzp.js";import xe from"./CheckboxUncheckedIcon-Di1hGFhe.js";import{m as oe}from"./Select.styled-Dagdp2Zt.js";const Se=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"});var h=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(h||{}),V=(e=>(e.Primary="primary",e.Flat="flat",e.Icon="icon",e))(V||{}),_=(e=>(e[e.Vertical=0]="Vertical",e[e.Horizontal=1]="Horizontal",e))(_||{}),ue=(e=>(e.Span="span",e.Div="div",e.P="p",e.Strong="strong",e.Em="em",e))(ue||{});function k(e){return({tooltip:t,visibleOn:r,...l})=>t!=null&&t.length?a.jsx(De,{tooltipContent:t,visibleOn:r,children:a.jsx(e,{...l})}):a.jsx(e,{...l})}try{k.displayName="withTooltip",k.__docgenInfo={description:"",displayName:"withTooltip",props:{}}}catch{}const Te=({modalRef:e,isOpened:t})=>{g.useEffect(()=>{const r=e.current;if(!t||!r)return;const l=r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=l[0],o=l[l.length-1],d=s=>{s.key==="Tab"&&(s.shiftKey&&document.activeElement===n?(s.preventDefault(),o.focus()):!s.shiftKey&&document.activeElement===o&&(s.preventDefault(),n.focus()))};return r.addEventListener("keydown",d),()=>{r.removeEventListener("keydown",d)}},[e,t])},A=c.button`
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
`,B=c.button`
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
`;try{A.displayName="StyledPrimaryButton",A.__docgenInfo={description:"",displayName:"StyledPrimaryButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{B.displayName="StyledFlatButton",B.__docgenInfo={description:"",displayName:"StyledFlatButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="StyledIconButton",L.__docgenInfo={description:"",displayName:"StyledIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ie=({onClick:e,text:t,icon:r,label:l,disabled:n=!1,extended:o=!1,type:d="button",view:s=V.Primary,...i})=>{const u=q();switch(s){case V.Primary:return a.jsxs(A,{$extended:o,"aria-label":l,type:d,onClick:e,disabled:n,$theme:u,...i,children:[a.jsx("span",{className:"chop-logic-button_shadow"}),a.jsx("span",{className:"chop-logic-button_edge"}),a.jsxs("span",{className:"chop-logic-button_front",children:[a.jsx(w,{name:r}),t]})]});case V.Flat:return a.jsxs(B,{$extended:o,"aria-label":l,type:d,onClick:e,disabled:n,$theme:u,...i,children:[a.jsx(w,{name:r}),t]});case V.Icon:return a.jsx(L,{"aria-label":l,type:d,onClick:e,disabled:n,$theme:u,...i,children:a.jsx(w,{name:r})});default:return null}},x=k(Ie);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:{value:"ChopLogicButtonView.Primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"flat"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:{value:"false"},description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const j=c.header`
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
`,D=c.div`
  position: fixed;
  bottom: ${e=>e.$theme.gapBig};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$theme.zIndexPopup};
  ${N}

  ${e=>e.$isClosing&&de}
`,R=c.div`
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
`;try{j.displayName="StyledAlertHeader",j.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledAlertWrapper",D.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{R.displayName="StyledAlertContent",R.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ne(e,t){if(t)return t;switch(e){case h.Info:return"For your information";case h.Warning:return"Please pay attention";case h.Error:return"Something went wrong";case h.Success:return"Everything is okay";case h.Help:return"Useful tip";default:return"Alert"}}function ke(e,t){if(t)return a.jsx(w,{name:t});switch(e){case h.Info:return a.jsx(qe,{});case h.Warning:return a.jsx(we,{});case h.Error:return a.jsx($e,{});case h.Success:return a.jsx(ve,{});case h.Help:return a.jsx(Ve,{});default:return null}}const Ae=({title:e,onClose:t,mode:r,icon:l,theme:n})=>{const o=Ne(r,e),d=ke(r,l);return a.jsxs(j,{$theme:n,children:[a.jsxs("h3",{children:[d,o]}),a.jsx(x,{icon:C.Cancel,view:V.Icon,label:"Close alert popup",onClick:t})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const $t=({isOpened:e,onClose:t,title:r,message:l,mode:n=h.Info,icon:o,...d})=>{const s=se(e),i=s&&!e,u=q();return s?a.jsx(ne,{children:a.jsx(D,{$isClosing:i,$theme:u,children:a.jsxs(R,{...d,$theme:u,children:[a.jsx(Ae,{title:r,onClose:t,mode:n,icon:o,theme:u}),a.jsx("p",{children:l})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const W=c.div`
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
  ${N}

  @media ${Se.landscapeTablets} {
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
`,G=c.div`
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
  ${N}

  ${e=>e.$isClosing&&de}
`,H=c.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapBig};
  padding: ${e=>e.$theme.gapBig};
  border-bottom: ${e=>e.$theme.borderBase};
  color: ${e=>e.$theme.fontColorBase};
`,F=c.div`
  padding: ${e=>e.$theme.gapBig};
  font-size: ${e=>e.$theme.fontSizeBase};
`;try{W.displayName="StyledDialogLayout",W.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledDialogBackground",G.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="StyledDialogHeader",H.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{F.displayName="StyledDialogContent",F.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Be=({title:e,onClose:t,theme:r})=>a.jsxs(H,{$theme:r,children:[e,a.jsx(x,{icon:C.Cancel,view:V.Icon,label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Le=({title:e,onClose:t,isOpened:r,children:l,theme:n,...o})=>{const d=g.useRef(null);return Te({modalRef:d,isOpened:r}),ie({keyCode:"Escape",ref:d,onKeyPress:t}),a.jsxs(W,{ref:d,role:"dialog","aria-modal":"true",$theme:n,...o,children:[a.jsx(Be,{title:e,onClose:t,theme:n}),a.jsx(F,{$theme:n,children:l})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Vt=({isOpened:e,onClose:t,title:r,children:l,...n})=>{const o=se(e),d=o&&!e,s=q();return o?a.jsx(ne,{children:a.jsx(G,{$isClosing:d,$theme:s,children:a.jsx(Le,{title:r,onClose:t,isOpened:e,...n,theme:s,children:l})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const je=({id:e})=>{const[t,r]=g.useState(!1),l=g.useRef(null),n=g.useRef(null),{top:o,left:d}=be({wrapperRef:l,tooltipRef:n,isOpened:t}),{elementId:s}=le(e),i=()=>r(!1),u=()=>r(!0),m=()=>r(!t),p=b=>{b.preventDefault(),m()};return ie({keyCode:"Escape",ref:n,onKeyPress:i}),_e({ref:n,onClickOutsideHandler:i,dependentRef:l}),{elementId:s,openTooltip:u,closeTooltip:i,toggleTooltip:m,handleContextMenu:p,top:o,left:d,isOpened:t,wrapperRef:l,tooltipRef:n}},E=c.div`
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

  ${N}
`;try{E.displayName="StyledTooltip",E.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const De=({children:e,tooltipContent:t,containerTag:r=ue.Span,visibleOn:l="hover",id:n,style:o,...d})=>{const s=r,i=q(),{openTooltip:u,closeTooltip:m,toggleTooltip:p,handleContextMenu:b,elementId:y,top:f,left:v,isOpened:$,wrapperRef:pe,tooltipRef:me}=je({id:n});return a.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:l==="click"?p:void 0,onMouseOver:l==="hover"?u:void 0,onMouseLeave:l==="hover"?m:void 0,onFocus:l==="focus"?u:void 0,onBlur:l==="focus"?m:void 0,onContextMenu:l==="contextmenu"?fe=>b(fe):void 0,tabIndex:0,ref:pe,"aria-describedby":y,children:[e,$&&a.jsx(ne,{children:a.jsx(E,{style:{...o,top:f,left:v},ref:me,role:"tooltip",id:y,$theme:i,...d,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"ChopLogicTooltipContainer.Span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}function Re(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function We(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(r=>r[0]!==t.name?r:[r[0],!!(t!=null&&t.valid)])}function Ge(e){return e.every(t=>t[1])}function He({initialValues:e,onReset:t,onSubmit:r,onClickSubmit:l}){const[n,o]=g.useState(e),[d,s]=g.useState(Re(e)),[i,u]=g.useState(0);return{handleInputChange:y=>{const f={...n,[y.name]:y.value};o(f),s(We(d,y))},handleSubmit:y=>{y.preventDefault();const v={...Object.fromEntries(new FormData(y.target)),...n};r==null||r(y),l==null||l(v)},handleReset:y=>{t==null||t(y),o(e),u(i+1)},resetSignal:i,valid:Ge(d)}}const z=c.form`
  display: grid;
  align-items: end;
  gap: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,P=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{z.displayName="StyledForm",z.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{P.displayName="StyledFormButtonsContainer",P.__docgenInfo={description:"",displayName:"StyledFormButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const qt=({children:e,initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n,columns:o=1,hasReset:d=!0,...s})=>{const{handleInputChange:i,handleSubmit:u,handleReset:m,resetSignal:p,valid:b}=He({initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n}),y=q();return a.jsx(z,{onSubmit:u,onReset:m,$columns:o,$theme:y,...s,children:a.jsxs(he.Provider,{value:{onChangeFormInput:i,initialValues:t,resetSignal:p},children:[e,a.jsxs(P,{$columns:o,children:[d&&a.jsx(x,{type:"reset",text:"Reset",icon:C.Clear,view:V.Flat}),a.jsx(x,{type:"submit",text:"Submit",icon:C.Forward,extended:!d,disabled:!b})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const M=c.table`
  border-collapse: collapse;
`,O=c.thead`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
`,K=c.tbody`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
`,S=c.th`
  padding: ${e=>e.$theme.gapMedium};
  text-align: left;
`,Y=c.tr`
  font-weight: bold;
  border-top: ${e=>e.$theme.borderLight};
  border-bottom: ${e=>e.$theme.borderLight};
  background-color: ${e=>e.$theme.backgroundColorBase};
`,T=c.td`
  padding: ${e=>e.$theme.gapMedium};
`,X=c.caption`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  padding: ${e=>e.$theme.gapMedium};
  font-weight: bold;
`,J=c.tr`
  border-bottom: ${e=>e.$theme.borderLight};

  ${e=>e.$selected&&`
      background-color: ${e.$theme.backgroundColorLight};
    `}
`,I=c.col`
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
`,Q=c.input`
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
`;try{M.displayName="StyledGrid",M.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="StyledGridHeader",O.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{K.displayName="StyledGridBody",K.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledGridHeaderCell",S.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Y.displayName="StyledGridHeaderRow",Y.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledGridCell",T.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{X.displayName="StyledGridCaption",X.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{J.displayName="StyledGridRow",J.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledGridColumn",I.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{U.displayName="StyledGridCheckboxWrapper",U.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Q.displayName="StyledGridCheckboxInput",Q.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Fe({item:e,columns:t,renderDataItem:r}){const l=[];for(const n of t){let o;r&&e[n.field]?o=r(e,n.field):e[n.field]?o=e[n.field].toString():o="",l.push(o)}return l}const Ee=({value:e,theme:t})=>a.jsx(T,{$theme:t,children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ce=({name:e,label:t,disabled:r,required:l=!1,onChange:n,checked:o=!1,theme:d,...s})=>{const{elementId:i}=le(s==null?void 0:s.id);return a.jsxs(U,{$disabled:!!r,$checked:o,$theme:d,children:[a.jsx(Q,{id:i,name:e,type:"checkbox",disabled:r,required:l,checked:o,onChange:n,$theme:d}),a.jsx(ye,{label:t,required:l,inputId:i,isTextHidden:!0,iconPosition:"left",theme:d,icon:o?a.jsx(Ce,{}):a.jsx(xe,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ze=({rowId:e,isRowSelected:t,selectRowById:r,deselectRowById:l,disabled:n,theme:o})=>{const d=s=>{const{checked:i}=s.target;i?r(e):l(e)};return a.jsx(T,{$theme:o,children:a.jsx(ce,{theme:o,label:"Select row",onChange:d,id:`select_row_${e}`,checked:t,disabled:n})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Pe=({rowId:e,selectRowById:t,deselectRowById:r,selectable:l,values:n,selectedIds:o,disabled:d,theme:s})=>{const i=o.includes(e);return a.jsxs(J,{$selected:i,$theme:s,children:[l&&a.jsx(ze,{rowId:e,selectRowById:t,deselectRowById:r,isRowSelected:i,disabled:d,theme:s}),n.map((u,m)=>a.jsx(Ee,{value:u,theme:s},`row_${m}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Me=({selectRowById:e,deselectRowById:t,renderDataItem:r,selectedIds:l,selectable:n,data:o,columns:d,theme:s})=>a.jsx(K,{$theme:s,children:o.map(i=>{const u=Fe({item:i,columns:d,renderDataItem:r});return a.jsx(Pe,{rowId:i.id,disabled:i==null?void 0:i.disabled,selectRowById:e,deselectRowById:t,selectable:n,values:u,selectedIds:l,theme:s},i.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Oe=({columns:e,selectable:t,theme:r})=>a.jsxs("colgroup",{children:[t&&a.jsx(I,{$isFirst:!0,$highlighted:!1,$theme:r}),e.map((l,n)=>a.jsx(I,{$isFirst:n===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className,$theme:r},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ke=({title:e,component:t,theme:r})=>a.jsx(S,{$theme:r,children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Z=({gridId:e,isAllSelected:t,selectAll:r,deselectAll:l,disabled:n,theme:o})=>{const d=s=>{const{checked:i}=s.target;i?r():l()};return a.jsx(S,{$theme:o,children:a.jsx(ce,{label:"Select all rows",onChange:d,id:`select_all_${e}`,checked:t,disabled:n,theme:o})})};try{Z.displayName="SelectAllRowsCell",Z.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ye=({columns:e,gridId:t,selectAll:r,deselectAll:l,selectable:n,isAllSelected:o,isAllCheckboxDisabled:d=!1,theme:s})=>a.jsx(O,{$theme:s,children:a.jsxs(Y,{$theme:s,children:[n&&a.jsx(Z,{isAllSelected:o,disabled:d,gridId:t,selectAll:r,deselectAll:l,theme:s}),e.map(i=>a.jsx(Ke,{title:i.title,component:i.component,theme:s},`${i.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Xe=({data:e,id:t,onSelect:r})=>{const{elementId:l}=le(t),[n,o]=g.useState([]),d=e.map(f=>f.id),s=d.length===n.length,i=e.some(f=>f==null?void 0:f.disabled),u=f=>{o(f),r==null||r(f)};return{elementId:l,isAllSelected:s,isAllCheckboxDisabled:i,selectedIds:n,handleSelectAll:()=>{u(d)},handleDeselectAll:()=>{u([])},handleSelectRowById:f=>{const v=[...n,f];u(v)},handleDeselectRowById:f=>{const v=n.filter($=>$!==f);u(v)}}},wt=({columns:e,data:t,id:r,onSelect:l,renderDataItem:n,caption:o,selectable:d=!1,...s})=>{const{elementId:i,handleSelectAll:u,handleDeselectAll:m,isAllCheckboxDisabled:p,isAllSelected:b,handleDeselectRowById:y,handleSelectRowById:f,selectedIds:v}=Xe({id:r,data:t,onSelect:l}),$=q();return a.jsxs(M,{...s,children:[o&&a.jsx(X,{$theme:$,children:o}),a.jsx(Oe,{columns:e,selectable:d,theme:$}),a.jsx(Ye,{gridId:i,columns:e,selectable:d,selectAll:u,deselectAll:m,isAllSelected:b,isAllCheckboxDisabled:p,theme:$}),a.jsx(Me,{columns:e,data:t,selectable:d,selectRowById:f,deselectRowById:y,selectedIds:v,renderDataItem:n,theme:$})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const ne=({children:e})=>{const[t]=g.useState(()=>document.createElement("div"));return g.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),ge.createPortal(e,t)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const ee=c.button`
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

    ${e=>e.$mode===_.Vertical&&`
      border-bottom-left-radius: ${e.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode===_.Vertical&&e.$selected&&`
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

  ${e=>e.$mode===_.Vertical&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${e.$theme.borderLight};
      padding: ${e.$theme.gapMedium} 0;
    `}
`,re=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$mode:e})=>e===_.Vertical&&`
      flex-direction: row;
    `}
`;try{ee.displayName="StyledTabButton",ee.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{te.displayName="StyledTabContent",te.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ae.displayName="StyledTabList",ae.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{re.displayName="StyledTabs",re.__docgenInfo={description:"",displayName:"StyledTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Je=({tabs:e,selectedTabId:t,theme:r})=>{var o;const l=(o=e.find(d=>d.id===t))==null?void 0:o.content,n=`tabpanel_${t}`;return a.jsx(te,{role:"tabpanel","aria-labelledby":t,id:n,$theme:r,children:l})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ue=({title:e,onTabSelect:t,tabId:r,isSelected:l,isDisabled:n=!1,tabPanelId:o,mode:d,theme:s})=>a.jsx(ee,{role:"tab",id:r,onClick:()=>t(r),"aria-selected":l,"aria-controls":o,$selected:l,$disabled:n,$mode:d,$theme:s,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Qe=({tabs:e,onTabSelect:t,selectedTabId:r,tabPanelIds:l,mode:n,tabIds:o,theme:d})=>{const s=i=>{const u=o.findIndex(m=>m===r);switch(i.key){case"ArrowLeft":case"ArrowUp":{if(i.preventDefault(),i.key==="ArrowUp"&&n===_.Horizontal||i.key==="ArrowLeft"&&n===_.Vertical)break;const m=u-1>=0?u-1:o.length-1,p=o[m];p&&(oe(p),t(p));break}case"ArrowRight":case"ArrowDown":{if(i.preventDefault(),i.key==="ArrowDown"&&n===_.Horizontal||i.key==="ArrowRight"&&n===_.Vertical)break;const m=u===o.length-1?0:u+1,p=o[m];p&&(oe(p),t(p));break}}};return a.jsx(ae,{role:"tablist",$mode:n,onKeyDown:s,$theme:d,children:e.map(({id:i,title:u,disabled:m},p)=>a.jsx(Ue,{title:u,onTabSelect:t,tabId:i,isSelected:i===r,isDisabled:m,tabPanelId:l[p],mode:n,theme:d},i))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ct=({tabs:e,defaultTabId:t,mode:r=_.Horizontal,...l})=>{const n=e.map(p=>p.id),o=n.map(p=>`tabpanel_${p}`),d=t&&n.includes(t)?t:n[0],[s,i]=g.useState(d),u=q(),m=p=>{i(p)};return a.jsxs(re,{$mode:r,...l,children:[a.jsx(Qe,{tabs:e,selectedTabId:s,tabPanelIds:o,onTabSelect:m,mode:r,tabIds:n,theme:u}),a.jsx(Je,{tabs:e,selectedTabId:s,theme:u})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicTabsMode.Horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{_ as C,Ct as a,h as b,x as c,$t as d,qt as e,wt as f,ne as g,V as h,Vt as i,De as j,ue as k,Te as u};
