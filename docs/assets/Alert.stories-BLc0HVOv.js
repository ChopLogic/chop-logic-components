import { j as t } from './jsx-runtime-OAISXtky.js';
import { r as d } from './index-qVDZzPEr.js';
import { C as u } from './Button--7gU6zvB.js';
import './Checkbox-CLF59sww.js';
import './MultiSelect-D4Q7nsBa.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import { a as r, b as f } from './Tabs-CmX9zseh.js';
import { C as s } from './get-chop-logic-theme-C9Q9v90u.js';
const g = (i) => {
    const [c, o] = d.useState(!1),
      p = () => o(!0),
      m = () => o(!1);
    return t.jsxs('div', {
      style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '20px' },
      children: [t.jsx(u, { onClick: p, text: 'Open Alert' }), t.jsx(f, { ...i, isOpened: c, onClose: m })],
    });
  },
  x = {
    argTypes: {
      theme: { control: 'radio', options: ['light', 'dark'] },
      isOpened: { control: 'boolean' },
      title: { control: 'text' },
      message: { control: 'text' },
      mode: { control: 'select', options: Object.values(r) },
      icon: { control: 'select', options: Object.values(s) },
    },
    args: { isOpened: !0, title: 'Alert Title', message: 'This is an alert message.', mode: r.Info, icon: s.Info, theme: 'light' },
    component: g,
    title: 'Modals/Alert',
  },
  e = {};
var n, a, l;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((n = e.parameters) == null ? void 0 : n.docs),
    source: { originalSource: '{}', ...((l = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : l.source) },
  },
};
const h = ['Default'],
  E = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: e, __namedExportsOrder: h, default: x }, Symbol.toStringTag, { value: 'Module' }),
  );
export { E as A, e as D };
