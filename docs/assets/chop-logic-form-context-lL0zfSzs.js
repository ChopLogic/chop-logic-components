import { r as d, e as c } from './index-qVDZzPEr.js';
function r(o) {
  const t = d.useId(),
    e = o ?? t,
    n = `${e}_error`,
    s = `${e}_dropdown`;
  return { elementId: e, errorId: n, dropdownId: s };
}
try {
  (r.displayName = 'useElementIds'), (r.__docgenInfo = { description: '', displayName: 'useElementIds', props: {} });
} catch {}
const p = c.createContext({});
export { p as C, r as u };
