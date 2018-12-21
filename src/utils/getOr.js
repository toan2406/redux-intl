// @flow

const isNil = value => value == null;
const isUndefined = value => typeof value === 'undefined';
const isString = value => typeof value === 'string';

const castPath: (string | Array<string>) => Array<string> = value => {
  if (Array.isArray(value)) return value;
  return value
    .toString()
    .split('.')
    .filter(Boolean);
};

const getOr: (mixed, string | Array<string>) => Object => mixed = (
  defaultValue,
  path,
) => object => {
  if (isString(path) && !isUndefined(object[path])) return object[path];

  const keys = castPath(path);
  const length = keys.length;
  let index = 0;
  let result = object;

  while (!isNil(result) && index < length) result = result[keys[index++]];

  if (!isUndefined(result) && index === length) return result;
  return defaultValue;
};

export default getOr;
