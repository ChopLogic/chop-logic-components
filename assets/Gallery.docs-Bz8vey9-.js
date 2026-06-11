import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t}from"./iframe-CpIEEEvM.js";import{C as n,a as r,d as i,u as a}from"./blocks-PBe3VPBY.js";import{t as o}from"./mdx-react-shim-Bsf5l8oP.js";import{n as s,t as c}from"./Gallery.stories-CVuKTbje.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Gallery`}),`
`,(0,d.jsx)(t.h1,{id:`gallery`,children:`Gallery`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Gallery`}),` component displays a collection of images in one of three layout modes: `,(0,d.jsx)(t.strong,{children:`Grid`}),`, `,(0,d.jsx)(t.strong,{children:`Masonry`}),`, or `,(0,d.jsx)(t.strong,{children:`Carousel`}),`. It uses CSS-first layout techniques with minimal JavaScript, reuses the existing Image atom for rendering, and provides full accessibility support including keyboard navigation for carousel controls.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`grid-layout`,children:`Grid Layout`}),`
`,(0,d.jsx)(t.p,{children:`Displays images in a uniform NxM grid with configurable columns and optional row constraints.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Gallery } from "chop-logic-components";

const PhotoGrid = () => {
  const images = [
    { src: "/photos/landscape-1.jpg", alt: "Mountain sunrise" },
    { src: "/photos/landscape-2.jpg", alt: "Ocean sunset" },
    { src: "/photos/landscape-3.jpg", alt: "Forest trail" },
    { src: "/photos/landscape-4.jpg", alt: "Desert dunes" },
    { src: "/photos/landscape-5.jpg", alt: "City skyline" },
    { src: "/photos/landscape-6.jpg", alt: "River valley" },
  ];

  return <Gallery images={images} layout="grid" columns={3} rows={2} gap="12px" label="Landscape photos" />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`masonry-layout`,children:`Masonry Layout`}),`
`,(0,d.jsx)(t.p,{children:`Packs images of varying heights tightly together using CSS columns, with responsive column counts that adapt to the viewport width.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Gallery } from "chop-logic-components";

const MasonryWall = () => {
  const images = [
    { src: "/photos/portrait-1.jpg", alt: "Studio portrait" },
    { src: "/photos/wide-2.jpg", alt: "Panoramic view" },
    { src: "/photos/square-3.jpg", alt: "Product shot" },
    { src: "/photos/tall-4.jpg", alt: "Tower building" },
    { src: "/photos/wide-5.jpg", alt: "Beach horizon" },
  ];

  return <Gallery images={images} layout="masonry" columns={3} gap="8px" label="Mixed photo collection" />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`carousel-layout`,children:`Carousel Layout`}),`
`,(0,d.jsx)(t.p,{children:`Displays images in a horizontally scrollable row with Previous and Next navigation buttons that appear based on scroll position.`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Gallery } from "chop-logic-components";

const ImageCarousel = () => {
  const images = [
    { src: "/photos/slide-1.jpg", alt: "First slide" },
    { src: "/photos/slide-2.jpg", alt: "Second slide" },
    { src: "/photos/slide-3.jpg", alt: "Third slide" },
    { src: "/photos/slide-4.jpg", alt: "Fourth slide" },
    { src: "/photos/slide-5.jpg", alt: "Fifth slide" },
  ];

  return <Gallery images={images} layout="carousel" gap="16px" label="Featured images" />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`fullscreen-mode`,children:`Fullscreen Mode`}),`
`,(0,d.jsxs)(t.p,{children:[`Enable fullscreen viewing by setting `,(0,d.jsx)(t.code,{children:`enableFullscreen={true}`}),`. Users can click any image to open it in a fullscreen overlay with navigation controls. The fullscreen viewer supports keyboard navigation (Arrow keys to navigate, Escape to close) and clicking outside the image to close.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Gallery } from "chop-logic-components";

const FullscreenGallery = () => {
  const images = [
    { src: "/photos/landscape-1.jpg", alt: "Mountain sunrise", caption: "Sunrise over the mountains" },
    { src: "/photos/landscape-2.jpg", alt: "Ocean sunset", caption: "Peaceful ocean sunset" },
    { src: "/photos/landscape-3.jpg", alt: "Forest trail", caption: "Enchanted forest path" },
  ];

  return <Gallery images={images} layout="grid" columns={3} enableFullscreen label="Photo gallery with fullscreen" />;
};
`})}),`
`,(0,d.jsx)(t.h4,{id:`fullscreen-features`,children:`Fullscreen Features`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Click to open`}),`: Click any image to view it in fullscreen`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Keyboard activation`}),`: Press Enter or Space on a focused image to open fullscreen`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Navigation`}),`: Use Previous/Next buttons or Arrow keys to browse images`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Close options`}),`: Click the close button, press Escape, or click outside the image`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Image counter`}),`: Shows current position (e.g., "2 / 5") when multiple images exist`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Captions`}),`: Displays image captions below the fullscreen image when provided`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Focus management`}),`: Returns focus to the triggering image when closing`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Image Content`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Always provide meaningful `,(0,d.jsx)(t.code,{children:`alt`}),` text for each image`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use the `,(0,d.jsx)(t.code,{children:`decorative`}),` prop on images that are purely visual`]}),`
`,(0,d.jsx)(t.li,{children:`Optimize image file sizes for faster loading`}),`
`,(0,d.jsxs)(t.li,{children:[`Add `,(0,d.jsx)(t.code,{children:`caption`}),` to images when enabling fullscreen for additional context`]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Layout Selection`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.strong,{children:`Grid`}),` for uniform collections where consistent sizing matters`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.strong,{children:`Masonry`}),` for images with varying aspect ratios`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.strong,{children:`Carousel`}),` for featured content or when horizontal space is limited`]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Fullscreen Mode`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Enable fullscreen for galleries where users benefit from viewing larger images`}),`
`,(0,d.jsx)(t.li,{children:`Provide high-resolution images when fullscreen is enabled`}),`
`,(0,d.jsx)(t.li,{children:`Use captions to give context about images in fullscreen view`}),`
`,(0,d.jsx)(t.li,{children:`Works with all layout modes (grid, masonry, carousel)`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Responsive Behavior`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Grid automatically reduces to 2 columns on mobile viewports`}),`
`,(0,d.jsx)(t.li,{children:`Masonry adapts from 1 to 3 columns across breakpoints`}),`
`,(0,d.jsx)(t.li,{children:`Carousel supports native touch scrolling on mobile devices`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Provide a descriptive `,(0,d.jsx)(t.code,{children:`label`}),` prop for screen readers`]}),`
`,(0,d.jsx)(t.li,{children:`Carousel navigation buttons are keyboard accessible via Tab, Enter, and Space`}),`
`,(0,d.jsx)(t.li,{children:`Navigation buttons are removed from the accessibility tree when hidden`}),`
`,(0,d.jsx)(t.li,{children:`Fullscreen viewer supports full keyboard navigation and focus management`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};