import{B as t,a as c}from"./Button-CDhvcQ58.js";import{E as l}from"./Icon-DTjVTp_9.js";import{I as e}from"./icon-name-DofyCo9k.js";const u={title:"Atoms/Button",component:c,args:{text:"Button",type:"button",view:t.Primary,disabled:!1,extended:!1,onClick:()=>console.log("Button clicked!")},argTypes:{text:{control:"text",description:"The text content displayed on the button",table:{type:{summary:"string"},category:"Content"}},icon:{control:"select",options:Object.values(e),description:"Icon to display alongside the button text",table:{type:{summary:"IconName"},category:"Content"}},view:{control:"select",options:Object.values(t),description:"Visual style variant of the button",table:{type:{summary:"ButtonView"},category:"Styling"}},extended:{control:"boolean",description:"Whether the button should take full available width",table:{type:{summary:"boolean"},category:"Styling"}},iconSize:{control:"select",options:Object.values(l),description:"The size of the icon",table:{type:{summary:"ElementSize"},category:"Styling"}},type:{control:"select",options:["button","submit","reset"],description:"The HTML button type attribute",table:{type:{summary:"'button' | 'submit' | 'reset'"},defaultValue:{summary:"button"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},category:"State"}},tooltip:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},label:{control:"text",description:"Accessibility label for icon-only buttons",table:{type:{summary:"string"},category:"Accessibility"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}},onClick:{action:"clicked",description:"Callback function triggered when the button is clicked",table:{type:{summary:"MouseEventHandler<HTMLButtonElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the button receives focus",table:{type:{summary:"FocusEventHandler<HTMLButtonElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the button loses focus",table:{type:{summary:"FocusEventHandler<HTMLButtonElement>"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},visibleOn:{control:"radio",options:["hover","click","focus","contextmenu"],description:"Event that triggers tooltip visibility",table:{type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"},category:"Interaction"}},id:{control:"text",description:"Unique identifier for the button element",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"The name attribute for the button element (useful for form submission)",table:{type:{summary:"string"},category:"Identification"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the button",table:{type:{summary:"CSSProperties"},category:"Styling"}}}},o={args:{text:"Copy",view:t.Primary,icon:e.Copy}},n={args:{text:"Learn more...",view:t.Secondary,icon:e.ChevronsRight}},r={args:{view:t.Icon,icon:e.Star,label:"Favorite"}},a={args:{text:"Hover On Me",view:t.Primary,tooltip:"This button does nothing..."}},i={args:{view:t.Icon,icon:e.ThumbsUp,label:"Thumbs Up",tooltip:"Like this!"}},s={args:{text:"Disabled",view:t.Primary,icon:e.PhoneOff,disabled:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.ChevronsRight
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Star,
    label: 'Favorite'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Primary,
    tooltip: 'This button does nothing...'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.ThumbsUp,
    label: 'Thumbs Up',
    tooltip: 'Like this!'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.PhoneOff,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const m=["Primary","Secondary","Icon","WithTooltip","IconWithTooltip","Disabled"],b=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Icon:r,IconWithTooltip:i,Primary:o,Secondary:n,WithTooltip:a,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{b as B};
