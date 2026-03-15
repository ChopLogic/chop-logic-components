import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,o as r,s as i,t as a}from"./enums-CQiPy48U.js";import{n as o,t as s}from"./Button-ClVkm7Wy.js";var c=t({Disabled:()=>h,Icon:()=>f,IconWithTooltip:()=>m,Primary:()=>u,Secondary:()=>d,WithTooltip:()=>p,__namedExportsOrder:()=>g,default:()=>l}),l,u,d,f,p,m,h,g,_=e((()=>{a(),o(),l={title:`Atoms/Button`,component:s,args:{text:`Button`,type:`button`,view:i.Primary,disabled:!1,extended:!1,onClick:()=>console.log(`Button clicked!`)},argTypes:{text:{control:`text`,description:`The text content displayed on the button`,table:{type:{summary:`string`},category:`Content`}},icon:{control:`select`,options:Object.values(n),description:`Icon to display alongside the button text`,table:{type:{summary:`IconName`},category:`Content`}},view:{control:`select`,options:Object.values(i),description:`Visual style variant of the button`,table:{type:{summary:`ButtonView`},category:`Styling`}},extended:{control:`boolean`,description:`Whether the button should take full available width`,table:{type:{summary:`boolean`},category:`Styling`}},iconSize:{control:`select`,options:Object.values(r),description:`The size of the icon`,table:{type:{summary:`ElementSize`},category:`Styling`}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:`The HTML button type attribute`,table:{type:{summary:`'button' | 'submit' | 'reset'`},defaultValue:{summary:`button`},category:`Behavior`}},disabled:{control:`boolean`,description:`Whether the button is disabled`,table:{type:{summary:`boolean`},category:`State`}},tooltip:{control:`text`,description:`Tooltip text shown on hover`,table:{type:{summary:`string`},category:`Interaction`}},label:{control:`text`,description:`Accessibility label for icon-only buttons`,table:{type:{summary:`string`},category:`Accessibility`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}},onClick:{action:`clicked`,description:`Callback function triggered when the button is clicked`,table:{type:{summary:`MouseEventHandler<HTMLButtonElement>`},category:`Interaction`}},onFocus:{action:`focused`,description:`Callback function triggered when the button receives focus`,table:{type:{summary:`FocusEventHandler<HTMLButtonElement>`},category:`Interaction`}},onBlur:{action:`blurred`,description:`Callback function triggered when the button loses focus`,table:{type:{summary:`FocusEventHandler<HTMLButtonElement>`},category:`Interaction`}},title:{control:`text`,description:`Tooltip text shown on hover`,table:{type:{summary:`string`},category:`Interaction`}},visibleOn:{control:`radio`,options:[`hover`,`click`,`focus`,`contextmenu`],description:`Event that triggers tooltip visibility`,table:{type:{summary:`'hover' | 'click' | 'focus' | 'contextmenu'`},category:`Interaction`}},id:{control:`text`,description:`Unique identifier for the button element`,table:{type:{summary:`string`},category:`Identification`}},name:{control:`text`,description:`The name attribute for the button element (useful for form submission)`,table:{type:{summary:`string`},category:`Identification`}},className:{control:`text`,description:`Additional CSS class names for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles to apply to the button`,table:{type:{summary:`CSSProperties`},category:`Styling`}}}},u={args:{text:`Copy`,view:i.Primary,icon:n.Copy}},d={args:{text:`Learn more...`,view:i.Secondary,icon:n.ChevronsRight}},f={args:{view:i.Icon,icon:n.Star,label:`Favorite`}},p={args:{text:`Hover On Me`,view:i.Primary,tooltip:`This button does nothing...`}},m={args:{view:i.Icon,icon:n.ThumbsUp,label:`Thumbs Up`,tooltip:`Like this!`}},h={args:{text:`Disabled`,view:i.Primary,icon:n.PhoneOff,disabled:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.ChevronsRight
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Star,
    label: 'Favorite'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Primary,
    tooltip: 'This button does nothing...'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.ThumbsUp,
    label: 'Thumbs Up',
    tooltip: 'Like this!'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.PhoneOff,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Primary`,`Secondary`,`Icon`,`WithTooltip`,`IconWithTooltip`,`Disabled`]}));_();export{h as Disabled,f as Icon,m as IconWithTooltip,u as Primary,d as Secondary,p as WithTooltip,g as __namedExportsOrder,l as default,_ as n,c as t};