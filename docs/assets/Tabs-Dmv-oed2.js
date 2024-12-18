import{j as a}from"./jsx-runtime-OAISXtky.js";import{d as c,a as q,i as V,j as I,k as oe,H as me,h as fe,E as ye,W as he,l as ge,C,b as _e,c as be,e as ve}from"./index-Dk2A2uom.js";import"./Checkbox-BzPJCwzl.js";import"./MultiSelect-DVNbT4tl.js";import"./NumericInput-RE2o1Ib6.js";import"./Select-Bmvqe1J3.js";import"./TextInput-CMB_hk5N.js";import{r as g}from"./index-qVDZzPEr.js";import{u as re,a as $e}from"./index-tKWUWaCX.js";import{R as qe}from"./index-DzcqJxd1.js";import{u as Ve}from"./index-Bg4JDWSn.js";import{u as de}from"./index-BeH7sH-W.js";import{u as Ce}from"./index-7QOc-elU.js";import{u as ie}from"./index-D9uBcq_H.js";import{u as we}from"./index-CeXmpD0I.js";import{m as ne}from"./Select.styled-C4lmBzuC.js";const xe=Object.freeze({phones:"only screen and (max-width: 600px)",portraitTablets:"only screen and (min-width: 600px)",landscapeTablets:"only screen and (min-width: 768px)",laptops:"only screen and (min-width: 992px)",desktops:"only screen and (min-width: 1200px)"});var h=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Help="help",e))(h||{}),$=(e=>(e.Primary="primary",e.Flat="flat",e.Icon="icon",e))($||{});function N(e){return({tooltip:t,visibleOn:r,...l})=>t!=null&&t.length?a.jsx(Le,{tooltipContent:t,visibleOn:r,children:a.jsx(e,{...l})}):a.jsx(e,{...l})}try{N.displayName="withTooltip",N.__docgenInfo={description:"",displayName:"withTooltip",props:{}}}catch{}const k=c.button`
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
`,A=c.button`
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
`,B=c.button`
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
`;try{k.displayName="StyledPrimaryButton",k.__docgenInfo={description:"",displayName:"StyledPrimaryButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledFlatButton",A.__docgenInfo={description:"",displayName:"StyledFlatButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{B.displayName="StyledIconButton",B.__docgenInfo={description:"",displayName:"StyledIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Se=({onClick:e,text:t,icon:r,label:l,disabled:n=!1,extended:o=!1,type:i="button",view:s=$.Primary,...d})=>{const u=q();switch(s){case $.Primary:return a.jsxs(k,{$extended:o,"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:[a.jsx("span",{className:"chop-logic-button_shadow"}),a.jsx("span",{className:"chop-logic-button_edge"}),a.jsxs("span",{className:"chop-logic-button_front",children:[a.jsx(V,{name:r}),t]})]});case $.Flat:return a.jsxs(A,{$extended:o,"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:[a.jsx(V,{name:r}),t]});case $.Icon:return a.jsx(B,{"aria-label":l,type:i,onClick:e,disabled:n,$theme:u,...d,children:a.jsx(V,{name:r})});default:return null}},w=N(Se);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:{value:"ChopLogicButtonView.Primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"flat"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:{value:"false"},description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const L=c.header`
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
`,j=c.div`
  position: fixed;
  bottom: ${e=>e.$theme.gapBig};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$theme.zIndexPopup};
  ${I}

  ${e=>e.$isClosing&&oe}
`,D=c.div`
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
`;try{L.displayName="StyledAlertHeader",L.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="StyledAlertWrapper",j.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledAlertContent",D.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Te(e,t){if(t)return t;switch(e){case h.Info:return"For your information";case h.Warning:return"Please pay attention";case h.Error:return"Something went wrong";case h.Success:return"Everything is okay";case h.Help:return"Useful tip";default:return"Alert"}}function Ie(e,t){if(t)return a.jsx(V,{name:t});switch(e){case h.Info:return a.jsx(ge,{});case h.Warning:return a.jsx(he,{});case h.Error:return a.jsx(ye,{});case h.Success:return a.jsx(fe,{});case h.Help:return a.jsx(me,{});default:return null}}const Ne=({title:e,onClose:t,mode:r,icon:l,theme:n})=>{const o=Te(r,e),i=Ie(r,l);return a.jsxs(L,{$theme:n,children:[a.jsxs("h3",{children:[i,o]}),a.jsx(w,{icon:C.Cancel,view:$.Icon,label:"Close alert popup",onClick:t})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const mt=({isOpened:e,onClose:t,title:r,message:l,mode:n=h.Info,icon:o,...i})=>{const s=ie(e),d=s&&!e,u=q();return s?a.jsx(le,{children:a.jsx(j,{$isClosing:d,$theme:u,children:a.jsxs(D,{...i,$theme:u,children:[a.jsx(Ne,{title:r,onClose:t,mode:n,icon:o,theme:u}),a.jsx("p",{children:l})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"ChopLogicAlertMode.Info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const R=c.div`
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
  ${I}

  @media ${xe.landscapeTablets} {
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
`,W=c.div`
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
  ${I}

  ${e=>e.$isClosing&&oe}
`,G=c.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapBig};
  padding: ${e=>e.$theme.gapBig};
  border-bottom: ${e=>e.$theme.borderBase};
  color: ${e=>e.$theme.fontColorBase};
`,H=c.div`
  padding: ${e=>e.$theme.gapBig};
  font-size: ${e=>e.$theme.fontSizeBase};
`;try{R.displayName="StyledDialogLayout",R.__docgenInfo={description:"",displayName:"StyledDialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="StyledDialogBackground",W.__docgenInfo={description:"",displayName:"StyledDialogBackground",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledDialogHeader",G.__docgenInfo={description:"",displayName:"StyledDialogHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{H.displayName="StyledDialogContent",H.__docgenInfo={description:"",displayName:"StyledDialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ke=({title:e,onClose:t,theme:r})=>a.jsxs(G,{$theme:r,children:[e,a.jsx(w,{icon:C.Cancel,view:$.Icon,label:"Close modal window",onClick:t})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ae=({title:e,onClose:t,isOpened:r,children:l,theme:n,...o})=>{const i=g.useRef(null);return we({modalRef:i,isOpened:r}),de({keyCode:"Escape",ref:i,onKeyPress:t}),a.jsxs(R,{ref:i,role:"dialog","aria-modal":"true",$theme:n,...o,children:[a.jsx(ke,{title:e,onClose:t,theme:n}),a.jsx(H,{$theme:n,children:l})]})};try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ft=({isOpened:e,onClose:t,title:r,children:l,...n})=>{const o=ie(e),i=o&&!e,s=q();return o?a.jsx(le,{children:a.jsx(W,{$isClosing:i,$theme:s,children:a.jsx(Ae,{title:r,onClose:t,isOpened:e,...n,theme:s,children:l})})}):null};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const Be=({id:e})=>{const[t,r]=g.useState(!1),l=g.useRef(null),n=g.useRef(null),{top:o,left:i}=Ce({wrapperRef:l,tooltipRef:n,isOpened:t}),{elementId:s}=re(e),d=()=>r(!1),u=()=>r(!0),m=()=>r(!t),p=_=>{_.preventDefault(),m()};return de({keyCode:"Escape",ref:n,onKeyPress:d}),Ve({ref:n,onClickOutsideHandler:d,dependentRef:l}),{elementId:s,openTooltip:u,closeTooltip:d,toggleTooltip:m,handleContextMenu:p,top:o,left:i,isOpened:t,wrapperRef:l,tooltipRef:n}},F=c.div`
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

  ${I}
`;try{F.displayName="StyledTooltip",F.__docgenInfo={description:"",displayName:"StyledTooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Le=({children:e,tooltipContent:t,containerTag:r="span",visibleOn:l="hover",id:n,style:o,...i})=>{const s=r,d=q(),{openTooltip:u,closeTooltip:m,toggleTooltip:p,handleContextMenu:_,elementId:y,top:f,left:b,isOpened:v,wrapperRef:ue,tooltipRef:ce}=Be({id:n});return a.jsxs(s,{style:{position:"relative",cursor:"pointer"},onClick:l==="click"?p:void 0,onMouseOver:l==="hover"?u:void 0,onMouseLeave:l==="hover"?m:void 0,onFocus:l==="focus"?u:void 0,onBlur:l==="focus"?m:void 0,onContextMenu:l==="contextmenu"?pe=>_(pe):void 0,tabIndex:0,ref:ue,"aria-describedby":y,children:[e,v&&a.jsx(le,{children:a.jsx(F,{style:{...o,top:f,left:b},ref:ce,role:"tooltip",id:y,$theme:d,...i,children:t})})]})};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:{value:"span"},description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:{value:"hover"},description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}function je(e){return e?Object.keys(e).map(t=>[t,!0]):[]}function De(e,t){return(t==null?void 0:t.valid)===void 0?e:e.map(r=>r[0]!==t.name?r:[r[0],!!(t!=null&&t.valid)])}function Re(e){return e.every(t=>t[1])}function We({initialValues:e,onReset:t,onSubmit:r,onClickSubmit:l}){const[n,o]=g.useState(e),[i,s]=g.useState(je(e)),[d,u]=g.useState(0);return{handleInputChange:y=>{const f={...n,[y.name]:y.value};o(f),s(De(i,y))},handleSubmit:y=>{y.preventDefault();const b={...Object.fromEntries(new FormData(y.target)),...n};r==null||r(y),l==null||l(b)},handleReset:y=>{t==null||t(y),o(e),u(d+1)},resetSignal:d,valid:Re(i)}}const z=c.form`
  display: grid;
  align-items: end;
  gap: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};

  ${({$columns:e})=>`
      grid-template-columns: repeat(${e}, 1fr);
      grid-template-rows: auto;
    `}
`,E=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  ${({$columns:e})=>`
    grid-column: 1 / ${e+1};
  `}
`;try{z.displayName="StyledForm",z.__docgenInfo={description:"",displayName:"StyledForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{E.displayName="StyledFormButtonsContainer",E.__docgenInfo={description:"",displayName:"StyledFormButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const yt=({children:e,initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n,columns:o=1,hasReset:i=!0,...s})=>{const{handleInputChange:d,handleSubmit:u,handleReset:m,resetSignal:p,valid:_}=We({initialValues:t,onReset:r,onSubmit:l,onClickSubmit:n}),y=q();return a.jsx(z,{onSubmit:u,onReset:m,$columns:o,$theme:y,...s,children:a.jsxs($e.Provider,{value:{onChangeFormInput:d,initialValues:t,resetSignal:p},children:[e,a.jsxs(E,{$columns:o,children:[i&&a.jsx(w,{type:"reset",text:"Reset",icon:C.Clear,view:$.Flat}),a.jsx(w,{type:"submit",text:"Submit",icon:C.Forward,extended:!i,disabled:!_})]})]})})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:{value:"1"},description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:{value:"true"},description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}const P=c.table`
  border-collapse: collapse;
`,M=c.thead`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
`,O=c.tbody`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
`,x=c.th`
  padding: ${e=>e.$theme.gapMedium};
  text-align: left;
`,K=c.tr`
  font-weight: bold;
  border-top: ${e=>e.$theme.borderLight};
  border-bottom: ${e=>e.$theme.borderLight};
  background-color: ${e=>e.$theme.backgroundColorBase};
`,S=c.td`
  padding: ${e=>e.$theme.gapMedium};
`,Y=c.caption`
  font-family: ${e=>e.$theme.fontFamilyCore};
  color: ${e=>e.$theme.fontColorBase};
  padding: ${e=>e.$theme.gapMedium};
  font-weight: bold;
`,X=c.tr`
  border-bottom: ${e=>e.$theme.borderLight};

  ${e=>e.$selected&&`
      background-color: ${e.$theme.backgroundColorLight};
    `}
`,T=c.col`
  border-right: ${e=>e.$theme.borderLight};

  ${e=>e.$isFirst&&`border-left: ${e.$theme.borderLight};`}
  ${e=>e.$highlighted&&`background-color: ${e.$theme.backgroundColorLight};`}
`,J=c.div`
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
`,U=c.input`
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
`;try{P.displayName="StyledGrid",P.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="StyledGridHeader",M.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="StyledGridBody",O.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledGridHeaderCell",x.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{K.displayName="StyledGridHeaderRow",K.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledGridCell",S.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Y.displayName="StyledGridCaption",Y.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{X.displayName="StyledGridRow",X.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="StyledGridColumn",T.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{J.displayName="StyledGridCheckboxWrapper",J.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{U.displayName="StyledGridCheckboxInput",U.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function Ge({item:e,columns:t,renderDataItem:r}){const l=[];for(const n of t){let o;r&&e[n.field]?o=r(e,n.field):e[n.field]?o=e[n.field].toString():o="",l.push(o)}return l}const He=({value:e,theme:t})=>a.jsx(S,{$theme:t,children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const se=({name:e,label:t,disabled:r,required:l=!1,onChange:n,checked:o=!1,theme:i,...s})=>{const{elementId:d}=re(s==null?void 0:s.id);return a.jsxs(J,{$disabled:!!r,$checked:o,$theme:i,children:[a.jsx(U,{id:d,name:e,type:"checkbox",disabled:r,required:l,checked:o,onChange:n,$theme:i}),a.jsx(_e,{label:t,required:l,inputId:d,isTextHidden:!0,iconPosition:"left",theme:i,icon:o?a.jsx(be,{}):a.jsx(ve,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Fe=({rowId:e,isRowSelected:t,selectRowById:r,deselectRowById:l,disabled:n,theme:o})=>{const i=s=>{const{checked:d}=s.target;d?r(e):l(e)};return a.jsx(S,{$theme:o,children:a.jsx(se,{theme:o,label:"Select row",onChange:i,id:`select_row_${e}`,checked:t,disabled:n})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const ze=({rowId:e,selectRowById:t,deselectRowById:r,selectable:l,values:n,selectedIds:o,disabled:i,theme:s})=>{const d=o.includes(e);return a.jsxs(X,{$selected:d,$theme:s,children:[l&&a.jsx(Fe,{rowId:e,selectRowById:t,deselectRowById:r,isRowSelected:d,disabled:i,theme:s}),n.map((u,m)=>a.jsx(He,{value:u,theme:s},`row_${m}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ee=({selectRowById:e,deselectRowById:t,renderDataItem:r,selectedIds:l,selectable:n,data:o,columns:i,theme:s})=>a.jsx(O,{$theme:s,children:o.map(d=>{const u=Ge({item:d,columns:i,renderDataItem:r});return a.jsx(ze,{rowId:d.id,disabled:d==null?void 0:d.disabled,selectRowById:e,deselectRowById:t,selectable:n,values:u,selectedIds:l,theme:s},d.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Pe=({columns:e,selectable:t,theme:r})=>a.jsxs("colgroup",{children:[t&&a.jsx(T,{$isFirst:!0,$highlighted:!1,$theme:r}),e.map((l,n)=>a.jsx(T,{$isFirst:n===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className,$theme:r},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Me=({title:e,component:t,theme:r})=>a.jsx(x,{$theme:r,children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Q=({gridId:e,isAllSelected:t,selectAll:r,deselectAll:l,disabled:n,theme:o})=>{const i=s=>{const{checked:d}=s.target;d?r():l()};return a.jsx(x,{$theme:o,children:a.jsx(se,{label:"Select all rows",onChange:i,id:`select_all_${e}`,checked:t,disabled:n,theme:o})})};try{Q.displayName="SelectAllRowsCell",Q.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Oe=({columns:e,gridId:t,selectAll:r,deselectAll:l,selectable:n,isAllSelected:o,isAllCheckboxDisabled:i=!1,theme:s})=>a.jsx(M,{$theme:s,children:a.jsxs(K,{$theme:s,children:[n&&a.jsx(Q,{isAllSelected:o,disabled:i,gridId:t,selectAll:r,deselectAll:l,theme:s}),e.map(d=>a.jsx(Me,{title:d.title,component:d.component,theme:s},`${d.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Ke=({data:e,id:t,onSelect:r})=>{const{elementId:l}=re(t),[n,o]=g.useState([]),i=e.map(f=>f.id),s=i.length===n.length,d=e.some(f=>f==null?void 0:f.disabled),u=f=>{o(f),r==null||r(f)};return{elementId:l,isAllSelected:s,isAllCheckboxDisabled:d,selectedIds:n,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:f=>{const b=[...n,f];u(b)},handleDeselectRowById:f=>{const b=n.filter(v=>v!==f);u(b)}}},ht=({columns:e,data:t,id:r,onSelect:l,renderDataItem:n,caption:o,selectable:i=!1,...s})=>{const{elementId:d,handleSelectAll:u,handleDeselectAll:m,isAllCheckboxDisabled:p,isAllSelected:_,handleDeselectRowById:y,handleSelectRowById:f,selectedIds:b}=Ke({id:r,data:t,onSelect:l}),v=q();return a.jsxs(P,{...s,children:[o&&a.jsx(Y,{$theme:v,children:o}),a.jsx(Pe,{columns:e,selectable:i,theme:v}),a.jsx(Oe,{gridId:d,columns:e,selectable:i,selectAll:u,deselectAll:m,isAllSelected:_,isAllCheckboxDisabled:p,theme:v}),a.jsx(Ee,{columns:e,data:t,selectable:i,selectRowById:f,deselectRowById:y,selectedIds:b,renderDataItem:n,theme:v})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}}}}}catch{}const le=({children:e})=>{const[t]=g.useState(()=>document.createElement("div"));return g.useEffect(()=>(document.body.appendChild(t),()=>{document.body.removeChild(t)}),[t]),qe.createPortal(e,t)};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}}}catch{}const Z=c.button`
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
`,ee=c.div`
  background-color: ${e=>e.$theme.backgroundColorBase};
  color: ${e=>e.$theme.fontColorBase};
  font-size: ${e=>e.$theme.fontSizeBase};
  font-family: ${e=>e.$theme.fontFamilyCore};
  padding: ${e=>e.$theme.gapBig};
  flex-grow: 1;
`,te=c.div`
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
`,ae=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{Z.displayName="StyledTabButton",Z.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ee.displayName="StyledTabContent",ee.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{te.displayName="StyledTabList",te.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{ae.displayName="StyledTabs",ae.__docgenInfo={description:"",displayName:"StyledTabs",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ye=({tabs:e,selectedTabId:t,theme:r})=>{var o;const l=(o=e.find(i=>i.id===t))==null?void 0:o.content,n=`tabpanel_${t}`;return a.jsx(ee,{role:"tabpanel","aria-labelledby":t,id:n,$theme:r,children:l})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Xe=({title:e,onTabSelect:t,tabId:r,isSelected:l,isDisabled:n=!1,tabPanelId:o,mode:i,theme:s})=>a.jsx(Z,{role:"tab",id:r,onClick:()=>t(r),"aria-selected":l,"aria-controls":o,$selected:l,$disabled:n,$mode:i,$theme:s,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const Je=({tabs:e,onTabSelect:t,selectedTabId:r,tabPanelIds:l,mode:n,tabIds:o,theme:i})=>{const s=d=>{const u=o.findIndex(m=>m===r);switch(d.key){case"ArrowLeft":case"ArrowUp":{if(d.preventDefault(),d.key==="ArrowUp"&&n==="horizontal"||d.key==="ArrowLeft"&&n==="vertical")break;const m=u-1>=0?u-1:o.length-1,p=o[m];p&&(ne(p),t(p));break}case"ArrowRight":case"ArrowDown":{if(d.preventDefault(),d.key==="ArrowDown"&&n==="horizontal"||d.key==="ArrowRight"&&n==="vertical")break;const m=u===o.length-1?0:u+1,p=o[m];p&&(ne(p),t(p));break}}};return a.jsx(te,{role:"tablist",$mode:n,onKeyDown:s,$theme:i,children:e.map(({id:d,title:u,disabled:m},p)=>a.jsx(Xe,{title:u,onTabSelect:t,tabId:d,isSelected:d===r,isDisabled:m,tabPanelId:l[p],mode:n,theme:i},d))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const gt=({tabs:e,defaultTabId:t,mode:r="horizontal",...l})=>{const n=e.map(p=>p.id),o=n.map(p=>`tabpanel_${p}`),i=t&&n.includes(t)?t:n[0],[s,d]=g.useState(i),u=q(),m=p=>{d(p)};return a.jsxs(ae,{$mode:r,...l,children:[a.jsx(Je,{tabs:e,selectedTabId:s,tabPanelIds:o,onTabSelect:m,mode:r,tabIds:n,theme:u}),a.jsx(Ye,{tabs:e,selectedTabId:s,theme:u})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}export{gt as C,h as a,w as b,mt as c,yt as d,ht as e,$ as f,ft as g,Le as h};
