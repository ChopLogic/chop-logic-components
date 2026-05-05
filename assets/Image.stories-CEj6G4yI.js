import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{f as n,p as r}from"./Button-B8v4y9iz.js";var i=t({Default:()=>o,ResponsiveWithSources:()=>l,WithAspectRatio:()=>c,WithCaption:()=>s,WithErrorHandling:()=>u,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d,f=e((()=>{r(),a={title:`Atoms/Image`,component:n,argTypes:{src:{control:`text`,description:`The main image source URL`,table:{type:{summary:`string`},category:`Content`}},alt:{control:`text`,description:`Alternative text description for accessibility`,table:{type:{summary:`string`},category:`Accessibility`}},caption:{control:`text`,description:`Optional caption displayed below the image`,table:{type:{summary:`string`},category:`Content`}},width:{control:`text`,description:`Width of the image (pixels or percentage)`,table:{type:{summary:`string | number`},category:`Styling`}},height:{control:`text`,description:`Height of the image (pixels or percentage)`,table:{type:{summary:`string | number`},category:`Styling`}},aspectRatio:{control:`text`,description:`Aspect ratio (e.g., "16/9", "4/3", "1")`,table:{type:{summary:`string | number`},category:`Styling`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},loading:{control:`select`,options:[`lazy`,`eager`],description:`Loading behavior`,table:{type:{summary:`'lazy' | 'eager'`},defaultValue:{summary:`lazy`},category:`Behavior`}},decoding:{control:`select`,options:[`sync`,`async`,`auto`],description:`Decoding behavior`,table:{type:{summary:`'sync' | 'async' | 'auto'`},defaultValue:{summary:`async`},category:`Behavior`}},decorative:{control:`boolean`,description:`Whether the image is decorative (hides alt text from screen readers)`,table:{type:{summary:`boolean`},category:`Accessibility`}},onError:{control:`object`,description:`An optional callback function triggered on image load error`,table:{type:{summary:`(error: Event) => void`},category:`Interaction`}},sources:{control:`object`,description:`Array of source objects for responsive images`,table:{type:{summary:`Array<{ src: string; descriptor?: string; media?: string }>`},category:`Content`}},sizes:{control:`text`,description:`Sizes attribute for responsive images`,table:{type:{summary:`string`},category:`Content`}}},args:{src:`https://picsum.photos/400/300`,alt:`Example image description`,loading:`lazy`,decoding:`async`}},o={args:{src:`https://picsum.photos/400/300`,alt:`A beautiful landscape with mountains and lake`}},s={args:{src:`https://picsum.photos/400/300`,alt:`City skyline at sunset`,caption:`Downtown city skyline during golden hour`}},c={args:{src:`https://picsum.photos/400/300`,alt:`Widescreen image`,aspectRatio:`16/9`,width:`100%`}},l={args:{src:`https://picsum.photos/800/600`,alt:`Responsive image example`,sources:[{src:`https://picsum.photos/400/300`,descriptor:`400w`,media:`(max-width: 480px)`},{src:`https://picsum.photos/800/600`,descriptor:`800w`,media:`(max-width: 1024px)`},{src:`https://picsum.photos/1200/900`,descriptor:`1200w`}],sizes:`(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px`,caption:`An example of a responsive image with multiple sources`}},u={args:{src:`https://picsum.photos/error`,alt:`Image with error handling`,onError:()=>console.log(`Image failed to load, displaying fallback.`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'A beautiful landscape with mountains and lake'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'City skyline at sunset',
    caption: 'Downtown city skyline during golden hour'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Widescreen image',
    aspectRatio: '16/9',
    width: '100%'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Responsive image example',
    sources: [{
      src: 'https://picsum.photos/400/300',
      descriptor: '400w',
      media: '(max-width: 480px)'
    }, {
      src: 'https://picsum.photos/800/600',
      descriptor: '800w',
      media: '(max-width: 1024px)'
    }, {
      src: 'https://picsum.photos/1200/900',
      descriptor: '1200w'
    }],
    sizes: '(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px',
    caption: 'An example of a responsive image with multiple sources'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/error',
    alt: 'Image with error handling',
    onError: () => console.log('Image failed to load, displaying fallback.')
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithCaption`,`WithAspectRatio`,`ResponsiveWithSources`,`WithErrorHandling`]}));f();export{o as Default,l as ResponsiveWithSources,c as WithAspectRatio,s as WithCaption,u as WithErrorHandling,d as __namedExportsOrder,a as default,f as n,i as t};