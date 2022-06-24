export default function isValidCSS(prop, value) {
  const { style } = new Option();

  style[prop] = value;

  return Boolean(style[prop]);
}
