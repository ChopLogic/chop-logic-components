import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DXmbNyiQ.js";import{n as i}from"./iframe-GVW8GZpo.js";import{m as a,t as o,u as s}from"./enums-Ce7QlA98.js";import{t as c}from"./get-class-name-CMT6QfxQ.js";import{t as l}from"./utils-DcY2ZVvP.js";import{a as u,g as d,v as f}from"./Avatar-A_O3UPio.js";import{t as p}from"./Portal-CviI-6xq.js";import{d as m,l as h,s as g,t as _}from"./hooks-C84JjOmG.js";var v=t((()=>{})),y,b,x=t((()=>{u(),o(),v(),y=i(),b=({showPrev:e,showNext:t,onScrollBackward:n,onScrollForward:r})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{view:a.Icon,icon:s.ChevronLeft,label:`Previous images`,className:`cl-gallery__button cl-gallery__button_prev`,onClick:n,style:{visibility:e?`visible`:`hidden`},"aria-hidden":!e}),(0,y.jsx)(f,{view:a.Icon,icon:s.ChevronRight,label:`Next images`,className:`cl-gallery__button cl-gallery__button_next`,onClick:r,style:{visibility:t?`visible`:`hidden`},"aria-hidden":!t})]});try{b.displayName=`CarouselNavigation`,b.__docgenInfo={description:``,displayName:`CarouselNavigation`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,methods:[],props:{showPrev:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`showPrev`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`boolean`}},showNext:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`showNext`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`boolean`}},onScrollBackward:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`onScrollBackward`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`() => void`}},onScrollForward:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`onScrollForward`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})),S=t((()=>{})),C,w,ee=t((()=>{C=e=>{if(e.length===0)return;let t,n=0;for(let r of e){let e=r.descriptor?.trim();if(e?.endsWith(`w`)){let i=e.slice(0,-1),a=Number.parseInt(i,10);!Number.isNaN(a)&&a>n&&(n=a,t=r)}}return t??e.at(-1)},w=e=>{let{caption:t,sources:n,...r}=e;if(n&&n.length>0){let e=C(n);if(e)return{...r,src:e.src,sources:void 0}}return{...r,sources:n}}})),te=t((()=>{})),T,E,ne=t((()=>{u(),o(),te(),T=i(),E=({onClose:e})=>(0,T.jsx)(f,{view:a.Icon,icon:s.X,label:`Close fullscreen view`,onClick:e,className:`cl-fullscreen-viewer__close-button`});try{E.displayName=`ViewerCloseButton`,E.__docgenInfo={description:``,displayName:`ViewerCloseButton`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,methods:[],props:{onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,name:`ViewerCloseButtonProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,name:`ViewerCloseButtonProps`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})),re=t((()=>{})),D,O,ie=t((()=>{re(),D=i(),O=({currentIndex:e,totalImages:t})=>t<=1?null:(0,D.jsxs)(`span`,{className:`cl-fullscreen-viewer__counter`,"aria-live":`polite`,children:[e+1,` / `,t]});try{O.displayName=`ViewerCounter`,O.__docgenInfo={description:``,displayName:`ViewerCounter`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,methods:[],props:{currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`},required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),ae=t((()=>{})),k,A,oe=t((()=>{u(),ae(),k=i(),A=({fullscreenImageProps:e,caption:t})=>(0,k.jsx)(`div`,{className:`cl-fullscreen-viewer__image-container`,children:(0,k.jsx)(d,{...e,caption:t,loading:`eager`})});try{A.displayName=`ViewerImageContainer`,A.__docgenInfo={description:``,displayName:`ViewerImageContainer`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,methods:[],props:{fullscreenImageProps:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`}],description:``,name:`fullscreenImageProps`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`},required:!0,tags:{},type:{name:`Omit<ImageProps, "caption">`}},caption:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`}],description:``,name:`caption`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),se=t((()=>{})),j,M,ce=t((()=>{u(),o(),l(),se(),j=i(),M=({currentIndex:e,totalImages:t,onNavigate:n})=>{let r=e>0,i=e<t-1,o=()=>{n(e-1)},l=()=>{n(e+1)},u=c([`cl-fullscreen-viewer__nav-button`,`cl-fullscreen-viewer__nav-button_prev`]),d=c([`cl-fullscreen-viewer__nav-button`,`cl-fullscreen-viewer__nav-button_next`]);return(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)(f,{view:a.Icon,icon:s.ChevronLeft,label:`Previous image`,onClick:o,className:u}),i&&(0,j.jsx)(f,{view:a.Icon,icon:s.ChevronRight,label:`Next image`,onClick:l,className:d})]})};try{M.displayName=`ViewerNavigation`,M.__docgenInfo={description:``,displayName:`ViewerNavigation`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,methods:[],props:{currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`number`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})),le=t((()=>{})),N,P,ue=t((()=>{ie(),oe(),ce(),le(),N=i(),P=({fullscreenImageProps:e,caption:t,currentIndex:n,totalImages:r,onClose:i,onNavigate:a})=>(0,N.jsxs)(`div`,{className:`cl-fullscreen-viewer__overlay`,onClick:e=>{e.target===e.currentTarget&&i()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&e.target===e.currentTarget&&(e.preventDefault(),i())},"data-testid":`viewer-overlay`,children:[(0,N.jsx)(A,{fullscreenImageProps:e,caption:t}),(0,N.jsx)(O,{currentIndex:n,totalImages:r}),(0,N.jsx)(M,{currentIndex:n,totalImages:r,onNavigate:a})]});try{P.displayName=`ViewerOverlay`,P.__docgenInfo={description:``,displayName:`ViewerOverlay`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,methods:[],props:{fullscreenImageProps:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`fullscreenImageProps`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`Omit<ImageProps, "caption">`}},caption:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`caption`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!1,tags:{},type:{name:`string`}},currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`number`}},onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`() => void`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})),F,I,L,de=t((()=>{u(),_(),l(),F=e(r(),1),S(),ee(),ne(),ue(),I=i(),L=({images:e,currentIndex:t,isOpen:n,onClose:r,onNavigate:i})=>{let a=(0,F.useRef)(null),o=m(n,300),s=o&&!n;g({modalRef:a,isOpened:n}),h({keyCode:`Escape`,ref:a,onKeyPress:r}),(0,F.useEffect)(()=>{let n=n=>{n.code===`ArrowLeft`&&t>0?i(t-1):n.code===`ArrowRight`&&t<e.length-1&&i(t+1)};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[t,e.length,i]);let l=e[t],u=(0,F.useMemo)(()=>l?w(l):null,[l]);return!o||!l||!u?null:(0,I.jsx)(p,{children:(0,I.jsxs)(`div`,{ref:a,className:c([`cl-fullscreen-viewer`,{"cl-fullscreen-viewer_closing":s}]),"data-testid":`fullscreen-image-viewer`,children:[(0,I.jsx)(E,{onClose:r}),(0,I.jsx)(P,{fullscreenImageProps:u,caption:l.caption,currentIndex:t,totalImages:e.length,onClose:r,onNavigate:i})]})})};try{L.displayName=`FullscreenViewer`,L.__docgenInfo={description:``,displayName:`FullscreenViewer`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,methods:[],props:{images:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`images`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`ImageProps[]`}},currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`number`}},isOpen:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`isOpen`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`() => void`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})),fe=t((()=>{})),pe=t((()=>{})),R,z,me=t((()=>{u(),l(),pe(),R=i(),z=({item:e,index:t,enableFullscreen:n,onOpenViewer:r})=>{let i=c([`cl-gallery__item`,{"cl-gallery__item_fullscreen":n}]);return(0,R.jsx)(`div`,{className:i,onClick:e=>{n&&r&&r(t,e.currentTarget)},onKeyDown:e=>{n&&r&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r(t,e.currentTarget))},children:(0,R.jsx)(d,{...e})})};try{z.displayName=`GalleryImageItem`,z.__docgenInfo={description:``,displayName:`GalleryImageItem`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`item`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`ImageProps`}},index:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`index`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`number`}},enableFullscreen:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`enableFullscreen`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`boolean`}},onOpenViewer:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`onOpenViewer`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!1,tags:{},type:{name:`((index: number, element: HTMLElement) => void)`}}},tags:{}}}catch{}})),B,V,he=t((()=>{B=e(r(),1),V=(e,t)=>{let[n,r]=(0,B.useState)(!1),[i,a]=(0,B.useState)(!1),o=(0,B.useCallback)(()=>{let t=e.current;if(!t)return;let{scrollLeft:n,scrollWidth:i,clientWidth:o}=t;if(i<=o){r(!1),a(!1);return}r(n>1),a(n<i-o-1)},[e]);return(0,B.useEffect)(()=>{if(t!==`carousel`){r(!1),a(!1);return}let n=e.current;if(!n)return;o();let i=new ResizeObserver(o);return i.observe(n),n.addEventListener(`scroll`,o),()=>{n.removeEventListener(`scroll`,o),i.disconnect()}},[t,e,o]),{showPrev:n,showNext:i,scrollForward:(0,B.useCallback)(()=>{let t=e.current;t&&t.scrollBy({left:t.clientWidth,behavior:`smooth`})},[e]),scrollBackward:(0,B.useCallback)(()=>{let t=e.current;t&&t.scrollBy({left:-t.clientWidth,behavior:`smooth`})},[e])}}})),H,U,ge=t((()=>{H=e(r(),1),U=()=>{let[e,t]=(0,H.useState)(!1),[n,r]=(0,H.useState)(0),i=(0,H.useRef)(null);return{isViewerOpen:e,currentImageIndex:n,triggerRef:i,openViewer:(0,H.useCallback)((e,n)=>{i.current=n,r(e),t(!0)},[]),closeViewer:(0,H.useCallback)(()=>{t(!1),setTimeout(()=>{i.current?.focus(),i.current=null},300)},[]),handleNavigate:(0,H.useCallback)(e=>{r(e)},[])}}})),W,G,K,_e=t((()=>{l(),W=e(r(),1),x(),de(),fe(),me(),he(),ge(),G=i(),K=({images:e=[],layout:t=`grid`,columns:n=3,rows:r,gap:i,label:a,className:o,title:s,enableFullscreen:l=!1,...u})=>{let d=(0,W.useRef)(null),{isViewerOpen:f,currentImageIndex:p,openViewer:m,closeViewer:h,handleNavigate:g}=U(),{showPrev:_,showNext:v,scrollForward:y,scrollBackward:x}=V(d,t),S=c([`cl-gallery`,o]),C=c([`cl-gallery__container`,{"cl-gallery__container_grid":t===`grid`},{"cl-gallery__container_masonry":t===`masonry`},{"cl-gallery__container_carousel":t===`carousel`}]),w={"--gallery-columns":n,"--gallery-rows":r,"--gallery-gap":i};return(0,G.jsxs)(`section`,{className:S,"aria-label":a??s??`Image gallery`,title:s,...u,children:[(0,G.jsx)(`div`,{ref:d,className:C,style:w,tabIndex:t===`carousel`?0:void 0,children:e.map((e,t)=>(0,G.jsx)(z,{item:e,index:t,enableFullscreen:l,onOpenViewer:m},e.src))}),t===`carousel`&&(0,G.jsx)(b,{showPrev:_,showNext:v,onScrollBackward:x,onScrollForward:y}),l&&(0,G.jsx)(L,{images:e,currentIndex:p,isOpen:f,onClose:h,onNavigate:g})]})};try{K.displayName=`Gallery`,K.__docgenInfo={description:``,displayName:`Gallery`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/Gallery.tsx`,methods:[],props:{images:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`images`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`ImageProps[]`}},layout:{defaultValue:{value:`grid`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`layout`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`enum`,raw:`GalleryMode`,value:[{value:`"grid"`},{value:`"masonry"`},{value:`"carousel"`}]}},columns:{defaultValue:{value:`3`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`columns`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`number`}},rows:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`rows`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`number`}},gap:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`gap`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`label`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`string`}},enableFullscreen:{defaultValue:{value:`false`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`enableFullscreen`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),ve=n({Carousel:()=>X,FullscreenCarousel:()=>Z,FullscreenGridWithResponsiveSources:()=>Q,Grid:()=>J,Masonry:()=>Y,__namedExportsOrder:()=>$,default:()=>q}),q,J,Y,X,Z,Q,$,ye=t((()=>{_e(),q={component:K,title:`Organisms/Gallery`,argTypes:{images:{control:`object`,description:`Array of image items to display in the gallery`,table:{type:{summary:`GalleryItem[]`},defaultValue:{summary:`[]`},category:`Content`}},layout:{control:`radio`,options:[`grid`,`masonry`,`carousel`],description:`Layout mode for the gallery display`,table:{type:{summary:`'grid' | 'masonry' | 'carousel'`},defaultValue:{summary:`'grid'`},category:`Behavior`}},columns:{control:{type:`number`,min:1,max:12},description:`Number of columns (grid: 1-12, masonry: overrides responsive default)`,table:{type:{summary:`number`},defaultValue:{summary:`3`},category:`Behavior`}},rows:{control:`number`,description:`Maximum visible rows (grid mode only)`,table:{type:{summary:`number`},category:`Behavior`}},gap:{control:`text`,description:`CSS gap value between items (defaults to --cl-m-gap)`,table:{type:{summary:`string`},category:`Behavior`}},enableFullscreen:{control:`boolean`,description:`Enable fullscreen viewing mode when clicking images`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the root element`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the gallery`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`HTML title attribute for the root element`,table:{type:{summary:`string`},category:`Identification`}},label:{control:`text`,description:`Accessible label for the gallery region`,table:{type:{summary:`string`},defaultValue:{summary:`'Image gallery'`},category:`Accessibility`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{layout:`grid`,columns:3,images:[{src:`https://picsum.photos/seed/gallery1/400/300`,alt:`Sample image 1`},{src:`https://picsum.photos/seed/gallery2/400/300`,alt:`Sample image 2`},{src:`https://picsum.photos/seed/gallery3/400/300`,alt:`Sample image 3`},{src:`https://picsum.photos/seed/gallery4/400/300`,alt:`Sample image 4`},{src:`https://picsum.photos/seed/gallery5/400/300`,alt:`Sample image 5`},{src:`https://picsum.photos/seed/gallery6/400/300`,alt:`Sample image 6`}]}},J={args:{layout:`grid`,columns:3},parameters:{docs:{description:{story:`Gallery in grid layout mode with uniform columns and rows.`}}}},Y={args:{layout:`masonry`,images:[{src:`https://picsum.photos/seed/masonry1/400/500`,alt:`Tall image 1`},{src:`https://picsum.photos/seed/masonry2/400/250`,alt:`Short image 2`},{src:`https://picsum.photos/seed/masonry3/400/400`,alt:`Square image 3`},{src:`https://picsum.photos/seed/masonry4/400/350`,alt:`Medium image 4`},{src:`https://picsum.photos/seed/masonry5/400/600`,alt:`Tall image 5`},{src:`https://picsum.photos/seed/masonry6/400/300`,alt:`Standard image 6`}]},parameters:{docs:{description:{story:`Gallery in masonry layout mode with varying image heights packed tightly.`}}}},X={args:{layout:`carousel`,images:[{src:`https://picsum.photos/seed/carousel1/600/400`,alt:`Carousel image 1`},{src:`https://picsum.photos/seed/carousel2/600/400`,alt:`Carousel image 2`},{src:`https://picsum.photos/seed/carousel3/600/400`,alt:`Carousel image 3`},{src:`https://picsum.photos/seed/carousel4/600/400`,alt:`Carousel image 4`},{src:`https://picsum.photos/seed/carousel5/600/400`,alt:`Carousel image 5`},{src:`https://picsum.photos/seed/carousel6/600/400`,alt:`Carousel image 6`}]},parameters:{docs:{description:{story:`Gallery in carousel layout mode with horizontal scrolling and navigation buttons.`}}}},Z={args:{layout:`carousel`,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/fsc1/800/500`,alt:`Featured slide 1`,caption:`Featured image one`},{src:`https://picsum.photos/seed/fsc2/800/500`,alt:`Featured slide 2`,caption:`Featured image two`},{src:`https://picsum.photos/seed/fsc3/800/500`,alt:`Featured slide 3`,caption:`Featured image three`},{src:`https://picsum.photos/seed/fsc4/800/500`,alt:`Featured slide 4`,caption:`Featured image four`},{src:`https://picsum.photos/seed/fsc5/800/500`,alt:`Featured slide 5`,caption:`Featured image five`}]},parameters:{docs:{description:{story:`Carousel gallery with fullscreen mode enabled. Combines horizontal scrolling with fullscreen viewing capability.`}}}},Q={args:{layout:`grid`,columns:3,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/resp1/400/300`,alt:`Responsive image 1`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp1/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp1/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp1/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp1/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp2/400/300`,alt:`Responsive image 2`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp2/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp2/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp2/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp2/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp3/400/300`,alt:`Responsive image 3`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp3/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp3/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp3/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp3/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp4/400/300`,alt:`Responsive image 4`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp4/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp4/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp4/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp4/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp5/400/300`,alt:`Responsive image 5`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp5/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp5/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp5/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp5/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp6/400/300`,alt:`Responsive image 6`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp6/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp6/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp6/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp6/1600/1200`,descriptor:`1600w`}]}]},parameters:{docs:{description:{story:`Gallery with responsive image sources. Thumbnails use browser-selected resolution based on viewport, while fullscreen mode automatically displays the largest available resolution (1600px width in this example). Open browser DevTools Network tab to verify the fullscreen view loads the highest resolution image.`}}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Grid`,`Masonry`,`Carousel`,`FullscreenCarousel`,`FullscreenGridWithResponsiveSources`]}));ye();export{X as Carousel,Z as FullscreenCarousel,Q as FullscreenGridWithResponsiveSources,J as Grid,Y as Masonry,$ as __namedExportsOrder,q as default,ye as n,ve as t};