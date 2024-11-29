import { j as a } from './jsx-runtime-OAISXtky.js';
import './Button--7gU6zvB.js';
import './Checkbox-CLF59sww.js';
import './MultiSelect-D4Q7nsBa.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import { d as m } from './Tabs-CmX9zseh.js';
const o = (n) =>
  a.jsx('div', {
    style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '2rem' },
    children: a.jsx(m, { ...n }),
  });
try {
  (o.displayName = 'GridExample'),
    (o.__docgenInfo = {
      description: '',
      displayName: 'GridExample',
      props: {
        id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
        tabIndex: { defaultValue: null, description: '', name: 'tabIndex', required: !1, type: { name: 'number' } },
        title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
        theme: {
          defaultValue: null,
          description: '',
          name: 'theme',
          required: !1,
          type: { name: 'enum', value: [{ value: '"dark"' }, { value: '"light"' }] },
        },
        columns: { defaultValue: null, description: '', name: 'columns', required: !0, type: { name: 'ChopLogicGridColumn[]' } },
        data: { defaultValue: null, description: '', name: 'data', required: !0, type: { name: 'ChopLogicGridItem[]' } },
        caption: { defaultValue: null, description: '', name: 'caption', required: !1, type: { name: 'string' } },
        selectable: { defaultValue: null, description: '', name: 'selectable', required: !1, type: { name: 'boolean' } },
        renderDataItem: {
          defaultValue: null,
          description: '',
          name: 'renderDataItem',
          required: !1,
          type: { name: 'RenderDataItemCallback' },
        },
        onSelect: { defaultValue: null, description: '', name: 'onSelect', required: !1, type: { name: '((ids: string[]) => void)' } },
      },
    });
} catch {}
const p = { component: o, title: 'Containers/Grid' },
  e = {
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
    args: {
      selectable: !1,
      renderDataItem: (n, u) => a.jsx('em', { children: n[u ?? ''] }),
      caption: 'Contact List',
      columns: [
        { title: 'Company', field: 'company' },
        { title: 'Contact', field: 'contact' },
        { title: 'Country', field: 'country' },
        { title: 'Phone', field: 'phone' },
      ],
      data: [
        { id: 'row1', company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany', phone: '123-345-7890' },
        { id: 'row2', company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico', phone: '123-345-7890' },
        { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
        { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
        { id: 'row5', company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada', phone: '123-345-7890' },
        { id: 'row6', company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy', phone: '123-345-7890' },
      ],
      theme: 'light',
    },
  },
  t = {
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
    args: {
      selectable: !0,
      onSelect: (n) => console.log(n),
      columns: [
        { title: 'Company', field: 'company', highlighted: !0 },
        { title: 'Contact', field: 'contact' },
        { title: 'Country', field: 'country' },
        { title: 'Phone', field: 'phone' },
      ],
      data: [
        { id: 'row1', company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany', phone: '123-345-7890' },
        { id: 'row2', company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico', phone: '123-345-7890' },
        { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
        { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
        { id: 'row5', company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada', phone: '123-345-7890' },
        { id: 'row6', company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy', phone: '123-345-7890' },
      ],
      theme: 'light',
    },
  };
var i, r, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((i = e.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  },
  args: {
    selectable: false,
    renderDataItem: (item, field) => <em>{item[field ?? ''] as string}</em>,
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
    }],
    theme: 'light'
  }
}`,
      ...((c = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : c.source),
    },
  },
};
var l, d, s;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((l = t.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  },
  args: {
    selectable: true,
    onSelect: (ids: string[]) => console.log(ids),
    columns: [{
      title: 'Company',
      field: 'company',
      highlighted: true
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
    }],
    theme: 'light'
  }
}`,
      ...((s = (d = t.parameters) == null ? void 0 : d.docs) == null ? void 0 : s.source),
    },
  },
};
const y = ['DefaultGrid', 'SelectableGrid'],
  I = Object.freeze(
    Object.defineProperty({ __proto__: null, DefaultGrid: e, SelectableGrid: t, __namedExportsOrder: y, default: p }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { I as C, e as D };
