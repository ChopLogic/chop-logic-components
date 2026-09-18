import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{i as n,n as r,r as i,t as a}from"./Button-DhfZ76n0.js";import{i as o,r as s}from"./Icon-C2yfm2MV.js";import{n as c,t as l}from"./icon-name-Cjfw6W7s.js";var u=t({Disabled:()=>_,Icon:()=>m,IconWithTooltip:()=>g,Loading:()=>v,Primary:()=>f,Secondary:()=>p,WithTooltip:()=>h,__namedExportsOrder:()=>y,default:()=>d}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),o(),c(),r(),d={title:`Atoms/Button`,component:a,args:{text:`Button`,type:`button`,view:i.Primary,disabled:!1,extended:!1,isLoading:!1,onClick:()=>console.log(`Button clicked!`)},argTypes:{text:{control:`text`,description:`The text content displayed on the button`,table:{type:{summary:`string`},category:`Content`}},icon:{control:`select`,options:Object.values(l),description:`Icon to display alongside the button text`,table:{type:{summary:`IconName`},category:`Content`}},view:{control:`select`,options:Object.values(i),description:`Visual style variant of the button`,table:{type:{summary:`ButtonView`},category:`Styling`}},extended:{control:`boolean`,description:`Whether the button should take full available width`,table:{type:{summary:`boolean`},category:`Styling`}},iconSize:{control:`select`,options:Object.values(s),description:`The size of the icon`,table:{type:{summary:`ElementSize`},category:`Styling`}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:`The HTML button type attribute`,table:{type:{summary:`'button' | 'submit' | 'reset'`},defaultValue:{summary:`button`},category:`Behavior`}},disabled:{control:`boolean`,description:`Whether the button is disabled`,table:{type:{summary:`boolean`},category:`State`}},isLoading:{control:`boolean`,description:`Whether the button is in a loading state. When true, shows a spinning loader icon (if icon is provided), prevents click events, and sets aria-busy for accessibility.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},tooltip:{control:`text`,description:`Tooltip text shown on hover`,table:{type:{summary:`string`},category:`Interaction`}},label:{control:`text`,description:`Accessibility label for icon-only buttons`,table:{type:{summary:`string`},category:`Accessibility`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}},onClick:{action:`clicked`,description:`Callback function triggered when the button is clicked`,table:{type:{summary:`MouseEventHandler<HTMLButtonElement>`},category:`Interaction`}},onFocus:{action:`focused`,description:`Callback function triggered when the button receives focus`,table:{type:{summary:`FocusEventHandler<HTMLButtonElement>`},category:`Interaction`}},onBlur:{action:`blurred`,description:`Callback function triggered when the button loses focus`,table:{type:{summary:`FocusEventHandler<HTMLButtonElement>`},category:`Interaction`}},title:{control:`text`,description:`Tooltip text shown on hover`,table:{type:{summary:`string`},category:`Interaction`}},visibleOn:{control:`radio`,options:[`hover`,`click`,`focus`,`contextmenu`],description:`Event that triggers tooltip visibility`,table:{type:{summary:`'hover' | 'click' | 'focus' | 'contextmenu'`},category:`Interaction`}},id:{control:`text`,description:`Unique identifier for the button element`,table:{type:{summary:`string`},category:`Identification`}},name:{control:`text`,description:`The name attribute for the button element (useful for form submission)`,table:{type:{summary:`string`},category:`Identification`}},className:{control:`text`,description:`Additional CSS class names for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles to apply to the button`,table:{type:{summary:`CSSProperties`},category:`Styling`}}}},f={args:{text:`Copy`,view:i.Primary,icon:l.Copy}},p={args:{text:`Learn more...`,view:i.Secondary,icon:l.ChevronsRight}},m={args:{view:i.Icon,icon:l.Star,label:`Favorite`}},h={args:{text:`Hover On Me`,view:i.Primary,tooltip:`This button does nothing...`}},g={args:{view:i.Icon,icon:l.ThumbsUp,label:`Thumbs Up`,tooltip:`Like this!`}},_={args:{text:`Disabled`,view:i.Primary,icon:l.PhoneOff,disabled:!0}},v={args:{text:`Submitting...`,view:i.Primary,icon:l.Check,isLoading:!0},parameters:{docs:{description:{story:'When `isLoading` is true and an icon is provided, the button displays a spinning loader icon in place of the regular icon. The button also prevents click events and sets `aria-busy="true"` for accessibility.'}}}},y=[`Primary`,`Secondary`,`Icon`,`WithTooltip`,`IconWithTooltip`,`Disabled`,`Loading`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.ChevronsRight
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Star,
    label: 'Favorite'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Primary,
    tooltip: 'This button does nothing...'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.ThumbsUp,
    label: 'Thumbs Up',
    tooltip: 'Like this!'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.PhoneOff,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Submitting...',
    view: ButtonView.Primary,
    icon: IconName.Check,
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isLoading\` is true and an icon is provided, the button displays a spinning loader icon in place of the regular icon. The button also prevents click events and sets \`aria-busy="true"\` for accessibility.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,u as t};