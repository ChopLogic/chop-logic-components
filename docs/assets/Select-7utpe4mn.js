import{j as d}from"./jsx-runtime-OAISXtky.js";import{r as S}from"./index-qVDZzPEr.js";import{u as k}from"./index-Bg4JDWSn.js";import{u as j,C as O}from"./Label-DNlmmmBQ.js";import{u as W}from"./index-BeH7sH-W.js";import{A,a as L}from"./ArrowUp-DMQqy-Ng.js";import{d as y,U as p,F as E,C as c,S as T,B as x,Z as R}from"./styled-components.browser.esm-BD-stqwa.js";import{h as G}from"./handle-dropdown-list-key-press-CwnBzYCr.js";import{m as P}from"./move-focus-on-element-by-id-CpbS-38o.js";import{C as B}from"./CheckMark-BooDARG6.js";import{C as K,u as H}from"./index-D121fWfN.js";const w=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p.smallGap};
  padding: ${p.mediumGap} ${p.mediumGap} ${p.smallGap} ${p.mediumGap};
  font-family: ${E.core};
  color: ${c.primary};
  box-shadow: ${T.box};
  border-top-left-radius: ${p.blockBorderRadius};
  border-top-right-radius: ${p.blockBorderRadius};
  border: ${x.thin};
  max-width: 100%;
  background-color: ${c.background};

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,$=y.button`
    border: none;
    text-align: left;
    padding: 0;
    background: transparent;
    color: ${c.primary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${p.mediumGap};
    overflow: hidden;
    height: ${p.fieldWrapperHeight};

    svg {
      color: ${c.tertiary};
      &:hover {
        color: ${c.secondary};
      }
    }


    &:focus-visible {
      outline: ${x.outline};
      outline-offset: 2px;
    }
  }
`,I=y.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${c.primary};
  padding: 2px 0;
  opacity: 0.6;
`,C=y.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${c.primary};
  padding: 2px 0;
`,N=y.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background-color: ${c.background};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${R.dropdown};
  width: 100%;
  top: 78px;
  left: -1px;
  border: ${x.thin};
  box-shadow: ${T.box};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&`
    visibility: visible;
    opacity: 1;
    `}
`,D=y.li`
  padding: ${p.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p.mediumGap};

  &:hover,
  &:active {
    background-color: ${c.shade};
  }

  &:focus-visible {
    outline: ${x.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${c.secondary};
  }
`;try{w.displayName="StyledSelectWrapper",w.__docgenInfo={description:"",displayName:"StyledSelectWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="StyledSelectCombobox",$.__docgenInfo={description:"",displayName:"StyledSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledSelectPlaceholder",I.__docgenInfo={description:"",displayName:"StyledSelectPlaceholder",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="StyledSelectLabel",C.__docgenInfo={description:"",displayName:"StyledSelectLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="StyledSelectDropdown",N.__docgenInfo={description:"",displayName:"StyledSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="StyledSelectOption",D.__docgenInfo={description:"",displayName:"StyledSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const U=({opened:e,onClick:i,comboboxId:t,dropdownId:o,selected:a,name:s,placeholder:r,disabled:u,required:n})=>d.jsxs($,{type:"button",name:s,value:a==null?void 0:a.id,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":o,id:t,onClick:i,disabled:u,"aria-required":n,children:[a!=null&&a.label?d.jsx(C,{children:a==null?void 0:a.label}):d.jsx(I,{children:r}),e?d.jsx(A,{}):d.jsx(L,{})]});try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}}}catch{}const z=({value:e,isSelected:i,onSelect:t,onClear:o})=>{const{id:a,label:s}=e,r=n=>{i?o():t(n)},u=n=>l=>{switch(l.key){case" ":case"SpaceBar":case"Enter":l.preventDefault(),r(n);break}};return d.jsxs(D,{id:a,role:"option","aria-selected":i,tabIndex:0,onKeyDown:u(a),onClick:()=>r(a),children:[d.jsx("span",{children:s}),i&&d.jsx(B,{})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectValue"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}const F=({options:e,opened:i,onClose:t,onSelect:o,dropdownId:a,comboboxId:s,selected:r,onClear:u})=>{const n=l=>{o(l),t(),P(s)};return d.jsx(N,{role:"listbox",id:a,tabIndex:-1,onKeyDown:l=>G({e:l,options:e,onClose:t}),$opened:i,children:e.map(l=>d.jsx(z,{value:l,onSelect:()=>n(l.id),onClear:u,isSelected:l.id===(r==null?void 0:r.id)},l.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}}}}}catch{}function Z({name:e,options:i,initialValues:t,defaultValue:o}){var s;let a;return t&&t[e]&&(a=((s=t[e])==null?void 0:s.id)??t[e]),!(t!=null&&t[e])&&o&&typeof o=="string"&&(a=o),i.find(r=>r.id===a)}function M({name:e,defaultValue:i,onChange:t,options:o}){const{onChangeFormInput:a,initialValues:s}=S.useContext(K),r=Z({name:e,options:o,defaultValue:i,initialValues:s}),[u,n]=S.useState(!1),[l,f]=S.useState(r),b=()=>n(!1),g=()=>n(!u),q=V=>{const m=o.find(h=>h.id===V);f(m),t==null||t(m),a==null||a({name:e,value:m==null?void 0:m.id})},_=()=>{f(void 0),t==null||t(void 0)},v=S.useCallback(()=>{n(!1),f(r),a==null||a({name:e,value:r==null?void 0:r.id})},[e]);return H(v),{selected:l,opened:u,handleClear:_,handleClose:b,handleToggle:g,handleSelect:q}}const de=({options:e,onChange:i,name:t,label:o,defaultValue:a,id:s,placeholder:r="Not selected",required:u=!1,disabled:n=!1,...l})=>{const f=S.useRef(null),{elementId:b,dropdownId:g}=j(s),{handleClear:q,handleClose:_,handleSelect:v,handleToggle:V,selected:m,opened:h}=M({options:e,onChange:i,defaultValue:a,name:t});return k({ref:f,onClickOutsideHandler:_}),W({keyCode:"Escape",ref:f,onKeyPress:_}),d.jsxs(w,{ref:f,$disabled:n,...l,children:[d.jsx(O,{label:o,required:u,inputId:b}),d.jsx(U,{name:t,opened:h,comboboxId:b,dropdownId:g,onClick:V,selected:m,placeholder:r,disabled:n,required:u}),d.jsx(F,{options:e,selected:m,opened:h,onClose:_,dropdownId:g,comboboxId:b,onSelect:v,onClear:q})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: SelectValue) => void)"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}}}}}catch{}export{de as C};
