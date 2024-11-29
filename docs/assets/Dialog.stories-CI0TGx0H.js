import { j as e } from './jsx-runtime-OAISXtky.js';
import { r as g } from './index-qVDZzPEr.js';
import { C as l } from './Button--7gU6zvB.js';
import './Checkbox-CLF59sww.js';
import './MultiSelect-D4Q7nsBa.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import { e as f } from './Tabs-CmX9zseh.js';
const x = ({ onClose: a, title: d, theme: p }) => {
  const [m, o] = g.useState(!1),
    u = () => o(!0),
    n = () => {
      o(!1), a && a();
    },
    c = e.jsxs('div', {
      children: [
        e.jsx('p', {
          style: { marginBottom: '20px' },
          children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque soluta ullam repudiandae facere dolore modi reiciendis doloribus tempore. Magnam veniam ducimus consectetur quasi vitae perferendis voluptatum quisquam numquam tempora.',
        }),
        e.jsxs('div', {
          style: { display: 'flex', justifyContent: 'space-between' },
          children: [e.jsx(l, { text: 'Action', view: 'flat' }), e.jsx(l, { text: 'Close dialog', view: 'flat', onClick: n })],
        }),
      ],
    });
  return e.jsxs('div', {
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '20px' },
    children: [e.jsx(l, { text: 'Open dialog', onClick: u }), e.jsx(f, { isOpened: m, onClose: n, title: d, theme: p, children: c })],
  });
};
try {
  (DialogExample.displayName = 'DialogExample'),
    (DialogExample.__docgenInfo = {
      description: '',
      displayName: 'DialogExample',
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
        isOpened: { defaultValue: null, description: '', name: 'isOpened', required: !0, type: { name: 'boolean' } },
        onClose: { defaultValue: null, description: '', name: 'onClose', required: !0, type: { name: '() => void' } },
      },
    });
} catch {}
const y = { component: x, title: 'Modals/Dialog' },
  t = {
    args: { isOpened: !1, onClose: () => console.log('Dialog closed'), title: 'Example Dialog', theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  };
var i, s, r;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    isOpened: false,
    onClose: () => console.log('Dialog closed'),
    title: 'Example Dialog',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((r = (s = t.parameters) == null ? void 0 : s.docs) == null ? void 0 : r.source),
    },
  },
};
const h = ['Default'],
  V = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: t, __namedExportsOrder: h, default: y }, Symbol.toStringTag, { value: 'Module' }),
  );
export { V as D, t as a };
