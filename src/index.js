
const is = (v, type) => ({}.toString.call(v).slice(8, -1) === type);

export const iterObject = (src, fn) => {
  if (!is(src, 'Object') && !is(src, 'Array')) {
    return src;
  }
  for (const [key, value] of Object.entries(src)) {
    fn(key, value);
    iterObject(value, fn);
  }
  return src;
};

export const iterReplace = (src, fn) => {
  if (!is(src, 'Object') && !is(src, 'Array')) {
    return src;
  }
  for (const [key, value] of Object.entries(src)) {
    const replace = fn(key, value);
    // eslint-disable-next-line
    src[key] = iterReplace(replace, fn);
  }
  return src;
};
