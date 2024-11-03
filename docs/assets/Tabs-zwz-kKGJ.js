import{j as p}from"./jsx-runtime-DEdD30eg.js";import{r as $}from"./index-RYns6xqu.js";import{d as b,U as l,F as T,B as s,S as q,C as v}from"./styled-components.browser.esm-2v_QRtKj.js";import{m as h}from"./move-focus-on-element-by-id-CpbS-38o.js";const f=b.button`
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
    outline: ${s.outline};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${q.text};
    text-decoration: underline;
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${e=>e.$selected&&`   
      border-top: ${s.thin};
      border-right: ${s.thin};
      border-left: ${s.thin};
      background-color: ${v.background};
      top: 1px;
    `}

    ${e=>e.$mode==="vertical"&&`
      border-bottom-left-radius: ${l.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${e=>e.$mode==="vertical"&&e.$selected&&`
      border-top: ${s.thin};
      border-right: none;
      border-left: ${s.thin};
      border-bottom: ${s.thin};
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
  border-bottom: ${s.thin};
  padding: 0 ${l.mediumGap};
  display: flex;
  gap: ${l.mediumGap};

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: column;
      border-bottom: none;
      border-right: ${s.thin};
      padding: ${l.mediumGap} 0;
    `}
`,_=b.div`
  display: flex;
  flex-direction: column;

  ${({$mode:e})=>e==="vertical"&&`
      flex-direction: row;
    `}
`;try{f.displayName="StyledTabButton",f.__docgenInfo={description:"",displayName:"StyledTabButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="StyledTabContent",y.__docgenInfo={description:"",displayName:"StyledTabContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledTabList",g.__docgenInfo={description:"",displayName:"StyledTabList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="StyledTabsContainer",_.__docgenInfo={description:"",displayName:"StyledTabsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const V=({tabs:e,selectedTabId:n})=>{var t;const o=(t=e.find(i=>i.id===n))==null?void 0:t.content,u=`tabpanel_${n}`;return p.jsx(y,{role:"tabpanel","aria-labelledby":n,id:u,children:o})};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}}}}}catch{}const I=({title:e,onTabSelect:n,tabId:o,isSelected:u,isDisabled:t=!1,tabPanelId:i,mode:m})=>p.jsx(f,{role:"tab",id:o,onClick:()=>n(o),"aria-selected":u,"aria-controls":i,$selected:u,$disabled:t,$mode:m,children:e});try{TabButton.displayName="TabButton",TabButton.__docgenInfo={description:"",displayName:"TabButton",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabId:{defaultValue:null,description:"",name:"tabId",required:!0,type:{name:"string"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},tabPanelId:{defaultValue:null,description:"",name:"tabPanelId",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}const x=({tabs:e,onTabSelect:n,selectedTabId:o,tabPanelIds:u,mode:t,tabIds:i})=>{const m=r=>{const c=i.findIndex(d=>d===o);switch(r.key){case"ArrowLeft":case"ArrowUp":{if(r.preventDefault(),r.key==="ArrowUp"&&t==="horizontal"||r.key==="ArrowLeft"&&t==="vertical")break;const d=c-1>=0?c-1:i.length-1,a=i[d];a&&(h(a),n(a));break}case"ArrowRight":case"ArrowDown":{if(r.preventDefault(),r.key==="ArrowDown"&&t==="horizontal"||r.key==="ArrowRight"&&t==="vertical")break;const d=c===i.length-1?0:c+1,a=i[d];a&&(h(a),n(a));break}}};return p.jsx(g,{role:"tablist",$mode:t,onKeyDown:m,children:e.map(({id:r,title:c,disabled:d},a)=>p.jsx(I,{title:c,onTabSelect:n,tabId:r,isSelected:r===o,isDisabled:d,tabPanelId:u[a],mode:t},r))})};try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},tabIds:{defaultValue:null,description:"",name:"tabIds",required:!0,type:{name:"string[]"}},onTabSelect:{defaultValue:null,description:"",name:"onTabSelect",required:!0,type:{name:"(id: string) => void"}},selectedTabId:{defaultValue:null,description:"",name:"selectedTabId",required:!0,type:{name:"string"}},tabPanelIds:{defaultValue:null,description:"",name:"tabPanelIds",required:!0,type:{name:"string[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const N=({tabs:e,defaultTabId:n,mode:o="horizontal",...u})=>{const t=e.map(a=>a.id),i=t.map(a=>`tabpanel_${a}`),m=n&&t.includes(n)?n:t[0],[r,c]=$.useState(m),d=a=>{c(a)};return p.jsxs(_,{$mode:o,...u,children:[p.jsx(x,{tabs:e,selectedTabId:r,tabPanelIds:i,onTabSelect:d,mode:o,tabIds:t}),p.jsx(V,{tabs:e,selectedTabId:r})]})};try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"ChopLogicTabItem[]"}},defaultTabId:{defaultValue:null,description:"",name:"defaultTabId",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}export{N as C};
