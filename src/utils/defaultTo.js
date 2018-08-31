// @flow
const defaultTo: <D, V>(D) => V => D | V = defaultValue => value =>
  value == null ? defaultValue : value;

export default defaultTo;
