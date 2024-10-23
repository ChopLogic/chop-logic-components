import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{u as h}from"./index-C6_MqhCY.js";import{r as m}from"./index-DJO9vBfz.js";import{R as g}from"./index-URyNLXnw.js";import{C as _}from"./Button-D-fuWFS8.js";import{a as w,H as x,E as b,W as k,I as C,C as I}from"./Icon-Bscejonv.js";import{d as c,U as t,C as f,Z as A,S as q,F as S}from"./styled-components.browser.esm-BAmCwVtG.js";import{C as V}from"./CheckMark-DH8gl-7Y.js";const j=({children:e})=>{const[a]=m.useState(()=>document.createElement("div"));return m.useEffect(()=>(document.body.appendChild(a),()=>{document.body.removeChild(a)}),[a]),g.createPortal(e,a)};try{portal.displayName="portal",portal.__docgenInfo={description:"",displayName:"portal",props:{}}}catch{}const N=`
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
`,$=`
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
`,u=c.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${t.mediumGap};
    align-items: center;
    margin: 0;
    color: ${f.secondary};
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`,s=c.div`
  position: fixed;
  bottom: ${t.bigGap};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${A.modal};
  ${N}

  ${e=>e.$isClosing&&$}
`,d=c.div`
  display: flex;
  flex-direction: column;
  gap: ${t.mediumGap};
  box-shadow: ${q.box};
  font-family: ${S.core};
  width: 95vw;
  padding: ${t.mediumGap};
  border-radius: ${t.blockBorderRadius};
  background: ${f.highlight};
`;try{u.displayName="StyledAlertHeader",u.__docgenInfo={description:"",displayName:"StyledAlertHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="StyledAlertWrapper",s.__docgenInfo={description:"",displayName:"StyledAlertWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="StyledAlertContent",d.__docgenInfo={description:"",displayName:"StyledAlertContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function O(e,a){if(a)return a;switch(e){case"info":return"Info";case"warning":return"Warning";case"error":return"Error";case"success":return"Success";default:return""}}function T(e,a){if(a)return r.jsx(w,{name:a});switch(e){case"info":return r.jsx(C,{});case"warning":return r.jsx(k,{});case"error":return r.jsx(b,{});case"success":return r.jsx(V,{});case"help":return r.jsx(x,{});default:return null}}const W=({title:e,onClose:a,mode:l,icon:n})=>{const o=O(l,e),i=T(l,n);return r.jsxs(u,{children:[r.jsxs("h3",{children:[i,o]}),r.jsx(_,{icon:I.Cancel,view:"icon",label:"Close alert popup",onClick:a})]})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}const B=({isOpened:e,onClose:a,title:l,message:n,mode:o="info",icon:i,...v})=>{const p=h(e),y=p&&!e;return p?r.jsx(j,{children:r.jsx(s,{$isClosing:y,...v,children:r.jsxs(d,{children:[r.jsx(W,{title:l,onClose:a,mode:o,icon:i}),r.jsx("p",{children:n})]})})}):null};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{isOpened:{defaultValue:null,description:"",name:"isOpened",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"info"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"help"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}export{B as C,$ as a,j as b,N as f};
