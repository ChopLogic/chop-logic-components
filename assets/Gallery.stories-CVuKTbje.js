import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{n,t as r}from"./Gallery-cNnJ_Zqn.js";var i=e({Carousel:()=>c,FullscreenCarousel:()=>l,FullscreenGridWithResponsiveSources:()=>u,Grid:()=>o,Masonry:()=>s,__namedExportsOrder:()=>d,default:()=>a}),a,o,s,c,l,u,d,f=t((()=>{n(),a={component:r,title:`Organisms/Gallery`,argTypes:{images:{control:`object`,description:`Array of image items to display in the gallery`,table:{type:{summary:`GalleryItem[]`},defaultValue:{summary:`[]`},category:`Content`}},layout:{control:`radio`,options:[`grid`,`masonry`,`carousel`],description:`Layout mode for the gallery display`,table:{type:{summary:`'grid' | 'masonry' | 'carousel'`},defaultValue:{summary:`'grid'`},category:`Behavior`}},columns:{control:{type:`number`,min:1,max:12},description:`Number of columns (grid: 1-12, masonry: overrides responsive default)`,table:{type:{summary:`number`},defaultValue:{summary:`3`},category:`Behavior`}},rows:{control:`number`,description:`Maximum visible rows (grid mode only)`,table:{type:{summary:`number`},category:`Behavior`}},gap:{control:`text`,description:`CSS gap value between items (defaults to --cl-m-gap)`,table:{type:{summary:`string`},category:`Behavior`}},enableFullscreen:{control:`boolean`,description:`Enable fullscreen viewing mode when clicking images`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the root element`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the gallery`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`HTML title attribute for the root element`,table:{type:{summary:`string`},category:`Identification`}},label:{control:`text`,description:`Accessible label for the gallery region`,table:{type:{summary:`string`},defaultValue:{summary:`'Image gallery'`},category:`Accessibility`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{layout:`grid`,columns:3,images:[{src:`https://picsum.photos/seed/gallery1/400/300`,alt:`Sample image 1`},{src:`https://picsum.photos/seed/gallery2/400/300`,alt:`Sample image 2`},{src:`https://picsum.photos/seed/gallery3/400/300`,alt:`Sample image 3`},{src:`https://picsum.photos/seed/gallery4/400/300`,alt:`Sample image 4`},{src:`https://picsum.photos/seed/gallery5/400/300`,alt:`Sample image 5`},{src:`https://picsum.photos/seed/gallery6/400/300`,alt:`Sample image 6`}]}},o={args:{layout:`grid`,columns:3},parameters:{docs:{description:{story:`Gallery in grid layout mode with uniform columns and rows.`}}}},s={args:{layout:`masonry`,images:[{src:`https://picsum.photos/seed/masonry1/400/500`,alt:`Tall image 1`},{src:`https://picsum.photos/seed/masonry2/400/250`,alt:`Short image 2`},{src:`https://picsum.photos/seed/masonry3/400/400`,alt:`Square image 3`},{src:`https://picsum.photos/seed/masonry4/400/350`,alt:`Medium image 4`},{src:`https://picsum.photos/seed/masonry5/400/600`,alt:`Tall image 5`},{src:`https://picsum.photos/seed/masonry6/400/300`,alt:`Standard image 6`}]},parameters:{docs:{description:{story:`Gallery in masonry layout mode with varying image heights packed tightly.`}}}},c={args:{layout:`carousel`,images:[{src:`https://picsum.photos/seed/carousel1/600/400`,alt:`Carousel image 1`},{src:`https://picsum.photos/seed/carousel2/600/400`,alt:`Carousel image 2`},{src:`https://picsum.photos/seed/carousel3/600/400`,alt:`Carousel image 3`},{src:`https://picsum.photos/seed/carousel4/600/400`,alt:`Carousel image 4`},{src:`https://picsum.photos/seed/carousel5/600/400`,alt:`Carousel image 5`},{src:`https://picsum.photos/seed/carousel6/600/400`,alt:`Carousel image 6`}]},parameters:{docs:{description:{story:`Gallery in carousel layout mode with horizontal scrolling and navigation buttons.`}}}},l={args:{layout:`carousel`,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/fsc1/800/500`,alt:`Featured slide 1`,caption:`Featured image one`},{src:`https://picsum.photos/seed/fsc2/800/500`,alt:`Featured slide 2`,caption:`Featured image two`},{src:`https://picsum.photos/seed/fsc3/800/500`,alt:`Featured slide 3`,caption:`Featured image three`},{src:`https://picsum.photos/seed/fsc4/800/500`,alt:`Featured slide 4`,caption:`Featured image four`},{src:`https://picsum.photos/seed/fsc5/800/500`,alt:`Featured slide 5`,caption:`Featured image five`}]},parameters:{docs:{description:{story:`Carousel gallery with fullscreen mode enabled. Combines horizontal scrolling with fullscreen viewing capability.`}}}},u={args:{layout:`grid`,columns:3,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/resp1/400/300`,alt:`Responsive image 1`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp1/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp1/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp1/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp1/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp2/400/300`,alt:`Responsive image 2`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp2/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp2/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp2/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp2/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp3/400/300`,alt:`Responsive image 3`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp3/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp3/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp3/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp3/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp4/400/300`,alt:`Responsive image 4`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp4/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp4/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp4/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp4/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp5/400/300`,alt:`Responsive image 5`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp5/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp5/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp5/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp5/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp6/400/300`,alt:`Responsive image 6`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp6/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp6/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp6/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp6/1600/1200`,descriptor:`1600w`}]}]},parameters:{docs:{description:{story:`Gallery with responsive image sources. Thumbnails use browser-selected resolution based on viewport, while fullscreen mode automatically displays the largest available resolution (1600px width in this example). Open browser DevTools Network tab to verify the fullscreen view loads the highest resolution image.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in grid layout mode with uniform columns and rows.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'masonry',
    images: [{
      src: 'https://picsum.photos/seed/masonry1/400/500',
      alt: 'Tall image 1'
    }, {
      src: 'https://picsum.photos/seed/masonry2/400/250',
      alt: 'Short image 2'
    }, {
      src: 'https://picsum.photos/seed/masonry3/400/400',
      alt: 'Square image 3'
    }, {
      src: 'https://picsum.photos/seed/masonry4/400/350',
      alt: 'Medium image 4'
    }, {
      src: 'https://picsum.photos/seed/masonry5/400/600',
      alt: 'Tall image 5'
    }, {
      src: 'https://picsum.photos/seed/masonry6/400/300',
      alt: 'Standard image 6'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in masonry layout mode with varying image heights packed tightly.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'carousel',
    images: [{
      src: 'https://picsum.photos/seed/carousel1/600/400',
      alt: 'Carousel image 1'
    }, {
      src: 'https://picsum.photos/seed/carousel2/600/400',
      alt: 'Carousel image 2'
    }, {
      src: 'https://picsum.photos/seed/carousel3/600/400',
      alt: 'Carousel image 3'
    }, {
      src: 'https://picsum.photos/seed/carousel4/600/400',
      alt: 'Carousel image 4'
    }, {
      src: 'https://picsum.photos/seed/carousel5/600/400',
      alt: 'Carousel image 5'
    }, {
      src: 'https://picsum.photos/seed/carousel6/600/400',
      alt: 'Carousel image 6'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery in carousel layout mode with horizontal scrolling and navigation buttons.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'carousel',
    enableFullscreen: true,
    images: [{
      src: 'https://picsum.photos/seed/fsc1/800/500',
      alt: 'Featured slide 1',
      caption: 'Featured image one'
    }, {
      src: 'https://picsum.photos/seed/fsc2/800/500',
      alt: 'Featured slide 2',
      caption: 'Featured image two'
    }, {
      src: 'https://picsum.photos/seed/fsc3/800/500',
      alt: 'Featured slide 3',
      caption: 'Featured image three'
    }, {
      src: 'https://picsum.photos/seed/fsc4/800/500',
      alt: 'Featured slide 4',
      caption: 'Featured image four'
    }, {
      src: 'https://picsum.photos/seed/fsc5/800/500',
      alt: 'Featured slide 5',
      caption: 'Featured image five'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel gallery with fullscreen mode enabled. Combines horizontal scrolling with fullscreen viewing capability.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    enableFullscreen: true,
    images: [{
      src: 'https://picsum.photos/seed/resp1/400/300',
      alt: 'Responsive image 1',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp1/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp1/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp1/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp1/1600/1200',
        descriptor: '1600w'
      }]
    }, {
      src: 'https://picsum.photos/seed/resp2/400/300',
      alt: 'Responsive image 2',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp2/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp2/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp2/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp2/1600/1200',
        descriptor: '1600w'
      }]
    }, {
      src: 'https://picsum.photos/seed/resp3/400/300',
      alt: 'Responsive image 3',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp3/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp3/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp3/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp3/1600/1200',
        descriptor: '1600w'
      }]
    }, {
      src: 'https://picsum.photos/seed/resp4/400/300',
      alt: 'Responsive image 4',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp4/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp4/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp4/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp4/1600/1200',
        descriptor: '1600w'
      }]
    }, {
      src: 'https://picsum.photos/seed/resp5/400/300',
      alt: 'Responsive image 5',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp5/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp5/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp5/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp5/1600/1200',
        descriptor: '1600w'
      }]
    }, {
      src: 'https://picsum.photos/seed/resp6/400/300',
      alt: 'Responsive image 6',
      caption: 'Opens largest resolution (1600px) in fullscreen',
      sources: [{
        src: 'https://picsum.photos/seed/resp6/400/300',
        descriptor: '400w'
      }, {
        src: 'https://picsum.photos/seed/resp6/800/600',
        descriptor: '800w'
      }, {
        src: 'https://picsum.photos/seed/resp6/1200/900',
        descriptor: '1200w'
      }, {
        src: 'https://picsum.photos/seed/resp6/1600/1200',
        descriptor: '1600w'
      }]
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery with responsive image sources. Thumbnails use browser-selected resolution based on viewport, while fullscreen mode automatically displays the largest available resolution (1600px width in this example). Open browser DevTools Network tab to verify the fullscreen view loads the highest resolution image.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Grid`,`Masonry`,`Carousel`,`FullscreenCarousel`,`FullscreenGridWithResponsiveSources`]}));f();export{c as Carousel,l as FullscreenCarousel,u as FullscreenGridWithResponsiveSources,o as Grid,s as Masonry,d as __namedExportsOrder,a as default,f as n,i as t};