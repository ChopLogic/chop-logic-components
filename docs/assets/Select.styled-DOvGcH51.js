import{d as r}from"./index-yZyA0tCI.js";function n(e){const t=document.getElementById(e);t&&t.focus()}function y({e,options:t,onClose:u}){let d="";t.forEach(a=>{document.getElementById(a.id)===document.activeElement&&(d=a.id)});const i=t.findIndex(a=>a.id===d);switch(e.key){case"Escape":e.preventDefault(),u();break;case"ArrowUp":{e.preventDefault();const a=i-1>=0?i-1:t.length-1,o=t[a];o&&n(o.id);break}case"ArrowDown":case"Tab":{e.preventDefault();const a=i===t.length-1?0:i+1,o=t[a];o&&n(o.id);break}}}const s=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${e=>e.$theme.mediumGap};
  background: transparent;
`,c=r.button`
  text-align: left;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.mediumGap};
  padding: ${e=>e.$theme.mediumGap};
  border: ${e=>e.$theme.regularBorder};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & > span:nth-child(1) {
    font-size: ${e=>e.$theme.baseFontSize};
    color: ${e=>e.$theme.primaryColor};
    font-family: ${e=>e.$theme.coreFontFamily};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    cursor: pointer;
    color: ${e=>e.$theme.secondaryColor};
    height: ${e=>e.$theme.iconSize};
    width: ${e=>e.$theme.iconSize};

    &:hover {
      color: ${e=>e.$theme.tertiaryColor};
      filter: drop-shadow(${e=>e.$theme.textShadow});
    }
  }

  &:focus-visible {
    outline: ${e=>e.$theme.outlineBorder};
    outline-offset: 2px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`,p=r.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background: ${e=>e.$theme.backgroundColor};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${e=>e.$theme.dropdownIndex};
  width: 100%;
  top: 70px;
  left: -1px;
  border: ${e=>e.$theme.regularBorder};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  box-shadow: ${e=>e.$theme.boxShadow};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&"visibility: visible; opacity: 1;"}
`,l=r.li`
  padding: ${e=>e.$theme.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.mediumGap};
  font-size: ${e=>e.$theme.baseFontSize};
  color: ${e=>e.$theme.primaryColor};
  font-family: ${e=>e.$theme.coreFontFamily};

  &:hover,
  &:active {
    text-shadow: ${e=>e.$theme.textShadow};
  }

  &:focus-visible {
    outline: ${e=>e.$theme.outlineBorder};
    outline-offset: -4px;
  }

  svg {
    color: ${e=>e.$theme.secondaryColor};
    width: ${e=>e.$theme.iconSize};
    height: ${e=>e.$theme.iconSize};
  }
`,m=r(l)`
  justify-content: flex-start;
`;try{s.displayName="StyledSelect",s.__docgenInfo={description:"",displayName:"StyledSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledSelectCombobox",c.__docgenInfo={description:"",displayName:"StyledSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledSelectDropdown",p.__docgenInfo={description:"",displayName:"StyledSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledSelectOption",l.__docgenInfo={description:"",displayName:"StyledSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="StyledMultiSelectOption",m.__docgenInfo={description:"",displayName:"StyledMultiSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{c as S,m as a,p as b,s as c,l as d,y as h,n as m};
