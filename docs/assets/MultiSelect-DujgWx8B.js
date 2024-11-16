import{j as d}from"./jsx-runtime-OAISXtky.js";import{r as _}from"./index-qVDZzPEr.js";import{u as D}from"./index-Bg4JDWSn.js";import{u as T,C as j}from"./Label-DNlmmmBQ.js";import{u as A}from"./index-BeH7sH-W.js";import{A as O,a as W}from"./ArrowUp-DMQqy-Ng.js";import{d as h,U as p,F as L,C as m,S as k,B as x,Z as R}from"./styled-components.browser.esm-BD-stqwa.js";import{h as E}from"./handle-dropdown-list-key-press-CwnBzYCr.js";import{C as G,a as P}from"./CheckboxUnchecked-DfrujIAw.js";import{C as K,u as B}from"./index-D121fWfN.js";const w=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p.smallGap};
  padding: ${p.mediumGap} ${p.mediumGap} ${p.smallGap} ${p.mediumGap};
  font-family: ${L.core};
  color: ${m.primary};
  box-shadow: ${k.box};
  border-top-left-radius: ${p.blockBorderRadius};
  border-top-right-radius: ${p.blockBorderRadius};
  border: ${x.thin};
  max-width: 100%;
  background-color: ${m.background};

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,v=h.button`
    border: none;
    text-align: left;
    padding: 0;
    background: transparent;
    color: ${m.primary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${p.mediumGap};
    overflow: hidden;
    height: ${p.fieldWrapperHeight};

    svg {
      color: ${m.tertiary};
      &:hover {
        color: ${m.secondary};
      }
    }

    &:focus-visible {
      outline: ${x.outline};
      outline-offset: 2px;
    }
  }
`,$=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${m.primary};
  padding: 2px 0;
  opacity: 0.6;
`,S=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${m.primary};
  padding: 2px 0;
`,I=h.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background-color: ${m.background};
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
`,C=h.li`
  padding: ${p.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p.mediumGap};

  &:hover,
  &:active {
    background-color: ${m.shade};
  }

  &:focus-visible {
    outline: ${x.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${m.secondary};
  }
`;try{w.displayName="StyledMultiSelectWrapper",w.__docgenInfo={description:"",displayName:"StyledMultiSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="StyledMultiSelectCombobox",v.__docgenInfo={description:"",displayName:"StyledMultiSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledMultiSelectPlaceholder",$.__docgenInfo={description:"",displayName:"StyledMultiSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledMultiSelectLabel",S.__docgenInfo={description:"",displayName:"StyledMultiSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledMultiSelectDropdown",I.__docgenInfo={description:"",displayName:"StyledMultiSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledMultiSelectOption",C.__docgenInfo={description:"",displayName:"StyledMultiSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:l,comboboxId:t,dropdownId:r,name:o,placeholder:a,disabled:i,required:n,values:s})=>{const c=s==null?void 0:s.filter(u=>u.selected).map(u=>u.label),f=s==null?void 0:s.filter(u=>u.selected).map(u=>u.id);let y=d.jsx($,{children:a});return c&&c.length>1?y=d.jsx(S,{children:`${c.length} items selected`}):c&&c.length===1&&(y=d.jsx(S,{children:c[0]})),d.jsxs(v,{type:"button",name:o,value:f,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":r,id:t,onClick:l,disabled:i,"aria-required":n,children:[y,e?d.jsx(O,{}):d.jsx(W,{})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"MultiSelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const H=({value:e,onSelect:l})=>{const{id:t,label:r,selected:o}=e,a=i=>n=>{switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),l(i);break}};return d.jsxs(C,{id:t,role:"option","aria-selected":o,tabIndex:0,onKeyDown:a(t),onClick:()=>l(t),children:[o?d.jsx(G,{}):d.jsx(P,{}),d.jsx("span",{children:r})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiSelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const z=({options:e,opened:l,onClose:t,onSelect:r,dropdownId:o})=>d.jsx(I,{$opened:l,role:"listbox",id:o,tabIndex:-1,onKeyDown:a=>E({e:a,options:e,onClose:t}),children:e.map(a=>d.jsx(H,{value:a,onSelect:()=>r(a.id)},a.id))});try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MultiSelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}}}}}catch{}function F({name:e,options:l,initialValues:t,defaultValue:r}){return l.map(o=>{let a=!1;return t&&(t!=null&&t[e])&&Array.isArray(t[e])&&t[e].find(n=>n===o.id||(n==null?void 0:n.id)===o.id)&&(a=!0),!(t!=null&&t[e])&&Array.isArray(r)&&r.find(n=>n===o.id)&&(a=!0),{...o,selected:a}})}const N=e=>e.filter(l=>l.selected).map(l=>l.id),Z=(e,l)=>{const t=e.find(r=>r.id===l);return e.map(r=>r.id===l?{...r,selected:!(t!=null&&t.selected)}:r)};function X({name:e,defaultValue:l,onChange:t,options:r}){const[o,a]=_.useState(!1),{onChangeFormInput:i,initialValues:n}=_.useContext(K),s=F({name:e,options:r,initialValues:n,defaultValue:l}),[c,f]=_.useState(s),y=()=>a(!1),u=()=>a(!o),g=V=>{const b=Z(c,V);f(b),t==null||t(b),i==null||i({name:e,value:N(b)})},q=_.useCallback(()=>{a(!1),f(s),i==null||i({name:e,value:N(s)})},[e]);return B(q),{handleClose:y,handleToggle:u,handleSelect:g,opened:o,values:c}}const ne=({options:e,name:l,label:t,required:r=!1,placeholder:o="Not selected",disabled:a=!1,onChange:i,defaultValue:n,id:s,...c})=>{const f=_.useRef(null),{elementId:y,dropdownId:u}=T(s),{handleClose:g,handleSelect:q,handleToggle:V,opened:b,values:M}=X({name:l,options:e,defaultValue:n,onChange:i});return D({ref:f,onClickOutsideHandler:g}),A({keyCode:"Escape",ref:f,onKeyPress:g}),d.jsxs(w,{ref:f,$disabled:a,...c,children:[d.jsx(j,{label:t,required:r,inputId:y}),d.jsx(U,{name:l,opened:b,comboboxId:y,dropdownId:u,onClick:V,values:M,placeholder:o,disabled:a,required:r}),d.jsx(z,{options:M,opened:b,onClose:g,dropdownId:u,onSelect:q})]})};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values?: SelectValue[]) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{ne as C};
