import{j as o}from"./iframe-CcStb-xO.js";import"./Alert-tdHplwZJ.js";import"./Dialog-BLVfCpud.js";import{a as p}from"./Tabs-CcgrSf0X.js";const r=n=>o.jsx(p,{...n});try{r.displayName="GridExample",r.__docgenInfo={description:"",displayName:"GridExample",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const m={component:r,title:"Organisms/Grid"},e={args:{selectable:!1,renderDataItem:(n,a)=>a==="phone"?o.jsx("em",{children:n[a??""]}):o.jsx("span",{children:n[a]}),caption:"Contact List",columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}},t={args:{selectable:!0,onSelect:n=>console.log(n),columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selectable: false,
    renderDataItem: (item, field) => {
      return field === 'phone' ? <em>{item[field ?? ''] as string}</em> : <span>{item[field] as string}</span>;
    },
    caption: 'Contact List',
    columns: [{
      title: 'Company',
      field: 'company'
    }, {
      title: 'Contact',
      field: 'contact'
    }, {
      title: 'Country',
      field: 'country'
    }, {
      title: 'Phone',
      field: 'phone'
    }],
    data: [{
      id: 'row1',
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      phone: '123-345-7890'
    }, {
      id: 'row2',
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
      phone: '123-345-7890'
    }, {
      id: 'row3',
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
      phone: '123-345-7890'
    }, {
      id: 'row4',
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
      phone: '123-345-7890'
    }, {
      id: 'row5',
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
      phone: '123-345-7890'
    }, {
      id: 'row6',
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
      phone: '123-345-7890'
    }]
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,s,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelect: (ids: string[]) => console.log(ids),
    columns: [{
      title: 'Company',
      field: 'company'
    }, {
      title: 'Contact',
      field: 'contact'
    }, {
      title: 'Country',
      field: 'country'
    }, {
      title: 'Phone',
      field: 'phone'
    }],
    data: [{
      id: 'row1',
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      phone: '123-345-7890'
    }, {
      id: 'row2',
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
      phone: '123-345-7890'
    }, {
      id: 'row3',
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
      phone: '123-345-7890'
    }, {
      id: 'row4',
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
      phone: '123-345-7890'
    }, {
      id: 'row5',
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
      phone: '123-345-7890'
    }, {
      id: 'row6',
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
      phone: '123-345-7890'
    }]
  }
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const y=["DefaultGrid","SelectableGrid"],w=Object.freeze(Object.defineProperty({__proto__:null,DefaultGrid:e,SelectableGrid:t,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{w as C};
