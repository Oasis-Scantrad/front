import xss from "xss";

export function sanitize(str) {
  return xss(str, {
    whiteList: {
      a: ["href", "title", "target"],
      img: ["src","alt", "style"],
      b: [],
      u: [],
      i: [],
      em: [],
    },
    css: false
  });
}

export function sanitizeObject(data, schema) {
  Object.entries(schema).forEach(([k, v]) => {
    if (data[k] !== undefined) throw Error(`Key ${k} is undefined`);
    if (v === true) data[k] = sanitize(data[k]);
    else sanitizeObject(data[k], schema[k]);
  });
  return data;
}
