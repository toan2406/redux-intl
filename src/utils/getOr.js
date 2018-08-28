const castPath = value => {
  if (Array.isArray(value)) return value;
  return value.toString().split('.');
};

export default (defaultValue, path) => object => {
  const keys = castPath(path);
  const length = keys.length;
  let index = 0;
  let result = object;

  while (result && index < length) result = result[keys[index++]];

  if (index === length) return result;
  return defaultValue;
};
