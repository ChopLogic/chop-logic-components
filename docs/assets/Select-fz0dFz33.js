import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as g}from"./index-DJO9vBfz.js";import{u as O}from"./index-BWBqZFZK.js";import{u as j,C as A}from"./Label-C3WErDxN.js";import{u as W}from"./index-DYr8M9Az.js";import{A as E,a as L}from"./ArrowUp-D8N8y9PM.js";import{d as h,U as u,F as R,C as y,S as k,B as v,Z as G}from"./styled-components.browser.esm-BAmCwVtG.js";import{m as q}from"./move-focus-on-element-by-id-CpbS-38o.js";import{C as B}from"./CheckMark-DH8gl-7Y.js";import{C as K,u as P}from"./index-C6NryZZH.js";const V=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${u.smallGap};
  padding: ${u.mediumGap} ${u.mediumGap} ${u.smallGap} ${u.mediumGap};
  font-family: ${R.core};
  color: ${y.primary};
  box-shadow: ${k.box};
  border-top-left-radius: ${u.blockBorderRadius};
  border-top-right-radius: ${u.blockBorderRadius};
  border: ${v.light};
  max-width: 100%;
  background-color: ${y.background};

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
    color: ${y.primary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${u.mediumGap};
    overflow: hidden;
    height: ${u.fieldWrapperHeight};

    svg {
      color: ${y.tertiary};
      &:hover {
        color: ${y.secondary};
      }
    }


    &:focus-visible {
      outline: ${v.outline};
      outline-offset: 2px;
    }
  }
`,$=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${y.primary};
  padding: 2px 0;
  opacity: 0.6;
`,C=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${y.primary};
  padding: 2px 0;
`,D=h.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background-color: ${y.background};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${G.dropdown};
  width: 100%;
  top: 78px;
  left: -1px;
  border: ${v.light};
  box-shadow: ${k.box};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&`
    visibility: visible;
    opacity: 1;
    `}
`,N=h.li`
  padding: ${u.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${u.mediumGap};

  &:hover,
  &:active {
    background-color: ${y.shade};
  }

  &:focus-visible {
    outline: ${v.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${y.secondary};
  }
`;try{V.displayName="StyledSelectWrapper",V.__docgenInfo={description:"",displayName:"StyledSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledSelectCombobox",I.__docgenInfo={description:"",displayName:"StyledSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledSelectPlaceholder",$.__docgenInfo={description:"",displayName:"StyledSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledSelectLabel",C.__docgenInfo={description:"",displayName:"StyledSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledSelectDropdown",D.__docgenInfo={description:"",displayName:"StyledSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledSelectOption",N.__docgenInfo={description:"",displayName:"StyledSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:s,comboboxId:a,dropdownId:d,selected:t,name:c,placeholder:r,disabled:p,required:o})=>i.jsxs(I,{type:"button",name:c,value:t==null?void 0:t.id,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":d,id:a,onClick:s,disabled:p,"aria-required":o,children:[t!=null&&t.label?i.jsx(C,{children:t==null?void 0:t.label}):i.jsx($,{children:r}),e?i.jsx(E,{}):i.jsx(L,{})]});try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const F=({value:e,isSelected:s,onSelect:a,onClear:d})=>{const{id:t,label:c}=e,r=o=>{s?d():a(o)},p=o=>m=>{switch(m.key){case" ":case"SpaceBar":case"Enter":m.preventDefault(),r(o);break}};return i.jsxs(N,{id:t,role:"option","aria-selected":s,tabIndex:0,onKeyDown:p(t),onClick:()=>r(t),children:[i.jsx("span",{children:c}),s&&i.jsx(B,{})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectValue"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}const H=({options:e,opened:s,onClose:a,onSelect:d,dropdownId:t,comboboxId:c,selected:r,onClear:p})=>{const o=l=>{d(l),a(),q(c)},m=l=>{let S="";e.forEach(n=>{document.getElementById(n.id)===document.activeElement&&(S=n.id)});const b=e.findIndex(n=>n.id===S);switch(l.key){case"Escape":l.preventDefault(),a();break;case"ArrowUp":{l.preventDefault();const n=b-1>=0?b-1:e.length-1,f=e[n];f&&q(f.id);break}case"ArrowDown":case"Tab":{l.preventDefault();const n=b===e.length-1?0:b+1,f=e[n];f&&q(f.id);break}}};return i.jsx(D,{role:"listbox",id:t,tabIndex:-1,onKeyDown:m,$opened:s,children:e.map(l=>i.jsx(F,{value:l,onSelect:()=>o(l.id),onClear:p,isSelected:l.id===(r==null?void 0:r.id)},l.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}function z({name:e,options:s,initialValues:a,defaultValue:d}){var c;let t;return a&&a[e]&&(t=((c=a[e])==null?void 0:c.id)??a[e]),!(a!=null&&a[e])&&d&&typeof d=="string"&&(t=d),s.find(r=>r.id===t)}function Z({name:e,defaultValue:s,onChange:a,options:d}){const{onChangeFormInput:t,initialValues:c}=g.useContext(K),r=z({name:e,options:d,defaultValue:s,initialValues:c}),[p,o]=g.useState(!1),[m,l]=g.useState(r),S=()=>o(!1),b=()=>o(!p),n=x=>{const _=d.find(T=>T.id===x);l(_),a==null||a(_),t==null||t({name:e,value:_==null?void 0:_.id})},f=()=>{l(void 0),a==null||a(void 0)},w=g.useCallback(()=>{o(!1),l(r),t==null||t({name:e,value:r==null?void 0:r.id})},[e]);return P(w),{selected:m,opened:p,handleClear:f,handleClose:S,handleToggle:b,handleSelect:n}}const le=({options:e,onChange:s,name:a,label:d,placeholder:t="Not selected",required:c=!1,disabled:r=!1,defaultValue:p,...o})=>{const m=g.useRef(null),{elementId:l,dropdownId:S}=j(o==null?void 0:o.id),{handleClear:b,handleClose:n,handleSelect:f,handleToggle:w,selected:x,opened:_}=Z({options:e,onChange:s,defaultValue:p,name:a});return O({ref:m,onClickOutsideHandler:n}),W({keyCode:"Escape",ref:m,onKeyPress:n}),i.jsxs(V,{ref:m,$disabled:r,style:o.style,className:o==null?void 0:o.className,children:[i.jsx(A,{label:d,required:c,inputId:l}),i.jsx(U,{name:a,opened:_,comboboxId:l,dropdownId:S,onClick:w,selected:x,placeholder:t,disabled:r,required:c}),i.jsx(H,{options:e,selected:x,opened:_,onClose:n,dropdownId:S,comboboxId:l,onSelect:f,onClear:b})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{le as C};
