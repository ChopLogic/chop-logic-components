import{j as u}from"./jsx-runtime-DEdD30eg.js";import{r as _}from"./index-RYns6xqu.js";import{u as T}from"./index-C-Id0D3c.js";import{u as A,C as j}from"./Label-DMJxrDmn.js";import{u as O}from"./index-l8NP1wY-.js";import{A as W,a as E}from"./ArrowUp-DL-hDc0c.js";import{d as g,U as m,F as L,C as f,S as k,B as x,Z as R}from"./styled-components.browser.esm-2v_QRtKj.js";import{m as D}from"./move-focus-on-element-by-id-CpbS-38o.js";import{C as G,a as B}from"./CheckboxUnchecked-BW31YmrB.js";import{C as K,u as P}from"./index-BmPDt6cU.js";const V=g.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${m.smallGap};
  padding: ${m.mediumGap} ${m.mediumGap} ${m.smallGap} ${m.mediumGap};
  font-family: ${L.core};
  color: ${f.primary};
  box-shadow: ${k.box};
  border-top-left-radius: ${m.blockBorderRadius};
  border-top-right-radius: ${m.blockBorderRadius};
  border: ${x.thin};
  max-width: 100%;
  background-color: ${f.background};

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,v=g.button`
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
      outline: ${x.outline};
      outline-offset: 2px;
    }
  }
`,I=g.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
  opacity: 0.6;
`,S=g.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
`,$=g.ul`
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
  z-index: ${R.dropdown};
  width: 100%;
  top: 78px;
  left: -1px;
  border: ${x.thin};
  box-shadow: ${k.box};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&`
    visibility: visible;
    opacity: 1;
    `}
`,C=g.li`
  padding: ${m.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${m.mediumGap};

  &:hover,
  &:active {
    background-color: ${f.shade};
  }

  &:focus-visible {
    outline: ${x.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${f.secondary};
  }
`;try{V.displayName="StyledMultiSelectWrapper",V.__docgenInfo={description:"",displayName:"StyledMultiSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledMultiSelectCombobox",v.__docgenInfo={description:"",displayName:"StyledMultiSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledMultiSelectPlaceholder",I.__docgenInfo={description:"",displayName:"StyledMultiSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledMultiSelectLabel",S.__docgenInfo={description:"",displayName:"StyledMultiSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledMultiSelectDropdown",$.__docgenInfo={description:"",displayName:"StyledMultiSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledMultiSelectOption",C.__docgenInfo={description:"",displayName:"StyledMultiSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:a,comboboxId:t,dropdownId:d,name:i,placeholder:s,disabled:l,required:o,values:n})=>{const r=n==null?void 0:n.filter(p=>p.selected).map(p=>p.label),c=n==null?void 0:n.filter(p=>p.selected).map(p=>p.id);let y=u.jsx(I,{children:s});return r&&r.length>1?y=u.jsx(S,{children:`${r.length} items selected`}):r&&r.length===1&&(y=u.jsx(S,{children:r[0]})),u.jsxs(v,{type:"button",name:i,value:c,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":d,id:t,onClick:a,disabled:l,"aria-required":o,children:[y,e?u.jsx(W,{}):u.jsx(E,{})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"MultiSelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const F=({value:e,onSelect:a})=>{const{id:t,label:d,selected:i}=e,s=l=>o=>{switch(o.key){case" ":case"SpaceBar":case"Enter":o.preventDefault(),a(l);break}};return u.jsxs(C,{id:t,role:"option","aria-selected":i,tabIndex:0,onKeyDown:s(t),onClick:()=>a(t),children:[i?u.jsx(G,{}):u.jsx(B,{}),u.jsx("span",{children:d})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiSelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const H=({options:e,opened:a,onClose:t,onSelect:d,dropdownId:i})=>{const s=l=>{let o="";e.forEach(r=>{document.getElementById(r.id)===document.activeElement&&(o=r.id)});const n=e.findIndex(r=>r.id===o);switch(l.key){case"Escape":l.preventDefault(),t();break;case"ArrowUp":{l.preventDefault();const r=n-1>=0?n-1:e.length-1,c=e[r];c&&D(c.id);break}case"ArrowDown":case"Tab":{l.preventDefault();const r=n===e.length-1?0:n+1,c=e[r];c&&D(c.id);break}}};return u.jsx($,{$opened:a,role:"listbox",id:i,tabIndex:-1,onKeyDown:s,children:e.map(l=>u.jsx(F,{value:l,onSelect:()=>d(l.id)},l.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MultiSelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}function z({name:e,options:a,initialValues:t,defaultValue:d}){return a.map(i=>{let s=!1;return t&&(t!=null&&t[e])&&Array.isArray(t[e])&&t[e].find(o=>o===i.id||(o==null?void 0:o.id)===i.id)&&(s=!0),!(t!=null&&t[e])&&Array.isArray(d)&&d.find(o=>o===i.id)&&(s=!0),{...i,selected:s}})}const N=e=>e.filter(a=>a.selected).map(a=>a.id),Z=(e,a)=>{const t=e.find(d=>d.id===a);return e.map(d=>d.id===a?{...d,selected:!(t!=null&&t.selected)}:d)};function X({name:e,defaultValue:a,onChange:t,options:d}){const[i,s]=_.useState(!1),{onChangeFormInput:l,initialValues:o}=_.useContext(K),n=z({name:e,options:d,initialValues:o,defaultValue:a}),[r,c]=_.useState(n),y=()=>s(!1),p=()=>s(!i),h=w=>{const b=Z(r,w);c(b),t==null||t(b),l==null||l({name:e,value:N(b)})},q=_.useCallback(()=>{s(!1),c(n),l==null||l({name:e,value:N(n)})},[e]);return P(q),{handleClose:y,handleToggle:p,handleSelect:h,opened:i,values:r}}const ne=({options:e,name:a,label:t,required:d=!1,placeholder:i="Not selected",disabled:s=!1,onChange:l,defaultValue:o,id:n,...r})=>{const c=_.useRef(null),{elementId:y,dropdownId:p}=A(n),{handleClose:h,handleSelect:q,handleToggle:w,opened:b,values:M}=X({name:a,options:e,defaultValue:o,onChange:l});return T({ref:c,onClickOutsideHandler:h}),O({keyCode:"Escape",ref:c,onKeyPress:h}),u.jsxs(V,{ref:c,$disabled:s,...r,children:[u.jsx(j,{label:t,required:d,inputId:y}),u.jsx(U,{name:a,opened:b,comboboxId:y,dropdownId:p,onClick:w,values:M,placeholder:i,disabled:s,required:d}),u.jsx(H,{options:M,opened:b,onClose:h,dropdownId:p,onSelect:q})]})};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values?: SelectValue[]) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{ne as C};
