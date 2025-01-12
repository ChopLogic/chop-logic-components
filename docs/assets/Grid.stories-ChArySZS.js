import{j as o}from"./jsx-runtime-OAISXtky.js";import{f as u}from"./Tabs-CZLv0X1q.js";import"./Checkbox-DgGf2ViF.js";import"./MultiSelect-oZebdWXV.js";import"./NumericInput-340RyIj6.js";import"./Select-CgDztdXW.js";import"./TextInput-k1kqE6W_.js";const p=n=>o.jsx(u,{...n});try{Gridexample.displayName="Gridexample",Gridexample.__docgenInfo={description:"",displayName:"Gridexample",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const m={component:p,title:"Containers/Grid"},e={args:{selectable:!1,renderDataItem:(n,a)=>a==="phone"?o.jsx("em",{children:n[a??""]}):o.jsx("span",{children:n[a]}),caption:"Contact List",columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}},t={args:{selectable:!0,onSelect:n=>console.log(n),columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}};var r,i,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const y=["DefaultGrid","SelectableGrid"],x=Object.freeze(Object.defineProperty({__proto__:null,DefaultGrid:e,SelectableGrid:t,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{x as C};
