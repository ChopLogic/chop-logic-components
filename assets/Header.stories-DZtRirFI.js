var l=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(a,e,r)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,s=(a,e)=>{for(var r in e||(e={}))h.call(e,r)&&c(a,r,e[r]);if(i)for(var r of i(e))f.call(e,r)&&c(a,r,e[r]);return a},t=(a,e)=>p(a,u(e));import{I as g}from"./Icon-Coy0pRmj.js";import{H}from"./Header-Dadw88w1.js";const _={title:"Atoms/Header",component:H},o={args:{as:"h1",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit",icon:g.Home,className:"header-class",id:"header-id"}};var n,d,m;o.parameters=t(s({},o.parameters),{docs:t(s({},(n=o.parameters)==null?void 0:n.docs),{source:s({originalSource:`{
  args: {
    as: 'h1',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    icon: IconName.Home,
    className: 'header-class',
    id: 'header-id'
  }
}`},(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source)})});const N=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{O as H};
