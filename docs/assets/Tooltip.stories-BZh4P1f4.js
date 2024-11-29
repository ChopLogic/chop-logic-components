import { j as e } from './jsx-runtime-OAISXtky.js';
import { C as b } from './Button--7gU6zvB.js';
import './Checkbox-CLF59sww.js';
import './MultiSelect-D4Q7nsBa.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import { f as V } from './Tabs-CmX9zseh.js';
const r = ({ tooltipContent: l, containerTag: x, visibleOn: t, id: C }) =>
  e.jsx('div', {
    style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' },
    children: e.jsxs(V, {
      tooltipContent: l,
      containerTag: x,
      visibleOn: t,
      id: C,
      children: [
        t === 'click' && e.jsx(b, { text: 'Click me' }),
        t === 'hover' && e.jsx('span', { children: 'Hover over me' }),
        t === 'focus' && e.jsx('p', { children: 'Focus on me' }),
        t === 'contextmenu' && e.jsx('strong', { children: 'Right click on me' }),
      ],
    }),
  });
try {
  (r.displayName = 'TooltipExample'),
    (r.__docgenInfo = {
      description: '',
      displayName: 'TooltipExample',
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
        tooltipContent: {
          defaultValue: null,
          description: '',
          name: 'tooltipContent',
          required: !0,
          type: { name: 'string | ReactElement<any, string | JSXElementConstructor<any>>' },
        },
        containerTag: {
          defaultValue: null,
          description: '',
          name: 'containerTag',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"span"' }, { value: '"div"' }, { value: '"p"' }, { value: '"strong"' }, { value: '"em"' }],
          },
        },
        visibleOn: {
          defaultValue: null,
          description: '',
          name: 'visibleOn',
          required: !1,
          type: { name: 'enum', value: [{ value: '"hover"' }, { value: '"click"' }, { value: '"focus"' }, { value: '"contextmenu"' }] },
        },
      },
    });
} catch {}
const k = { component: r, title: 'Modals/Tooltip' },
  n = {
    args: { tooltipContent: 'This is a tooltip', containerTag: 'span', visibleOn: 'hover', id: 'tooltip', theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  },
  o = {
    args: { tooltipContent: 'This is a tooltip', containerTag: 'div', visibleOn: 'click', id: 'tooltip', theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  },
  i = {
    args: { tooltipContent: 'This is a tooltip', containerTag: 'div', visibleOn: 'focus', id: 'tooltip', theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  },
  a = {
    args: { tooltipContent: 'This is a tooltip', containerTag: 'div', visibleOn: 'contextmenu', id: 'tooltip', theme: 'light' },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  };
var s, p, c;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((s = n.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((c = (p = n.parameters) == null ? void 0 : p.docs) == null ? void 0 : c.source),
    },
  },
};
var d, m, u;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((d = o.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((u = (m = o.parameters) == null ? void 0 : m.docs) == null ? void 0 : u.source),
    },
  },
};
var g, h, v;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((g = i.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((v = (h = i.parameters) == null ? void 0 : h.docs) == null ? void 0 : v.source),
    },
  },
};
var T, f, y;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((T = a.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((y = (f = a.parameters) == null ? void 0 : f.docs) == null ? void 0 : y.source),
    },
  },
};
const O = ['VisibleOnHover', 'VisibleOnClick', 'VisibleOnFocus', 'VisibleOnContextMenu'],
  F = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        VisibleOnClick: o,
        VisibleOnContextMenu: a,
        VisibleOnFocus: i,
        VisibleOnHover: n,
        __namedExportsOrder: O,
        default: k,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export { F as T, n as V };
