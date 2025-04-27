import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as _,a as v}from"./ExampleGridContainer.styled-BnOlFqYo.js";import{d as i,u as x}from"./index-zGLxtP0c.js";import"./index-MPVjHJeJ.js";var r=(e=>(e.Dots="dots",e.Brackets="brackets",e.Linear="linear",e.Square="square",e.Circle="circle",e.Pulse="pulse",e.Arrow="arrow",e.Filler="filler",e.Rotation="rotation",e))(r||{});const l=i.span`
  width: 48px;
  height: 48px;
  border: ${e=>`3px solid ${e.$theme.fontColorLight}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: arrowRotation 1s linear infinite;

  &::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    left: 20px;
    top: 31px;
    border: 10px solid transparent;
    border-right-color: ${e=>e.$theme.fontColorLight};
    transform: rotate(-40deg);
  }

  @keyframes arrowRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;try{l.displayName="StyledArrowLoader",l.__docgenInfo={description:"",displayName:"StyledArrowLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const d=i.span`
  color: ${e=>e.$theme.fontColorLight};
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 78px;
  opacity: 0.8;

  &:before {
    content: '{';
    display: inline-block;
    animation: bracketsPulse 0.4s alternate infinite ease-in-out;
  }

  &:after {
    content: '}';
    display: inline-block;
    animation: bracketsPulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes bracketsPulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;try{d.displayName="StyledBracketsLoader",d.__docgenInfo={description:"",displayName:"StyledBracketsLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=i.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: circleRotateAnimation 1s linear infinite;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${e=>`5px solid ${e.$theme.fontColorLight}`};
    animation: circleClipAnimation 2s linear infinite;
  }

  @keyframes circleRotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes circleClipAnimation {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;try{s.displayName="StyledCircleLoader",s.__docgenInfo={description:"",displayName:"StyledCircleLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const p=i.span`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: dotsFadeOutAnimation 1.8s infinite ease-in-out;
  color: ${e=>e.$theme.fontColorLight};
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: dotsFadeOutAnimation 1.8s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }

  @keyframes dotsFadeOutAnimation {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;try{p.displayName="StyledDotsLoader",p.__docgenInfo={description:"",displayName:"StyledDotsLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const u=i.span`
  width: 48px;
  height: 48px;
  border: ${e=>`10px solid ${e.$theme.fontColorLight}`};
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    inset: -10px;
    border-radius: 50%;
    border: ${e=>`10px solid ${e.$theme.fontColorAccent}`};
    animation: prixClipFix 2s infinite linear;
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;try{u.displayName="StyledFillerLoader",u.__docgenInfo={description:"",displayName:"StyledFillerLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=i.span`
  display: block;
  position: relative;
  height: 12px;
  width: 80%;
  border: ${e=>`1px solid ${e.$theme.fontColorLight}`};
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    width: 40%;
    height: 100%;
    background: ${e=>e.$theme.fontColorAccent};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: linearLoaderAnimation 2s linear infinite;
  }

  @keyframes linearLoaderAnimation {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;try{m.displayName="StyledLinearLoader",m.__docgenInfo={description:"",displayName:"StyledLinearLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=i.span`
  width: 48px;
  height: 48px;
  border: ${e=>`5px solid ${e.$theme.fontColorLight}`};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: ${e=>`5px solid ${e.$theme.fontColorLight}`};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUpAnimation 1s linear infinite;
  }

  @keyframes scaleUpAnimation {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    60%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes pulse {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
  }
`;try{c.displayName="StyledPulseLoader",c.__docgenInfo={description:"",displayName:"StyledPulseLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const f=i.span`
  width: 64px;
  height: 64px;
  position: relative;
  background-image: ${e=>`linear-gradient(${e.$theme.fontColorLight} 16px, transparent 0), linear-gradient(${e.$theme.fontColorAccent} 16px, transparent 0),
      linear-gradient(${e.$theme.fontColorAccent} 16px, transparent 0), linear-gradient(${e.$theme.fontColorLight} 16px, transparent 0)`};
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position:
    left top,
    left bottom,
    right top,
    right bottom;
  animation: squaresRotateAnimation 1s linear infinite;

  @keyframes squaresRotateAnimation {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
`;try{f.displayName="StyledRotationLoader",f.__docgenInfo={description:"",displayName:"StyledRotationLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const y=i.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: ${e=>e.$theme.fontColorLight};
  box-sizing: border-box;
  animation: flipSquareAnimation 1s linear infinite;

  @keyframes flipSquareAnimation {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;try{y.displayName="StyledSquareLoader",y.__docgenInfo={description:"",displayName:"StyledSquareLoader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const $=({view:e,...o})=>{const a=x();switch(e){case r.Dots:return t.jsx(p,{$theme:a,...o});case r.Circle:return t.jsx(s,{$theme:a,...o});case r.Brackets:return t.jsx(d,{$theme:a,...o});case r.Linear:return t.jsx(m,{$theme:a,...o});case r.Pulse:return t.jsx(c,{$theme:a,...o});case r.Square:return t.jsx(y,{$theme:a,...o});case r.Arrow:return t.jsx(l,{$theme:a,...o});case r.Rotation:return t.jsx(f,{$theme:a,...o});case r.Filler:return t.jsx(u,{$theme:a,...o});default:return null}};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"dots"'},{value:'"brackets"'},{value:'"linear"'},{value:'"square"'},{value:'"circle"'},{value:'"pulse"'},{value:'"arrow"'},{value:'"filler"'},{value:'"rotation"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const q=()=>{const e=Object.values(r),o=x();return t.jsx(_,{$columns:3,children:e.map(a=>t.jsxs(v,{$theme:o,$size:"8rem",children:[t.jsx($,{view:a}),t.jsx("span",{children:a})]},a))})};try{Loaderexample.displayName="Loaderexample",Loaderexample.__docgenInfo={description:"",displayName:"Loaderexample",props:{view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"dots"'},{value:'"brackets"'},{value:'"linear"'},{value:'"square"'},{value:'"circle"'},{value:'"pulse"'},{value:'"arrow"'},{value:'"filler"'},{value:'"rotation"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Elements/Loader",component:q,argTypes:{view:{control:"select",options:Object.values(r)}}},n={};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const S=["LoaderGallery"],V=Object.freeze(Object.defineProperty({__proto__:null,LoaderGallery:n,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{V as C};
