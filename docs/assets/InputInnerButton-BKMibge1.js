import{j as n}from"./jsx-runtime-OAISXtky.js";import{d as i,F as p,C as a,U as l,B as m}from"./styled-components.browser.esm-BD-stqwa.js";import{a as v}from"./Icon-BeaB2qBy.js";const o=i.span`
  font-size: 0.8rem;
  font-family: ${p.core};
  color: ${a.accent};
  display: ${e=>e.$visible?"block":"none"};
`;try{o.displayName="StyledErrorMessage",o.__docgenInfo={description:"",displayName:"StyledErrorMessage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const _=({errorId:e,testId:r,message:t="Invalid input",visible:d=!1,style:c})=>n.jsx(o,{id:e,$visible:d,"data-testid":r,style:c,children:t});try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorId:{defaultValue:null,description:"",name:"errorId",required:!0,type:{name:"string"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean"}},message:{defaultValue:{value:"Invalid input"},description:"",name:"message",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const s=i.button`
  background: ${a.background};
  border: none;
  padding: ${l.smallGap};
  font-size: 1rem;
  color: ${a.tertiary};
  display: flex;
  align-items: center;

  &:focus-visible {
    outline: ${m.outline};
    outline-offset: -2px;
  }

  &:hover {
    color: ${a.secondary};
  }

  svg {
    cursor: pointer;
    height: ${l.smallIconSize};
    width: ${l.smallIconSize};
  }
`;try{s.displayName="StyledInputInnerButton",s.__docgenInfo={description:"",displayName:"StyledInputInnerButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=({onClick:e,label:r,icon:t})=>n.jsx(s,{onClick:e,"aria-label":r,type:"button",children:n.jsx(v,{name:t})});try{u.displayName="InputInnerButton",u.__docgenInfo={description:"",displayName:"InputInnerButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}}}}}catch{}export{_ as C,u as I};
