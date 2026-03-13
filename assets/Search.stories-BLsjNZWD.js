import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{t as r}from"./react-l7Y7wVQj.js";import{n as i}from"./iframe-BApIZdni.js";import{t as a}from"./Header-BBpxREoh.js";import{r as o}from"./Button-CfQ3QUjs.js";import{t as s}from"./Container-Borltgz2.js";import{t as c}from"./ResponsiveWrapper-DuuEdZ3K.js";import{n as l,t as u}from"./Search-f3GJm09E.js";var d,f,p,m=t((()=>{s(),c(),o(),d=e(r(),1),l(),f=i(),p=({onSearch:e,...t})=>{let[n,r]=(0,d.useState)([]),i=t=>{r(e=>[t,...e]),e?.(t)},o=()=>{r([])};return(0,f.jsxs)(`div`,{className:`responsiveWrapper`,style:{display:`flex`,flexDirection:`column`,gap:`16px`,color:`var(--cl-base-font-color)`},children:[(0,f.jsx)(u,{...t,onSearch:i,onClear:o}),n.length>0&&(0,f.jsxs)(`div`,{className:`container`,style:{margin:0},children:[(0,f.jsx)(a,{as:`h5`,children:`You searched for: `}),n.map(e=>(0,f.jsx)(`div`,{children:e},e))]})]})};try{p.displayName=`SearchExample`,p.__docgenInfo={description:``,displayName:`SearchExample`,props:{maxLength:{defaultValue:null,description:``,name:`maxLength`,required:!1,type:{name:`number`}},minLength:{defaultValue:null,description:``,name:`minLength`,required:!1,type:{name:`number`}},placeholder:{defaultValue:null,description:``,name:`placeholder`,required:!1,type:{name:`string`}},autoComplete:{defaultValue:null,description:``,name:`autoComplete`,required:!1,type:{name:`HTMLInputAutoCompleteAttribute`}},clearable:{defaultValue:null,description:``,name:`clearable`,required:!1,type:{name:`boolean`}},spellCheck:{defaultValue:null,description:``,name:`spellCheck`,required:!1,type:{name:`boolean`}},searchMode:{defaultValue:null,description:``,name:`searchMode`,required:!1,type:{name:`enum`,value:[{value:`"manual"`},{value:`"automatic"`}]}},onSearch:{defaultValue:null,description:``,name:`onSearch`,required:!1,type:{name:`((searchTerm: string) => void)`}},onClear:{defaultValue:null,description:``,name:`onClear`,required:!1,type:{name:`(() => void)`}},onBlur:{defaultValue:null,description:``,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},onFocus:{defaultValue:null,description:``,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},debounceDelay:{defaultValue:null,description:``,name:`debounceDelay`,required:!1,type:{name:`number`}},label:{defaultValue:null,description:``,name:`label`,required:!0,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!0,type:{name:`string`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},required:{defaultValue:null,description:``,name:`required`,required:!1,type:{name:`boolean`}},stateless:{defaultValue:null,description:``,name:`stateless`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | number | readonly string[]`}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}},style:{defaultValue:null,description:``,name:`style`,required:!1,type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,description:``,name:`tabIndex`,required:!1,type:{name:`number`}},title:{defaultValue:null,description:``,name:`title`,required:!1,type:{name:`string`}}}}}catch{}})),h=n({DebouncedSearch:()=>v,Disabled:()=>b,ManualMode:()=>_,WithValidation:()=>y,__namedExportsOrder:()=>x,default:()=>g}),g,_,v,y,b,x,S=t((()=>{m(),g={title:`Molecules/Search`,component:p,argTypes:{label:{control:`text`,description:`The label text displayed above the search input`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`Basic`}},name:{control:`text`,description:`The name attribute for the search input field`,table:{type:{summary:`string`},defaultValue:{summary:`q`},category:`Basic`}},placeholder:{control:`text`,description:`Placeholder text displayed in the search input when empty`,table:{type:{summary:`string`},defaultValue:{summary:`Type to search...`},category:`Basic`}},searchMode:{control:`radio`,options:[`automatic`,`manual`],description:`Determines when search is triggered. Automatic: on typing (with debounce). Manual: requires clicking search button or pressing Enter.`,table:{type:{summary:`automatic | manual`},defaultValue:{summary:`automatic`},category:`Behavior`}},debounceDelay:{control:`number`,description:`Delay in milliseconds before triggering automatic search after user stops typing`,table:{type:{summary:`number`},defaultValue:{summary:`500`},category:`Behavior`}},clearable:{control:`boolean`,description:`Whether to show a clear button when there is text in the search input`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`},category:`Behavior`}},maxLength:{control:`number`,description:`Maximum number of characters allowed in the search input`,table:{type:{summary:`number`},defaultValue:{summary:`50`},category:`Validation`}},minLength:{control:`number`,description:`Minimum number of characters required to trigger search`,table:{type:{summary:`number`},defaultValue:{summary:`1`},category:`Validation`}},required:{control:`boolean`,description:`Whether the search input is required`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Validation`}},autoComplete:{control:`select`,options:[`on`,`off`,`name`,`email`,`username`,`new-password`,`current-password`,`one-time-code`,`organization-title`,`street-address`],description:`HTML autocomplete attribute for the search input`,table:{type:{summary:`HTMLInputAutoCompleteAttribute`},defaultValue:{summary:`off`},category:`Browser`}},spellCheck:{control:`boolean`,description:`Whether to enable browser spell checking for the search input`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Browser`}},disabled:{control:`boolean`,description:`Whether the search input is disabled`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},onSearch:{action:`searched`,description:`Callback fired when search is performed (after debounce delay or manual trigger)`,table:{type:{summary:`(searchTerm: string) => void`},category:`Events`}},onClear:{action:`cleared`,description:`Callback fired when the search input is cleared`,table:{type:{summary:`() => void`},category:`Events`}},onFocus:{action:`focused`,description:`Callback fired when the search input receives focus`,table:{type:{summary:`FocusEventHandler<HTMLInputElement>`},category:`Events`}},onBlur:{action:`blurred`,description:`Callback fired when the search input loses focus`,table:{type:{summary:`FocusEventHandler<HTMLInputElement>`},category:`Events`}},id:{control:`text`,description:`The unique ID for the search input (auto-generated if not provided)`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},className:{control:`text`,description:`Additional CSS class for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},style:{control:`object`,description:`Inline styles for the search wrapper`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},tabIndex:{control:`number`,description:`Tab index for the search input`,table:{type:{summary:`number`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}}},args:{label:`Search`,name:`q`,placeholder:`Type to search...`,searchMode:`manual`,clearable:!0,required:!1,autoComplete:`off`,spellCheck:!1,disabled:!1}},_={args:{searchMode:`manual`,label:`Manual Search`,placeholder:`Type and click search button...`},parameters:{docs:{description:{story:`Search component in manual mode requiring explicit search trigger.`}}}},v={args:{label:`Debounced Search`,searchMode:`automatic`,placeholder:`Automatic search with a delay...`,debounceDelay:500},parameters:{docs:{description:{story:`Search component with custom debounce delay for faster responses.`}}}},y={args:{label:`Search with Validation`,placeholder:`Minimum 3 characters...`,minLength:3,maxLength:50,required:!0,searchMode:`manual`},parameters:{docs:{description:{story:`Search component with input validation constraints.`}}}},b={args:{label:`Disabled Search`,placeholder:`This search is disabled...`,disabled:!0},parameters:{docs:{description:{story:`Disabled search component that cannot be interacted with.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    searchMode: 'manual',
    label: 'Manual Search',
    placeholder: 'Type and click search button...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component in manual mode requiring explicit search trigger.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Debounced Search',
    searchMode: 'automatic',
    placeholder: 'Automatic search with a delay...',
    debounceDelay: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with custom debounce delay for faster responses.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search with Validation',
    placeholder: 'Minimum 3 characters...',
    minLength: 3,
    maxLength: 50,
    required: true,
    searchMode: 'manual'
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with input validation constraints.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Search',
    placeholder: 'This search is disabled...',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled search component that cannot be interacted with.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`ManualMode`,`DebouncedSearch`,`WithValidation`,`Disabled`]}));S();export{v as DebouncedSearch,b as Disabled,_ as ManualMode,y as WithValidation,x as __namedExportsOrder,g as default,S as n,h as t};