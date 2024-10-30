import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{r as $}from"./index-DJO9vBfz.js";import{d as b,U as l,F as T,B as u,S as I,C as v}from"./styled-components.browser.esm-BAmCwVtG.js";import{m as h}from"./move-focus-on-element-by-id-CpbS-38o.js";const f=b.button`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${l.smallGap} ${l.bigGap};
  min-height: ${l.minElementSize};
  min-width: ${l.minElementSize};
  cursor: pointer;
  font-size: 1rem;
  font-family: ${T.core};
  overflow: hidden;
  border-top-left-radius: ${l.blockBorderRadius};
  border-top-right-radius: ${l.blockBorderRadius};

  &:focus-visible {
    outline: ${u.outline};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${I.text};
    text-decoration: underline;
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${e=>e.$selected&&`   
      border-top: ${u.light};
      border-right: ${u.light};
      border-left: ${u.light};
      background-color: ${v.background};
      top: 1px;
    `}

    ${e=>e.$mode==="vertical"&&`
      border-bottom-left-radius: ${l.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode==="vertical"&&e.$selected&&`
      border-top: ${u.light};
      border-right: none;
      border-left: ${u.light};
      border-bottom: ${u.light};
      top: 0px;
      left: 1px;
    `}
`,y=b.div`
  background-color: ${v.background};
  font-size: 1rem;
  font-family: ${T.core};
  padding: ${l.bigGap};
  flex-grow: 1;
`,g=b.div`
  border-bottom: ${u.light};
  padding: 0 ${l.mediumGap};
  display: flex;
  gap: ${l.mediumGap};

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${u.light};
      padding: ${l.mediumGap} 0;
    `}
`,_=b.div`
  display: flex;
  flex-direction: column;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{f.displayName="StyledTabButton",f.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledTabContent",y.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledTabList",g.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledTabsContainer",_.__docgenInfo={description:"",displayName:"StyledTabsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const q=({tabs:e,selectedTabId:t})=>{var a;const d=(a=e.find(i=>i.id===t))==null?void 0:a.content,o=`tabpanel_${t}`;return p.jsx(y,{role:"tabpanel","aria-labelledby":t,id:o,children:d})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}}}}}catch{}const x=({title:e,onTabSelect:t,tabId:d,isSelected:o,isDisabled:a=!1,tabPanelId:i,mode:m})=>p.jsx(f,{role:"tab",id:d,onClick:()=>t(d),"aria-selected":o,"aria-controls":i,$selected:o,$disabled:a,$mode:m,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const V=({tabs:e,onTabSelect:t,selectedTabId:d,tabPanelIds:o,mode:a,tabIds:i})=>{const m=r=>{const c=i.findIndex(n=>n===d);switch(r.key){case"ArrowLeft":case"ArrowUp":{if(r.preventDefault(),r.key==="ArrowUp"&&a==="horizontal"||r.key==="ArrowLeft"&&a==="vertical")break;const n=c-1>=0?c-1:i.length-1,s=i[n];s&&(h(s),t(s));break}case"ArrowRight":case"ArrowDown":{if(r.preventDefault(),r.key==="ArrowDown"&&a==="horizontal"||r.key==="ArrowRight"&&a==="vertical")break;const n=c===i.length-1?0:c+1,s=i[n];s&&(h(s),t(s));break}}};return p.jsx(g,{role:"tablist",$mode:a,onKeyDown:m,children:e.map(({id:r,title:c,disabled:n},s)=>p.jsx(x,{title:c,onTabSelect:t,tabId:r,isSelected:r===d,isDisabled:n,tabPanelId:o[s],mode:a},r))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const L=({tabs:e,defaultTabId:t,mode:d="horizontal"})=>{const o=e.map(n=>n.id),a=o.map(n=>`tabpanel_${n}`),i=t&&o.includes(t)?t:o[0],[m,r]=$.useState(i),c=n=>{r(n)};return p.jsxs(_,{$mode:d,children:[p.jsx(V,{tabs:e,selectedTabId:m,tabPanelIds:a,onTabSelect:c,mode:d,tabIds:o}),p.jsx(q,{tabs:e,selectedTabId:m})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}export{L as C};
