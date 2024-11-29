import { C as n } from './get-chop-logic-theme-C9Q9v90u.js';
import { j as o } from './jsx-runtime-OAISXtky.js';
import { C as f } from './Button--7gU6zvB.js';
const g = (l) =>
  o.jsx('div', {
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' },
    children: o.jsx(f, { ...l }),
  });
try {
  (ButtonExample.displayName = 'ButtonExample'),
    (ButtonExample.__docgenInfo = {
      description: '',
      displayName: 'ButtonExample',
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
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !1, type: { name: 'string' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: null, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
        onClick: {
          defaultValue: null,
          description: '',
          name: 'onClick',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLButtonElement>' },
        },
        view: {
          defaultValue: null,
          description: '',
          name: 'view',
          required: !1,
          type: { name: 'enum', value: [{ value: '"icon"' }, { value: '"3D"' }, { value: '"flat"' }] },
        },
        icon: {
          defaultValue: null,
          description: '',
          name: 'icon',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"arrow-down"' },
              { value: '"arrow-up"' },
              { value: '"back"' },
              { value: '"cancel"' },
              { value: '"checkbox-checked"' },
              { value: '"checkbox-unchecked"' },
              { value: '"check-mark"' },
              { value: '"chevron-down"' },
              { value: '"chevron-left"' },
              { value: '"chevron-right"' },
              { value: '"chevron-up"' },
              { value: '"clear"' },
              { value: '"copy"' },
              { value: '"cut"' },
              { value: '"delete"' },
              { value: '"download"' },
              { value: '"error"' },
              { value: '"forward"' },
              { value: '"help"' },
              { value: '"hide"' },
              { value: '"info"' },
              { value: '"paste"' },
              { value: '"question"' },
              { value: '"save"' },
              { value: '"show"' },
              { value: '"upload"' },
              { value: '"warning"' },
              { value: '"remove"' },
            ],
          },
        },
        text: { defaultValue: null, description: '', name: 'text', required: !1, type: { name: 'string' } },
        extended: { defaultValue: null, description: '', name: 'extended', required: !1, type: { name: 'boolean' } },
        type: {
          defaultValue: null,
          description: '',
          name: 'type',
          required: !1,
          type: { name: 'enum', value: [{ value: '"button"' }, { value: '"reset"' }, { value: '"submit"' }] },
        },
      },
    });
} catch {}
const h = {
    argTypes: {
      text: { control: 'text' },
      disabled: { control: 'boolean' },
      type: { control: 'select', options: ['button', 'submit', 'reset'] },
      icon: { control: 'select', options: Object.values(n) },
      view: { control: 'select', options: ['3D', 'flat', 'icon'] },
      theme: { control: 'radio', options: ['light', 'dark'] },
      extended: { control: 'boolean' },
    },
    args: { text: 'Button', type: 'button', icon: n.Copy, view: '3D', disabled: !1, theme: 'light', extended: !1 },
    component: g,
    title: 'Inputs/Button',
  },
  e = {
    args: { text: 'Copy', view: '3D', icon: n.Copy, type: 'button', disabled: !1, theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  },
  t = {
    args: { text: 'Learn more...', view: 'flat', icon: n.Forward, type: 'button', disabled: !1, theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  },
  a = {
    args: { view: 'icon', type: 'button', icon: n.Cancel, label: 'Cancel', disabled: !1, theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  };
var r, i, u;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((r = e.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Copy',
    view: '3D',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((u = (i = e.parameters) == null ? void 0 : i.docs) == null ? void 0 : u.source),
    },
  },
};
var s, d, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((s = t.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    text: 'Learn more...',
    view: 'flat',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((c = (d = t.parameters) == null ? void 0 : d.docs) == null ? void 0 : c.source),
    },
  },
};
var p, m, v;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((p = a.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((v = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : v.source),
    },
  },
};
const y = ['DefaultButton', 'FlatButton', 'IconButton'],
  C = Object.freeze(
    Object.defineProperty(
      { __proto__: null, DefaultButton: e, FlatButton: t, IconButton: a, __namedExportsOrder: y, default: h },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { C as B, e as D };
