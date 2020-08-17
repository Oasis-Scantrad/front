import xss from "xss";
import he from "he";

export function sanitize(str) {
  return xss(str, {
    whiteList: {
      a: ["href", "title", "target"],
      img: ["src", "alt", "style"],
      b: [],
      u: [],
      i: [],
      em: [],
      br:[]
    },
    css: false,
  }).replace(/\n/g,'<br/>');
}

export function sanitizeObject(data, schema) {
  Object.entries(schema).forEach(([k, v]) => {
    if (data[k] === undefined)
      throw Error(
        `Item[${k}] of object is undefined \n schema: ${JSON.stringify(
          schema,
          null,
          2
        )}, data:${JSON.stringify(data, null, 2)}`
      );
    if (v === true) data[k] = sanitize(data[k]);
    else if (data[k] !== null && typeof data[k] === "object")
      sanitizeObject(data[k], schema[k]);
  });
  return data;
}

export function unecodeHtml(str) {
  return he.decode(str).replace(/<br\/?>/g, '\n');
}
