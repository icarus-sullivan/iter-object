
export const iter_obj = (src, fn) => JSON.stringify(src, (k, v) => k ? (fn(k, v), v) : v);

export const iter_repl = (src, fn) => JSON.parse(JSON.stringify(src), (k, v) => k ? fn(k, v) : v);