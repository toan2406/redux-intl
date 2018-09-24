export default object =>
  Object.keys(object).reduce(
    (result, key) => ({
      ...result,
      [key]: object[key] === '' ? undefined : object[key],
    }),
    {},
  );
