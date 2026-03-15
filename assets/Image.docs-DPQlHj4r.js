import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-SKv-7AQs.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Image.stories-BZ05dM5m.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Image`}),`
`,(0,d.jsx)(t.h1,{id:`image`,children:`Image`}),`
`,(0,d.jsx)(t.p,{children:`A responsive and accessible image component that supports multiple source sets, aspect ratio control, lazy loading, and comprehensive error handling for optimal performance and user experience.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Image } from './Image';

// Basic image with lazy loading
<Image
  src="https://example.com/image.jpg"
  alt="Descriptive alt text"
  width="400"
  height="300"
/>

// Image with caption and aspect ratio
<Image
  src="https://example.com/photo.jpg"
  alt="Beautiful landscape"
  caption="Sunset over the mountains"
  aspectRatio="16/9"
/>

// Responsive image with multiple sources
<Image
  src="https://example.com/large.jpg"
  alt="Responsive image example"
  sources={[
    {
      src: 'https://example.com/small.jpg',
      descriptor: '400w',
      media: '(max-width: 480px)',
    },
    {
      src: 'https://example.com/medium.jpg',
      descriptor: '800w',
      media: '(max-width: 1024px)',
    }
  ]}
  sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
/>
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Always provide meaningful alt text unless the image is purely decorative (use decorative=true and empty alt in that case)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`: Use loading="lazy" for below-the-fold images and decoding="async" for non-critical images`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Responsive Images`}),`: Utilize the sources prop with appropriate media queries and descriptors for different screen sizes`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Aspect Ratios`}),`: Use the aspectRatio prop to maintain consistent proportions and prevent layout shifts`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Error Handling`}),`: Implement onError callbacks to handle broken images gracefully with fallback content`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Captions`}),`: Use the caption prop to provide additional context when needed`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`File Optimization`}),`: Serve images in modern formats (WebP, AVIF) when possible and appropriate sizes for each breakpoint`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};