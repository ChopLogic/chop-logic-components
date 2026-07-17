import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{_ as n,g as r}from"./Avatar-ChodV1sZ.js";var i=t({ArtDirectionSources:()=>u,Default:()=>o,ResponsiveWithSources:()=>l,WithAspectRatio:()=>c,WithCaption:()=>s,WithErrorHandling:()=>d,__namedExportsOrder:()=>f,default:()=>a}),a,o,s,c,l,u,d,f,p=e((()=>{n(),a={title:`Atoms/Image`,component:r,argTypes:{src:{control:`text`,description:`The main image source URL`,table:{type:{summary:`string`},category:`Content`}},alt:{control:`text`,description:`Alternative text description for accessibility`,table:{type:{summary:`string`},category:`Accessibility`}},caption:{control:`text`,description:`Optional caption displayed below the image`,table:{type:{summary:`string`},category:`Content`}},width:{control:`text`,description:`Width of the image (pixels or percentage)`,table:{type:{summary:`string | number`},category:`Styling`}},height:{control:`text`,description:`Height of the image (pixels or percentage)`,table:{type:{summary:`string | number`},category:`Styling`}},aspectRatio:{control:`text`,description:`Aspect ratio (e.g., "16/9", "4/3", "1")`,table:{type:{summary:`string | number`},category:`Styling`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},loading:{control:`select`,options:[`lazy`,`eager`],description:`Loading behavior`,table:{type:{summary:`'lazy' | 'eager'`},defaultValue:{summary:`lazy`},category:`Behavior`}},decoding:{control:`select`,options:[`sync`,`async`,`auto`],description:`Decoding behavior`,table:{type:{summary:`'sync' | 'async' | 'auto'`},defaultValue:{summary:`async`},category:`Behavior`}},decorative:{control:`boolean`,description:`Whether the image is decorative (hides alt text from screen readers)`,table:{type:{summary:`boolean`},category:`Accessibility`}},onError:{control:`object`,description:`An optional callback function triggered on image load error`,table:{type:{summary:`(error: Event) => void`},category:`Interaction`}},sources:{control:`object`,description:`Array of source objects for responsive images`,table:{type:{summary:`Array<{ src: string; descriptor?: string; media?: string }>`},category:`Content`}},sizes:{control:`text`,description:`Sizes attribute for responsive images`,table:{type:{summary:`string`},category:`Content`}}},args:{src:`https://picsum.photos/400/300`,alt:`Example image description`,loading:`lazy`,decoding:`async`}},o={args:{src:`https://picsum.photos/400/300`,alt:`A beautiful landscape with mountains and lake`}},s={args:{src:`https://picsum.photos/400/300`,alt:`City skyline at sunset`,caption:`Downtown city skyline during golden hour`}},c={args:{src:`https://picsum.photos/400/300`,alt:`Widescreen image`,aspectRatio:`16/9`,width:`100%`}},l={args:{src:`https://picsum.photos/1200/900`,alt:`Responsive image example`,sources:[{src:`https://picsum.photos/400/300`,descriptor:`400w`},{src:`https://picsum.photos/800/600`,descriptor:`800w`},{src:`https://picsum.photos/1200/900`,descriptor:`1200w`}],sizes:`(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px`,caption:`Resolution switching: browser picks optimal image size`}},u={args:{src:`https://picsum.photos/1200/900`,alt:`Art direction image example`,sources:[{src:`https://picsum.photos/400/300`,media:`(max-width: 480px)`},{src:`https://picsum.photos/800/600`,media:`(max-width: 1024px)`}],caption:`Art direction: different images per breakpoint`}},d={args:{src:`https://picsum.photos/error`,alt:`Image with error handling`,onError:()=>console.log(`Image failed to load, displaying fallback.`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    src: 'https://picsum.photos/1200/900',
    alt: 'Responsive image example',
    sources: [{
      src: 'https://picsum.photos/400/300',
      descriptor: '400w'
    }, {
      src: 'https://picsum.photos/800/600',
      descriptor: '800w'
    }, {
      src: 'https://picsum.photos/1200/900',
      descriptor: '1200w'
    }],
    sizes: '(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px',
    caption: 'Resolution switching: browser picks optimal image size'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/1200/900',
    alt: 'Art direction image example',
    sources: [{
      src: 'https://picsum.photos/400/300',
      media: '(max-width: 480px)'
    }, {
      src: 'https://picsum.photos/800/600',
      media: '(max-width: 1024px)'
    }],
    caption: 'Art direction: different images per breakpoint'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/error',
    alt: 'Image with error handling',
    onError: () => console.log('Image failed to load, displaying fallback.')
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithCaption`,`WithAspectRatio`,`ResponsiveWithSources`,`ArtDirectionSources`,`WithErrorHandling`]}));p();export{u as ArtDirectionSources,o as Default,l as ResponsiveWithSources,c as WithAspectRatio,s as WithCaption,d as WithErrorHandling,f as __namedExportsOrder,a as default,p as n,i as t};