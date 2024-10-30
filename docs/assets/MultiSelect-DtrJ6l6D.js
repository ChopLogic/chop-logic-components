import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as _}from"./index-DJO9vBfz.js";import{u as k}from"./index-BWBqZFZK.js";import{u as T,C as A}from"./Label-C3WErDxN.js";import{u as j}from"./index-DYr8M9Az.js";import{A as O,a as W}from"./ArrowUp-D8N8y9PM.js";import{d as h,U as m,F as E,C as f,S as N,B as x,Z as L}from"./styled-components.browser.esm-BAmCwVtG.js";import{m as C}from"./move-focus-on-element-by-id-CpbS-38o.js";import{C as R,a as G}from"./CheckboxUnchecked-BN-0aOOA.js";import{C as B,u as K}from"./index-C6NryZZH.js";const q=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${m.smallGap};
  padding: ${m.mediumGap} ${m.mediumGap} ${m.smallGap} ${m.mediumGap};
  font-family: ${E.core};
  color: ${f.primary};
  box-shadow: ${N.box};
  border-top-left-radius: ${m.blockBorderRadius};
  border-top-right-radius: ${m.blockBorderRadius};
  border: ${x.light};
  max-width: 100%;
  background-color: ${f.background};

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,I=h.button`
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
`,V=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
  opacity: 0.6;
`,S=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${f.primary};
  padding: 2px 0;
`,$=h.ul`
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
  z-index: ${L.dropdown};
  width: 100%;
  top: 78px;
  left: -1px;
  border: ${x.light};
  box-shadow: ${N.box};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&`
    visibility: visible;
    opacity: 1;
    `}
`,M=h.li`
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
`;try{q.displayName="StyledMultiSelectWrapper",q.__docgenInfo={description:"",displayName:"StyledMultiSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledMultiSelectCombobox",I.__docgenInfo={description:"",displayName:"StyledMultiSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="StyledMultiSelectPlaceholder",V.__docgenInfo={description:"",displayName:"StyledMultiSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledMultiSelectLabel",S.__docgenInfo={description:"",displayName:"StyledMultiSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledMultiSelectDropdown",$.__docgenInfo={description:"",displayName:"StyledMultiSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="StyledMultiSelectOption",M.__docgenInfo={description:"",displayName:"StyledMultiSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:o,comboboxId:t,dropdownId:d,name:i,placeholder:s,disabled:r,required:n,values:l})=>{const a=l==null?void 0:l.filter(p=>p.selected).map(p=>p.label),u=l==null?void 0:l.filter(p=>p.selected).map(p=>p.id);let y=c.jsx(V,{children:s});return a&&a.length>1?y=c.jsx(S,{children:`${a.length} items selected`}):a&&a.length===1&&(y=c.jsx(S,{children:a[0]})),c.jsxs(I,{type:"button",name:i,value:u,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":d,id:t,onClick:o,disabled:r,"aria-required":n,children:[y,e?c.jsx(O,{}):c.jsx(W,{})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"MultiSelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const P=({value:e,onSelect:o})=>{const{id:t,label:d,selected:i}=e,s=r=>n=>{switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),o(r);break}};return c.jsxs(M,{id:t,role:"option","aria-selected":i,tabIndex:0,onKeyDown:s(t),onClick:()=>o(t),children:[i?c.jsx(R,{}):c.jsx(G,{}),c.jsx("span",{children:d})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiSelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const F=({options:e,opened:o,onClose:t,onSelect:d,dropdownId:i})=>{const s=r=>{let n="";e.forEach(a=>{document.getElementById(a.id)===document.activeElement&&(n=a.id)});const l=e.findIndex(a=>a.id===n);switch(r.key){case"Escape":r.preventDefault(),t();break;case"ArrowUp":{r.preventDefault();const a=l-1>=0?l-1:e.length-1,u=e[a];u&&C(u.id);break}case"ArrowDown":case"Tab":{r.preventDefault();const a=l===e.length-1?0:l+1,u=e[a];u&&C(u.id);break}}};return c.jsx($,{$opened:o,role:"listbox",id:i,tabIndex:-1,onKeyDown:s,children:e.map(r=>c.jsx(P,{value:r,onSelect:()=>d(r.id)},r.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MultiSelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}function H({name:e,options:o,initialValues:t,defaultValue:d}){return o.map(i=>{let s=!1;return t&&(t!=null&&t[e])&&Array.isArray(t[e])&&t[e].find(n=>n===i.id||(n==null?void 0:n.id)===i.id)&&(s=!0),!(t!=null&&t[e])&&Array.isArray(d)&&d.find(n=>n===i.id)&&(s=!0),{...i,selected:s}})}const D=e=>e.filter(o=>o.selected).map(o=>o.id),z=(e,o)=>{const t=e.find(d=>d.id===o);return e.map(d=>d.id===o?{...d,selected:!(t!=null&&t.selected)}:d)};function Z({name:e,defaultValue:o,onChange:t,options:d}){const[i,s]=_.useState(!1),{onChangeFormInput:r,initialValues:n}=_.useContext(B),l=H({name:e,options:d,initialValues:n,defaultValue:o}),[a,u]=_.useState(l),y=()=>s(!1),p=()=>s(!i),w=g=>{const b=z(a,g);u(b),t==null||t(b),r==null||r({name:e,value:D(b)})},v=_.useCallback(()=>{s(!1),u(l),r==null||r({name:e,value:D(l)})},[e]);return K(v),{handleClose:y,handleToggle:p,handleSelect:w,opened:i,values:a}}const de=({options:e,name:o,label:t,required:d=!1,placeholder:i="Not selected",disabled:s=!1,onChange:r,defaultValue:n,...l})=>{const a=_.useRef(null),{elementId:u,dropdownId:y}=T(l==null?void 0:l.id),{handleClose:p,handleSelect:w,handleToggle:v,opened:g,values:b}=Z({name:o,options:e,defaultValue:n,onChange:r});return k({ref:a,onClickOutsideHandler:p}),j({keyCode:"Escape",ref:a,onKeyPress:p}),c.jsxs(q,{ref:a,$disabled:s,className:l==null?void 0:l.className,style:l==null?void 0:l.style,children:[c.jsx(A,{label:t,required:d,inputId:u}),c.jsx(U,{name:o,opened:g,comboboxId:u,dropdownId:y,onClick:v,values:b,placeholder:i,disabled:s,required:d}),c.jsx(F,{options:b,opened:g,onClose:p,dropdownId:y,onSelect:w})]})};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{de as C};
