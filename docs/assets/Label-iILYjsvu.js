const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ArrowDownIcon-9UPYAteJ.js","./jsx-runtime-CLpGMVip.js","./ArrowUpIcon-D-lXvPOI.js","./BackIcon-BIGiuLrN.js","./CancelIcon-tPGMWztY.js","./CheckboxCheckedIcon-BAzr5VRs.js","./CheckboxUncheckedIcon-CMpqfROB.js","./CheckMarkIcon-w6yvoLUx.js","./ChevronDownIcon-CDxQsB_K.js","./ChevronLeftIcon-g6CqjiYQ.js","./ChevronRightIcon-B-biltpg.js","./ChevronUpIcon-B7r3Lei-.js","./ClearIcon-DALjHBmW.js","./CopyIcon-0M7uBap-.js","./CutIcon-BptkECRJ.js","./DeleteIcon-BgBgeH-p.js","./DownloadIcon-wO3jXEtL.js","./ErrorIcon-C44N34Yw.js","./ForwardIcon-DngkB1YB.js","./GraduateIcon-CqQz8Xt3.js","./HelpIcon-DgpPKFlH.js","./HideIcon-CVgzPXyw.js","./HomeIcon-B01qRoHU.js","./InfoIcon-B4hFJLBr.js","./LoginIcon-B02sxVSl.js","./PasteIcon-CExNty-K.js","./QuestionIcon-BHE7gd3T.js","./RemoveIcon-BVYUjGaw.js","./SaveIcon-DODEUqYF.js","./ShowIcon-DNO6V97t.js","./UploadIcon-BH2SAgMr.js","./WarningIcon-DiWNQ3Lw.js"])))=>i.map(i=>d[i]);
import{j as l}from"./jsx-runtime-CLpGMVip.js";import{d as p}from"./index-zvdF3J3f.js";import{r as a}from"./index-B_nTefMF.js";import{_ as r}from"./iframe-D7y9cp_r.js";const I=`
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
`,re=`
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
`,s=p.span`
  display: ${({$visible:e})=>e?"block":"none"};
  position: absolute;
  max-width: 100%;
  right: 0;
  top: 72px;
  opacity: 0.8;
  z-index: ${e=>e.$theme.zIndexPopup};
  background-color: ${e=>e.$theme.backgroundColorBase};
  border: ${e=>e.$theme.borderAccent};
  color: ${e=>e.$theme.fontColorAccent};
  padding: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeSmall};
  font-family: ${e=>e.$theme.fontFamilyCore};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  box-shadow: ${e=>e.$theme.boxShadow};
  pointer-events: none;

  ${I}
`;try{s.displayName="StyledErrorMessage",s.__docgenInfo={description:"",displayName:"StyledErrorMessage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ne=({errorId:e,testId:i,message:u="Invalid input",visible:o=!1,style:n,theme:d})=>l.jsx(s,{id:e,$visible:o,"data-testid":i,style:n,$theme:d,"aria-hidden":!o,children:u});try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorId:{defaultValue:null,description:"",name:"errorId",required:!0,type:{name:"string"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean"}},message:{defaultValue:{value:"Invalid input"},description:"",name:"message",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}var t=(e=>(e.ArrowDown="arrow-down",e.ArrowUp="arrow-up",e.Back="back",e.Cancel="cancel",e.CheckboxChecked="checkbox-checked",e.CheckboxUnchecked="checkbox-unchecked",e.CheckMark="check-mark",e.ChevronDown="chevron-down",e.ChevronLeft="chevron-left",e.ChevronRight="chevron-right",e.ChevronUp="chevron-up",e.Clear="clear",e.Copy="copy",e.Cut="cut",e.Delete="delete",e.Download="download",e.Error="error",e.Forward="forward",e.Graduate="graduate",e.Help="help",e.Hide="hide",e.Home="home",e.Info="info",e.Login="login",e.Paste="paste",e.Question="question",e.Save="save",e.Show="show",e.Upload="upload",e.Warning="warning",e.Remove="remove",e))(t||{});const E=a.lazy(()=>r(()=>import("./ArrowDownIcon-9UPYAteJ.js"),__vite__mapDeps([0,1]),import.meta.url)),b=a.lazy(()=>r(()=>import("./ArrowUpIcon-D-lXvPOI.js"),__vite__mapDeps([2,1]),import.meta.url)),V=a.lazy(()=>r(()=>import("./BackIcon-BIGiuLrN.js"),__vite__mapDeps([3,1]),import.meta.url)),w=a.lazy(()=>r(()=>import("./CancelIcon-tPGMWztY.js"),__vite__mapDeps([4,1]),import.meta.url)),k=a.lazy(()=>r(()=>import("./CheckboxCheckedIcon-BAzr5VRs.js"),__vite__mapDeps([5,1]),import.meta.url)),g=a.lazy(()=>r(()=>import("./CheckboxUncheckedIcon-CMpqfROB.js"),__vite__mapDeps([6,1]),import.meta.url)),$=a.lazy(()=>r(()=>import("./CheckMarkIcon-w6yvoLUx.js"),__vite__mapDeps([7,1]),import.meta.url)),A=a.lazy(()=>r(()=>import("./ChevronDownIcon-CDxQsB_K.js"),__vite__mapDeps([8,1]),import.meta.url)),D=a.lazy(()=>r(()=>import("./ChevronLeftIcon-g6CqjiYQ.js"),__vite__mapDeps([9,1]),import.meta.url)),z=a.lazy(()=>r(()=>import("./ChevronRightIcon-B-biltpg.js"),__vite__mapDeps([10,1]),import.meta.url)),T=a.lazy(()=>r(()=>import("./ChevronUpIcon-B7r3Lei-.js"),__vite__mapDeps([11,1]),import.meta.url)),x=a.lazy(()=>r(()=>import("./ClearIcon-DALjHBmW.js"),__vite__mapDeps([12,1]),import.meta.url)),q=a.lazy(()=>r(()=>import("./CopyIcon-0M7uBap-.js"),__vite__mapDeps([13,1]),import.meta.url)),R=a.lazy(()=>r(()=>import("./CutIcon-BptkECRJ.js"),__vite__mapDeps([14,1]),import.meta.url)),P=a.lazy(()=>r(()=>import("./DeleteIcon-BgBgeH-p.js"),__vite__mapDeps([15,1]),import.meta.url)),O=a.lazy(()=>r(()=>import("./DownloadIcon-wO3jXEtL.js"),__vite__mapDeps([16,1]),import.meta.url)),S=a.lazy(()=>r(()=>import("./ErrorIcon-C44N34Yw.js"),__vite__mapDeps([17,1]),import.meta.url)),C=a.lazy(()=>r(()=>import("./ForwardIcon-DngkB1YB.js"),__vite__mapDeps([18,1]),import.meta.url)),L=a.lazy(()=>r(()=>import("./GraduateIcon-CqQz8Xt3.js"),__vite__mapDeps([19,1]),import.meta.url)),M=a.lazy(()=>r(()=>import("./HelpIcon-DgpPKFlH.js"),__vite__mapDeps([20,1]),import.meta.url)),B=a.lazy(()=>r(()=>import("./HideIcon-CVgzPXyw.js"),__vite__mapDeps([21,1]),import.meta.url)),H=a.lazy(()=>r(()=>import("./HomeIcon-B01qRoHU.js"),__vite__mapDeps([22,1]),import.meta.url)),U=a.lazy(()=>r(()=>import("./InfoIcon-B4hFJLBr.js"),__vite__mapDeps([23,1]),import.meta.url)),j=a.lazy(()=>r(()=>import("./LoginIcon-B02sxVSl.js"),__vite__mapDeps([24,1]),import.meta.url)),W=a.lazy(()=>r(()=>import("./PasteIcon-CExNty-K.js"),__vite__mapDeps([25,1]),import.meta.url)),F=a.lazy(()=>r(()=>import("./QuestionIcon-BHE7gd3T.js"),__vite__mapDeps([26,1]),import.meta.url)),G=a.lazy(()=>r(()=>import("./RemoveIcon-BVYUjGaw.js"),__vite__mapDeps([27,1]),import.meta.url)),Q=a.lazy(()=>r(()=>import("./SaveIcon-DODEUqYF.js"),__vite__mapDeps([28,1]),import.meta.url)),J=a.lazy(()=>r(()=>import("./ShowIcon-DNO6V97t.js"),__vite__mapDeps([29,1]),import.meta.url)),X=a.lazy(()=>r(()=>import("./UploadIcon-BH2SAgMr.js"),__vite__mapDeps([30,1]),import.meta.url)),K=a.lazy(()=>r(()=>import("./WarningIcon-DiWNQ3Lw.js"),__vite__mapDeps([31,1]),import.meta.url)),Y={[t.ArrowDown]:E,[t.ArrowUp]:b,[t.Back]:V,[t.Cancel]:w,[t.CheckboxChecked]:k,[t.CheckboxUnchecked]:g,[t.CheckMark]:$,[t.ChevronDown]:A,[t.ChevronUp]:T,[t.ChevronLeft]:D,[t.ChevronRight]:z,[t.Clear]:x,[t.Copy]:q,[t.Cut]:R,[t.Delete]:P,[t.Download]:O,[t.Error]:S,[t.Forward]:C,[t.Graduate]:L,[t.Help]:M,[t.Hide]:B,[t.Home]:H,[t.Info]:U,[t.Login]:j,[t.Paste]:W,[t.Question]:F,[t.Save]:Q,[t.Show]:J,[t.Upload]:X,[t.Warning]:K,[t.Remove]:G},Z=({name:e,testId:i,...u})=>{if(!e)return null;const o=l.jsx("span",{style:{fontSize:"1rem"},"aria-label":"SVG Icon Fallback",children:"⬜"}),n=Y[e];return l.jsx(a.Suspense,{fallback:o,children:l.jsx(n,{"data-testid":i,...u})})};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const m=p.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${e=>e.$theme.fontSizeBase};
  color: ${e=>e.$theme.fontColorLight};
  padding: 0;

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: -1px;
  }

  &:hover {
    color: ${e=>e.$theme.fontColorAccent};
  }

  svg {
    cursor: pointer;
    height: ${e=>e.$theme.iconSize};
    width: ${e=>e.$theme.iconSize};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;try{m.displayName="StyledInputInnerButton",m.__docgenInfo={description:"",displayName:"StyledInputInnerButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const _=({onClick:e,label:i,icon:u,disabled:o,theme:n})=>l.jsx(m,{onClick:e,"aria-label":i,type:"button",disabled:o,$theme:n,children:l.jsx(Z,{name:u})});try{_.displayName="InputInnerButton",_.__docgenInfo={description:"",displayName:"InputInnerButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const c=p.label`
  display: flex;
  align-items: center;
  font-size: ${e=>e.$theme.fontSizeSmall};
  font-family: ${e=>e.$theme.fontFamilyCore};
  gap: ${e=>e.$theme.gapSmall};
  color: ${e=>e.$theme.fontColorBase};

  &:hover {
    text-shadow: ${e=>e.$theme.textShadow};
  }

  & + span {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${e=>e.$theme.fontColorAccent};
    margin-left: ${e=>e.$theme.gapSmall};
  }
`;try{c.displayName="StyledLabel",c.__docgenInfo={description:"",displayName:"StyledLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const le=({label:e,required:i,inputId:u,theme:o,icon:n,iconPosition:d,isTextHidden:f=!1,style:y})=>{const v=!!n&&d==="left",h=!!n&&d==="right";return l.jsxs(c,{htmlFor:u,style:y,$theme:o,children:[v&&n,!f&&l.jsxs("span",{children:[e,i&&l.jsx("abbr",{title:"required",children:"*"})]}),h&&n]})};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}},isTextHidden:{defaultValue:{value:"false"},description:"",name:"isTextHidden",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{t as C,_ as I,Z as a,le as b,ne as c,re as d,I as f};
