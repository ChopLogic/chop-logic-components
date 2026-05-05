import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n}from"./iframe-y9k1Z_t0.js";import{i as r,t as i}from"./organisms-DceeLW7B.js";var a,o,s=e((()=>{i(),a=n(),o=e=>(0,a.jsx)(r,{...e});try{o.displayName=`GridExample`,o.__docgenInfo={description:``,displayName:`GridExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/grid/__docs__/Grid.example.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`columns`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!0,tags:{},type:{name:`GridColumn[]`}},data:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`data`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!0,tags:{},type:{name:`GridItem[]`}},caption:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`caption`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!1,tags:{},type:{name:`string`}},selectable:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`selectable`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!1,tags:{},type:{name:`boolean`}},renderDataItem:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`renderDataItem`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!1,tags:{},type:{name:`RenderDataItemCallback`}},onSelect:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`}],description:``,name:`onSelect`,parent:{fileName:`chop-logic-components/src/types/grid.ts`,name:`GridProps`},required:!1,tags:{},type:{name:`((ids: string[]) => void)`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),c=t({DefaultGrid:()=>d,SelectableGrid:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p,m=e((()=>{s(),l=n(),u={component:o,title:`Organisms/Grid`,argTypes:{data:{control:`object`,description:`Array of data items to display in the grid`,table:{type:{summary:`Record<string, any>[]`},category:`Content`}},columns:{control:`object`,description:`Array of column definitions for the grid`,table:{type:{summary:`GridColumn[]`},category:`Content`}},caption:{control:`text`,description:`Optional caption/title for the grid`,table:{type:{summary:`string`},category:`Content`}},selectable:{control:`boolean`,description:`Whether rows can be selected`,table:{type:{summary:`boolean`},category:`Behavior`}},renderDataItem:{control:`object`,description:`Custom render function for grid cells`,table:{type:{summary:`(item: Record<string, any>, field: string) => ReactNode`},category:`Behavior`}},onSelect:{action:`selected`,description:`Callback function when rows are selected`,table:{type:{summary:`(ids: string[]) => void`},category:`Interaction`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the grid`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the grid`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`Accessibility title for the grid`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}}},d={args:{selectable:!1,renderDataItem:(e,t)=>t===`phone`?(0,l.jsx)(`em`,{children:e[t??``]}):(0,l.jsx)(`span`,{children:e[t]}),caption:`Contact List`,columns:[{title:`Company`,field:`company`},{title:`Contact`,field:`contact`},{title:`Country`,field:`country`},{title:`Phone`,field:`phone`}],data:[{id:`row1`,company:`Alfreds Futterkiste`,contact:`Maria Anders`,country:`Germany`,phone:`123-345-7890`},{id:`row2`,company:`Centro comercial Moctezuma`,contact:`Francisco Chang`,country:`Mexico`,phone:`123-345-7890`},{id:`row3`,company:`Ernst Handel`,contact:`Roland Mendel`,country:`Austria`,phone:`123-345-7890`},{id:`row4`,company:`Island Trading`,contact:`Helen Bennett`,country:`UK`,phone:`123-345-7890`},{id:`row5`,company:`Laughing Bacchus Winecellars`,contact:`Yoshi Tannamuri`,country:`Canada`,phone:`123-345-7890`},{id:`row6`,company:`Magazzini Alimentari Riuniti`,contact:`Giovanni Rovelli`,country:`Italy`,phone:`123-345-7890`}]}},f={args:{selectable:!0,onSelect:e=>console.log(e),columns:[{title:`Company`,field:`company`},{title:`Contact`,field:`contact`},{title:`Country`,field:`country`},{title:`Phone`,field:`phone`}],data:[{id:`row1`,company:`Alfreds Futterkiste`,contact:`Maria Anders`,country:`Germany`,phone:`123-345-7890`},{id:`row2`,company:`Centro comercial Moctezuma`,contact:`Francisco Chang`,country:`Mexico`,phone:`123-345-7890`},{id:`row3`,company:`Ernst Handel`,contact:`Roland Mendel`,country:`Austria`,phone:`123-345-7890`},{id:`row4`,company:`Island Trading`,contact:`Helen Bennett`,country:`UK`,phone:`123-345-7890`},{id:`row5`,company:`Laughing Bacchus Winecellars`,contact:`Yoshi Tannamuri`,country:`Canada`,phone:`123-345-7890`},{id:`row6`,company:`Magazzini Alimentari Riuniti`,contact:`Giovanni Rovelli`,country:`Italy`,phone:`123-345-7890`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultGrid`,`SelectableGrid`]}));m();export{d as DefaultGrid,f as SelectableGrid,p as __namedExportsOrder,u as default,m as n,c as t};