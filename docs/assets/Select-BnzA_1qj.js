import{j as d}from"./jsx-runtime-DEdD30eg.js";import{r as h}from"./index-RYns6xqu.js";import{u as O}from"./index-C-Id0D3c.js";import{u as j,C as A}from"./Label-DMJxrDmn.js";import{u as W}from"./index-l8NP1wY-.js";import{A as E,a as L}from"./ArrowUp-DL-hDc0c.js";import{d as S,U as m,F as R,C as f,S as T,B as v,Z as G}from"./styled-components.browser.esm-2v_QRtKj.js";import{m as w}from"./move-focus-on-element-by-id-CpbS-38o.js";import{C as B}from"./CheckMark-I1ATIzrI.js";import{C as K,u as P}from"./index-BmPDt6cU.js";const I=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${m.smallGap};
  padding: ${m.mediumGap} ${m.mediumGap} ${m.smallGap} ${m.mediumGap};
  font-family: ${R.core};
  color: ${f.primary};
  box-shadow: ${T.box};
  border-top-left-radius: ${m.blockBorderRadius};
  border-top-right-radius: ${m.blockBorderRadius};
  border: ${v.thin};
  max-width: 100%;
  background-color: ${f.background};

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,$=S.button`
    border: none;
    text-align: left;
    padding: 0;
    background: transparent;
    color: ${f.primary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${m.mediumGap};
    overflow: hidden;
    height: ${m.fieldWrapperHeight};

    svg {
      color: ${f.tertiary};
      &:hover {
        color: ${f.secondary};
      }
    }


    &:focus-visible {
      outline: ${v.outline};
      outline-offset: 2px;
    }
  }
`,C=S.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
  opacity: 0.6;
`,D=S.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
`,N=S.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background-color: ${f.background};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${G.dropdown};
  width: 100%;
  top: 78px;
  left: -1px;
  border: ${v.thin};
  box-shadow: ${T.box};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&`
    visibility: visible;
    opacity: 1;
    `}
`,k=S.li`
  padding: ${m.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${m.mediumGap};

  &:hover,
  &:active {
    background-color: ${f.shade};
  }

  &:focus-visible {
    outline: ${v.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${f.secondary};
  }
`;try{I.displayName="StyledSelectWrapper",I.__docgenInfo={description:"",displayName:"StyledSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledSelectCombobox",$.__docgenInfo={description:"",displayName:"StyledSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledSelectPlaceholder",C.__docgenInfo={description:"",displayName:"StyledSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledSelectLabel",D.__docgenInfo={description:"",displayName:"StyledSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledSelectDropdown",N.__docgenInfo={description:"",displayName:"StyledSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="StyledSelectOption",k.__docgenInfo={description:"",displayName:"StyledSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:i,comboboxId:t,dropdownId:o,selected:a,name:s,placeholder:l,disabled:c,required:n})=>d.jsxs($,{type:"button",name:s,value:a==null?void 0:a.id,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":o,id:t,onClick:i,disabled:c,"aria-required":n,children:[a!=null&&a.label?d.jsx(D,{children:a==null?void 0:a.label}):d.jsx(C,{children:l}),e?d.jsx(E,{}):d.jsx(L,{})]});try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const F=({value:e,isSelected:i,onSelect:t,onClear:o})=>{const{id:a,label:s}=e,l=n=>{i?o():t(n)},c=n=>b=>{switch(b.key){case" ":case"SpaceBar":case"Enter":b.preventDefault(),l(n);break}};return d.jsxs(k,{id:a,role:"option","aria-selected":i,tabIndex:0,onKeyDown:c(a),onClick:()=>l(a),children:[d.jsx("span",{children:s}),i&&d.jsx(B,{})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectValue"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}const H=({options:e,opened:i,onClose:t,onSelect:o,dropdownId:a,comboboxId:s,selected:l,onClear:c})=>{const n=r=>{o(r),t(),w(s)},b=r=>{let _="";e.forEach(u=>{document.getElementById(u.id)===document.activeElement&&(_=u.id)});const y=e.findIndex(u=>u.id===_);switch(r.key){case"Escape":r.preventDefault(),t();break;case"ArrowUp":{r.preventDefault();const u=y-1>=0?y-1:e.length-1,p=e[u];p&&w(p.id);break}case"ArrowDown":case"Tab":{r.preventDefault();const u=y===e.length-1?0:y+1,p=e[u];p&&w(p.id);break}}};return d.jsx(N,{role:"listbox",id:a,tabIndex:-1,onKeyDown:b,$opened:i,children:e.map(r=>d.jsx(F,{value:r,onSelect:()=>n(r.id),onClear:c,isSelected:r.id===(l==null?void 0:l.id)},r.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}function z({name:e,options:i,initialValues:t,defaultValue:o}){var s;let a;return t&&t[e]&&(a=((s=t[e])==null?void 0:s.id)??t[e]),!(t!=null&&t[e])&&o&&typeof o=="string"&&(a=o),i.find(l=>l.id===a)}function Z({name:e,defaultValue:i,onChange:t,options:o}){const{onChangeFormInput:a,initialValues:s}=h.useContext(K),l=z({name:e,options:o,defaultValue:i,initialValues:s}),[c,n]=h.useState(!1),[b,r]=h.useState(l),_=()=>n(!1),y=()=>n(!c),u=V=>{const g=o.find(x=>x.id===V);r(g),t==null||t(g),a==null||a({name:e,value:g==null?void 0:g.id})},p=()=>{r(void 0),t==null||t(void 0)},q=h.useCallback(()=>{n(!1),r(l),a==null||a({name:e,value:l==null?void 0:l.id})},[e]);return P(q),{selected:b,opened:c,handleClear:p,handleClose:_,handleToggle:y,handleSelect:u}}const oe=({options:e,onChange:i,name:t,label:o,defaultValue:a,id:s,placeholder:l="Not selected",required:c=!1,disabled:n=!1,...b})=>{const r=h.useRef(null),{elementId:_,dropdownId:y}=j(s),{handleClear:u,handleClose:p,handleSelect:q,handleToggle:V,selected:g,opened:x}=Z({options:e,onChange:i,defaultValue:a,name:t});return O({ref:r,onClickOutsideHandler:p}),W({keyCode:"Escape",ref:r,onKeyPress:p}),d.jsxs(I,{ref:r,$disabled:n,...b,children:[d.jsx(A,{label:o,required:c,inputId:_}),d.jsx(U,{name:t,opened:x,comboboxId:_,dropdownId:y,onClick:V,selected:g,placeholder:l,disabled:n,required:c}),d.jsx(H,{options:e,selected:g,opened:x,onClose:p,dropdownId:y,comboboxId:_,onSelect:q,onClear:u})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: SelectValue) => void)"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}}}}}catch{}export{oe as C};
