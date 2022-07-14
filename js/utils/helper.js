// https://gist.github.com/ntd251/2bfe6c92df3c4afe772914c7c2f30bed
export function snakeToCamel(json) {
  if (!json || typeof json !== "object") {
    return json;
  }
  if (json.constructor.name === "Array") {
    return json.map((item) => snakeToCamel(item));
  }

  let output = {};
  Object.keys(json).forEach((key) => {
    let value = json[key];
    let newKey = key.toLowerCase().replace(/[_-][a-z]/g, (c) => {
      return c.toUpperCase().replace("_", "").replace("-", "");
    });
    output[newKey] = snakeToCamel(value);
  });

  return output;
}
