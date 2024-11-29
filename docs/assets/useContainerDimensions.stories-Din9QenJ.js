import { j as t } from './jsx-runtime-OAISXtky.js';
import { r as p } from './index-qVDZzPEr.js';
import { u as c } from './index-hbHCpJbS.js';
import './chop-logic-form-context-lL0zfSzs.js';
const m = () => {
    const s = p.useRef(null),
      { width: n, height: a } = c({ ref: s, isVisible: !0 });
    return t.jsxs('div', {
      ref: s,
      style: { width: '200px', height: '150px', border: '1px solid black' },
      children: [t.jsxs('p', { children: ['Width: ', n, 'px'] }), t.jsxs('p', { children: ['Height: ', a, 'px'] })],
    });
  },
  l = { component: m, title: 'Hooks/useContainerDimensions' },
  e = {};
var o, r, i;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: { originalSource: '{}', ...((i = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : i.source) },
  },
};
const d = ['Default'],
  j = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: e, __namedExportsOrder: d, default: l }, Symbol.toStringTag, { value: 'Module' }),
  );
export { e as D, j as U };
