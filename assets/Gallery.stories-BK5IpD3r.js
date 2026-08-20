import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n,n as r}from"./iframe-BxXWrdMh.js";import{i,n as a,r as o,t as s}from"./Button-Cp9o0IfN.js";import{n as c,t as l}from"./icon-name-Cjfw6W7s.js";import{t as u}from"./get-class-name-ekH_fREr.js";import{n as d,t as f}from"./Image-nNvOKdjo.js";import{n as ee,t as p}from"./Portal-C8WCiyKa.js";import{n as m,t as te}from"./use-is-mounted-DOKmSfHF.js";import{n as ne,t as re}from"./use-key-press-CHx5PkOG.js";import{n as h,t as g}from"./use-modal-focus-trap-Ts6Am4fa.js";var _,v;function y(){return(y=e((()=>{a(),i(),c(),_=r(),v=({showPrev:e,showNext:t,onScrollBackward:n,onScrollForward:r})=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{view:o.Icon,icon:l.ChevronLeft,label:`Previous images`,className:`cl-gallery__button cl-gallery__button_prev`,onClick:n,style:{visibility:e?`visible`:`hidden`},"aria-hidden":!e}),(0,_.jsx)(s,{view:o.Icon,icon:l.ChevronRight,label:`Next images`,className:`cl-gallery__button cl-gallery__button_next`,onClick:r,style:{visibility:t?`visible`:`hidden`},"aria-hidden":!t})]});try{v.displayName=`CarouselNavigation`,v.__docgenInfo={description:``,displayName:`CarouselNavigation`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,methods:[],props:{showPrev:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`showPrev`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`boolean`}},showNext:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`showNext`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`boolean`}},onScrollBackward:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`onScrollBackward`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`() => void`}},onScrollForward:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`}],description:``,name:`onScrollForward`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/carousel-navigation/CarouselNavigation.tsx`,name:`CarouselNavigationProps`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}var b,ie;function ae(){return(ae=e((()=>{b=e=>{if(e.length===0)return;let t,n=0;for(let r of e){let e=r.descriptor?.trim();if(e?.endsWith(`w`)){let i=e.slice(0,-1),a=Number.parseInt(i,10);!Number.isNaN(a)&&a>n&&(n=a,t=r)}}return t??e.at(-1)},ie=e=>{let{caption:t,sources:n,...r}=e;if(n&&n.length>0){let e=b(n);if(e)return{...r,src:e.src,sources:void 0}}return{...r,sources:n}}})))()}var x,S;function C(){return(C=e((()=>{a(),i(),c(),x=r(),S=({onClose:e})=>(0,x.jsx)(s,{view:o.Icon,icon:l.X,label:`Close fullscreen view`,onClick:e,className:`cl-fullscreen-viewer__close-button`});try{S.displayName=`ViewerCloseButton`,S.__docgenInfo={description:``,displayName:`ViewerCloseButton`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,methods:[],props:{onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,name:`ViewerCloseButtonProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-close-button/ViewerCloseButton.tsx`,name:`ViewerCloseButtonProps`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{w=r(),T=({currentIndex:e,totalImages:t})=>t<=1?null:(0,w.jsxs)(`span`,{className:`cl-fullscreen-viewer__counter`,"aria-live":`polite`,children:[e+1,` / `,t]});try{T.displayName=`ViewerCounter`,T.__docgenInfo={description:``,displayName:`ViewerCounter`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,methods:[],props:{currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-counter/ViewerCounter.tsx`,name:`ViewerCounterProps`},required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var D,O;function oe(){return(oe=e((()=>{d(),D=r(),O=({fullscreenImageProps:e,caption:t})=>(0,D.jsx)(`div`,{className:`cl-fullscreen-viewer__image-container`,children:(0,D.jsx)(f,{...e,caption:t,loading:`eager`})});try{O.displayName=`ViewerImageContainer`,O.__docgenInfo={description:``,displayName:`ViewerImageContainer`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,methods:[],props:{fullscreenImageProps:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`}],description:``,name:`fullscreenImageProps`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`},required:!0,tags:{},type:{name:`Omit<ImageProps, "caption">`}},caption:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`}],description:``,name:`caption`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-image-container/ViewerImageContainer.tsx`,name:`ViewerImageContainerProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var k,A;function se(){return(se=e((()=>{a(),i(),c(),k=r(),A=({currentIndex:e,totalImages:t,onNavigate:n})=>{let r=e>0,i=e<t-1,a=()=>{n(e-1)},c=()=>{n(e+1)},d=u([`cl-fullscreen-viewer__nav-button`,`cl-fullscreen-viewer__nav-button_prev`]),f=u([`cl-fullscreen-viewer__nav-button`,`cl-fullscreen-viewer__nav-button_next`]);return(0,k.jsxs)(k.Fragment,{children:[r&&(0,k.jsx)(s,{view:o.Icon,icon:l.ChevronLeft,label:`Previous image`,onClick:a,className:d}),i&&(0,k.jsx)(s,{view:o.Icon,icon:l.ChevronRight,label:`Next image`,onClick:c,className:f})]})};try{A.displayName=`ViewerNavigation`,A.__docgenInfo={description:``,displayName:`ViewerNavigation`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,methods:[],props:{currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`number`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-navigation/ViewerNavigation.tsx`,name:`ViewerNavigationProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})))()}var j,M;function N(){return(N=e((()=>{E(),oe(),se(),j=r(),M=({fullscreenImageProps:e,caption:t,currentIndex:n,totalImages:r,onClose:i,onNavigate:a})=>(0,j.jsxs)(`div`,{className:`cl-fullscreen-viewer__overlay`,onClick:e=>{e.target===e.currentTarget&&i()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&e.target===e.currentTarget&&(e.preventDefault(),i())},"data-testid":`viewer-overlay`,children:[(0,j.jsx)(O,{fullscreenImageProps:e,caption:t}),(0,j.jsx)(T,{currentIndex:n,totalImages:r}),(0,j.jsx)(A,{currentIndex:n,totalImages:r,onNavigate:a})]});try{M.displayName=`ViewerOverlay`,M.__docgenInfo={description:``,displayName:`ViewerOverlay`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,methods:[],props:{fullscreenImageProps:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`fullscreenImageProps`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`Omit<ImageProps, "caption">`}},caption:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`caption`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!1,tags:{},type:{name:`string`}},currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`number`}},totalImages:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`totalImages`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`number`}},onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`() => void`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/viewer-overlay/ViewerOverlay.tsx`,name:`ViewerOverlayProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})))()}var P,F,I;function L(){return(L=e((()=>{ee(),te(),re(),g(),P=n(),ae(),C(),N(),F=r(),I=({images:e,currentIndex:t,isOpen:n,onClose:r,onNavigate:i})=>{let a=(0,P.useRef)(null),o=m(n,300),s=o&&!n;h({modalRef:a,isOpened:n}),ne({keyCode:`Escape`,ref:a,onKeyPress:r}),(0,P.useEffect)(()=>{let n=n=>{n.code===`ArrowLeft`&&t>0?i(t-1):n.code===`ArrowRight`&&t<e.length-1&&i(t+1)};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[t,e.length,i]);let c=e[t],l=(0,P.useMemo)(()=>c?ie(c):null,[c]);if(!o||!c||!l)return null;let d=u([`cl-fullscreen-viewer`,{"cl-fullscreen-viewer_closing":s}]);return(0,F.jsx)(p,{children:(0,F.jsxs)(`div`,{ref:a,className:d,"data-testid":`fullscreen-image-viewer`,children:[(0,F.jsx)(S,{onClose:r}),(0,F.jsx)(M,{fullscreenImageProps:l,caption:c.caption,currentIndex:t,totalImages:e.length,onClose:r,onNavigate:i})]})})};try{I.displayName=`FullscreenViewer`,I.__docgenInfo={description:``,displayName:`FullscreenViewer`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,methods:[],props:{images:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`images`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`ImageProps[]`}},currentIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`currentIndex`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`number`}},isOpen:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`isOpen`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`onClose`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`() => void`}},onNavigate:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`}],description:``,name:`onNavigate`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/full-screen-viewer/FullscreenViewer.tsx`,name:`FullscreenViewerProps`},required:!0,tags:{},type:{name:`(index: number) => void`}}},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{d(),R=r(),z=({item:e,index:t,enableFullscreen:n,onOpenViewer:r})=>{let i=u([`cl-gallery__item`,{"cl-gallery__item_fullscreen":n}]);return(0,R.jsx)(`div`,{className:i,onClick:e=>{n&&r&&r(t,e.currentTarget)},onKeyDown:e=>{n&&r&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r(t,e.currentTarget))},children:(0,R.jsx)(f,{...e})})};try{z.displayName=`GalleryImageItem`,z.__docgenInfo={description:``,displayName:`GalleryImageItem`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`item`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`ImageProps`}},index:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`index`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`number`}},enableFullscreen:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`enableFullscreen`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!0,tags:{},type:{name:`boolean`}},onOpenViewer:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`}],description:``,name:`onOpenViewer`,parent:{fileName:`chop-logic-components/src/components/organisms/gallery/gallery-image-item/GalleryImageItem.tsx`,name:`GalleryImageItemProps`},required:!1,tags:{},type:{name:`((index: number, element: HTMLElement) => void)`}}},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{V=n(),H=(e,t)=>{let[n,r]=(0,V.useState)(!1),[i,a]=(0,V.useState)(!1),o=(0,V.useCallback)(()=>{let t=e.current;if(!t)return;let{scrollLeft:n,scrollWidth:i,clientWidth:o}=t;if(i<=o){r(!1),a(!1);return}r(n>1),a(n<i-o-1)},[e]);return(0,V.useEffect)(()=>{if(t!==`carousel`){r(!1),a(!1);return}let n=e.current;if(!n)return;o();let i=new ResizeObserver(o);return i.observe(n),n.addEventListener(`scroll`,o),()=>{n.removeEventListener(`scroll`,o),i.disconnect()}},[t,e,o]),{showPrev:n,showNext:i,scrollForward:(0,V.useCallback)(()=>{let t=e.current;t&&t.scrollBy({left:t.clientWidth,behavior:`smooth`})},[e]),scrollBackward:(0,V.useCallback)(()=>{let t=e.current;t&&t.scrollBy({left:-t.clientWidth,behavior:`smooth`})},[e])}}})))()}var W,G;function ce(){return(ce=e((()=>{W=n(),G=()=>{let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(0),i=(0,W.useRef)(null);return{isViewerOpen:e,currentImageIndex:n,triggerRef:i,openViewer:(0,W.useCallback)((e,n)=>{i.current=n,r(e),t(!0)},[]),closeViewer:(0,W.useCallback)(()=>{t(!1),setTimeout(()=>{i.current?.focus(),i.current=null},300)},[]),handleNavigate:(0,W.useCallback)(e=>{r(e)},[])}}})))()}var K,q,J;function le(){return(le=e((()=>{K=n(),y(),L(),B(),U(),ce(),q=r(),J=({images:e=[],layout:t=`grid`,columns:n=3,rows:r,gap:i,label:a,className:o,title:s,enableFullscreen:c=!1,...l})=>{let d=(0,K.useRef)(null),{isViewerOpen:f,currentImageIndex:ee,openViewer:p,closeViewer:m,handleNavigate:te}=G(),{showPrev:ne,showNext:re,scrollForward:h,scrollBackward:g}=H(d,t),_=u([`cl-gallery`,o]),y=u([`cl-gallery__container`,{"cl-gallery__container_grid":t===`grid`},{"cl-gallery__container_masonry":t===`masonry`},{"cl-gallery__container_carousel":t===`carousel`}]),b={"--gallery-columns":n,"--gallery-rows":r,"--gallery-gap":i};return(0,q.jsxs)(`section`,{className:_,"aria-label":a??s??`Image gallery`,title:s,...l,children:[(0,q.jsx)(`div`,{ref:d,className:y,style:b,tabIndex:t===`carousel`?0:void 0,children:e.map((e,t)=>(0,q.jsx)(z,{item:e,index:t,enableFullscreen:c,onOpenViewer:p},e.src))}),t===`carousel`&&(0,q.jsx)(v,{showPrev:ne,showNext:re,onScrollBackward:g,onScrollForward:h}),c&&(0,q.jsx)(I,{images:e,currentIndex:ee,isOpen:f,onClose:m,onNavigate:te})]})};try{J.displayName=`Gallery`,J.__docgenInfo={description:``,displayName:`Gallery`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/gallery/Gallery.tsx`,methods:[],props:{images:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`images`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`ImageProps[]`}},layout:{defaultValue:{value:`grid`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`layout`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`enum`,raw:`GalleryMode`,value:[{value:`"grid"`},{value:`"masonry"`},{value:`"carousel"`}]}},columns:{defaultValue:{value:`3`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`columns`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`number`}},rows:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`rows`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`number`}},gap:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`gap`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`label`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`string`}},enableFullscreen:{defaultValue:{value:`false`},declarations:[{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`}],description:``,name:`enableFullscreen`,parent:{fileName:`chop-logic-components/src/types/gallery.ts`,name:`GalleryProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ue=t({Carousel:()=>Z,FullscreenCarousel:()=>Q,FullscreenGridWithResponsiveSources:()=>$,Grid:()=>Y,Masonry:()=>X,__namedExportsOrder:()=>fe,default:()=>de}),de,Y,X,Z,Q,$,fe;function pe(){return(pe=e((()=>{le(),de={component:J,title:`Organisms/Gallery`,argTypes:{images:{control:`object`,description:`Array of image items to display in the gallery`,table:{type:{summary:`GalleryItem[]`},defaultValue:{summary:`[]`},category:`Content`}},layout:{control:`radio`,options:[`grid`,`masonry`,`carousel`],description:`Layout mode for the gallery display`,table:{type:{summary:`'grid' | 'masonry' | 'carousel'`},defaultValue:{summary:`'grid'`},category:`Behavior`}},columns:{control:{type:`number`,min:1,max:12},description:`Number of columns (grid: 1-12, masonry: overrides responsive default)`,table:{type:{summary:`number`},defaultValue:{summary:`3`},category:`Behavior`}},rows:{control:`number`,description:`Maximum visible rows (grid mode only)`,table:{type:{summary:`number`},category:`Behavior`}},gap:{control:`text`,description:`CSS gap value between items (defaults to --cl-m-gap)`,table:{type:{summary:`string`},category:`Behavior`}},enableFullscreen:{control:`boolean`,description:`Enable fullscreen viewing mode when clicking images`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the root element`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the gallery`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`HTML title attribute for the root element`,table:{type:{summary:`string`},category:`Identification`}},label:{control:`text`,description:`Accessible label for the gallery region`,table:{type:{summary:`string`},defaultValue:{summary:`'Image gallery'`},category:`Accessibility`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{layout:`grid`,columns:3,images:[{src:`https://picsum.photos/seed/gallery1/400/300`,alt:`Sample image 1`},{src:`https://picsum.photos/seed/gallery2/400/300`,alt:`Sample image 2`},{src:`https://picsum.photos/seed/gallery3/400/300`,alt:`Sample image 3`},{src:`https://picsum.photos/seed/gallery4/400/300`,alt:`Sample image 4`},{src:`https://picsum.photos/seed/gallery5/400/300`,alt:`Sample image 5`},{src:`https://picsum.photos/seed/gallery6/400/300`,alt:`Sample image 6`}]}},Y={args:{layout:`grid`,columns:3},parameters:{docs:{description:{story:`Gallery in grid layout mode with uniform columns and rows.`}}}},X={args:{layout:`masonry`,images:[{src:`https://picsum.photos/seed/masonry1/400/500`,alt:`Tall image 1`},{src:`https://picsum.photos/seed/masonry2/400/250`,alt:`Short image 2`},{src:`https://picsum.photos/seed/masonry3/400/400`,alt:`Square image 3`},{src:`https://picsum.photos/seed/masonry4/400/350`,alt:`Medium image 4`},{src:`https://picsum.photos/seed/masonry5/400/600`,alt:`Tall image 5`},{src:`https://picsum.photos/seed/masonry6/400/300`,alt:`Standard image 6`}]},parameters:{docs:{description:{story:`Gallery in masonry layout mode with varying image heights packed tightly.`}}}},Z={args:{layout:`carousel`,images:[{src:`https://picsum.photos/seed/carousel1/600/400`,alt:`Carousel image 1`},{src:`https://picsum.photos/seed/carousel2/600/400`,alt:`Carousel image 2`},{src:`https://picsum.photos/seed/carousel3/600/400`,alt:`Carousel image 3`},{src:`https://picsum.photos/seed/carousel4/600/400`,alt:`Carousel image 4`},{src:`https://picsum.photos/seed/carousel5/600/400`,alt:`Carousel image 5`},{src:`https://picsum.photos/seed/carousel6/600/400`,alt:`Carousel image 6`}]},parameters:{docs:{description:{story:`Gallery in carousel layout mode with horizontal scrolling and navigation buttons.`}}}},Q={args:{layout:`carousel`,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/fsc1/800/500`,alt:`Featured slide 1`,caption:`Featured image one`},{src:`https://picsum.photos/seed/fsc2/800/500`,alt:`Featured slide 2`,caption:`Featured image two`},{src:`https://picsum.photos/seed/fsc3/800/500`,alt:`Featured slide 3`,caption:`Featured image three`},{src:`https://picsum.photos/seed/fsc4/800/500`,alt:`Featured slide 4`,caption:`Featured image four`},{src:`https://picsum.photos/seed/fsc5/800/500`,alt:`Featured slide 5`,caption:`Featured image five`}]},parameters:{docs:{description:{story:`Carousel gallery with fullscreen mode enabled. Combines horizontal scrolling with fullscreen viewing capability.`}}}},$={args:{layout:`grid`,columns:3,enableFullscreen:!0,images:[{src:`https://picsum.photos/seed/resp1/400/300`,alt:`Responsive image 1`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp1/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp1/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp1/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp1/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp2/400/300`,alt:`Responsive image 2`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp2/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp2/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp2/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp2/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp3/400/300`,alt:`Responsive image 3`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp3/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp3/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp3/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp3/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp4/400/300`,alt:`Responsive image 4`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp4/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp4/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp4/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp4/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp5/400/300`,alt:`Responsive image 5`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp5/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp5/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp5/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp5/1600/1200`,descriptor:`1600w`}]},{src:`https://picsum.photos/seed/resp6/400/300`,alt:`Responsive image 6`,caption:`Opens largest resolution (1600px) in fullscreen`,sources:[{src:`https://picsum.photos/seed/resp6/400/300`,descriptor:`400w`},{src:`https://picsum.photos/seed/resp6/800/600`,descriptor:`800w`},{src:`https://picsum.photos/seed/resp6/1200/900`,descriptor:`1200w`},{src:`https://picsum.photos/seed/resp6/1600/1200`,descriptor:`1600w`}]}]},parameters:{docs:{description:{story:`Gallery with responsive image sources. Thumbnails use browser-selected resolution based on viewport, while fullscreen mode automatically displays the largest available resolution (1600px width in this example). Open browser DevTools Network tab to verify the fullscreen view loads the highest resolution image.`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},fe=[`Grid`,`Masonry`,`Carousel`,`FullscreenCarousel`,`FullscreenGridWithResponsiveSources`]})))()}export{pe as n,ue as t};